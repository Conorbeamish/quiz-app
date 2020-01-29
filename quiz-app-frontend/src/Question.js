import React, {Component} from "react";
import AnswerList from "./AnswerList";
import Answer from "./Answer";
import he from 'he';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

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
        this.setState({answered: true});
        this.props.incrementQuesAns();
        if(e.target.name === this.props.correct_answer){
            this.props.incrementScore();
            this.setState({
                correct: true
            })
        }
    }

    

    render(){

        const answers = this.props.incorrect_answers;
        if(answers.length < 4){
            answers.push(this.props.correct_answer);
            shuffleArray(answers);
        }

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