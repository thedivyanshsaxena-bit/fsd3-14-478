import Pen from "./components/Pen.jsx";
import Book from "./components/Book.jsx"
import Fruits from "./components/Fruits.jsx";
import { books } from "./data/books.js";
import { pens } from "./data/pens.js";

function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;
  return (
    <div>
      <img src={picUrl} alt={bname} srcset="" />
      <h1>{bname}</h1>
      <h2>Price : {price}</h2>
      <h3>Quantity : {quantity}</h3>
      <h4>Rating : {rating}</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>online book store</h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
        <Fruits/>      
      </div>
    </>
  );
}