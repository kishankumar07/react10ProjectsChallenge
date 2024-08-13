import { useState,useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  let [length,setLength] = useState(8);
  let [numberAllowed,setNumberAllowed] = useState(false);
  let [symbolAllowed,setSymbolAllowed] = useState(false);
  let [password,setPassword] = useState('');
  let passwordRef = useRef(null)



  let generatePassword = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if(symbolAllowed) str += '!@#$%^&*()-_+'

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass+= str.charAt(char);
    } 
    setPassword(pass)
  },[length,numberAllowed,symbolAllowed])




  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,symbolAllowed])


  let copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }


  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
               ref={passwordRef}
            />
            <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                  <input type="range"
                    min={6}
                    max={20}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>setLength(e.target.value)}
                    name=''
                    id=''
                  />
                  <label htmlFor="length">Length : {length}</label>
            </div>  

            <div className='flex items-center gap-x-1'>
                 <input type="checkbox"
                  defaultChecked={numberAllowed}
                  onChange={()=>setNumberAllowed((prev)=>!prev)}
                  name=''
                  id=''
                 />
                 <label htmlFor="number">Number</label>
            </div>  

            <div className='flex items-center gap-x-1'>
                 <input type="checkbox"
                  defaultChecked={symbolAllowed}
                  onChange={()=>setSymbolAllowed((prev)=>!prev)}
                  name=''
                  id=''
                 />
                 <label htmlFor="character">Character</label>
            </div>  


        </div>      

      </div>
  )
}

export default App
