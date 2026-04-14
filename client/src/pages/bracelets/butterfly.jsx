import {useState} from 'react';
import ColorPicker from '../../components/ColorPicker';
import Cb from '../../components/Cb';

export default function ButterflyPattern() {
    const [wings0, setWings0] = useState('#080808');
    const [wings1, setWings1] = useState('#494949');
    const [wings2, setWings2] = useState('#949494');
    const [wings3, setWings3] = useState('#ffffff');
    const [bg, setBg] = useState('#ffffff');
    const [accent, setAccent] = useState('#000000');
    const [dots, setDots] = useState('#000000');
    const [thread, setThread] = useState('#000000');
    const colorset = [
        "#ce3131", "#e66b29", "#debd19", "#f4f13d", "#c5c57c", "#a7ecb6", "#236e19", "#75d2ec", "#23bace", "#3d78ee", "#1235c3", "#042298",
        "#e4aebf", "#de4ba5", "#b048d3", "#b69bd7", "#eabb8c", "#ab8b2e", "#4f0e36", "#0a2f4f", "#101010", "#8e8e8e", "#cdcdcd", "#f0f0f0"
    ];
    const threadset = ["#ce3131", "#c9a756", "#36963a", "#148db9", "#5e70d4", "#1a1a61", "#101010", "#8e8e8e", "#f0f0f0"];

    return (
        <div className='butterfly-pattern'>
            <div className='flex-row'>
            <ColorPicker onColorChange={(newColor) => setWings0(newColor)} title='wings0' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setWings1(newColor)} title='wings1' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setWings2(newColor)} title='wings2' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setWings3(newColor)} title='wings3' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setBg(newColor)} title='background' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setAccent(newColor)} title='accent' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setDots(newColor)} title='dots' colors={colorset} />
            <ColorPicker onColorChange={(newColor) => setThread(newColor)} title='thread' colors={threadset} />
            </div>
        <br></br>
        <article style={{backgroundColor:'#5085a9f0'}}>
        <table>
            <tbody>
                <tr> {/** start butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** center of butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** end butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: accent }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: accent }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr> {/** center of flower vine */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0}}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: accent }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: accent }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** start butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** center of butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** end butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>

                <tr> {/** start butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr> {/** center of butterfly */}
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: bg }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings3 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings2 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings1 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: dots }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
                <tr>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: wings0 }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                    <td className='pixel' style={{ borderColor: thread, backgroundColor: 'transparent' }}></td>
                </tr>
            </tbody>
        </table>
        </article>
        <br></br>
        </div>
    )
}