import React, {Component} from "react";

class Answer extends Component{
    

    render(){
        if(this.props.correct){
            return(
                <p>You are correct! {this.props.correct_answer}</p>
            )
        } else {
            return(
                <p>Sorry the correct answer is: {this.props.correct_answer}</p>
            )
        }
    }
}

export default Answer;