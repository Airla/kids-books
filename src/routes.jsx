import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet
} from "react-router-dom";

import SingIn from './pages/SingIn';
import Ebooks from './pages/Ebooks';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingIn />} />
        <Route path='/login' element={<SingIn />} />
        <Route path='/ebooks' element={<Ebooks />} />
      </Routes>
    </BrowserRouter>
  )
}