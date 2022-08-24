import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlets
} from "react-router-dom";

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/cadastro' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}