// event handaling in react
import './App.css'
import Counter from './Counter'
import HandleTeam from './Team'
import Users from './users'
import Friends from './Friends'
function App() {
 function handleClick(){
  alert("wow it working")
 }
 const handleClick2 = ()=>{
  alert("click me2 working")
 }
 const addFive = (num) =>{
  alert(num+5)
 }
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <HandleTeam></HandleTeam>
      <Counter></Counter>
      <button className='btn' onClick={handleClick}>click me</button>
      <button className='btn' onClick={handleClick2}>click me2</button>
      <button className='btn' onClick={() =>{alert("third is working")}}>third</button>
      <button className='btn' onClick={() =>{addFive(3)}}>clickMe4</button>
    </>
  )
}

export default App
