
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle={{color:'red'}} exact>
            Home
          </NavLink>
          <NavLink to='/shop' activeStyle={{color:'red'}}>
            Shop
          </NavLink>
          <NavLink to='/contact' activeStyle={{color:'red'}}>
            Contact
          </NavLink>
          <NavLink to='/register' activeStyle={{color:'red'}}>
            Register
          </NavLink>
          <NavLink to='/login' activeStyle={{color:'red'}}>
            Login
          </NavLink>
          <NavLink to='/accounts' activeStyle={{color:'red'}}>
            Accounts
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;