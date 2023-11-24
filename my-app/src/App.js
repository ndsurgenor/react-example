import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps name="Nathan" greeting="nice to meet you!" age="38"/>
    </div>
  );
}

export default App;
