import React, {Component} from "react";

class Question extends Component {
    render(){

        return(
            <div>
                {this.props.questions}
            </div>
        )
    }
}

export default Question;