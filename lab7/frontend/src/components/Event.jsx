
const MyButton=()=>{
    const handleClick=()=>{
        alert('Button Clicked')
    }
    return (
    <button style={{height:"40px",width:"100px"}} onClick={handleClick}>Click Me</button>
    )
}

function Event() {
  return (
    <div>Event</div>
  )
}

export default Event