import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';


function App() {
  const [activePlayer,setActivePlayer] = useState('X');

  function handleSelectSquares () {    
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');     
  }

  return (
    
      <main>
       <div id='game-container'>
         <ol id ='players' className='highlight-player'>  
            <Player inintialName='Piet' initialSymbol='X' isActive={activePlayer === 'X'}/>
            <Player inintialName='Pompies' initialSymbol='O' isActive={activePlayer === 'O'}/>
         </ol>
         <GameBoard onSelectSquare = {handleSelectSquares} activePlayerSymbol = {activePlayer}/>
       </div>
      LOG
      <h1>En die aktiewe speler is : {activePlayer}</h1>
     </main>
  )
 }
 
export default App
