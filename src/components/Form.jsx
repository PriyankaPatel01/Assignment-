import React from 'react'
import './form.css';
import { useState } from 'react';
import Pop from './Pop';


let val=true;

const Form = () => {
    const [btnpop, setBtnPop]=useState(false);
    
    const [message, setMessage] = useState({
      name:"",
      email:'',
      leadS:"",
      CN:"",
      VM:"",
      VRN:"",
      BI:"",
      Loc:"",
      AT:"",
      Com:"",
    });

    const [recs, setrecs]=useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value= e.target.value;
    setMessage({ ...message, [name]: value})
  };
  

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    let count=0;
    val=true;
    if(message.AT.trim().length===0)
    {
      alert("Assistance time cannot be empty!!");
      count=1;
    }
    else if(message.name.trim().length===0)
    {
      alert("Name cannot be empty!!");
      count=1;
    }
    else if(message.email.trim().length===0)
    {
      alert("Email cannot be empty!!");
      count=1;
    }
    else if(message.BI.trim().length===0)
    {
      alert("Breakdown isuue cannot be empty!!");
      count=1;
    }
    else if(message.CN.trim().length===0)
    {
      alert("Contact number cannot be empty");
      count=1;
    }
    else if(message.VM.trim().length===0)
    {
      alert("Vehical make cannot be empty");
      count=1;
    }
    else if(message.VRN.trim().length===0)
    {
      alert("Vehicle Registration Number cannot be empty");
      count=1;
    }
    else if(message.Com.trim().length===0)
    {
      alert("Comment cannot be empty");
      count=1;
    }

    console.log(count);
    if(count!==0)
    {
      val=false;
    }

    const newrec={...message, id: new Date().getTime().toString()};
    setrecs([...recs, newrec]);
    return true;

  };


  return (
    <>
    <div className="main">
        <h1>Create Your New Ticket</h1>
        <br />
        <form onSubmit={handleSubmit} className='ticket'>
            <label htmlFor="leadSource">Lead Source: </label>
            <select name="leadS" id="leadS" value={message.leadS}>
                <option value="web">Web</option>
                <option value="chat">Chat</option>
                <option value="call">Call</option>
            </select><br />
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={handleChange} value={message.name} name='name'/><br />
            <label htmlFor="name">Contact Number: </label>
            <input type="text" onChange={handleChange} value={message.CN} name='CN'/><br />
            <label htmlFor="name" >E-mail: </label>
            <input type="email" onChange={handleChange} value={message.email} name='email'/><br />
            
            <label htmlFor="name" >Vehical Make: </label>
            <input type="text" onChange={handleChange} value={message.VM} name='VM'/><br />
            
            <label htmlFor="name" >Vehical Registration Number: </label>
            <input type="text" onChange={handleChange} value={message.VRN} name='VRN'/><br />
            
            <label htmlFor="name"> Breakdown Issue: </label>
            <input type="text" onChange={handleChange} value={message.BI} name='BI'/><br />
            <label htmlFor="name">Location: </label>
            <input type="text" onChange={handleChange} value={message.Loc} name='Loc'/><br />
            <label htmlFor="name">Service Fees: </label>
            <input type="text" /><br />
            <label htmlFor="name">Assistance Time: </label>
            <input type="time" onChange={handleChange} value={message.AT} name='AT'/><br />
            <label htmlFor="name">Comments: </label><br />
            <textarea name="Com"cols="30" rows="10" onChange={handleChange} value={message.Com}></textarea>
            <br />
            <center><input type="submit" className='submit' onClick={()=>setBtnPop(val)} /></center>
        </form>
    </div>
    <Pop trigger={btnpop} setTrigger={setBtnPop}>
            <h3>Your form is submitted!!</h3>
        </Pop>
   
    </>
  )
}

export default Form
