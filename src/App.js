import React from "react";
import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <aside class="languages">
          <div id="homepagetext">
            <div>
              <h3>Introducing Development Team 9</h3>
              <p>
                <strong>
                  Team 9 is a development team at George Brown College in
                  Toronto, ON.
                </strong>
                The team was founded when the members, Zak, Taj, and Shafin,
                came together with the common interest of creating a new hub for
                blockchain development and education. Zak, Taj, and Shafin are
                passionate individuals with a keen interest and expertise in the
                blockchain space. They are skilled in many of the protocals this
                technical field, blockchain, will be propelled by to
                revolutionalize the way the globe handles information. Together
                they have created this developing site to act as a world leading
                hub for blockchain news, education, and development. If you wish
                to participate in Team 9's mission, feel free to create an
                account and participate in this site and it's development.
              </p>
              <p>
                Feel free to give us a visit at our office located at the
                address below:
              </p>
              <h4>Our Location</h4>
              <p>160 Kendal Ave, Toronto, ON M5R 1M3</p>
              <iframe
                title="Team 9 Location GBC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.655380778885!2d-79.4126789846327!3d43.676136579120566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349c7e14727f%3A0x8bd06e05bd9af30d!2sGeorge%20Brown%20College%20-%20Casa%20Loma%20Campus%20-%20C%20Building!5e0!3m2!1sen!2sca!4v1590167243993!5m2!1sen!2sca"
                width="800"
                height="600"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </aside>
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
          change, creating strategies for organizational success, creative
          problem solving and viewing life through numerous lenses. He enjoys
          new challenges and was interested in learning more about Blockchain
          Development, and so he has enrolled in the BCDV program at GBC!
          <br />
          <br />
          Taj S:
          <br />
          Taj is Barbadian. He studied Information Technology at the University
          Of the West Indies in Jamaica, and has work experience with the
          government of Barbados. His interest in Blockchain stems from a
          vigorous entrepreneurial spirit and a hunger to improve his country
          technoogically. Many describe him as an approachable people person who
          enjoys new challenges and learning new skills.
          <br />
          <br />
          Shafin R:
          <br />
          Shafin has studied numerous fields ranging from civil engineering to
          human kinetics, and even art school. His exposure to different
          academic pursuits has allowed him an understanding of the world
          inspiring him to make an impact by participating in a global
          revolution. He was first intrigued by blockchain in 2019 and ever
          since then he has been sure that this is the revolution that is most
          relevant to the world he would like to see in the future. As a result
          he has enrolled in the blockchain development program at George Brown
          College in Toronto, Ontario.
          <br />
          <br />
        </p>
      </div>
    </body>
  );
}

export default App;