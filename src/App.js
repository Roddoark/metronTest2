import React, { useState, useEffect } from 'react';
import './App.css';

const App = ({ title }) => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");

  const [firstTweets, setFirstTweets] = useState({ tweets: [] });
  const [secondTweets, setSecondTweets] = useState({ tweets: [] });

  const onClick = (e) => {
    e.preventDefault();
    console.log('okokokokokokokoko')
  }
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p id="sok">metronTest</p>

      <form>
        <div>
          <input type="text" name="firstWord" id="firstWord" placeholder="React"
            onChange={event => setFirstWord(event.target.value)}
            value={firstWord} />

          <input type="text" name="secondWord" id="secondWord" placeholder="VueJS"
            onChange={event => setSecondWord(event.target.value)}
            value={secondWord} />
        </div>

        <button onClick={onClick}>GO</button>
        <button>Reset</button>
      </form>
    </div>
  )
}

export default App
