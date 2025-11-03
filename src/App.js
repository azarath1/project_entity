import './App.css';
import CreatureCard from './components/CreatureCard';

function App() {
  // Import creature JSON synchronously and pass it to the card to avoid dynamic import during tests
  const creatureData = require('./data/entities/creature_001.json');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Project Entity Application</h1>
        <p>
          This is a simulation.
        </p>

        {/* Render the creature card for creature_001 (loads its own JSON) */}
        <div style={{ marginTop: 16 }}>
          <CreatureCard creature={creatureData} />
        </div>

        {/* Keep the original testable text so existing tests still pass */}
        <p>
          <a href="https://reactjs.org">learn react</a>
        </p>
      </header>
    </div>
  );
}

export default App;
