import React from "react";

const AnswerList = props => {
    return(
        <div>
            {props.answers.map((answer) => 
            <button name={answer} key={answer} onClick={props.checkAnswer}>
                {answer}
            </button>
            )}
        </div>
    )
}


export default AnswerList