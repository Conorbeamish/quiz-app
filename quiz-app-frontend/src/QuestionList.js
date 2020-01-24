import React, {Component} from "react";
const APIURL = "https://opentdb.com/api.php?";


class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: true,
            number: 5,
            questions: []
        }
    }

    componentDidMount(){
        let amount = this.props.numOfQuestions;
        let category = this.props.category;
        let difficulty = this.props.difficulty;
        fetch(`${APIURL}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
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

export default QuestionList;