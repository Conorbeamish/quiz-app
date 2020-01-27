import React, {Component} from "react";

class AnswerList extends Component {
    render(){

        return(
            <div>
                {this.props.answers.map((answer) => 
                <button name={answer} key={answer} onClick={this.props.checkAnswer} >
                    {answer}
                </button>
                )}
            </div>
        )
    }
}


export default AnswerList