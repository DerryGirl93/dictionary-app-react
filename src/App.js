import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (

    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center"><a href="https://github.com/DerryGirl93/dictionary-app-react" target="_blank" rel="noreferrer">Open source code</a> by <a href="https://www.linkedin.com/in/emma-o-deorain-2b98408b/" target="_blank" rel="noreferrer">Emma O'Deorain</a></footer>
      </div>
    </div>
  );
}
