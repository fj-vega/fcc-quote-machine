import React from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';

class App extends React.Component {
  state =  {
    quotes: [],
    selectedQuote: null
  };

  async componentDidMount() {
    const response = await fetch('https://api.myjson.com/bins/1aytql');
    const data = await response.json();

    this.setState({ quotes: data });
    this.getRandomQuote();
  };

  getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    const selectedQuote = this.state.quotes[randomIndex];

    this.setState({ selectedQuote });
  };

  render() {
    return (
      <div className="App">
        <h1 id="title">Random Quote Generator</h1>
        <QuoteMachine selectedQuote={ this.state.selectedQuote } getRandomQuote={ this.getRandomQuote } />
      </div>
    );
  };
};

export default App;
