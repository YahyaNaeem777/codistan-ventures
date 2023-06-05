import React,{useContext,useEffect} from 'react';
import CartContext from '../../context/cart/CartContext';
import '../CartItem/CartList.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const CartList = ({item}) => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  const { removeItem } = useContext(CartContext);
  console.log(item, "itemsss");
  return (
    
      <li className='my-cart' data-aos="zoom-in">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5 text-center">
              <img src={item.image} className="rounded" alt="" />
            </div>
            <div className="col-md-7">
              <div className="card-body pt-5">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                 {item.price}₹
                </p>
               <button className="btn rounded-pill" onClick={()=>{
                removeItem(item.id)
               }}>Remove item</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </li>
  );
}

export default CartList
