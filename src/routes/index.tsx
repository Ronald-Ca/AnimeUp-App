import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Configuration from '../pages/config';
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path='/config' element={<Configuration />} />
            </Routes>
        </BrowserRouter>
    );
}