const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/81T05w0B3lL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1190,
  quantity: 10,
  rating: 4.4,
};

const b2 = {
  picUrl:"https://m.media-amazon.com/images/I/71yvX9v7UKL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Jungle Book",
  price: 1390,
  quantity: 20,
  rating: 4.8,
};

function Book(props) {    // props recieve argument
  console.log(props);

  return (
    <div>
      <img src={props.book.picUrl} alt={b1.bname} />
      <h1>Lets Us React</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4>Rating: {props.book.rating} </h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={b1}/>
      <h1>Hello React</h1>
      <Book book={b2}/>
    </>
  );
}
