import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';


function App() {
  const [activePlayer,setActivePlayer] = useState('X');
  const [gameTurns,setGameTurns] = useState([]);

  function handleSelectSquare (rowIndex,colIndex) {    
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');     
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'; 
      }

      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player: currentPlayer},
      ...prevTurns]
      
      return updatedTurns;
    })
  }

  return (
    
      <main>
       <div id='game-container'>
         <ol id ='players' className='highlight-player'>  
            <Player inintialName='Piet' initialSymbol='X' isActive={activePlayer === 'X'}/>
            <Player inintialName='Pompies' initialSymbol='O' isActive={activePlayer === 'O'}/>
         </ol>
         <GameBoard onSelectSquare = {handleSelectSquare}  turns={gameTurns}/>
       </div>
      <Log/>
     </main>
  )
 }
 
export default App
