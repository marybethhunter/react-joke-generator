import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';
import logo from '../assets/logo.png';
import '../styles/index.scss';

function Initialize() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const changeButtonText = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      changeButtonText('Get Punchline!');
    });
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <img src={logo} alt="joke site logo" />
        <h1>{joke.setup}</h1>
        <h4>{btnText !== 'Get Punchline!' ? joke.punchline : ''}</h4>
        {btnText === 'Get A Joke' || btnText === 'Get Another Joke' ? (
          <button className="button" onClick={getAJoke} type="button">
            {btnText}
          </button>
        ) : (
          <button
            className="button"
            onClick={() => setBtnText('Get Another Joke')}
            type="button"
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Initialize;
