import React,{useContext, useEffect} from "react";
import "../ProductCard/ProductCard.css";
import Rating from "../Rating/Rating";
import CartContext from "../../context/cart/CartContext";
import AOS from 'aos';
import 'aos/dist/aos.css'

const ProductsCard = ({ product }) => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  const {addToCart}=useContext(CartContext);
  return (
    <div className="col">
      <div className="card"  data-aos="zoom-in">
        <img
          className="card-img-top img-responsive"
          src={product.image}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title fw-bold" data-aos="zoom-in">{product.title.split(3)}</h6>
          <p className="card-text">{product.price}₹</p>
        </div>
        <div className="ratings">
            <Rating value={product.rating.rate}/>
        </div>
        <div>
            <button className="btn btn-warning rounded-pill ms-2"
            onClick={()=>addToCart(product)}
            >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
