// Conditional rendering style #2: if / else building an "element variable".
function BlogDetails(props) {
  let content;

  if (props.hasBlogs) {
    content = (
      <ul>
        <li>Getting Started with React Hooks</li>
        <li>Understanding the Virtual DOM</li>
        <li>ES6 Features Every Developer Should Know</li>
      </ul>
    );
  } else {
    content = <p>No blog posts published yet.</p>;
  }

  return <div>{content}</div>;
}

export default BlogDetails;
