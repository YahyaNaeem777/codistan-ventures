import React,{useContext} from 'react';
import '../Navbar/Navbar.css'
import CartContext from '../../context/cart/CartContext';
import {NavLink} from 'react-router-dom'
// import { SHOW_hIDE_CART } from '../../context/Types';

const Navbar = () => {
  const {CartItem}=useContext(CartContext);
  return (
    <div className='navbar p-2 px-3 px-md-5'>
      <NavLink to="/" className="nav-link">
      <h5 className='nav-left'>Shopping Cart</h5>
      </NavLink>
      <div className='nav-right'>
        <NavLink to="/cart" className="nav-link">
        <i className='fa fa-shopping-cart' aria-hidden="true" style={{cursor:"pointer"}}></i>
        </NavLink>
        {
          CartItem.length>0 && (<div><span className='count'>{CartItem.length}</span></div>)
        }
      </div>
    </div>
  )
}

export default Navbar
