import React from "react";

const Score = props => {
    if(props.questions.length === props.questionsAnswered){
        return(
            <div>
                <p>You Scored {props.score}/{props.questions.length}</p>
                <button onClick= {props.handleSubmit}>Play Again</button>
            </div>
        )
    }else{
        return(
            <button onClick= {props.handleSubmit}>Play Again</button>
        )
    }

}

export default Score