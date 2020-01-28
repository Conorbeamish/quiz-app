import React, {Component} from "react";
import Question from "./Question";

class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 5,
            questions: [],
        }
    };

    getQuestions = () => {
        let {numOfQuestions, category, difficulty} = this.props;
        let APIURL = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
        fetch(APIURL)
        .then(res=> res.json())
        .then(data => {
            data.results = data.results.map(result => {
                Object.keys(result).forEach(key => {
                   if (typeof result[key] === "string") {
                       result[key] = result[key].replace(/&#039;/g, "'").replace(/&quot;/g, "'").replace(/&shy;/g, "-");
                   }else if(typeof result[key] === "object"){
                       console.log(result[key])
                       result[key] = result[key].map(item => {
                           item = item.replace(/&#039;/g, "'").replace(/&quot;/g, "'").replace(/&shy;/g, "-");
                        return item
                       })
                   }
                });
                return result;
            });
            this.setState({   
                questions: data.results,
            })
        });
    }

    componentDidMount(){
        this.getQuestions();
    }

    render(){
        if(!this.state.questions){
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {this.state.questions.map(
                       ({question, correct_answer, incorrect_answers}) =>
                       (<Question 
                            question={question} 
                            correct_answer={correct_answer} 
                            incorrect_answers={incorrect_answers} 
                            key={question} 
                        />)
                    )}
                </div>
            )
        }
    }
}

export default QuestionList;