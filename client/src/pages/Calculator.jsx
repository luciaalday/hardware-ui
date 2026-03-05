export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);

    const handleOperation = async () => {

    }
    
    return (
        <article>
            <h2>Calculator</h2>
            <input
                type="number"
                onChange={setInput1}
            />
            {/** here go buttons for different operatio0ns */}
            <input
                type="number"
                onChange={setInput2}
            />
        </article>
    )
}