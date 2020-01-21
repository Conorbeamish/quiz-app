import React, {Component} from "react";
import Question from "./Question";

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 5,
            questions: []
        }
    }

    componentDidMount(){
        fetch(`https://opentdb.com/api.php?amount=${this.state.number}&category=22&difficulty=medium&type=multiple`)
        .then(response => response.json())
        .then(data => this.setState({questions: data.results}))
    }

    render(){
        
        if(this.state.questions.length){
            console.log((this.state.questions[0].question))
        }
        



        const questions= (this.state.questions);
        console.log(typeof questions); //This returns Object :(
        console.log(questions);
        // const questions = this.state.questions.map((q, index) => (
        //     <Question key={index}
        //     {...q}
        //     />
        // ))
        return(
            <div>
                <h1>hi</h1>
                
            </div>
        )
    }
}

export default Quiz;