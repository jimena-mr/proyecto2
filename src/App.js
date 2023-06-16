import './App.css';
import {useState} from 'react';
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';


function App() {
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  function usernameHandler(event){
    console.log(event.target.value)
    setUsername(event.target.value) 
  }
  function passwordHandler(event){
    setPassword(event.target.value)
  }
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
