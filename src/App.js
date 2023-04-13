import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = [
      ['To live is to suffer, to survive is to find some meaning in the suffering.', 'Friedrich Nietzsche'],
      ['The only true wisdom is in knowing you know nothing.', 'Socrates'],
      ['Know thy self, know thy enemy. A thousand battles, a thousand victories.', 'Sun Tzu'],
      ['Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.', 'Epicurus'],
      ['It is not wisdom but Authority that makes a law.', 'Thomas Hobbes'],
      ['Act as if what you do makes a difference. It does.', 'William James'],
      ['Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.', 
        'Thomas Carlyle']
    ];

    this.state = {
      quote: '',
      author: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }
 

  handleClick() {
    let index = Math.floor((Math.random() * this.quotes.length-1) + 1);
    let [quote, author] = this.quotes[index];

    this.setState({
      quote: quote,
      author: author
    });
  }

  render() {
    let index = 0;
    let [quote, author] = ['', ''];

    if (this.state.quote === '' || this.state.author === '') {
      index = Math.floor((Math.random() * this.quotes.length-1) + 1);
      [quote, author] = this.quotes[index];
    }

    return (
      <blockquote id="quote-box">
        <p id="text">
          {(this.state.quote === '') && quote}
          {(this.state.quote !== '') && this.state.quote}
        </p>
        <figcaption id="author">
          <em>
            {(this.state.author === '') && author.replace(/^/, "-")}
            {(this.state.author !== '') && this.state.author.replace(/^/, "-")}
          </em>
        </figcaption>
        <div class="links-container">
            <a target="_top" href="https://twitter.com/intent/tweet" id="tweet-quote" ><i className="fab fa-brands fa-twitter"></i></a>
            <button id="new-quote" onClick={this.handleClick}>NEW QUOTE</button>
        </div>
      </blockquote>
    );
  }
}

export default App;
