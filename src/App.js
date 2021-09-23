// import logo from './logo.svg';
// import './App.css';
import Schedule from "./components/Schedule/Schedule";
import Register from "./components/Register/Register";
import talks from "./data/talks.json";
import RegisterSpectrum from "./components/RegisterSpectrum/RegisterSpectrum";

function App() {
  return (
    <div className="App container mt-4">
      <header className="App-header">
          <h1 className="visually-hidden">FePro Accessible!!!</h1>
      </header>
        <main id="content">
            <Schedule talks={talks}/>
            <Register />
            <RegisterSpectrum/>
        </main>
    </div>
  );
}

export default App;
