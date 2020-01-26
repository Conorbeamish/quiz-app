import React, {Component} from "react";
import Question from "./Question";
const APIURL = "https://opentdb.com/api.php?";


class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: true,
            number: 5,
            questions: []
        }
    }

    componentDidMount(){
        let amount = this.props.numOfQuestions;
        let category = this.props.category;
        let difficulty = this.props.difficulty;
        fetch(`${APIURL}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(res=> res.json())
        .then(data => {
            this.setState({   
                questions: data.results,
                isLoaded: true,
            })
        });
    }

    render(){
        
        if(!this.state.isLoaded){
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