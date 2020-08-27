import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello World! Let's build a slack clone!</h1>

      <Header />
      <Sidebar />
      {/* REACT Router -> Chat screen */}
    </div>
  );
}

export default App;
