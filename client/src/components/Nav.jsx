import { Link } from 'react-router-dom';
import { LuCircuitBoard } from 'react-icons/lu';
import { GiFallingStar, GiSewingNeedle } from 'react-icons/gi';
import { IoColorFilterOutline } from 'react-icons/io5';
import { FaGamepad } from 'react-icons/fa6';

export default function Nav() {
    return(
        <nav>
            <Link className="nav-top-link" title='Home' to='/'>Home</Link>
            <Link className="nav-top-link" title='Circuit' to='/circuit'><LuCircuitBoard /></Link>
            <Link className="nav-top-link" title='Stars' to='/stars'><GiFallingStar /></Link>
            <Link className="nav-top-link" title='Bracelets' to='/bracelets'><GiSewingNeedle /></Link>
            <Link className="nav-top-link" title='Color' to='/color'><IoColorFilterOutline /></Link>
            <div className='dropdown'>
                <div className="nav-top-link" ><FaGamepad /></div>
                <div className='dropdown-content'>
                    <Link to={`/colorgame`}>Color game</Link>
                    <Link to={`/ultimatetictactoe`}>Ultimate TicTacToe</Link>
                </div>
            </div>
        </nav>
    )
}