import React from 'react';

const QuoteMachine = ({ selectedQuote, getRandomQuote }) => {
  if (!selectedQuote) {
    return (
      <div id="quote-box-loading">
        <i id="react-logo" class="fab fa-react"></i>
        <div id="loading-text">Loading...</div>
      </div>
    );
  };

  const { quote, author } = selectedQuote;

  return (
    <div id="quote-box">
      <blockquote id="quote" cite="">
        <p id="text">{ quote }</p>
        <footer id="author">— { author }</footer>
      </blockquote>

      <div>
        <button id="new-quote" onClick={ getRandomQuote }>New Quote</button>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text="${quote}" - "${author}`}
          target="_blank">
          <i class="fab fa-twitter"></i> Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
