import { useState } from "react"

export default function HandleTeam(){
  const [team,setTeam] = useState(11)

  const handleAdd = () => {
    const newTeam = team+1;
    setTeam(newTeam);
  }
  const handleRemove = () => {
    const newTeam = team -1;
    setTeam(newTeam);
  }
  const teamStyle={
    border:"2px solid purple",
    borderRadius:"10px",
    margin:"20px"
  }
    return (
        <div style={teamStyle}>
            <h3 >Team :{team}</h3>
            <button style={{background:"purple",color:"white",margin:"10px"}} onClick={handleAdd}>click Me Add</button>
            <button style={{background:"purple",color:"white",margin:"10px"}} onClick={handleRemove}>click Me Remove</button>
        </div>
    )
}