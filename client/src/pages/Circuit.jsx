import { useState } from 'react';
import '../assets/circuit.css';
import LogicGates from './LogicGates';

export default function Circuit() {
    const [showLogicGates, setShowLogicGates] = useState(false);
    return (
        <div>
            <h2>Circuit</h2>
            <br></br>
            {showLogicGates ? <LogicGates /> :
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
                        <div className='flex-container'>
                            <div className='flex-col'>
                                <input type='text' placeholder='Input A' />
                                <input type='text' placeholder='Input B' />
                                <input type='text' placeholder='Input C' />
                                <input type='text' placeholder='Input D' />
                                <input type='text' placeholder='Input E' />
                                <input type='text' placeholder='Input F' />
                                <input type='text' placeholder='Input G' />
                                <input type='text' placeholder='Input H' />
                                <input type='text' placeholder='Input I' />
                            </div>
                        </div>
                    </div>
                </div>
            </article>}
            <br></br>
            <button onClick={()=>setShowLogicGates(!showLogicGates)}>{showLogicGates ? 'Circuit Diagram' : 'Logic Gates'}</button>
        </div>
    )
}