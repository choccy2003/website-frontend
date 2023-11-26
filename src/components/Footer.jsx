import React from 'react'
import {BsInstagram,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div style={{height:"30%",backgroundColor:"#f4f4f4",opacity:"0.7",fontSize:"26px",paddingTop:"1%",paddingBottom:"1%"}}><div style={{fontSize:"18px",fontWeight:"500",width:"fit-content",margin:"auto",marginBottom:"10px"}}>Connect with us</div><div style={{display:"flex",justifyContent:"center",gap:"10px"}}><BsInstagram/><FaFacebookSquare fill=''/><BsTwitter/><BsYoutube/></div></div>
  )
}

export default Footer