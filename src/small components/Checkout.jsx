import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import axios from 'axios';
import '../styles/checkout.css'; // Make sure to import your styles
import {RxCross1} from 'react-icons/rx'

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    locality: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card',
    shippingOption: 'standard',
    cart: props.cart_array,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://website-s8u7.onrender.com/users/order', formData)
      .then((response) => {
        console.log('Order added successfully:', response.data);
        props.setcheckout(false)
        props.updatecartarr([])
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div style={{position:"absolute",height:"206%",width:"100%",backgroundColor:"rgb(0,0,0,0.5)",top:"0px",left:"0px",zIndex:"9999"}}>
        <div className="checkout-container" style={{paddingLeft:"60px",marginTop:"7%"}}>
      <h2 className="checkout-heading">Checkout <RxCross1  onClick={()=>{props.setcheckout(false)}} style={{marginLeft:"290px",position:"relative",bottom:"25px"}}/></h2>
      <form onSubmit={handleSubmit}>
        <div className="checkout-form-group">
          <label className="checkout-label">Name:</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">Locality:</label>
          <input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="checkout-input-field"
          />
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">Payment Method:</label>
          <div className="checkout-radio-group">
            <label className="checkout-radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
              />
              Card Payment
            </label>
            <label className="checkout-radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleInputChange}
              />
              Cash on Delivery
            </label>
          </div>
        </div>
        <div className="checkout-form-group">
          <label className="checkout-label">Shipping Option:</label>
          <div style={{ display: 'flex' }}>
            <select
              name="shippingOption"
              value={formData.shippingOption}
              onChange={handleInputChange}
              className="checkout-select-field"
            >
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
            </select>
            <BsChevronDown
              style={{ height: '20px', width: '20px', position: 'relative', right: '26px', top: '9px' }}
            />
          </div>
        </div>
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
    </div>
    
  );
};

export default Checkout;
