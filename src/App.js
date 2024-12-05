import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const showContent = (section) => {
    if (section === 'install') {
      setContent(
        <div>
          <h2>How I Installed and Built My Webpage</h2>
          <p>
            To start building my React app, I first ensured that Node.js and npm were installed. I used the <code>npx create-react-app</code> command to quickly generate a new React project. This provided a structured starting point with the necessary files and configuration.
          </p>
          <p>
            After setting up the project, I ran the development server with <code>npm start</code>, which opened the app in my browser. I then started modifying the default components to match my project requirements, adjusting files like <code>App.js</code> and <code>App.css</code> to create the layout and functionality I needed.
          </p>
          <p>
            Lastly, I styled the webpage using CSS to create a clean, visually appealing design. I also added interactive elements, such as buttons, to dynamically display content when clicked, offering a more engaging user experience.
          </p>
        </div>
      );
    } else if (section === 'difficulties') {
      setContent(
        <div>
          <h2>Difficulties and Solutions</h2>
          <p>
            One of the challenges I faced was managing state between components. Initially, I struggled to figure out how to pass and update data efficiently. To resolve this, I used React's <code>useState</code> hook, which allowed me to handle state in a straightforward way within functional components.
          </p>
          <p>
            Another difficulty was implementing conditional rendering to show different content based on user actions. I used a state variable to track the selected section and conditionally rendered the content. This allowed me to provide dynamic content updates without refreshing the page.
          </p>
          <p>
            Finally, I encountered some challenges during the deployment process, especially when using Vercel. After creating a production build with <code>npm run build</code>, I faced some issues with missing dependencies, but I was able to resolve them by following Vercel's documentation and installing the necessary packages.
          </p>
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
