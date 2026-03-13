import { useState, useEffect } from 'react';
import '../assets/tictactoe.css';

export default function UltimateTicTacToe() {
    // start controls
    const [start, setStart] = useState(true);
    const [playerOneName, setPlayerOneName] = useState('Player One');
    const [playerTwoName, setPlayerTwoName] = useState('Player Two');
    const [turn, setTurn] = useState(0);
    const [message, setMessage] = useState('');

    // board
    const [board, setBoard] = useState(Array(9).fill(null).map(() => ({
        plays: Array(9).fill(null),
    })));
    const [wins, setWins] = useState(Array(9).fill(null));

    useEffect(() => {
        if (checkParentWin()) {
            return;
        }
        if (turn >= 81) gameDraw();
    }, [turn]);

    const handleTurn = (i, j) => {
        if (board[i].plays[j]) return; // already filled
        const newBoard = board.map((b, bi) => {
            if (bi !== i) return b;
            const newPlays = [...b.plays];
            newPlays[j] = turn % 2 === 0 ? 'X' : 'O';
            return { ...b, plays: newPlays };
        });
        setBoard(newBoard);
        setTurn(turn + 1);
        checkChildWin(i);
    }

    const checkChildWin = (i) => {
        if (wins[i] !== null) return;
        let curr = false;
        if (board[i].plays[0] === board[i].plays[4] === board[i].plays[8]
        ||  board[i].plays[2] === board[i].plays[4] === board[i].plays[6]
        ||  board[i].plays[0] === board[i].plays[1] === board[i].plays[2]
        ||  board[i].plays[3] === board[i].plays[4] === board[i].plays[5]
        ||  board[i].plays[6] === board[i].plays[7] === board[i].plays[8]
        ||  board[i].plays[0] === board[i].plays[3] === board[i].plays[6]
        ||  board[i].plays[1] === board[i].plays[4] === board[i].plays[7]
        ||  board[i].plays[2] === board[i].plays[5] === board[i].plays[8]
        ) {
            setMessage('Square claimed'); // check for whether or not the condition is ever checked
            curr = true;
        }
        if (curr) {
            let newWins = wins;
            newWins[i] = turn % 2 === 0 ? 'x-win' : 'o-win';
            setWins(newWins);
        }
    }

    const checkParentWin = () => {

    }
    const gameDraw = () => {

    }
    
    return (
        <div>
            <h1>TicTacToe (grid placement and tracking practice)</h1>
            <p>{wins}</p>
            <article>
                {start
                ? <div style={{margin:'5%'}}>
                    <input type='text' placeholder='Player One Name' onChange={(e)=>setPlayerOneName(e.target.value)} />
                    <input type='text' placeholder='Player Two Name' onChange={(e)=>setPlayerTwoName(e.target.value)} />
                    <br></br>
                    <br></br>
                    <button onClick={()=>setStart(false)}>Start game!</button>
                </div>
                : <div>
                    <div>
                        <h4>{turn % 2 == 0 ? playerOneName : playerTwoName}'s Turn! {turn}</h4>
                        <p>{message}</p>
                    </div>
                    <br></br>
                    <div className='parent-grid'>
                        {board.map((key, i) =>
                        <div className={`child-grid ${i<3 && 'top'} ${i>5 && 'bottom'} ${i%3==0 && 'left'} ${(i+1)%3==0 && 'right'} ${wins[i]}`}>
                            {key.plays.map((play, j) => 
                                <button 
                                className={`square ${j<3 && 'top'} ${j>5 && 'bottom'} ${j%3==0 && 'left'} ${(j+1)%3==0 && 'right'}`}
                                onClick={()=>handleTurn(i, j)}
                                >
                                    {play}
                                </button>
                            )}
                        </div>
                        )}
                    </div>
                </div>}
            </article>

        </div>
    )
}