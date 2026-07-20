// Conditional rendering style #1: the logical && operator combined with
// Array.map() for list rendering.
function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3> {book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      {props.books.length > 0 && bookdet}
      {props.books.length === 0 && <p>No books available.</p>}
    </div>
  );
}

export default BookDetails;
