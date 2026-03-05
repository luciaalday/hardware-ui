import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Calculator from './pages/Calculator';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/calculator`} element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  )
}