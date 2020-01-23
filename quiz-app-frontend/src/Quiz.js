import React, {Component} from "react";
import Question from "./Question";
const APIURL = "https://opentdb.com/api.php?";

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: true,
            number: 5,
            questions: []
        }
    }

    componentDidMount(){
        fetch(`${APIURL}amount=${this.state.number}&category=22&difficulty=medium&type=multiple`)
        .then(res=> res.json())
        .then(data => {
            this.setState({   
                questions: data.results,
                isLoaded: true,
            })
        });
    }

    render(){
        
        if(!this.state.isLoaded){
            return <div>Loading...</div>
        } else {
            let questions = this.state.questions.map((item, index) =>
            //PLease change item index
            <h4 key={index}>{item.question}</h4>)
            return(
                <div>
                {questions}
                </div>
            )
        }
    }
}

export default Quiz;