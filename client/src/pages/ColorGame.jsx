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

    const [hex, setHex] = useState('000000');

    const [showClue, setShowClue] = useState(false);
    const [message, setMessage] = useState('');
    const [easy, setEasy] = useState(true);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [start, setStart] = useState(true);

    const resetColor = async () => {
        const newR = Math.floor(Math.random() * 256);
        const newG = Math.floor(Math.random() * 256);
        const newB = Math.floor(Math.random() * 256);

        setR(newR);
        setG(newG);
        setB(newB);

        setScore(0);
    }

    const handleRu = async (r) => {
        setRu(r);
        const newRh = r.toString(16).padStart(2, '0').toUpperCase();
        setRh(newRh);
        const newHex = newRh + hex.substring(2);
        setHex(newHex);
    }
    const handleGu = async (g) => {
        setGu(g);
        const newGh = g.toString(16).padStart(2, '0').toUpperCase();
        setGh(newGh);
        const newHex = hex.substring(0, 2) + newGh + hex.substring(4);
        setHex(newHex);
    }
    const handleBu = async (b) => {
        setBu(b);
        const newBh = b.toString(16).padStart(2, '0').toUpperCase();
        setBh(newBh);
        const newHex = hex.substring(0, 4) + newBh;
        setHex(newHex);
    }

    const handleGuess = async () => {
        setShowClue(true);
        await setScore(score + 1);
        await setTimeout(()=>setShowClue(false), 2000);
        if (r==ru && g==gu && b==bu) {
            setMessage("Spot on!");
            await setTimeout(()=>setMessage(''), 2000);
            if (score > highScore) await setHighScore(score);
            resetColor();
        }
        if (easy) {
            if ((r < ru+0x10 && r > ru-0x10) && (g < gu+0x10 && g > gu-0x10) && (b < bu+0x10 && b > bu-0x10)) {
                setMessage("Amazing!");
                await setTimeout(()=>setMessage(''), 2000);
                if (score > highScore) await setHighScore(score);
                resetColor();
            }
        }
        return;
    }

    const handleHex = async (hex) => {
        setHex(hex);

        const rHex = hex.substring(0, 2);
        const gHex = hex.substring(2, 4);
        const bHex = hex.substring(4, 6);

        rHex && setRh(rHex);
        gHex && setGh(gHex);
        bHex && setBh(bHex);
        
        setRu(parseInt(rHex, 16));
        setGu(parseInt(gHex, 16));
        setBu(parseInt(bHex, 16));
    }

    return (
        <div>
            <h1>Color Picker Game</h1>
            <article style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
                <div className='game-container'>
                    <div className='game-item'>
                        <h2>R</h2>
                        <input type='number' min='0' max='255' value={ru} onChange={(e)=>handleRu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={ru} onChange={(e)=>handleRu(Number(e.target.value))} style={{accentColor:easy ? `rgb(${ru}, ${gu}, ${bu})` : '#606060'}} />
                        <p>#{rh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{ru==r ? <IoIosCheckmark /> : (r > ru ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                    <div className='game-item'>
                        <h2>G</h2>
                        <input type='number' min='0' max='255' value={gu} onChange={(e)=>handleGu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={gu} onChange={(e)=>handleGu(Number(e.target.value))} style={{accentColor: easy ? `rgb(${ru}, ${gu}, ${bu})` : '#606060'}} />
                        <p>{gh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{gu==g ? <IoIosCheckmark /> : (g > gu ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                    <div className='game-item'>
                        <h2>B</h2>
                        <input type='number' min='0' max='255' value={bu} onChange={(e)=>handleBu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' value={bu} onChange={(e)=>handleBu(Number(e.target.value))} style={{accentColor:easy ? `rgb(${ru}, ${gu}, ${bu})` : '#606060'}} />
                        <p>{bh}</p>
                        <h3 className={`${showClue ? '' : 'hidden'}`}>{bu==b ? <IoIosCheckmark /> : (b > bu ? <IoIosArrowUp /> : <IoIosArrowDown />)}</h3>
                    </div>
                </div>
                <div className='game-item' style={{width:'fit-content', margin:'auto', textAlign:'center'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'fit-content'}}>
                        <span style={{fontSize:'x-large'}}>#</span>
                        <input style={{fontSize:'large', width:'8ch'}} type='text' value={hex} onChange={(e)=>handleHex(e.target.value)} placeholder='000000' />
                    </div>
                </div>
                {start ?
                <div>
                    <button onClick={()=>{resetColor();setStart(false)}}>Start game!</button>
                </div>
                :
                <div>
                    <button onClick={handleGuess}>Guess</button>
                    <br></br>
                    <button onClick={resetColor}>New color</button>
                </div>}
                <div className='game-item'>
                    <h2>{message || `Current Score ${score}`}</h2>
                    <p>Best Score {highScore > 0 && highScore}</p>
                </div>
            </article>
            <button className='mode' onClick={()=>setEasy(!easy)}>{easy ? 'Easy' : 'Hard'}</button>
        </div>
    )
}