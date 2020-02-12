import React from "react";
import he from 'he';

const AnswerList = props => {
    return(
        <div>
            {props.answers.map((answer) => 
            <button className="answer" name={answer} key={answer} onClick={props.checkAnswer}>
                {he.decode(answer)}
            </button>
            )}
        </div>
    )
}


export default AnswerList