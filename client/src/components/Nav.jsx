import { Link } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';
import { LuCircuitBoard } from 'react-icons/lu';
import { GiFallingStar } from 'react-icons/gi';

export default function Nav() {
    return(
        <nav>
            <Link className="nav-top-link" to='/'>Home</Link>
            <Link className="nav-top-link" to='/calculator'><BsCalculator /></Link>
            <Link className="nav-top-link" to='/circuit'><LuCircuitBoard /></Link>
            <Link className="nav-top-link" to='/stars'><GiFallingStar /></Link>
        </nav>
    )
}