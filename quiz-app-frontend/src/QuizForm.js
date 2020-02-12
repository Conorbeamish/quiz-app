import React from "react";

const QuizForm = props => {
    return(
        <form className="quiz-form" onSubmit = {props.handleSubmit}>
            <h4>Fill in the form below to get started...</h4>
            <label className="form-label">
                Number of Questions:
                <select className="form-select" name="numOfQuestions" value={props.numOfQuestions} onChange={props.handleChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </label>
            <label className="form-label">
                Category:
                <select className="form-select"  name="category" value={props.category} onChange={props.handleChange}>
                    {/* <option value="any">Any Category</option> */}
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
            </label>
            <label className="form-label">
                Difficulty:
                <select className="form-select" name="difficulty" value={props.difficulty} onChange={props.handleChange}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <input className="submit" type="submit" value="Submit"/>
        </form>
    )
}

export default QuizForm;