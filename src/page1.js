import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <ul id="menu">
            <li>
              <nav><a href="home.js">Home</a></nav>
              <nav><a href="about.html">About</a></nav>
            </li>
        </ul>

        <aside class="languages">
            <div id="homepagetext">
                <div>
                    <h3>Introducing Development Team 9</h3>
                    <p>
                      <strong>Team 9 is a development team at George Brown College in Toronto, ON.</strong>
                      The team was founded when the members, Zak, Taj, and Shafin, came together with the common interest of creating a new hub for blockchain development and education.
                      Zak, Taj, and Shafin are passionate individuals with a keen interest and expertise in the blockchain space. They are skilled in many of the protocals
                      this technical field, blockchain, will be propelled by to revolutionalize the way the globe handles information. Together they have created this developing site
                      to act as a world leading hub for blockchain news, education, and development. If you wish to participate in Team 9's mission, feel free to create an account and 
                      participate in this site and it's development.
                    </p>
                </div>

                <div>
                    <p>
                        Feel free to give us a visit at our office located at the address below:
                    </p>
                </div>
                <div>
                    <h4>Our Location</h4>
                    <p>160 Kendal Ave, Toronto, ON M5R 1M3</p>
                    <iframe 
                        title="Team 9 Location GBC"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.655380778885!2d-79.4126789846327!3d43.676136579120566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349c7e14727f%3A0x8bd06e05bd9af30d!2sGeorge%20Brown%20College%20-%20Casa%20Loma%20Campus%20-%20C%20Building!5e0!3m2!1sen!2sca!4v1590167243993!5m2!1sen!2sca" 
                        width="800" 
                        height="600" 
                        frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
            </div>
        </aside>
    </div>
  );
}

export default App;
