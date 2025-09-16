import './App.css';
import Events from './Events';
import Counter from './Counter';
import ReadText from './ReadText';
import Todolist from './Todolist';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React App development</h1>
      </header>
      <Events/>
      <Counter/>
      <ReadText/>
      <Todolist/>
    </div>
  );
}
export default App;
