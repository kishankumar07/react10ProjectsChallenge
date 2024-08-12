
import './App.css'
import Card from './components/card'

function App() {
  
  // let obj={
  //   name:'Kishan',
  //   age:27,
  //   city:'Thrissur'
  // }
let arr = [1,2,3,34,4]

  return (
      <>
        <h1 className='text-3xl bg-green-500 rounded-lg p-3'>Vite with tailwind</h1>
        <Card name='Kishan.ta' country='India'/>
        <Card array={arr}/>
      </> 
  )
}
 
export default App
