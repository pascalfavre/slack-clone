import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat.js';
import Login from './components/Login.js';


function App() {
  const [user, setUser] = useState(null);

  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              {/*check the route that we're in and display correct*/ }
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* REACT Router -> Chat screen */}
            </div>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
