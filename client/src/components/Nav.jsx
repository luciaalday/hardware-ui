import { Link } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';

export default function Nav() {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/calculator'><BsCalculator /></Link>
        </nav>
    )
}