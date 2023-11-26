import React, { useEffect, useState } from 'react';
import Starrating from 'react-star-ratings'
import '../styles/itemcard.css';
import { Link } from 'react-router-dom'


const Itemcard = (props) => {
  const [showBuyButton, setShowBuyButton] = useState(true);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  /*
  
  
    const handleBuyButtonClick = () => {
      setShowBuyButton(false);
      setShowButton1(true);
      setShowButton2(true);
      props.best_array.quantity++;
      props.appendfn(props.best_array)
    };
    let mult=()=>{
      props.dec(props.i)
      if(props.best_array.quantity===0){
        setShowBuyButton(true);
        setShowButton1(false);
        setShowButton2(false);
      }
    }
    useEffect(() => {
  
     if(props.best_array.quantity>=1){
      setShowBuyButton(false)
      setShowButton1(true);
      setShowButton2(true);
     }
    },[props.best_array.quantity]);
    
  */
  const number = props.best_array.price;

  return (
    <div>

      <div className='container'>

        <div className='card'>
          <Link to={`/products/${props.best_array._id}`}>
            <div className='image'><img src={props.best_array.image[0]} style={{ height: "180x", width: "210px", marginTop: "10px" }} ></img></div>
          </Link>
          <div className='title'>{props.best_array.name}</div>
          <div className='des'>Item description here</div>
          <div className='rating'>
            <Starrating rating={props.best_array.rating} starRatedColor={'#d3af37'} starDimension={"16px"} starSpacing={"1px"} />
            <span className='rating-number'>{'('}{props.best_array.review} {'ratings)'}</span>
          </div>
          <div className='btm'>
            <div className='price'>₹{number.toLocaleString('en-IN')}</div>
            <div className='add-btn'>
              {showBuyButton && (
                <Link to={`/products/${props.best_array._id}`}><div className='txt' /*onClick={handleBuyButtonClick}*/>Buy now</div></Link>

              )}
              <div className='btn-grid'>
                {showButton1 && (
                  <div className='txt2'/*onClick={()=>{mult()}} */>-</div>
                )}
                {showButton1 && (
                  <div className='txt3'>{props.best_array.quantity}</div>
                )}
                {showButton2 && (
                  <div className='txt2'/* onClick={()=>{props.appendfn(props.best_array)}}*/ >+</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Itemcard;
