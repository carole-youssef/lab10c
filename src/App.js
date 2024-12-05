import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const showContent = (section) => {
    if (section === 'install') {
      setContent(
        <div>
          <h2>How I Installed and Built My Webpage</h2>
          <ol>
            <li>Installed Node.js and npm.</li>
            <li>Used <code>npx create-react-app</code> to create the project.</li>
            <li>Ran the project with <code>npm start</code>.</li>
            <li>Modified default files to build components and styles.</li>
            <li>Styled the page with CSS and added dynamic button features.</li>
          </ol>
        </div>
      );
    } else if (section === 'difficulties') {
      setContent(
        <div>
          <h2>Difficulties and Solutions</h2>
          <ul>
            <li>Struggled with state management; solved with <code>useState</code>.</li>
            <li>Used conditional rendering to display content dynamically.</li>
            <li>Learned React Router for multi-page navigation.</li>
            <li>Used media queries for responsiveness.</li>
            <li>Deployed app using <code>npm run build</code> and Vercel.</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Lab10c: React</h1>

      <div className="buttons">
        <button onClick={() => showContent('install')}>How I Built My Webpage</button>
        <button onClick={() => showContent('difficulties')}>Difficulties and Solutions</button>
      </div>

      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default App;
