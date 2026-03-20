import { useRef, useState } from 'react';
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from 'react-icons/bi';
import { TbLogicAnd, TbLogicOr, TbLogicBuffer, TbLogicNand, TbLogicNor, TbLogicNot, TbLogicXnor, TbLogicXor } from 'react-icons/tb';

export default function LogicGates() {
    const scrollRef = useRef(null);
    const [curGate, setCurGate] = useState('AND');

    const [x, setX] = useState(true);
    const [y, setY] = useState(false);

    const handleScrollLeft = async () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
    }
    
    const handleScrollRight = async () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
    }

    const gateExplanations = {
        AND: ['on if X and Y are both on','and', 'x&y'],
        OR: ['on if X, Y, or both are on', 'or', 'x|y'],
        XOR: ['on if X or Y, but not both are on', 'excusive or', 'x!=y'],
        NAND: ['on if X, Y, or both are off', 'negate and', '!(x&y)'],
        NOR: ['on if X and Y are both off', 'negate or)', '!(x|y)'],
        XNOR: ['on if X and Y are the same, on or off', 'negate exclusive or', 'x=y'],
        NOT: ['the opposite of the value of X if Y is on', 'if Y, negate X', 'y&!x'],
        BUFFER: ['the value of X if Y is on', 'if Y, X', 'y&x']
    }
    const curGateEx = gateExplanations[curGate][0];
    const curGateAb = gateExplanations[curGate][1];
    const curGateSy = gateExplanations[curGate][2];

    const computeOutput = (gate, x, y) => {
    switch (gate) {
        case 'AND':    return x && y;
        case 'OR':     return x || y;
        case 'XOR':    return x !== y;
        case 'NAND':   return !(x && y);
        case 'NOR':    return !(x || y);
        case 'XNOR':   return x === y;
        case 'NOT':    return y&!x;
        case 'BUFFER': return y&x;
        default:       return false;
    }
};

    return (
        <article style={{backgroundColor:'#5085a9f0'}}>
            <h1>Logic Gate Types</h1>
            <div className='scroll-container'>
                <button onClick={handleScrollLeft}><BiSolidLeftArrowAlt size={35} /></button>
            <div className="flex-container" ref={scrollRef}>
                <div className="card">
                    <h2>AND</h2>
                    <h1><TbLogicAnd /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>OR</h2>
                    <h1><TbLogicOr /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>XOR</h2>
                    <h1><TbLogicXor /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>NAND</h2>
                    <h1><TbLogicNand /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>1</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>NOR</h2>
                    <h1><TbLogicNor /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>1</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>XNOR</h2>
                    <h1><TbLogicXnor /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th>
                            <th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>1</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>NOT</h2>
                    <h1><TbLogicNot /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th><th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h2>BUFFER</h2>
                    <h1><TbLogicBuffer /></h1>
                    <table>
                        <thead>
                            <th>x</th><th>y</th><th>Output</th>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
                <button onClick={handleScrollRight}><BiSolidRightArrowAlt size={35} /></button>
            </div>
            <div style={{ margin: '20px auto' }}>
                <h2>Try them out!</h2>
                <div className='flex-container' style={{maxWidth:'fit-content'}}>
                    <div className='flex-col'>
                        <select id='curGate' name='curGate' value={curGate} onChange={(e) => setCurGate(e.target.value)}>
                            <option value='AND'>AND</option>
                            <option value='OR'>OR</option>
                            <option value='XOR'>XOR</option>
                            <option value='NAND'>NAND</option>
                            <option value='NOR'>NOR</option>
                            <option value='XNOR'>XNOR</option>
                            <option value='NOT'>NOT</option>
                            <option value='BUFFER'>BUFFER</option>
                        </select>
                        <div className='flex-row'>
                            <h6>{curGateAb}&emsp;&#x25CF;&emsp;{curGateSy}</h6>
                        </div>
                        <p>{curGate} gates output {curGateEx}</p>
                    </div>
                    <hr></hr>
                    <div className='flex-col'>
                        <div className='flex-row'>x <button onClick={() => setX(!x)} className={`led ${x ? 'on' : ''}`} /></div>
                        <div className='flex-row'>y <button onClick={() => setY(!y)} className={`led ${y ? 'on' : ''}`} /></div>
                    </div>
                    <div className='flex-col'>
                        <h1>
                        {curGate === 'AND' ?  <TbLogicAnd />
                        : curGate === 'OR' ? <TbLogicOr />
                        : curGate === 'XOR' ? <TbLogicXor />
                        : curGate === 'NAND' ? <TbLogicNand />
                        : curGate === 'NOR' ? <TbLogicNor />
                        : curGate === 'XNOR' ? <TbLogicXnor />
                        : curGate === 'NOT' ? <TbLogicNot />
                        : <TbLogicBuffer />}
                        </h1>
                    </div>
                    <div className='flex-row'>
                        <button className={`led out ${computeOutput(curGate, x, y) ? 'on' : ''}`} disabled /> output
                    </div>
                </div>
            </div>
        </article>
    )
}