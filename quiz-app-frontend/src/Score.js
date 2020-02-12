import React from "react";

const Score = props => {
    const replay = <button className="replay" onClick= {props.handleSubmit}>Play Again</button>

    if(props.questions.length === props.questionsAnswered){
        return(
            <div>
                <p>You Scored {props.score}/{props.questions.length}</p>
                {replay}
            </div>
        )
    }else if (props.questions.length === 0){
        return(
            <div>
                <p>
                ...Loading
                </p>
                <div className ="spinner"></div>
            </div>
        )
    } else {
        return(
            replay
        )
    }

}

export default Score