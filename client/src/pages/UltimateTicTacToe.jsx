import { useState, useEffect } from 'react';
import '../assets/tictactoe.css';

export default function UltimateTicTacToe() {
    // start controls
    const [start, setStart] = useState(true);
    const [playerOneName, setPlayerOneName] = useState('Player One');
    const [playerTwoName, setPlayerTwoName] = useState('Player Two');
    const [turn, setTurn] = useState(0);
    const [square, setSquare] = useState(0);

    // board
    const [board, setBoard] = useState(Array(9).fill(null).map(() => ({
        plays: Array(9).fill(null),
    })));
    const [wins, setWins] = useState(Array(9).fill(null));
    const [message, setMessage] = useState('');

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
        setSquare(j);
        checkChildWin(i, newBoard);
    }

    const checkChildWin = (i, newBoard) => { // receive newBoard
        if (wins[i]) return;
        const p = newBoard[i].plays; // use newBoard, not board
        let curr = false;
        if (   (p[0] && p[0]===p[4] && p[4]===p[8])
            || (p[0] && p[0]===p[1] && p[1]===p[2])
            || (p[0] && p[0]===p[3] && p[3]===p[6])
            || (p[4] && p[2]===p[4] && p[4]===p[6])
            || (p[3] && p[3]===p[4] && p[4]===p[5])
            || (p[1] && p[1]===p[4] && p[4]===p[7])
            || (p[6] && p[6]===p[7] && p[7]===p[8])
            || (p[2] && p[2]===p[5] && p[5]===p[8])
        ) {
            curr = true;
        }
        if (curr) {
            const newWins = [...wins];
            newWins[i] = turn % 2 === 1 ? 'x-win' : 'o-win';
            setWins(newWins);
        }
    }

    const gameEnd = () => {

    }

    const getWinner = (wins) => {
        const lines = [
            [0,1,2],[0,3,6],[0,4,8],
            [3,4,5],[6,7,8],[1,4,7],
            [2,5,8],[2,4,6]
        ];
        for (const [a,b,c] of lines) {
            if (wins[a] && wins[a]===wins[b] && wins[b]===wins[c]) {
                setMessage(`${wins[a][0]} wins!`)
                return `${wins[a][0]}`;
            }
        }
        if (turn >= 81) {
            setMessage('Draw! At least one of you needs to get better');
            return 'Draw';
        }
        return null;
    };

    const gameover = getWinner(wins);

    useEffect(() => {
        if (gameover) gameEnd();
    })
    
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
                : (message ?
                    <div>
                        <h2>{message}</h2>
                    </div>
                    :<div>
                    
                    <div>
                        <h4>{turn % 2 == 0 ? playerOneName : playerTwoName}'s Turn! {turn}</h4>
                    </div>
                    <br></br>
                    <div className='parent-grid'>
                        {board.map((key, i) =>
                        <div className={`child-grid ${i<3 && 'top'} ${i>5 && 'bottom'} ${i%3==0 && 'left'} ${(i+1)%3==0 && 'right'} ${wins[i]} ${square===i && 'disabled'}`}>
                            {key.plays.map((play, j) =>
                                <button
                                className={`square ${j<3 && 'top'} ${j>5 && 'bottom'} ${j%3==0 && 'left'} ${(j+1)%3==0 && 'right'}`}
                                onClick={()=>handleTurn(i, j)}
                                disabled={square!==null && square!==i}
                                >
                                    {play}
                                </button>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            )}
            </article>
        </div>
    )
}