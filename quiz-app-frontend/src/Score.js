import React from "react";

const Score = props => {
    const replay = <button className="replay" onClick= {props.handleSubmit}>Play Again</button>

    if(props.questions.length === props.questionsAnswered){
        return(
            <div className="score">
                <hr className="hr"></hr>
                <p className="score-total">You Scored {props.score}/{props.questions.length}</p>
                {replay}
            </div>
        )
    }else if (props.questions.length === 0){
        return(
            <div>
                <div className="loading">
                ...Loading
                </div>
                <div className ="spinner"></div>
            </div>
        )
    } else {
        return(
            <div className="score">
                <hr className="hr"></hr>
                {replay}
            </div>
        )
    }

}

export default Score