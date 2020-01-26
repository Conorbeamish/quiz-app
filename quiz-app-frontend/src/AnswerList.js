import React, {Component} from "react";

class AnswerList extends Component {
    render(){

        return(
            <div>
                {this.props.answers}
            </div>
        )
    }
}

export default AnswerList