import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const addCount = () => {
        const newCount = count+1;
        setCount(newCount)
    }
    const handleReduce =() => {
        const newCount = count-1;
        setCount(newCount)
    }
    return (
        <div style={{border:"2px solid red",margin:"10px",borderRadius:"10px"}}>
            <h3>Counter : {count}</h3>
            <button onClick={addCount}style={{background:"purple", borderRadius:"10px",color:"white",margin:"5px"}} onClick={addCount}> add </button>
            <button onClick={handleReduce} style={{background:"purple",color:"white",margin:"5px"}}>reduce</button>
        </div>
    )
}