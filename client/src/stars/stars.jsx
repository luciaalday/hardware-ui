import starinfo from './starinfo.json';
import { PiStarFourFill } from 'react-icons/pi';
import './stars.css';

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

    

    return (
        <div>
            {starinfo.map((star) => {
                return (
                <div id={star.ID}>
                    <h2>{star.Title_HD}</h2>
                    <PiStarFourFill className='star-shadow' size={60/star.MAG}/>
                    <div className='appear-on-hover'>
                        <p>{star.RA}</p>
                        <p>{star.DEC}</p>
                    </div>
                </div>

            )})}



        </div>
    )
}