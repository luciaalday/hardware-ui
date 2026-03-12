import '../assets/game.css'
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

export default function ColorGame() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    const [ru, setRu] = useState(0);
    const [gu, setGu] = useState(0);
    const [bu, setBu] = useState(0);

    const [rh, setRh] = useState('00');
    const [gh, setGh] = useState('00');
    const [bh, setBh] = useState('00');

    const [showClue, setShowClue] = useState(true);
    const [score, setScore] = useState(0);

    const resetColor = async () => {
        const newR = Math.floor(Math.random() * 256);
        const newG = Math.floor(Math.random() * 256);
        const newB = Math.floor(Math.random() * 256);

        setR(newR);
        setG(newG);
        setB(newB);

    }

    const handleRu = async (r) => {
        setRu(r);
        setRh(r.toString(16).padStart(2, '0').toUpperCase());
    }
    const handleGu = async (g) => {
        setGu(g);
        setGh(g.toString(16).padStart(2, '0').toUpperCase());
    }
    const handleBu = async (b) => {
        setBu(b);
        setBh(b.toString(16).padStart(2, '0').toUpperCase());
    }

    const handleGuess = async () => {
        setShowClue(true);
        setTimeout(()=>setShowClue(false), 2000);
        if (r==ru && g==gu && b==bu) {
            setScore(score + 1);
            resetColor();
        }
        return;
    }

    return (
        <div>
            <article style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
                <div className='game-container'>
                    <div className='game-item'>
                        <h2>R</h2>
                        <input type='number' min='0' max='255' value={ru} onChange={(e)=>handleRu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={ru} onChange={(e)=>handleRu(Number(e.target.value))} />
                        <p>#{rh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{ru==r ? <IoIosCheckmark /> : (r > ru ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                    <div className='game-item'>
                        <h2>G</h2>
                        <input type='number' min='0' max='255' value={gu} onChange={(e)=>handleGu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={gu} onChange={(e)=>handleGu(Number(e.target.value))} />
                        <p>{gh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{gu==g ? <IoIosCheckmark /> : (g > gu ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                    <div className='game-item'>
                        <h2>B</h2>
                        <input type='number' min='0' max='255' value={bu} onChange={(e)=>handleBu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={bu} onChange={(e)=>handleBu(Number(e.target.value))} />
                        <p>{bh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{bu==b ? <IoIosCheckmark /> : (b > bu ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                </div>
                <button onClick={handleGuess}>Guess</button>
                <br></br>
                <button onClick={resetColor}>New color</button>
                <h2>Score {score}</h2>
            </article>
        </div>
    )
}