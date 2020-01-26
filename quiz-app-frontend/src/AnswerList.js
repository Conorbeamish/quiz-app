import React, {Component} from "react";

class AnswerList extends Component {
    render(){

        return(
            <div>
                {this.props.answers.map((answer) => 
                <li key={answer}>
                    {answer}
                </li>
                )}
            </div>
        )
    }
}

export default AnswerList