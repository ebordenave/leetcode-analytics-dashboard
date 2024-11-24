import React from 'react';
import ReactDOM from 'react-dom/client';

// Main App component
const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// Render the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);