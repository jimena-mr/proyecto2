import './App.css';
import React from 'react';
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <body className="App-header">
    
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/userprofile" element={<UserProfile/>}></Route>
      </Routes>
    </Router>


    </body>
    </div>

    
  );
}



export default App;
