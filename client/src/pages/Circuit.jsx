import { useState } from 'react';
import '../assets/circuit.css';
import LogicGates from './LogicGates';

export default function Circuit() {
    const [showLogicGates, setShowLogicGates] = useState(false);
    return (
        <div>
            <h2>Circuit</h2>
            {showLogicGates && <LogicGates />}
            <article>
                <div className="container">
                    <div className="container-item menu" style={{width:'20%'}}>
                        <h2>Parts</h2>
                        <div className='row'>
                            <h4>Input</h4>
                        </div>
                        <div className='row'>
                            <h4>AND</h4>
                        </div>
                        <div className='row'>
                            <h4>NAND</h4>
                        </div>
                        <div className='row'>
                            <h4>OR</h4>
                        </div>
                        <div className='row'>
                            <h4>XOR</h4>
                        </div>
                        <div className='row'>
                            <h4>NOR</h4>
                        </div>
                        <div className='row'>
                            <h4>NOT</h4>
                        </div>
                    </div>
                    <div className="container-item grid" style={{width:'80%'}}>
                        <h2>Circuit diagram</h2>
                    </div>
                </div>
            </article>
            <button onClick={()=>setShowLogicGates(!showLogicGates)}>Logic gates</button>
        </div>
    )
}