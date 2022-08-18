import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet
} from "react-router-dom";

import SingIn from './pages/SingIn';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingIn />} />
        <Route path='/login' element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  )
}