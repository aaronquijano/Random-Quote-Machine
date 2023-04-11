import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = [
      ['To live is to suffer, to survive is to find some meaning in the suffering.', 'Friedrich Nietzsche'],
      ['The only true wisdom is in knowing you know nothing.', 'Socrates'],
      ['Know thy self, know thy enemy. A thousand battles, a thousand victories.', 'Sun Tzu']
    ];

    this.state = {
      quote: '',
      author: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let index = Math.floor((Math.random() * this.quotes.length) + 1);

    this.setState({
      quote: this.quotes[index][0],
      author: this.quotes[index][1]
    });
  }

  render() {
    return (
      <blockquote id="quote-box">
        <p id="text">{this.state.quote}</p>
        <figcaption id="author"></figcaption>
        <a id="tweet-quote">Tweet</a>
        <button id="new-quote" onClick={this.handleClick}>New Quote</button>
      </blockquote>
    );
  }
}

export default App;
