import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet
} from "react-router-dom";

import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingIn />} />
        <Route path='/login' element={<SingIn />} />
        <Route path='/cadastro' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}