import React from "react";
import he from 'he';

const Answer = props => { 
    const correctAnswer =  he.decode(props.correct_answer)
        if(props.correct){
            return(
                <p>You are correct! {correctAnswer}</p>
            )
        } else {
            return(
                <p>Sorry the correct answer is: {correctAnswer}</p>
            )
        }
    }

export default Answer;