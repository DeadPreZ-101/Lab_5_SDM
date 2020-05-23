import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul id="menu">
        <li>
          <nav>
            <a href="home.js">Home</a>
          </nav>
          <nav>
            <a href="about.html">About</a>
          </nav>
          <nav>
            <a href="App.js">FAQ</a>
          </nav>
        </li>
      </ul>
      <div>
        <h1>Contact Form</h1>

        <div class="container" />
        <form action="?" id="border" />
        <label for="fname">First Name</label>
        <br />
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <br />
        <br />

        <label for="lname">Last Name</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <br />
        <br />

        <label for="country">Country</label>
        <br />
        <select id="country" name="country">
          <br />
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <br />

        <label for="FAQ">FAQ</label>
        <br />
        <textarea
          id="FAQ"
          name="FAQ"
          placeholder="Type your question here.."
          style={{ width: 1000, height: 200 }}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" id="submit" />
        <form />
      </div>
      <p>
        TEAM 9 MEMBERS:
        <br />
        <br />
        Zakariya J:
        <br />
        Zakariya has traveled through numerous nations across Africa, Asia,
        Europe and North America; with work experience in Canada, England and
        Rwanda. Living in multiple environments and working with industry
        professionals from several cultures has empowered Zakariya in being a
        talented business manager with demonstrated experience in adapting to
        change, creating strategies for organizational success, creative problem
        solving and viewing life through numerous lenses. He enjoys new
        challenges and was interested in learning more about Blockchain
        Development, and so he has enrolled in the BCDV program at GBC!
        <br />
        <br />
        Taj S:
        <br />
        Taj is Barbadian. He studied Information Technology at the University Of
        the West Indies in Jamaica, and has work experience with the government
        of Barbados. His interest in Blockchain stems from a vigorous
        entrepreneurial spirit and a hunger to improve his country
        technoogically. Many describe him as an approachable people person who
        enjoys new challenges and learning new skills.
        <br />
        <br />
        Shafin R:
        <br />
        Shafin has studied numerous fields ranging from civil engineering to
        human kinetics, and even art school. His exposure to different academic
        pursuits has allowed him an understanding of the world inspiring him to
        make an impact by participating in a global revolution. He was first
        intrigued by blockchain in 2019 and ever since then he has been sure
        that this is the revolution that is most relevant to the world he would
        like to see in the future. As a result he has enrolled in the blockchain
        development program at George Brown College in Toronto, Ontario.
        <br />
        <br />
      </p>
    

    </div>
  );
}
 
export default App;

