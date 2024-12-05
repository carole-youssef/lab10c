import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const showContent = (section) => {
    if (section === 'install') {
      setContent(
        <div>
          <h2>How I Installed React</h2>
          <p>
            To install React, I followed these steps:
          </p>
          <ol>
            <li>Used the `create-react-app` CLI tool to set up a new React project.</li>
            <li>Run the project using `npm start` to start the development server.</li>
            <li>Used the default folder structure created by `create-react-app` and started writing components.</li>
          </ol>
        </div>
      );
    } else if (section === 'difficulties') {
      setContent(
        <div>
          <h2>Difficulties Encountered</h2>
          <p>
            One of the challenges was understanding how to manage state with React's `useState` hook. Initially, it was confusing to handle state across components.
          </p>
          <p>
            Another difficulty was the setup of React Router for multi-page functionality. I resolved this by following React Router's official documentation and examples.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1 className="title">Lab10c: React</h1>

      <div className="buttons">
        <button onClick={() => showContent('install')}>How I Installed React</button>
        <button onClick={() => showContent('difficulties')}>Difficulties Encountered</button>
      </div>

      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default App;
