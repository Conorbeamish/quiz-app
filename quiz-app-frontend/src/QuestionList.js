import React, {Component} from "react";
import Question from "./Question";
import Score from "./Score";


class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [],
            score: 0,
            questionsAnswered: 1
        }
        this.incrementScore = this.incrementScore.bind(this)
        this.incrementQuesAns = this.incrementQuesAns.bind(this)
    };

    getQuestions = () => {
        let {numOfQuestions, category, difficulty} = this.props;
        let APIURL = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
        fetch(APIURL)
        .then(res=> res.json())
        .then(data => {
            this.setState({   
                questions: data.results,
                score: 0,
                questionsAnswered: 0
            })
        });
    }

    incrementScore = () => {
        this.setState({score: this.state.score + 1})
    }

    incrementQuesAns = () => {
        this.setState({questionsAnswered: this.state.questionsAnswered + 1})
    }

    componentDidMount(){
        this.getQuestions();
    }

    render(){
        if(!this.state.questions){
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {this.state.questions.map(
                       ({question, correct_answer, incorrect_answers}) =>
                       (<Question 
                            question={question} 
                            correct_answer={correct_answer} 
                            incorrect_answers={incorrect_answers} 
                            key={question} 
                            incrementQuesAns = {this.incrementQuesAns}
                            incrementScore = {this.incrementScore}
                        />)
                    )}
                    <Score
                        score={this.state.score}
                        questionsAnswered={this.state.questionsAnswered}
                        questions={this.state.questions}
                        handleSubmit={this.props.handleSubmit}
                    />
                </div>
            )
        }
    }
}

export default QuestionList;