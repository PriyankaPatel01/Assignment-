import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './landing.css';


let currdate= new Date();
currdate = currdate.getHours()
let greet = '';

if (currdate>=1 && currdate<12)
{
  greet = 'Good Morning';
}
else if (currdate>=12 && currdate <19)
{
  greet = 'Good Afternoon';
}
else
{
  greet = 'Good Evening';
}


const Landing = () => {
  const location = useLocation();
  const nav=useNavigate();
  const [go, setgo]=useState(false);

  if(go)
  {
    nav('/form');
  };

  return (
    <>
    <div className='my-btn'>
    <button onClick={() => {setgo(true)}} className='btn-form'>Create new ticket</button>
    </div>

    <div className="land">
      <h1>{greet} Rescuer!</h1>
      <h2>How are you doing today {location.state.name}?</h2>
    </div>
    </>
  )
}

export default Landing
