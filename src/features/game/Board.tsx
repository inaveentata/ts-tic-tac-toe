import Square from "./Square";
import { useAppDispatch,useAppSelector } from "../../app/hooks";
import { clickNext,jumpTo } from "./gameSlice";

 
const Board = () => {
  const gameData = useAppSelector(state => state.game)
  const dispatch = useAppDispatch()
  const nextPlayer = gameData.isXnext ? 'X' : 'O'
  const history = gameData.history
  const current = history[gameData.stepNumber]
  const squares = current.squares
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return <li key={move}>
      <button onClick={()=>dispatch(jumpTo(move))}>{ desc}</button>
    </li>
  })
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>Next player : {nextPlayer}</p>
        <div className="board">
          {squares.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => dispatch(clickNext(index))}
            />
          ))}
        </div>{" "}
      </div>
      <div style={{marginLeft:'3rem'}}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Board;
