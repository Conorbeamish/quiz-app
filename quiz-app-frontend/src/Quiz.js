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
        this.updateQuizState =this.updateQuizState.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    updateQuizState(e){
       
        this.setState({numOfQuestions: e.target.value});
        console.log("state change");
    }

    handleSubmit(e){
        console.log("Submit sent");
        alert(`Submit sent ${e}`)
        e.preventDefault();
    }

    

    render(){
        return(
            <div>
                <QuizForm updateQuizState = {this.updateQuizState} handleSubmit={this.handleSubmit} numOfQuestions={this.state.numOfQuestions}/>
                <QuestionList numOfQuestions={this.state.numOfQuestions} category={this.state.category} difficulty={this.state.difficulty}/>
            </div>
        )
    }
}

export default Quiz;