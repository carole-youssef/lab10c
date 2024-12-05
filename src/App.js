import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const showContent = (section) => {
    if (section === 'install') {
      setContent(
        <div>
          <h2>How I Installed and Built My Webpage with React</h2>
          <p>
            To build my webpage with React, I followed a structured process that involved setting up the development environment, installing React, and developing the project. Here's how I did it:
          </p>
          <ol>
            <li>
              <strong>Set up the development environment:</strong> I first made sure that Node.js and npm were installed on my machine. These tools are essential for managing packages and running the React app. I downloaded and installed them from the official Node.js website.
            </li>
            <li>
              <strong>Created the React project:</strong> I used the `create-react-app` CLI tool, which simplifies the setup process by creating a boilerplate React application. The command I used was:
              <pre><code>npx create-react-app lab10c</code></pre>
              This created a folder named `lab10c` with the basic structure of a React project, including the necessary configuration files and dependencies.
            </li>
            <li>
              <strong>Run the development server:</strong> After creating the project, I navigated into the project directory and ran the development server with the following command:
              <pre><code>npm start</code></pre>
              This command starts the React development server, which allows me to view the project in a web browser at <code>http://localhost:3000</code>.
            </li>
            <li>
              <strong>Modified the default setup:</strong> The default template includes some example files like <code>App.js</code> and <code>App.css</code>. I edited these files to create my own components and styles that reflect the purpose of my project. I created different sections of content, like explaining the React installation process and discussing the challenges I faced during development.
            </li>
            <li>
              <strong>Styled the webpage:</strong> I used CSS to style the webpage and make it visually appealing. The webpage includes buttons that reveal more information when clicked, which provides a dynamic experience to the users.
            </li>
          </ol>
          <p>
            By the end of this process, I had a fully functional React application running locally, with basic interactive features.
          </p>
        </div>
      );
    } else if (section === 'difficulties') {
      setContent(
        <div>
          <h2>Difficulties Encountered and Their Solutions</h2>
          <p>
            While building this React app, I encountered a few challenges that required problem-solving and learning new concepts. Here's an overview of the challenges I faced and how I overcame them:
          </p>
          <ol>
            <li>
              <strong>Managing state across components:</strong> One of the first challenges was understanding how to properly manage state in a React application. I initially struggled with how to pass data between components and update the UI dynamically based on user input. To solve this, I used React's <code>useState</code> hook, which allows me to create and manage state in functional components.
            </li>
            <li>
              <strong>Working with conditional rendering:</strong> Another challenge was implementing conditional rendering to display different content based on user interaction. I wanted to dynamically show different sections when users clicked on buttons. I resolved this by using a state variable to track which section was selected and conditionally rendered the corresponding content.
            </li>
            <li>
              <strong>Setting up React Router for multiple pages:</strong> I needed to create a multi-page app where users could navigate between different sections. Initially, I was unsure how to set up navigation in React. To solve this, I used <code>react-router-dom</code>, a library that enables navigation between different views. I followed the official documentation, which provided step-by-step instructions for integrating React Router into the project.
            </li>
            <li>
              <strong>Optimizing for responsiveness:</strong> I wanted the webpage to look good on all screen sizes. Initially, I had trouble ensuring that the layout worked well on both desktop and mobile devices. To fix this, I used CSS media queries to adjust the layout based on the screen width. I also used a mobile-first approach to ensure that the webpage is responsive from the start.
            </li>
            <li>
              <strong>Deploying the app on Vercel:</strong> After completing the app, I faced some challenges deploying it online. Vercel, the platform I used for deployment, had some issues recognizing the build directory and required me to configure certain settings. I solved this by running <code>npm run build</code> to create an optimized production build and deploying the app with the Vercel CLI. I also had to troubleshoot issues related to missing dependencies like <code>web-vitals</code>, which I resolved by installing the necessary package.
            </li>
          </ol>
          <p>
            In the end, these challenges helped me learn more about React and how to manage a real-world project. The process also taught me how to handle different issues that can arise during development and deployment.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1 className="title">Lab10c: React</h1>

      <div className="buttons">
        <button onClick={() => showContent('install')}>How I Installed and Built My Webpage</button>
        <button onClick={() => showContent('difficulties')}>Difficulties Encountered and Solutions</button>
      </div>

      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default App;
