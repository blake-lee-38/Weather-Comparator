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
      <div className = "Footer">
        <p>Thank You for visiting!
        You can access the source code on my <a href="https://github.com/blake-lee-38/Weather-Comparator" className="GitHub" target="_blank" rel="noreferrer">GitHub<img src="/github-mark.png" alt="Github Link" /> </a>
        or connect with me on <a href="https://www.linkedin.com/in/blake--lee" className="LinkedIn" target="_blank" rel="noreferrer">LinkedIn<img src="/LI-In-Bug.png" alt="LinkedIn Link"></img></a></p>
      </div>
    </div>
  )
}

export default App;
