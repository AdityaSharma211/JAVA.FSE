function ListofPlayers({ players }) {
  return (
    players.map((item) => {
      return (
        <div key={item.name}>
          <li>
            Mr. {item.name}
            <span> {item.score} </span>
          </li>
        </div>
      );
    })
  );
}

// Filter the players with scores below 70 using an ES6 arrow function
export function Scorebelow70({ players }) {
  const players70 = [];

  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return null;
  });

  return players70.map((item) => (
    <div key={item.name}>
      <li>
        Mr. {item.name}
        <span> {item.score} </span>
      </li>
    </div>
  ));
}

export default ListofPlayers;
