
interface ResultsPopProps {
    totalScore : string;
    handleReset : () => void;
    showModel : boolean;
}

const ResultsPop: React.FC<ResultsPopProps>= ({totalScore, handleReset, showModel}) => {

    return (
        <div>
            {showModel && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center
                 items-center">
                    <div className="bg-white p-4 rounded-md w-[500px] h-[500px] flex justify-center items-center flex-col">
                        <h2 className=" text-3xl font-bold">{totalScore}</h2>
                        <button onClick={handleReset} className="border border-black text-yellow-400 text-lg 
                         bg-yellow-200 rounded-md px-5 py-1 mt-10">
                        Play Again</button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default ResultsPop;