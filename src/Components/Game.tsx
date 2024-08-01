import { useState } from "react";



const options = ['👊','🖐','✌'];

const Game = () => {
    const [playerSelection, setPlayerSelection] = useState('');
    const [botSelection, setBotSelection] = useState('');
    const [result, setResult] = useState('');


    const handlePlayerSelection = (selection : string) => {
        setPlayerSelection(selection);
        setBotSelection('🎲');
        setTimeout(() => {
            const bot = options[Math.floor(Math.random() * options.length)];
            setBotSelection(bot);
            determineWinner(selection,bot);
        }, 1000);
    }

    // Determining the winner  of the game

    const determineWinner = (selection : string , bot : string) => {
        const winner = selection === bot ? 'Draw!' : (selection === '👊' && bot === '✌')
         ||
         (selection === '✌' && bot === '🖐') || (selection === '🖐' && bot === '👊') ? 'You Won!' : 'You Lost';
         setResult(winner);
    }


  return (
     <div>
      <h1 className="flex justify-center text-3xl my-16 font-bold font-serif text-yellow-500 underline"> Rock Paper Scissors</h1>

      <h2 className="flex justify-center text-4xl ">
       <p className="border border-black px-10 py-4  bg-yellow-200 rounded-md">

        {playerSelection}  vs  {botSelection} 

      </p> 
             
      </h2>
      {/* Buttons */}
      <div className="flex justify-center font-bold text-4xl my-14 font-sans">
        {options.map((option) => (
        <button key={option} onClick={() => handlePlayerSelection(option)} 
        className="border border-black p-3 ml-4 bg-yellow-200 rounded-md">
            {option}
        </button>
        ))}
      </div >
            {/* Results  */}
        <div className="flex justify-center text-3xl my-12 font-bold font-serif" style={{
            color: result === 'Draw!' ? 'orange' : result === 'You Won!' ? 
             'green' : result === 'You Lost' ? 'red' : 'black' }}> 
        {result}
         </div>

    </div>
    
   
  )
}

export default Game
