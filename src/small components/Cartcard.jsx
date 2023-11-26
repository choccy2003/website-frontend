import React from 'react'
import '../styles/navcss.css'
import { FiTrash } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
const Cartcard = (props) => {
  const number = props.cart_array.price;
  
  return (

    <div>
      <div className='cart-card'>
        <div style={{ display: "flex" }}>
          <div className='cart-img'>{(props.cart_array !== null && props.best_array[props.cart_array.id]) && (
  <img src={props.best_array[props.cart_array.id].image[0]} style={{ height: "95px", width: "140px", marginTop: "4px", borderRadius: "5px", backgroundColor: "white" }} alt="Product" />
)}</div>
          <div style={{ fontFamily: "Poppins", fontSize: "22px", marginLeft: "22px", marginTop: "12px" }}>{props.cart_array.name}<span style={{ fontSize: "14px", fontWeight: "400", marginLeft: "15px", opacity: "0.7" }}>Size: {props.cart_array.size}</span><br />₹{number.toLocaleString('en-IN')}<br />        <div style={{ display: "flex", width: "75px", height: "25px", marginTop: "8px", justifyContent: "center", alignItems: "center" }}>
            <button className="cbtn" onClick={() => { props.cartdec(props.index) }}>-</button>
            <div style={{ height: "25px", width: "30px", backgroundColor: "#d9d9d9", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ fontSize: "17px" }}>{props.cart_array.quantity}</div>
            </div>
            <button className="cbtn" onClick={() => { props.cartinc(props.index) }}>+</button>
          </div>
          </div>
          <div style={{ marginRight: "auto" }}>
          </div>
          <div style={{ marginTop: '15px', marginRight: "10px", height: "25px" }} > <FiTrash onClick={() => { props.deletefn(props.cart_array) }} style={{ height: "25px", width: "25px", stroke: "#AB2328" }} /><br /><FaRegHeart className='regheart' style={{ height: "22px", width: "22px", position: "relative", left: "1px", top: "42px" }} /></div>

        </div>


      </div>
    </div>
  )
}


export default Cartcard