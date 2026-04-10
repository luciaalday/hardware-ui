import { useState } from 'react';
import '../assets/colorpicker.css';

export default function Cb({ onColorChange }) {
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const updateColor = (newColor) => {
        setCurrentColor(newColor);
        if (onColorChange) {
            onColorChange(newColor);
        }
    };

    return (
        <div className='cb' style={{ backgroundColor: currentColor }} onClick={(e) => {updateColor(e.target.style.backgroundColor)}}></div>
    )
}