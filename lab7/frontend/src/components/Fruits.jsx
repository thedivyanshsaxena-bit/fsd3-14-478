 // by rafce or rfce

 const products=[
    { title:"Cabbage",id:1,isFruit:false},
    { title:"Potato",id:2,isFruit:false},
    { title:"Banana",id:3,isFruit:true},
    { title:"Apple",id:4,isFruit:true},  
 ];

 const ListItem= products.map((item)=>  (
 <li key={item.id}  style={{color: item.isFruit ? "red" : "green"}}>{item.title}</li>  // only do red color on fruit and green on vegetables
));

console.log(ListItem);
const Fruits = () => {
  return (
    <ul>{ListItem}</ul>
  )
};
export default Fruits


    
