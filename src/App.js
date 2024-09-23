import './App.css';

function App() {
  return (
<div class="resume">
    <header>
      <h1>CEDRIC JIAN MARTIN</h1>
      <h2>FUTURE BACK-END DEVELOPER</h2>
    </header>

    <div class="content">
      <section class="sidebar">
        <div class="contact">
          <h1>Contact</h1>
          <p>cjnmartin@email.com</p>
          <p>Cedric Jian Martin</p>
          <p> Sto.Tomas San matias Pampanga</p>

        </div>

        <div class="education">
          <h1>Education</h1>
          <p>Bachelor of Science in Information Technology (Present)</p>
        </div>

        <div class="skills">
          <h1>Skills</h1>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>

          </ul>
        </div>
      </section>

      <section class="main-content">
        <div class="experience">
          <h1>Learning Experience</h1>
            <div class="yr">
              <h3>First Year (2022 - 2023)</h3>
                <h4><li>Python and Figma</li></h4>
                  <ul>
                    <p>- In my first year, I learned Python basics, including variables, functions, loops, and syntax, enabling me to create functional outputs. </p>
                    <p>-  I also used Figma to design website wireframes, enhancing my understanding of user interface and user experience design.. </p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Second Year (2023 - 2024)</h3>
                <h4><li>MySQL, HTML, CSS, and JavaScript</li></h4>
                  <ul>
                    <p>- During my second year, I learned JavaScript, MySQL, HTML, and CSS.</p>
                    <p>- We focused on creating interactive projects, handling databases with MySQL, and using CodePen to combine these technologies for web development.</p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Third Year (2024 - Present)</h3>
                <h4><li>HTML, CSS, JavaScript, Bootstrap, and REACTJS</li></h4>
                  <ul>
                    <p>- In my third year, I advanced my web development skills by learning Bootstrap and React.js to build responsive layouts and dynamic user interfaces.</p>
                    <p>- We also deployed projects using tools like Vercel and GitHub.</p>
                  </ul>
            </div>
        </div>
      </section>

    </div>
  </div>
  );
}

export default App;
