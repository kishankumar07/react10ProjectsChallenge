import {useState} from 'react';

function App() {
 
  let [color,setColor] = useState('red')

// function changeColor(val){
//   setColor(val)
// }

  return (
   <div className='w-full h-screen duration-300 bg-gray-700' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button style={{backgroundColor:'orange'}} onClick={()=>{setColor('orange')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>Orange</button>
              
              <button style={{backgroundColor:'purple'}} onClick={()=>{setColor('purple')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>Purple</button>

              <button style={{backgroundColor:'pink'}} onClick={()=>{setColor('pink')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>Pink</button>
          </div>
      </div>
   </div>
  )
}

export default App
