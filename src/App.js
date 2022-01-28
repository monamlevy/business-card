import mlPic from "./mlPic.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="ml-pic" src={mlPic} alt="mlPic" />
        <h1 className="my-name">Mona Levy</h1>
        <a
          className="app-link"
          href="https://github.com/monamlevy"
          target="_blank"
        >
          React Developer
        </a>
      </header>
      <body className="app-body">
        <h2 className="about-me">About Me</h2>
        <p>
          I am a community taught React Developer. I've watched and coded with numerous JavaScript and React videos and courses.
          Family and friends in the software developing industry have guided me through questions and problems.
          I have made several applications as personal projects to sharpen my skills. Most are not on GitHub yet, but they will be.
        </p>
      </body>
      <footer className="app-footer">
        <div className="my-contact">
          <a className="email" href="mailto:monamlevy@gmail.com">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/2165/2165205.png"
            />
            <span>monamlevy@gmail.com</span>
          </a>
          <div className="phone">
            <img
              className="icon"
              src="https://cdn-icons.flaticon.com/png/512/2936/premium/2936151.png?token=exp=1643339337~hmac=0f5f375c9ef407cb40a9567cf77b8aec"
            />
            <span>832-758-0434</span>
          </div>
        </div>
        <div className="my-pages">
        <div className="linkedin">
        <a
          
          href="https://www.linkedin.com/in/mona-levy-a97871115/"
          target="_blank"
        >
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />
        </a>
        </div>
        <div className="github">
        <a
          
          href="https://github.com/monamlevy"
          target="_blank"
        >
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          />
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
