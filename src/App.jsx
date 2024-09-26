import Player from './components/Player.jsx';


function App() {
  

  return (
    
      <main>
       <div id="game-container">
         <ol id ="players">  
            <Player name="Piet" symbol="X"/>
            <Player name="Pompies" symbol="O"/>

         </ol>
         GAME BOARD
       </div>
      LOG
     </main>
  
  )
 }
 
export default App
