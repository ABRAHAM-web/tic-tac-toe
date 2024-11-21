import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const initialGameBoard = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ];

function deriveActivePlayer(gameTurns) {
let currentPlayer = 'X';
      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';   
      }
      return currentPlayer;
}

function App() {
  const [players,setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const [gameTurns,setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

    let winner;
    let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turna of gameTurns) {
        const {square, player} = turna;
        const {row,col} = square; 
        gameBoard[row][col] = player; 
    }

    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = firstSquareSymbol;
      }
    }

    const hasDraw = (gameTurns.length === 9) && !winner;

  function handleSelectSquare (rowIndex,colIndex) {    
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');     
    setGameTurns((prevTurns) => {
      
      const activePlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player: activePlayer},
      ...prevTurns]
      
      return updatedTurns;
    })
  }

  function handleRestart () {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol,newName) {
    setPlayers(prevPlayers => {
        return {
          ...prevPlayers,
          [symbol]: newName
        }
      }
    );
  }

  return (
    
      <main>
       <div id='game-container'>
         <ol id ='players' className='highlight-player'>  
            <Player inintialName='Piet' initialSymbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
            <Player inintialName='Pompies' initialSymbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
         </ol>
   
         {(winner || hasDraw) && <GameOver winner = {winner} onRestart={handleRestart}/>}
         <GameBoard onSelectSquare = {handleSelectSquare}  board={gameBoard}/>
       </div>
      <Log turns = {gameTurns}/>
     </main>
  )
 }
 
export default App
