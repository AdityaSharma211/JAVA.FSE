const flights = [
  { id: 1, from: 'Chennai', to: 'Bengaluru', time: '08:00 AM', price: 3500 },
  { id: 2, from: 'Mumbai', to: 'Delhi', time: '11:30 AM', price: 5200 },
  { id: 3, from: 'Hyderabad', to: 'Kolkata', time: '04:15 PM', price: 4100 },
];

export function GuestPage() {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time} — Rs.{flight.price}
          </li>
        ))}
      </ul>
      <p>Please login to book a ticket.</p>
    </div>
  );
}

export function UserPage() {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time} — Rs.{flight.price}{' '}
            <button>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
