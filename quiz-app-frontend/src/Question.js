import React, {Component} from "react";
import AnswerList from "./AnswerList";
import Answer from "./Answer";
import he from 'he';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            answered: false,
            correct: false
        }
        this.checkAnswer = this.checkAnswer.bind(this)
    }

    checkAnswer = (e) => {
        this.setState({answered: true})
        if(e.target.name === this.props.correct_answer){
            this.setState({
                correct: true
            })
        }
    }

    render(){

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        
        let answers = this.props.incorrect_answers;
        answers.push(this.props.correct_answer);
        shuffle(answers);

        if(!this.state.answered){
            return(
                <div>
                    <h4>{he.decode(this.props.question)}</h4>
                    <AnswerList 
                        answers={answers} 
                        correct_answer={this.props.correct_answer}
                        checkAnswer = {this.checkAnswer}
                    />
                </div>
            )
        } else{
            return(
                <div>
                    <h4>{he.decode(this.props.question)}</h4>
                    <Answer 
                        correct_answer={this.props.correct_answer}
                        correct={this.state.correct}
                    />
                </div> 
            )
        }
        
    }
}

export default Question;