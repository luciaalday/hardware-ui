import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Circuit from './pages/Circuit';
import Stars from './stars/stars';
import ColorContrast from './pages/ColorContract';
import ColorGame from './pages/ColorGame';
import UltimateTicTacToe from './pages/UltimateTicTacToe';
import Bracelets from './pages/Bracelets';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/circuit`} element={<Circuit />} />
          <Route path={`/stars`} element={<Stars />} />
          <Route path={`/color`} element={<ColorContrast />} />
          <Route path={`/colorgame`} element={<ColorGame />} />
          <Route path={`/ultimatetictactoe`} element={<UltimateTicTacToe />} />
          <Route path={`/bracelets`} element={<Bracelets />} />
        </Routes>
      </Router>
    </div>
  )
}