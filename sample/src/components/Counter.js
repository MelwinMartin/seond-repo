import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { increment,decrement } from '../Redux/Reducer/Reducer'
const Counter = () => {
    const count =useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div className='counter-container'>
        <h2 className='counter-title'>React Redux</h2>
        <p className='counter-value' > {count}</p>
       <div className="counter-buttons">
     
        <button onClick={()=>dispatch(increment())} className="counter-button">
            Increment
        </button>
        <button onClick={()=>dispatch(decrement())} className="counter-button">
            Decrement
        </button>
       </div>


    </div>
  )
}

export default Counter