import React, {Component} from "react";
import AnswerList from "./AnswerList";

class Question extends Component {
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
        
        const answers = this.props.incorrect_answers;
        answers.push(this.props.correct_answer);
        shuffle(answers);

        return(
            <div>
                <p>{this.props.question}</p>
                {/* {answers.map(answers) => (
                    <AnswerList answers={answers} correct_answer={correct_answer}/>
                )} */}
                
            </div>
        )
    }
}

export default Question;