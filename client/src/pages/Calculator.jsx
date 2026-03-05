import { useState } from 'react';

export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0.0);
    const [error, setError] = useState('');

    const handleOperation = async () => {
        if (operation === '+') {
            setResult(input1+input2);
        }
        else if (operation === '-') {
            setResult(Number(input1)-Number(input2));
        }
        else if (operation === '*') {
            setResult(input1*input2);
        }
        else {
            if (input2 === 0) {
                setError("Cannot divide by 0");
                setTimeout(()=>setError(''), 1000);
                return;
            }
            setResult(input1/input2);
        }
    }
    
    return (
        <article>
            <h2>Calculator</h2>
            <input
                type="number"
                onChange={setInput1}
            />
            {/** here go buttons for different operatio0ns */}
            <div>
                <button onClick={()=>setOperation('+')}>+</button>
                <button onClick={()=>setOperation('-')}>-</button>
                <button onClick={()=>setOperation('*')}>*</button>
                <button onClick={()=>setOperation('/')}>/</button>
            </div>
            <input
                type="number"
                onChange={setInput2}
            />
            <button onClick={handleOperation}>=</button>
            <p>{result}</p>
            <p>{error}</p>
        </article>
    )
}