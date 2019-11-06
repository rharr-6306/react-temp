import React from 'react';
import './css/App.css';

const title = "React Template"

function App() {
  return (
    <div className="App">
      <h1 id="react-template">{title}</h1>
      <p>
        A React.js template for copying to a new project.
      </p>
      <h3 id="installing">Installing</h3>
      <p>Clone the repository &amp; install dependencies</p>
      <ul>
          <li>git clone git@github.com:RHarr6306/react-temp.git</li>
          <li>npm install</li>
          <li>npm run start</li>
      </ul>
      <h3 id="built-with">Built With</h3>
      <ul>
        <li>
          <a href="https://reactjs.org/">React.js</a>
        </li>
        <li>
          <a href="https://nodejs.org/en/">Node.js</a>
        </li>
        <li>
          <a href="https://jquery.com/">jQuery</a>
        </li>
      </ul>
      <h3 id="authors">Authors</h3>
      <ul>
        <li>
          <a href="https://github.com/Le-SirH">Le-SirH</a>
        </li>
        <li>
          <a href="https://github.com/Dapp3rDuck">Dapp3rDuck</a>
        </li>
        <li>
          <a href="https://github.com/RHarr6306">RHarr6306</a>
        </li>
      </ul>
      <p>See also the list of <a href="https://github.com/RHarr6306/react-temp/contributors">contributors</a> who participated in this project.</p>
    </div>
  );
}

export default App;

