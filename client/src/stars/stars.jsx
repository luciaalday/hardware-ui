import starinfo from './starinfo-150.json';
import { PiStarFourFill } from 'react-icons/pi';
import './stars.css';
import { useState } from 'react';

function parseRA(ra) {
    const [h, m, s] = ra.split(":").map(parseFloat);
    return (h + m / 60 + s / 3600) * 15; // degrees 0–360
}

function parseDEC(dec) {
    const sign = dec.startsWith("-") ? -1 : 1;
    const [d, m, s] = dec.replace(/[+-]/, "").split(":").map(parseFloat);
    return sign * (d + m / 60 + s / 3600); // degrees -90 to +90
}


export default function Stars() {
    const [maxMag, setMaxMag] = useState(0);
    

    return (
        <div>
        <div className='star-container'>
            {starinfo.map((star) => {
                if (Number(star.MAG) > maxMag) {
                    setMaxMag(Number(star.MAG));
                }
                let dec, ra, x, y;
                dec = parseDEC(star.DEC);
                ra = parseRA(star.RA);
                
                const decRad = dec * Math.PI / 180;
                const raRad = ra * Math.PI / 180;
                
                x = Math.cos(decRad) * Math.cos(raRad);
                y = Math.cos(decRad) * Math.sin(raRad);
                
                const xPercent = (x + 1) / 2 * 100;
                const yPercent = (dec + 90) / 180 * 100;;
                
                
                return (
                    <div className='star-icon' id={star.ID} style={{left:`${xPercent}%`}}>
                    <PiStarFourFill className='star-shadow' size={60/star.MAG}/>
                    <div className='appear-on-hover'>
                        <h3>{star.Title_HD}</h3>
                        <p>{star.RA}</p>
                        <p>{star.DEC}</p>
                    </div>
                </div>

        )})}
        </div>
        <div>
            <p>Brightest: {maxMag}</p>
        </div>
        </div>
    )
}