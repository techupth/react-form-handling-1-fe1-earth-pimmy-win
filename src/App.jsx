import React, { useState } from 'react';
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState('Greeting Message');
  const updateGreeting = () => {
    const inputElement = document.getElementById('greeting-message');
    // ตรวจสอบว่า input ไม่เป็น null และมีค่า
    if (inputElement && inputElement.value.trim() !== '') {
      setGreetingMessage(inputElement.value);
    }
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button onClick={updateGreeting}>Update text</button>
      </div>
    </div>
  );
}

export default App;
