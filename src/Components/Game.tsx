import { useState } from "react";
import ResultsPop from "../Components/ResultsPopup/ResultsPopUp";



const options = ['👊','🖐','✌'];

const Game = () => {
    const [playerSelection, setPlayerSelection] = useState('');
    const [botSelection, setBotSelection] = useState('');
    const [result, setResult] = useState('');
    const [playerScore, setPlayerScore] = useState(0);
    const [botScore, setBotScore] = useState(0);
    const [totalScore, setTotalScore] = useState('');
    const [showModel, setShowModel] = useState(false);

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

        //  Showing Scores 
         if(winner === 'You Won!') {
          setPlayerScore(playerScore + 1);
         }else if (winner === 'You Lost' ) {
          setBotScore(botScore + 1)
         }

        //  Showing final Scores
        if (playerScore === 9) {
          setShowModel(true);
          setTotalScore("You won the game 🎇🎉");
        }else if (botScore === 9) {
          setTotalScore("You lost the game 💔😥");
          setShowModel(true);
        }
        const handleReset = () => {
        setPlayerScore(0);
        setBotScore(0);
        setShowModel(false);
        };
    }
      

        function handleReset(): void {
          setPlayerScore(0);
          setBotScore(0);
          setShowModel(false);
        }

  return (
     <div>
      <h1 className="flex justify-center text-3xl my-16 font-bold font-serif text-yellow-500 underline"> Rock Paper Scissors</h1>

      {/* Score Board */}

        <div className="w-[450px] mx-auto flex justify-center border border-black px-6 py-4 mb-9 
         bg-yellow-200  rounded-md">

          {/* User Score */} {/* Bot Scores */}
          <div>
            <p className="flex justify-center items-center ">
              <h1 className=" font-semibold pr-5 text-lg"> Player {playerScore}</h1> : 
              <h1 className="font-semibold pl-5 text-lg"> Bot {botScore} </h1> 
              
              </p>
          </div>

        </div>
      <h2 className="flex justify-center text-4xl">
       <p className="border border-black px-10 py-4 bg-yellow-200 rounded-md flex justify-center">
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
        <div className="flex justify-center text-3xl my-12 font-bold font-sans" style={{
            color: result === 'Draw!' ? 'orange' : result === 'You Won!' ? 
             'green' : result === 'You Lost' ? 'red' : 'black' }}> 
           {result}

           {/* Restarting the game */}
        {showModel && (
          <ResultsPop totalScore={totalScore} handleReset={handleReset} showModel={showModel} />
        )}
         </div>

    </div>
    
   
  )
}

export default Game
