import React from "react";

const Score = props => {
    const replay = <button onClick= {props.handleSubmit}>Play Again</button>

    if(props.questions.length === props.questionsAnswered){
        return(
            <div>
                <p>You Scored {props.score}/{props.questions.length}</p>
                {replay}
            </div>
        )
    }else{
        return(
            replay
        )
    }

}

export default Score