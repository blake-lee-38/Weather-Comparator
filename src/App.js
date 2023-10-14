import logo from './logo.svg';
import './App.css';
import Body from './components/Body.js';

function App() {
  return (
    <div className = "App">
      <div className = "App-header">
        <h1>Weather Comparison</h1>
        Type in the name of any 2 cities and compare their current weather!
      </div>
      <div className="Body">
          <Body />
      </div>
    </div>
  )
}

export default App;
