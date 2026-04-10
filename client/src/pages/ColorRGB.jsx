import '../assets/game.css'
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

function Markers({idName}) {
    return (
        <datalist id={idName}>
            <option value="0"></option>
            <option value="16"></option>
            <option value="32"></option>
            <option value="48"></option>
            <option value="64"></option>
            <option value="80"></option>
            <option value="96"></option>
            <option value="112"></option>
            <option value="128"></option>
            <option value="144"></option>
            <option value="160"></option>
            <option value="172"></option>
            <option value="192"></option>
            <option value="208"></option>
            <option value="224"></option>
            <option value="240"></option>
            <option value="255"></option>
        </datalist>
    )
}

export default function ColorRGB() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    const [rh, setRh] = useState('00');
    const [gh, setGh] = useState('00');
    const [bh, setBh] = useState('00');

    const [hex, setHex] = useState('000000');

    const handleRu = async (r) => {
        setR(r);
        const newRh = r.toString(16).padStart(2, '0').toUpperCase();
        setRh(newRh);
        const newHex = newRh + hex.substring(2);
        setHex(newHex);
    }
    const handleGu = async (g) => {
        setG(g);
        const newGh = g.toString(16).padStart(2, '0').toUpperCase();
        setGh(newGh);
        const newHex = hex.substring(0, 2) + newGh + hex.substring(4);
        setHex(newHex);
    }
    const handleBu = async (b) => {
        setB(b);
        const newBh = b.toString(16).padStart(2, '0').toUpperCase();
        setBh(newBh);
        const newHex = hex.substring(0, 4) + newBh;
        setHex(newHex);
    }

    const handleHex = async (hex) => {
        setHex(hex);

        const rHex = hex.substring(0, 2);
        const gHex = hex.substring(2, 4);
        const bHex = hex.substring(4, 6);

        rHex && setRh(rHex);
        gHex && setGh(gHex);
        bHex && setBh(bHex);
        
        setR(parseInt(rHex, 16));
        setG(parseInt(gHex, 16));
        setB(parseInt(bHex, 16));
    }

    return (
        <div>
            <h1>Color Picker Game</h1>
            <article style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
                <div className='game-container'>
                    <div className='game-item'>
                        <h2>R</h2>
                        <input type='number' min='0' max='255' value={r} onChange={(e)=>handleRu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' list="markers-1" value={r} onChange={(e)=>handleRu(Number(e.target.value))} />
                        <Markers idName="markers-1" />
                        <p>#{rh}</p>
                    </div>
                    <div className='game-item'>
                        <h2>G</h2>
                        <input type='number' min='0' max='255' value={g} onChange={(e)=>handleGu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' list="markers-2" value={g} onChange={(e)=>handleGu(Number(e.target.value))} />
                        <Markers idName="markers-2" />
                        <p>{gh}</p>
                    </div>
                    <div className='game-item'>
                        <h2>B</h2>
                        <input type='number' min='0' max='255' value={b} onChange={(e)=>handleBu(Number(e.target.value))} />
                        <input type='range' min='0' max='255' list="markers-3" value={b} onChange={(e)=>handleBu(Number(e.target.value))} />
                        <Markers idName="markers-3" />
                        <p>{bh}</p>
                    </div>
                </div>
                <div className='game-item' style={{width:'fit-content', margin:'auto', textAlign:'center'}}>
                    <div style={{display:'flex', justifyContent:'stretch', alignItems:'center', flex: '1'}}>
                        <h2>
                            <span style={{fontSize:'1.2em'}}>#</span>
                            <input style={{fontSize:'1.2em', width:'8ch'}} type='text' value={hex} onChange={(e)=>handleHex(e.target.value)} placeholder='000000' />
                        </h2>
                    </div>
                </div>
                <br></br>
            </article>
        </div>
    )
}