import React, {Component} from "react";

class QuizForm extends Component{
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <label>
                    Number of Questions
                    <select>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default QuizForm;