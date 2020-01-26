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
            let questions = this.state.questions.map((item) =>
            //PLease change item index
            <div key = {item.question} answer={item.correct_answer}>
                <h4> {item.question}</h4>
                {item.incorrect_answers.map((answer)=> 
                    <li key = {answer}>{answer}</li>
                )}
            </div>
            )
            return(
                <Question questions = {questions}/>
                // <div>
                // {questions}
                // </div>
            )
        }
    }
}

export default QuestionList;