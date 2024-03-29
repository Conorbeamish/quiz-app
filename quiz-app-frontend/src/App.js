import React, { Component } from 'react';
import Quiz from "./Quiz";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
        <Quiz />
        <Footer/>
      </div>
    )
  };
}

export default App;
