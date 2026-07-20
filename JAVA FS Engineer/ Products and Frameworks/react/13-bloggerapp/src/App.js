import './App.css';
import { books } from './data/books';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div>
      <div className="st2">
        <h1> Book Details</h1>
        <BookDetails books={books} />
      </div>
      <div className="v1">
        <h1> Blog Details</h1>
        <BlogDetails hasBlogs={true} />
      </div>
      <div className="mystyle1">
        <h1> Course Details</h1>
        <CourseDetails enrolled={true} courseName="ReactJS Fundamentals" />
      </div>
    </div>
  );
}

export default App;
