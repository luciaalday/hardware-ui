import { useState, useEffect } from 'react';
import '../assets/tictactoe.css';

export default function UltimateTicTacToe() {
    const [start, setStart] = useState(true);
    const [playerOneName, setPlayerOneName] = useState('Player One');
    const [playerTwoName, setPlayerTwoName] = useState('Player Two');
    const [turn, setTurn] = useState(0);
    const [square, setSquare] = useState(0);

    const [board, setBoard] = useState(Array(9).fill(null).map(() => ({
        plays: Array(9).fill(null),
    })));
    const [wins, setWins] = useState(Array(9).fill(null));
    const [message, setMessage] = useState('');

    const handleTurn = (i, j) => {
        if (board[i].plays[j]) return;
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

    const checkChildWin = (i, newBoard) => {
        if (wins[i]) return;
        const p = newBoard[i].plays;
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
            newWins[i] = turn % 2 === 0 ? 'x-win' : 'o-win';
            setWins(newWins);
        }
    }

    const getWinner = (wins) => {
        const lines = [
            [0,1,2],[0,3,6],[0,4,8],
            [3,4,5],[6,7,8],[1,4,7],
            [2,5,8],[2,4,6]
        ];
        for (const [a,b,c] of lines) {
            if (wins[a] && wins[a]===wins[b] && wins[b]===wins[c]) {
                return wins[a][0];
            }
        }
        if (turn >= 81) return 'Draw';
        return null;
    };

    useEffect(() => {
        const winner = getWinner(wins);
        if (winner) {
            if (winner === 'Draw') {
                setMessage('Draw! At least one of you needs to get better');
            } else {
                setMessage(`${turn % 2 === 1 ? playerOneName : playerTwoName} wins!`);
            }
        }
    }, [wins, turn]);

    return (
        <div className='tictactoe'>
            <h1>TicTacToe (grid placement and tracking practice)</h1>
            <article>
                {start
                ? <div style={{margin:'5%'}}>
                    <input type='text' placeholder='Player One Name' onChange={(e)=>setPlayerOneName(e.target.value.trim() || 'Player One')} />
                    <input type='text' placeholder='Player Two Name' onChange={(e)=>setPlayerTwoName(e.target.value.trim() || 'Player Two')} />
                    <br></br>
                    <br></br>
                    <button onClick={()=>setStart(false)} disabled={playerOneName==='' || playerTwoName==='' || playerOneName===playerTwoName}>Start game!</button>
                </div>
                : (message ?
                    <div>
                        <br></br>
                        <h2>{message}</h2>
                        <button onClick={() => {setStart(true); setTurn(0); setBoard(Array(9).fill(null).map(() => ({ plays: Array(9).fill(null) }))); setWins(Array(9).fill(null)); setMessage(''); }}>Play again?</button>
                        <br></br>
                        <br></br>
                    </div>
                    :<div>
                    <div>
                        <h4>{turn % 2 == 0 ? playerOneName : playerTwoName}'s Turn!</h4>
                    </div>
                    <br></br>
                    <div className='parent-grid'>
                        {board.map((key, i) =>
                        <div
                            className={`child-grid ${i<3 && 'top'} ${i>5 && 'bottom'} ${i%3==0 && 'left'} ${(i+1)%3==0 && 'right'} ${wins[i]} ${square===i && 'disabled'}`}
                            style={square === i ? { boxShadow: `inset 0 0 10px 3px ${turn % 2 === 0 ? '#4650ff' : '#f84'}` } : {}}
                        >
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