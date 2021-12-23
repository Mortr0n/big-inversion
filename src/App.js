import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={ "Uzumaki" } firstName={ "Naruto" } age={25} hairColor={ "Yellow" } />
      <PersonCard lastName={ "Uchiha" } firstName={ "Sasuke" } age={26} hairColor={ "Black" } />
      <PersonCard lastName={ "Morton" } firstName={ "Jiraiya" } age={65} hairColor={ "Brown" } />
      <PersonCard lastName={ "Senju" } firstName={ "Tsunade" } age={64} hairColor={ "Yellow" } />
    </div>
  );
}

export default App;
