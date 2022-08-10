import { useState } from 'react'
import './App.css'
import {PageOne, PageTwo, PageThree, PageFour} from './pages'
function App(props) {
  const [count, setCount] = useState(1)

if (count===1){
return(
<>
<PageOne />
<br />
    <button onClick={()=>{setCount(count +1)}}>Create Workspace</button>
</>
)}

if (count===2){
  return(<>
    <PageTwo />
    <br />
    <button onClick={()=>{setCount(count +1)}}>Create Workspace</button>
    </>)}

if (count===3){
  return(<>
    <PageThree />
    <br />
    <button onClick={()=>{setCount(count +1)}}>Create Workspace</button>
    </>)}

if (count===4){
  return(<>
    <PageFour />
    <br />
    <button onClick={()=>{alert("Thank You")}}>Launch Eden</button>
    </>)}
}

export default App
