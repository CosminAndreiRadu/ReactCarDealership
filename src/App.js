import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar/navbarcomp.js';
import Login from "./pages/Login";
import PrivateRoutes from "./services/LoggedinRoutes";
import Accounts from "./pages/Accounts";
import AdminRoutes from "./services/AdminRoutes";

import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/" element={<PrivateRoutes/>} >
              <Route path="shop" element={<Shop />} />
            </Route>
            <Route path="/" element={<AdminRoutes/>}>
              <Route path="accounts" element={<Accounts />} />
            </Route>
            <Route path="accounts" element={<Accounts/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>

        </BrowserRouter>
      </>

    
  );
}

export default App;
