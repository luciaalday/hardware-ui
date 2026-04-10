import {useState} from 'react';
import ColorPicker from '../../components/ColorPicker';
import Cb from '../../components/Cb';

export default function ButterflyPattern() {
    const [currentColor, setCurrentColor] = useState('#900000');

    return (
        <div className='butterfly-pattern'>
            <ColorPicker
                defaultColor={currentColor}
                colors={["#000000", "#d93025", "#259b24", "#e8a916", "#1792c0", "#9c27b0", "#2196f3", "#4caf50"]}
                onColorChange={(newColor) => setCurrentColor(newColor)}
            />
        <br></br>
        <table>
            <tbody>
                <tr>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                    <td><Cb onColorChange={()=>setCurrentColor(currentColor)} /></td>
                </tr>
            </tbody>
        </table>
        <br></br>
        </div>
    )
}