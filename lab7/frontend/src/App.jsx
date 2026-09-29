const b1={
  picUrl: "https://m.media-amazon.com/images/I/81T05w0B3lL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React Design Pattern",
  price:1190,
  quantity:10,
  rating:4.4
}


function Book(){
  return(
    <div>
      <img src={b1.picUrl}
       alt={b1.bname}
       />
      <h1>Lets Us React</h1>
      <h2>Price: {b1.price}</h2>
      <h3>Quantity: {b1.quantity}</h3>
      <h4>Rating: {b1.rating} </h4>
    </div>
  );
}


export default function App(){
  return( 
  <>
    <Book/>
    <h1>Hello React</h1>
    <Book/>
  </>
  );
}