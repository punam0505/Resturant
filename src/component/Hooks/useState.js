import React, {useState} from 'react';
import './style.css'

const UseState = () => {
    const [count, setCount] = useState(0);

  return (
    <>
       <div className='center-div'>
        <p>My Data</p>
        <div class='button2' onClick={()=>setCount(count+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <p>{count}</p>
        <div class='button2' onClick={()=> count===0 ? setCount(0) : setCount(count-1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Decrement
        </div>
        </div>     
    </>
  )
}

export default UseState
