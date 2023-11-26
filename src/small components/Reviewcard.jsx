import React from 'react'
import Starrating from 'react-star-ratings'
import { FaRegHeart, FaUserCircle } from 'react-icons/fa'

const Reviewcard = (props) => {
  return (
    <div>
                <div className='review-card'>
                  <FaUserCircle style={{ height: "40px", width: "40px", fill: "grey" }}></FaUserCircle><span style={{ fontWeight: "500", position: "relative", left: "10px", bottom: "20px", fontSize: "17px" }}>{props.review.username}<div style={{ fontWeight: "500", fontSize: "12px", position: "relative", left: "40px", opacity: "0.6" }}>Verified purchase</div></span>
                  <div style={{ position: "relative", left: "5px", bottom: "10px" }} ><Starrating rating={props.review.rating} starRatedColor={'#d3af37'} starDimension={"20px"} starSpacing={"0px"} /><div style={{ fontWeight: "500", fontSize: "18px" }}>{props.review.title}</div><div>{props.review.review}</div><hr style={{ marginTop: "30px", opacity: "0.6", borderRadius: "10px" }}></hr></div>

                </div>
                </div>
  )
}

export default Reviewcard