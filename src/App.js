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
                    <p>- I have learned the fundamentals of Python, including inputs, operations, syntax, variables, functions, and loops. </p>
                    <p>- I have developed experience with Figma for creating wireframes, which has deepened my understanding of UI/UX design./p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Second Year (2023 - 2024)</h3>
                <h4><li>MySQL, HTML, CSS, and JavaScript</li></h4>
                  <ul>
                    <p>- Studied programming languages like MySQL, HTML, CSS, and JavaScript.</p>
                    <p>- Learned database creation, querying, and graph generation using MySQL.</p>
                    <p>- Specialized in structuring and styling web content with HTML and CSS, utilizing CodePen to build interactive projects.</p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Third Year (2024 - Present)</h3>
                <h4><li>HTML, CSS, JavaScript, Bootstrap, and REACTJS</li></h4>
                  <ul>
                    <p>- Focused on advanced HTML, CSS, JavaScript, Bootstrap, and React.js.</p>
                    <p>- Developed dynamic websites and worked with contemporary tools like Vercel and Node.js.</p>
                    <p>- Deployed projects on GitHub and replicated web designs to improve web development skills.</p>
                  </ul>
            </div>
        </div>
      </section>

    </div>
  </div>
  );
}

export default App;
