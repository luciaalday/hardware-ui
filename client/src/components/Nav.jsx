import { Link } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';
import { LuCircuitBoard } from 'react-icons/lu';
import { GiFallingStar } from 'react-icons/gi';
import { IoColorFilterOutline } from 'react-icons/io5';
import { FaGamepad } from 'react-icons/fa6';

export default function Nav() {
    return(
        <nav>
            <Link className="nav-top-link" title='Home' to='/'>Home</Link>
            <Link className="nav-top-link" title='Calculator' to='/calculator'><BsCalculator /></Link>
            <Link className="nav-top-link" title='Circuit' to='/circuit'><LuCircuitBoard /></Link>
            <Link className="nav-top-link" title='Stars' to='/stars'><GiFallingStar /></Link>
            <Link className="nav-top-link" title='Color' to='/color'><IoColorFilterOutline /></Link>
            <Link className="nav-top-link" title='Color Game' to='/colorgame'><FaGamepad /></Link>
        </nav>
    )
}