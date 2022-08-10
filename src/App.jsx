import { useState } from 'react'
import './App.css'
import {PageOne, PageTwo, PageThree, PageFour} from './pages'

function App(props) {
  const [count, setCount] = useState(1)
  const [fName, setfName] = useState("")
  const [dName, setdName] = useState("")

if (count===1){
  return(
    <>
    <div className='form'>
    <PageOne fInput={fName} callbackfunc={(e) =>{setfName(e.target.value); console.log({fName})}} dInput={dName} 
    callbackfunc2={(e) =>{setdName(e.target.value); console.log({dName})}}
     />
    <br />
    <button onClick={()=>{
      console.log("ln",fName)
      if(fName==="" || dName===""){return (alert("Please fill the details"))};
      {setCount(count +1)}}}>Create Workspace</button>
    </div>
</>
)}

if (count===2){
  return(<>
      <div className='form'>
    <PageTwo />
    <br />
    <button onClick={()=>{setCount(count +1)}}>Create Workspace</button>
    </div>
    </>)}

if (count===3){
  return(<>
      <div className='form'>
    <PageThree />
    <br />
    <button onClick={()=>{setCount(count +1)}}>Create Workspace</button>
   </div>
    </>)}

if (count===4){
  return(<>
      <div className='form'>
    <PageFour />
    <br />
    <button onClick={()=>{alert("Thank You")}}>Launch Eden</button>
    </div>
    </>)}
}

export {App}
