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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
              src="https://cdn-icons.flaticon.com/png/512/2936/premium/2936151.png?token=exp=1642737984~hmac=38401b4a61fb6b24288daa74557cfca4"
            />
            <span>832-758-0434</span>
          </div>
        </div>
        <div>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />
        </div>
        <div>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
