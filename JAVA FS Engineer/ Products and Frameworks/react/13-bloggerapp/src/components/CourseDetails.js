// Conditional rendering style #3: the ternary operator.
function CourseDetails(props) {
  const coursedet = props.enrolled ? (
    <p>You are enrolled in: {props.courseName}. Continue your progress!</p>
  ) : (
    <p>You are not enrolled in any course yet. Browse our catalogue to get started.</p>
  );

  return <div>{coursedet}</div>;
}

export default CourseDetails;
