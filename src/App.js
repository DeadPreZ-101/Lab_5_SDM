import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul id="menu">
              <li>
                <nav><a href="home.js">Home</a></nav>
                <nav><a href="about.html">About</a></nav>
                <nav><a href="App.js">FAQ</a></nav>
              </li>
          </ul>
    <h1>Contact Form</h1>

<div class="container" />
  <form action="?" id="border"/>
    <label for="fname">First Name</label><br/>
    <input type="text" id="fname" name="firstname"  placeholder="Your name.."/><br/><br/>

    <label for="lname">Last Name</label><br/>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/><br/>

    <label for="country">Country</label><br/>
    <select id="country" name="country"><br/>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        <option value="usa">USA</option>
    </select><br/><br/>

    <label for="FAQ">FAQ</label><br/>
    <textarea id="FAQ" name="FAQ" placeholder="Type your question here.." style={{width: 1000, height: 200}}></textarea><br/><br/>

    <input type="submit" value="Submit" id="submit"/>
  <form/>
    </div>
  );
}

export default App;
