import sr from './office.svg';
import './App.css';

// Single office object
const ItemName = { Name: 'DBS', Rent: 50000, Address: 'Chennai' };

// List of office space objects to loop through
const offices = [
  { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
  { Name: 'TCS Towers', Rent: 75000, Address: 'Bengaluru' },
  { Name: 'Innov8 Hub', Rent: 45000, Address: 'Coimbatore' },
  { Name: 'WorkSpace One', Rent: 62000, Address: 'Hyderabad' },
];

// Heading element
const element = <h1>{ItemName.Name}, at Affordable Range</h1>;

// Attribute to display the office space image
const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

function rentColor(rent) {
  return rent <= 60000 ? 'textRed' : 'textGreen';
}

function App() {
  return (
    <div className="App">
      {element}
      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>
      <h3>
        Rent: Rs.{' '}
        <span className={rentColor(ItemName.Rent)}>{ItemName.Rent}</span>
      </h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>
      <ul>
        {offices.map((office, index) => (
          <li key={index}>
            {office.Name} — Rs.{' '}
            <span className={rentColor(office.Rent)}>{office.Rent}</span> —{' '}
            {office.Address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
