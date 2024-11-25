// @ts-ignore
import React from 'react';
import { Button } from './components/ui/button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Hello, Vite + React!</h1>
      <Button onClick={handleClick} variant="default">Click Me</Button>
    </div>
  );
};

export default App;