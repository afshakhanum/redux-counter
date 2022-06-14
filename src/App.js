import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './redux/action'

const App = () => {
  const myState = useSelector((state) => state.changeCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className='App-header'>Counter</h1>
      <div className='App'>
      <h1>{myState}</h1>
      <br></br>
      <button onClick={ () => dispatch(decNumber())} className='App-button'>-</button>
      <button onClick={ () => dispatch(incNumber())} className='App-button'>+</button>
      </div>
    </div>
  )
}

export default App