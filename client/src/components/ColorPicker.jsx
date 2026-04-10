import '../assets/colorpicker.css';
import { useState } from 'react';

export default function ColorPicker({ onColorChange, defaultColor, colors }) {
    const [selectedColor, setSelectedColor] = useState(defaultColor || '#000000');

    const handleColorClick = (color) => {
        setSelectedColor(color);
        if (onColorChange) {
            onColorChange(color);
        }
    };

    return (
        <div className="colorpicker">
            <div className='colorpicker-container'>
            {colors.map((color) => (
                <div
                key={color}
                className={`colorpicker-color ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
                />
            ))}
            </div>
        </div>
    );

}