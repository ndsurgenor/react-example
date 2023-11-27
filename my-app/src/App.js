import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting name="Nathan" greeting="I'm a stateful class component!" age="38"/>
    </div>
  );
}

export default App;
