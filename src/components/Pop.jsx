import React from 'react'
import './pop.css';

const Pop = (props) => {
  return (props.trigger)? (
    <div>
      <div className="popup">
        <div className="ipop">
            <button className='closeBtn' onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
        </div>
      </div>
    </div>
  ) : "";
}

export default Pop
