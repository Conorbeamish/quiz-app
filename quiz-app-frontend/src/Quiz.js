import React, {Component} from "react";
import QuestionList from "./QuestionList";
import QuizForm from "./QuizForm";

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            numOfQuestions: 5,
            category: "any",
            difficulty: "easy",
            displayQuestions: false
        }
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = () => {
        this.setState({displayQuestions: !this.state.displayQuestions})
    }

    render(){
        if (this.state.displayQuestions){
            return(
                <QuestionList 
                    numOfQuestions={this.state.numOfQuestions} 
                    category={this.state.category} 
                    difficulty={this.state.difficulty}
                />
            )
        } else {
            return(
                <QuizForm 
                    handleChange= {this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    numOfQuestions={this.state.numOfQuestions}
                    category={this.state.category} 
                    difficulty={this.state.difficulty}
                />
            )
        }
    }
}

export default Quiz;