import './App.css';
import Events from './Events';
import Counter from './Counter';
import ReadText from './ReadText';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React App development</h1>
      </header>
      <Events/>
      <Counter/>
      <ReadText/>
    </div>
  );
}
export default App;
