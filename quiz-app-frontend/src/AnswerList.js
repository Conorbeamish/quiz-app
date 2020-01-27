import React, {Component} from "react";

class AnswerList extends Component {
    render(){

        return(
            <div>
                {this.props.answers.map((answer) => 
                <button key={answer}>
                    {answer}
                </button>
                )}
            </div>
        )
    }
}


export default AnswerList