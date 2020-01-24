import React, {Component} from "react";
import QuestionList from "./QuestionList";
import QuizForm from "./QuizForm";


class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            numOfQuestions: 10,
            category: "9",
            difficulty: "easy"
        }
    }
    
    render(){
        return(
            <div>
                <QuizForm/>
                <QuestionList numOfQuestions={this.state.numOfQuestions} category={this.state.category} difficulty={this.state.difficulty}/>
            </div>
        )
    }
}

export default Quiz;