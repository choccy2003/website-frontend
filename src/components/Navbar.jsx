import React, { useState } from 'react'
import '../styles/navcss.css'
import {Link} from 'react-router-dom';
import {BsCart2} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai'

const Navbar = (props) => {
  let [open, update] = useState(1)
  const fun1 = (name) => {
    let open_var1 = open;
    let element = document.getElementById(name)
    if (open_var1 === 1) {
      element.classList.add('vis')
      open_var1 = 0;
    }
    else {
      element.classList.remove('vis')
      open_var1 = 1;
    }
    update(open_var1)

  }

  return (
    <>
        <div className='navbar'><div className='navbar-top'><div className='text '>Chat with us</div><div className='text nav-start'>+91 8342536271</div><div className='text nav-start'>info@website.com</div><div className='text nav-end'>Blog</div><div className='text'>About us</div><div className='text'>Careers</div></div>
      <hr className='line' />
      <div className='navbar-bottom'><div className='name'><Link to={'/'}style={{textDecoration:"none",color:"black"}}>Website</Link></div><div className='box'><input type='text' className='search' placeholder='Search Products,categories ...'></input><button className='btn1'><div className='search-btn'></div></button></div><div className='interface'><button className='hidden-btn' ><div className='search-btn' onClick={() => { fun1("sbox") }}></div></button><AiOutlineUser onClick={props.dispfn2} className='user-icon' style={{height:"24px",width:"26px",position:"relative",top:"2px"}}/><div style={{width:"15px",userSelect:"none"}}><BsCart2 onClick={props.dispfn} className='cart-icon' style={{height:"25px",width:"25px"}}/><span className='cart-var'><span className='cart-text'>{props.carttotal()}</span></span></div><div onClick={() => { fun1("menu") }}><div className='gg-menu-left' ><div className='menu-items' id="menu"><div className='it'>Account</div><div className='it'>Wishlist</div><div className='it'>Orders</div><div className='it'>Contact us</div></div></div></div></div></div>
      <hr className='inv' />
      <div className='hdn-search' id='sbox'  ><input type='text' placeholder='Search Products,categories ...' className='hdn-searchbox'></input><div className='search-btn plc' ></div></div>
      
    </div>
    </>

  )
}

export default Navbar