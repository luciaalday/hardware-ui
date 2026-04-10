import { useState } from 'react';

export default function Canvas() {
    const [canvas, setCanvas] = useState(Array(24).fill(null).map(() => ({
        row: Array(9).fill(null),
    })));;

    return (
        <div className='canvas'>
            <h1>Canvas</h1>

        </div>
    )
}