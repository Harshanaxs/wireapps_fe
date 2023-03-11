import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MensWare } from './components/pages/MensWare';
import { LadiesWare } from './components/pages/LadiesWare';
import { Home } from './components/pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='womens-clothing' element={<LadiesWare />}></Route>
      <Route path='mens-clothing' element={<MensWare />}></Route>
    </Routes>
  );
}

export default App;
