import React from 'react'

import './App.css';
import SubTitle from '../src/components/SubTitle'

const App = ({ title }) => {
  const onClick = (e) => {
    e.preventDefault();
    console.log('okokokokokokokoko')
  }
  return (
    <div>
      <h1 class="title">{title}</h1>
      <p id="sok">metronTest</p>

      <SubTitle />
      <form>
        <div>
          <input className='' type="text" />
          <input className='' type="text" />
        </div>

        <button onClick={onClick}>GO</button>
        <button>Reset</button>
      </form>
    </div>
  )
}

export default App
