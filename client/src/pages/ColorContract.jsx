import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { IoCheckmarkDoneCircle, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

export default function ColorContrast() {
    const [backgroundText, setBackgroundText] = useState('#000000');

    const [background, setBackground] = useState('#ffffff');
    const [bgR, setBgR] = useState(255);
    const [bgG, setBgG] = useState(255);
    const [bgB, setBgB] = useState(255);
    const [bgL, setBgL] = useState(1);
    
    const [text1, setText1] = useState('#000000');
    const [txt1R, setTxt1R] = useState(0);
    const [txt1G, setTxt1G] = useState(0);
    const [txt1B, setTxt1B] = useState(0);
    const [txt1L, setTxt1L] = useState(0);
    const [okTxt1, setOkTxt1] = useState(false);
    const [txt1Bg, setTxt1Bg] = useState(0);
    
    const [text2, setText2] = useState('#000000');
    const [txt2R, setTxt2R] = useState(0);
    const [txt2G, setTxt2G] = useState(0);
    const [txt2B, setTxt2B] = useState(0);
    const [txt2L, setTxt2L] = useState(0);
    const [okTxt2Bg, setOkTxt2Bg] = useState(false);
    const [txt2Bg, setTxt2Bg] = useState(0);
    const [okTxt2Txt1, setOkTxt2Txt1] = useState(false);
    const [txt2Txt1, setTxt2Txt1] = useState(0);
    

    const relLuminance = async (r, g, b) => {
        const R = await sRGBtoRGB(r);
        const G = await sRGBtoRGB(g);
        const B = await sRGBtoRGB(b);

        const L = 0.2125 * R + 0.7152 * G + 0.0722 * B;
        return L;
    }

    const sRGBtoRGB = async (s) => {
        const sRGB = s / 255;
        const RGB = sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
        return RGB
    }

    const handleBackground = async (colorRef) => {
        const { r, g, b } = colorRef.rgb;
        setBgR(r);
        setBgG(g);
        setBgB(b);
        setBackground(colorRef.hex);

        const L = await relLuminance(r, g, b);
        setBgL(L.toFixed(3));
        if (L < 0.5) setBackgroundText('#ffffff');
        else setBackgroundText('#000000');

        let ratio1;
        if (L > txt1L) ratio1 = L / txt1L;
        else ratio1 = txt1L / L;
        setTxt1Bg(ratio1.toFixed(1));
        setOkTxt1(ratio1 >= 4);
        
        let ratio2;
        if (L > txt1L) ratio2 = L / txt2L;
        else ratio2 = txt2L / L;
        setTxt2Bg(ratio2.toFixed(1));
        setOkTxt2Bg(ratio2 >= 4);
    }
    const handleText1 = async (colorRef) => {
        const { r, g, b } = colorRef.rgb;
        setTxt1R(r);
        setTxt1G(g);
        setTxt1B(b);
        setText1(colorRef.hex);
        
        const L = await relLuminance(r, g, b);
        setTxt1L(L.toFixed(3));

        let ratio1;
        if (L > bgL) ratio1 = L / bgL;
        else ratio = bgL / L;
        setTxt1Bg(ratio1.toFixed(1));
        setOkTxt1(ratio1 >= 4);

        let ratio2;
        if (L > txt2L) ratio2 = L / txt2L;
        else ratio2 = txt2L / L;
        setTxt2Txt1(ratio2.toFixed(1));
        setOkTxt2Txt1(ratio2 >= 4);
    }
    const handleText2 = async (colorRef) => {
        const { r, g, b } = colorRef.rgb;
        setTxt2R(r);
        setTxt2G(g);
        setTxt2B(b);
        setText2(colorRef.hex);
        
        const L = await relLuminance(r, g, b);
        setTxt2L(L.toFixed(3));

        let ratio1;
        if (L > bgL) ratio1 = L / bgL;
        else ratio1 = bgL / L;
        setTxt2Bg(ratio1.toFixed(1));
        setOkTxt2Bg(ratio1 >= 4);
        
        let ratio2;
        if (L > txt1L) ratio2 = L / txt2L;
        else ratio2 = txt1L / L;
        setTxt2Txt1(ratio2.toFixed(1));
        setOkTxt2Txt1(ratio2 >= 4);
    }

    return (
        <div>
            <h1>Color Accessibility checker</h1>
            <article style={{backgroundColor:background}}>
                <div className='container'>
                    <div className='item'>
                        <div>
                            <h2 style={{color:backgroundText}}>Background color</h2>
                            <div className='list'>
                                <p style={{color:backgroundText}}>R:&ensp;{bgR}</p>
                                <p style={{color:backgroundText}}>G:&ensp;{bgG}</p>
                                <p style={{color:backgroundText}}>B:&ensp;{bgB}</p>
                                <p style={{color:backgroundText}}>L:&ensp;{bgL}</p>
                            </div>
                            </div>
                        <ChromePicker
                            color={background}
                            onChange={(colorRef)=>handleBackground(colorRef)}    
                            />
                    </div>
                    <div className='item'>
                        <div>
                            <h3 style={{color:text1}}>Text 1</h3>
                            <div className='list'>
                                <p style={{color:backgroundText}}>R:&ensp;{txt1R}</p>
                                <p style={{color:backgroundText}}>G:&ensp;{txt1G}</p>
                                <p style={{color:backgroundText}}>B:&ensp;{txt1B}</p>
                                <p style={{color:backgroundText}}>L:&ensp;{txt1L}</p>
                            </div>
                            <h4 style={{color:backgroundText}}>Accessibility rating <IoCheckmarkDoneCircle style={{color: (okTxt1 ? backgroundText : background)}} /></h4>
                            <ul style={{textAlign:'left'}}>
                                <li style={{color:backgroundText}}>{okTxt1 ? <IoCheckmarkCircle /> : <IoCloseCircle />} Background:&ensp;{txt1Bg}</li>
                            </ul>
                        </div>
                        <ChromePicker
                            color={text1}
                            onChange={(colorRef)=>handleText1(colorRef)}    
                            />
                    </div>
                    <div className='item'>
                        <div>
                            <h3 style={{color:text2}}>Text 2</h3>
                            <div className='list'>
                                <p style={{color:backgroundText}}>R:&ensp;{txt2R}</p>
                                <p style={{color:backgroundText}}>G:&ensp;{txt2G}</p>
                                <p style={{color:backgroundText}}>B:&ensp;{txt2B}</p>
                                <p style={{color:backgroundText}}>L:&ensp;{txt2L}</p>
                            </div>
                            <h4 style={{color:backgroundText}}>Accessibility rating <IoCheckmarkDoneCircle style={{color: ((okTxt2Bg && okTxt2Txt1) ? backgroundText : background)}} /></h4>
                            <ul style={{textAlign:'left'}}>
                                <li style={{color:backgroundText}}>{okTxt2Bg   ? <IoCheckmarkCircle /> : <IoCloseCircle />}Background:&ensp;{txt2Bg}</li>
                                <li style={{color:backgroundText}}>{okTxt2Txt1 ? <IoCheckmarkCircle /> : <IoCloseCircle />} Text 1:&ensp;{txt2Txt1}</li>
                            </ul>
                        </div>
                        <ChromePicker
                            color={text2}
                            onChange={(colorRef)=>handleText2(colorRef)}    
                            />
                    </div>
                </div>
            </article>
        </div>
    )
}