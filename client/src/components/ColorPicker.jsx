import '../assets/colorpicker.css';
import { useState } from 'react';
import { IoMdColorFill } from 'react-icons/io';

export default function ColorPicker({ onColorChange, defaultColor, colors, title='' }) {
    const [selectedColor, setSelectedColor] = useState(defaultColor || '#000000');
    const [open, setOpen] = useState(false);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        if (onColorChange) {
            onColorChange(color);
        }
        setOpen(false);
    };

    return (
        <div>
            <button onClick={() => setOpen(!open)} style={{ color: selectedColor }}>
                <span className='open-on-hover'>{title}&emsp;</span>
                <IoMdColorFill />
            </button>
        {open && <div className="colorpicker">
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
        </div>}
        </div>
    );

}