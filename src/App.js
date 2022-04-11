import QuoteCards from './components/QuoteCards';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';

const sampleQuotes = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
};

function App() {
  const [quotes, setQuotes] = useState(sampleQuotes);
  const getQuotes = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => {
        setQuotes(response.data[0])
      });
  }
  return (
    <div className="App">
      <QuoteCards quotes={quotes} />
      <button type="button" onClick={getQuotes}>change quote</button>
    </div>
  );
};
export default App;