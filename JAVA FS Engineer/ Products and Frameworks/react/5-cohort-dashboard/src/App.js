import cohorts from './data/cohorts';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Cognizant Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
