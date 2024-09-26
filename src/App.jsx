import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';


function App() {
  

  return (
    
      <main>
       <div id="game-container">
         <ol id ="players">  
            <Player inintialName="Piet" initialSymbol="X"/>
            <Player inintialName="Pompies" initialSymbol="O"/>
         </ol>
         <GameBoard/>
       </div>
      LOG
     </main>
    
  )
 }
 
export default App
