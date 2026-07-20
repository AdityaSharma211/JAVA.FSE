import { useState } from 'react';
import ListofPlayers, { Scorebelow70 } from './components/ListofPlayers';
import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
} from './components/IndianPlayers';
import { players, IndianTeam } from './components/playersData';

function App() {
  const [flag, setFlag] = useState(true);

  if (flag === true) {
    return (
      <div>
        <button onClick={() => setFlag(false)}>Show Indian Players</button>
        <h1> List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1> List of Players having Scores Less than 70 </h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setFlag(true)}>Show All Players</button>
        <div>
          <h1> Indian Team </h1>
          <h1> Odd Players </h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1> List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
