import { useState } from "react"

export default function Player ({children,name,symbol}) {
    let [isEditing,setIsEditing] = useState(false);

    function handleEditClick () { 
        
        //isEditing ? setIsEditing(false) : setIsEditing(true);

        if (isEditing) {
            setIsEditing(false);
            
        } else {
            setIsEditing(true);
        }
    }

    let playerName;     
    if (!isEditing) {
        playerName = <span className="player-name">{name}</span>;
    }
    else {        
        playerName = <input type="text" placeholder={name}></input>
    }

    return(
        <li>
        <span className = "player">
            {playerName}          
          <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick = {handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
       </li>
    )   
    
}