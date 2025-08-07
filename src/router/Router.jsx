import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Page1 } from '../components/Page1';
import { Page2 } from '../components/Page2';
import { Page1DetailA } from '../components/Page1DetailA';
import { Page1DetailB } from '../components/Page1DetailB';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />}>
                <Route path='detailA' element={<Page1DetailA />} />
                <Route path=':id' element={<Page1DetailB />} />
            </Route>
            <Route path='/page2' element={<Page2 />} />
        </Routes>
    )
}