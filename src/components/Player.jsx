import { useState } from "react"

export default function Player ({children,inintialName,initialSymbol}) {
    let [isEditing,setIsEditing] = useState(false);
    let [selectedSymbol,setSelectedSymbol] = useState(initialSymbol);
    let [playerName,setPlayerName] = useState(inintialName);

    function handleEditClick () { 
        setIsEditing((editing) => (!isEditing))
        
        
    }

    function handleChange (event) {
        console.log(event);
        setPlayerName(event.target.value);

    }
1
    let editablePlayerName;     
    if (!isEditing) {
        editablePlayerName = <span className="player-name">{playerName}</span>;
    }
    else {        
        editablePlayerName = <input type="text" defaultValue={playerName} onChange={handleChange}></input>
    }

    return( 
        <li>
        <span className = "player">
            {editablePlayerName}          
          <span className="player-symbol">{selectedSymbol}</span>
         </span>
         <button onClick = {handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
       </li>
    )   
    
}