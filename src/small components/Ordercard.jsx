import React, { useState } from 'react'
import axios from 'axios'
const Ordercard = (props) => {
    
  const [status, updatestatus] = useState({
    status: '',
    _id: props.orders._id,
});
const handleChange = (newStatus) => {
  updatestatus({
    status: newStatus,
    _id: props.orders._id,
  });
};


    const handleSubmit = (event) => {
      event.preventDefault();

      axios
          .post('https://website-s8u7.onrender.com/admin/orderstate', status, {
              headers: { Authorization: `Bearer ${props.token}` },
            })
          .then((response) => {
              console.log('Status updated successfully:', response.data);
              updatestatus(response.data.status)
          })
          .catch((error) => {
              console.error('Error deleting product:', error);
              
          });
  };
    const total = props.orders.cart.reduce((acc, cart) => acc + parseInt(cart.price)*cart.quantity+(parseInt(cart.price)*cart.quantity)*0.12, 0);
  return (
    <>
      <div style={{height:"fit-content",width:"605px",border:"1px solid rgb(0,0,0,0.5)",borderRadius:"10px",margin:"auto",paddingBottom:"10px",marginTop:"50px"}}>
        <div style={{fontSize:"20px",fontWeight:"500",display:"flex",marginTop:"20px",marginLeft:"15px",gap:"98px"}}>
            <div style={{width:"280px"}}>
                Order ID: <span style={{fontSize:"14px"}}>{props.orders._id}</span></div><div>Status:<span style={{fontSize:"18px"}}> {props.orders.status}</span> </div>
        </div>
        <div style={{fontSize:"20px",fontWeight:"500",display:"flex",marginTop:"10px",marginLeft:"15px",gap:"180px"}}>
            <div style={{width:"200px"}}>
                Order Description:<div>{props.orders.cart.map((cart,i)=>{return <div key={i} style={{fontSize:"16px"}}>{cart.quantity}x pcs {cart.name} (Size:{cart.size}) (id:{cart.id})</div>})}</div></div><div style={{width:"180px"}}>Total: ₹{total.toLocaleString('en-in')}<div style={{marginTop:"5px"}}>Customer Details:</div><div style={{fontSize:"16px",marginTop:"2px"}}>Address:<div>{`${props.orders.locality}, ${props.orders.city},${props.orders.state}-${props.orders.zipCode}`}</div> </div><div style={{fontSize:"16px",marginTop:"2px"}}>Name: {props.orders.fullname}</div><div style={{fontSize:"16px",marginTop:"2px"}}>Contact: {`${props.orders.phone}`} </div></div>
        </div>
      </div>
      <div style={{width:"600px",margin:"auto",display:"flex",marginTop:"10px",gap:"60px",paddingLeft:"5px"}}>
      <form onSubmit={handleSubmit}><button value="Accepted" name="status"  style={{fontSize:"20px",padding:"10px",color:"white",border:"none",borderRadius:"10px",height:"40px",width:"100px",backgroundColor:"rgb(85 147 23)",marginRight:"80px"}} onClick={()=>{props.setOrdersChanged(true);handleChange("Accepted")}}>Accept</button><button value="Accepted" name="status" style={{fontSize:"20px",padding:"10px",color:"white",border:"none",borderRadius:"10px",height:"40px",width:"100px",backgroundColor:"#fb4444",marginRight:"160px"}} onClick={()=>{props.setOrdersChanged(true);handleChange("Declined")}}>Decline</button><button value="Accepted" name="status"  style={{fontSize:"20px",padding:"10px",color:"white",border:"none",borderRadius:"10px",height:"40px",width:"160px",backgroundColor:"rgb(61 150 169)",marginLeft:"auto"}} onClick={()=>{props.setOrdersChanged(true);handleChange("Fulfilled")}}>Mark fulfilled</button></form></div>
    </>
  
  )
}

export default Ordercard