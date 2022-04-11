import React, {useState} from 'react'

import './App.css';
import Tweets from './components/Tweets/Tweets';

const App = ({ title }) => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    console.log(firstWord)
    console.log(secondWord)
  }

  return (
    <div>
      <h1 className="title">{title}</h1>
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

        <Tweets />

    </div>
  )
}

export default App
