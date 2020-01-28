import React from "react";
import he from 'he';

const Answer = props => { 
        if(props.correct){
            return(
                <p>You are correct! {he.decode(props.correct_answer)}</p>
            )
        } else {
            return(
                <p>Sorry the correct answer is: {he.decode(props.correct_answer)}</p>
            )
        }
    }

export default Answer;