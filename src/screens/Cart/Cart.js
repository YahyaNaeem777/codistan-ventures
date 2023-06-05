import React, { useContext } from "react";
import "../Cart/Cart.css";
import CartContext from "../../context/cart/CartContext";
import CartList from "../../components/CartItem/CartList";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate();
  const {CartItem} = useContext(CartContext);
  console.log(CartItem, "CartItem component");
  return (
    <>
    <div className="container">
    <p className="text-center py-3 fw-bold heading">My Shopping Cart</p>
    <button className="btn rounded-pill btn-warning mb-5 back-btn" onClick={()=>navigate(-1)}><i className="fa-sharp fa-solid fa-arrow-left fa-beat pe-2"></i>Continue shopping</button>
        <div className="cart_wrapper">
          <div className="cart_inner">
          {CartItem.length === 0 ? (
            <h4 className="text-center">Your cart is Empty <br /> Go back and continue Shopping</h4>
          ) : (
            <ul>
              {CartItem.map(item => (
                <CartList key={item.id} item={item} />
              ))}
            </ul>
          )}

          </div>

          <div className="cart-total pb-4">
            <p className="text-center">
              Total amount <p className="p-0"></p>
              {CartItem.reduce((amount, item) => item.price + amount, 0)} ₹
            </p>
          </div>
        </div>
    </div>
      
    </>
  );
};

export default Cart;
