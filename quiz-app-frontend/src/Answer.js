import React from "react";

const Answer = props => { 
        if(props.correct){
            return(
                <p>You are correct! {props.correct_answer}</p>
            )
        } else {
            return(
                <p>Sorry the correct answer is: {props.correct_answer}</p>
            )
        }
    }

export default Answer;