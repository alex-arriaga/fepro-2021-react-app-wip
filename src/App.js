// import logo from './logo.svg';
// import './App.css';
import Schedule from "./components/Schedule/Schedule";
import talks from "./data/talks.json";

function App() {
  return (
    <div className="App container mt-4">
      <header className="App-header">
        Hello world!
          <Schedule talks={talks}/>
      </header>

    </div>
  );
}

export default App;
