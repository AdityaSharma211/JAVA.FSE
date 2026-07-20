import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusClass = cohort.status === 'ongoing' ? styles.ongoing : styles.completed;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{cohort.name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
        <dt>Trainees</dt>
        <dd>{cohort.trainees}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
