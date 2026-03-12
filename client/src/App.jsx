import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Circuit from './pages/Circuit';
import Stars from './stars/stars';
import ColorContrast from './pages/ColorContract';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/calculator`} element={<Calculator />} />
          <Route path={`/circuit`} element={<Circuit />} />
          <Route path={`/stars`} element={<Stars />} />
          <Route path={`/color`} element={<ColorContrast />} />
        </Routes>
      </Router>
    </div>
  )
}