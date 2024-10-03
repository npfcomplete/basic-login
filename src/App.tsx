import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
	if (password.length > 3) {
		setIsLoggedIn(true);	
	}
  }, [password]);

  return (
    <div className="App">
      {isLoggedIn ? (
		<div style = {{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
		<div style = {{backgroundColor: "black", width: "80%", display: "flex", justifyContent: "center", alignItems: "center"}}>
		<img src="fbi.png"/>
		</div>
		</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
};

export default App;
