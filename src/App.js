import logo from './logo.svg';
import './App.css';

const App = () => {

  let arr = [];

  const updateSlowArray = () => {
    for (let i = 0 ; i <= 1000000; i++){
      arr.push(`items${i}`)
    }
  }
  
  const updateFastArray = () => {
    for (let i = 0 ; i <= 1000; i++){
      arr.push(`items${i}`)
    }
  }

  const handleClick = (e) => {
    performance.mark('start-computation');
    if(e.target.id === 'slow'){
      updateSlowArray()
    }
    else{
      updateFastArray()
    }
    performance.mark('stop-computation');
    performance.measure('final-computation', 'start-computation', 'stop-computation');
    console.log(performance.getEntriesByName('final-computation'))
    performance.clearMeasures()
    performance.clearMarks();
  }

  return (
    <div className="App">
    <h1>Performance Test</h1>
    <button id="slow" onClick={handleClick}>Slow Performance</button>
    <button id="fast" onClick={handleClick}>Fast Performance</button>
    </div>
  );
}

export default App;
