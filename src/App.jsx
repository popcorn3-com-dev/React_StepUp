import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navi } from './Navi';
import { Router } from './router/Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navi />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
