import { useState } from "react";

const initialGameBoard = [
        [null,null,null],
        [null,"o",null],
        [null,null,"X"],
    ];

export default function GameBoard () {
    let [gameBoard,setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare (rowIndex,colIndex) {
        setGameBoard((previousGameBoard) => {

            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            //const updatedBoard = gameBoard;
            updatedBoard[rowIndex][colIndex] = "X";
        })
        return 
            updatedBoard;
            
    }

    return <ol id = "game-board">
            {gameBoard.map((row,rowIndex)=>(<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>(<li key={colIndex}> 
                         <button >{playerSymbol}</button>       
                    </li>))}
                </ol>
                 
            </li>))}
    </ol>        
    
}