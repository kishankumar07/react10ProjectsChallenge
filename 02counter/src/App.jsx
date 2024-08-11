import {useState} from 'react';
import './App.css'

function App(){
  let [counter,setCounter] = useState(0)

function previousvalue(counter){
  return counter=counter+1;
}

let addValue = ()=>{
  setCounter(previousvalue);
  setCounter(previousvalue);
  setCounter(previousvalue);
  setCounter(previousvalue);
}
let removeValue =()=>{
  setCounter((prev)=>prev-1);
  setCounter((prev)=>prev-1);
  setCounter((prev)=>prev-1);
  setCounter((prev)=>prev-1);
}

  return(
    <>
      <h1>Counter project</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={()=>{addValue()}}>Add value</button>{' '}
      <button onClick={()=>{removeValue()}}>Remove value</button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App;