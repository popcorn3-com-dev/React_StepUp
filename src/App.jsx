import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Navi } from './Navi';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route index element={<Home />} />
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
