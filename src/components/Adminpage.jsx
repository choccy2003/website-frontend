import React, { useEffect, useState } from 'react'
import '../styles/itempage.css'
import { useNavigate,Link } from 'react-router-dom';
import Ordercard from '../small components/Ordercard';
import Checkout from '../small components/Checkout';
import axios from 'axios';
import '../styles/checkout.css'
const Adminpage = (props) => {
    const [order, updateorder] = useState(true);
    const [view, updateview] = useState(false);
    const [add, updateadd] = useState(false);
    const [del, updatedel] = useState(false);
    const [upd, updateupd] = useState(false);
    const [orders,setorders]=useState([])
   
    const navigate = useNavigate();
    const handleView=async()=>{
        try {
            const response = await fetch('http://localhost:3001/users/listproducts', {
                headers: { Authorization: `Bearer ${props.token}` },
              });
            const jsonData = await response.json();
            props.setarray(jsonData);
          } catch (error) {
            console.log('Error:', error);
          }
    }
    const [ordersChanged, setOrdersChanged] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:3001/admin/getorders', {
            headers: { Authorization: `Bearer ${props.token}` },
          }).then((res)=>{
            const reversed = [...res.data].reverse();
            setorders(reversed)
        }).catch((err)=>{console.log(err)})
        setOrdersChanged(false);
    },[ordersChanged])
    if(props.token){
        return (
            <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "white", zIndex: "9999", height: "100%", width: "100%" }}>
                <div style={{ width: "fit-content", margin: "auto", fontSize: "40px", fontWeight: "500", marginTop: "50px" }}><span style={{fontSize:"14px",display:"inline-block",position:"relative",right:"250%"}}><Link to={'/'}>Head to Website</Link></span>Admin Page</div>
                <hr style={{ opacity: "0.6", marginTop: "50px", width: "80%" }} />
                <div style={{ marginLeft: "15%" }}>
                    <div className='pannel'><div className='pannel-itms' onClick={() => { updateorder(true); updateview(false); updateadd(false); updatedel(false); updateupd(false); }} >View Orders<br /><hr className={order ? 'line2' : 'inv'} style={{ width: "fit-content" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(true); updateadd(false); updatedel(false); updateupd(false);handleView() }} >Products<br /><hr className={view ? 'line2' : 'inv'} style={{ maxWidth: "75%" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(true); updatedel(false); updateupd(false);navigate('/admin/addproduct') }} >Add item<br /><hr className={add ? 'line2' : 'inv'} style={{ maxWidth: "90%" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(false); updatedel(true); updateupd(false);navigate('/admin/deleteproduct') }} >Delete item<br /><hr className={del ? 'line2' : 'inv'}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(false); updatedel(false); updateupd(true);navigate('/admin/updateproduct') }} >Update item<br /><hr className={upd ? 'line2' : 'inv'}></hr></div></div>
                </div>
               {view?(<div>
                    <div style={{width:"fit-content",margin:"auto",fontSize:"36px",fontWeight:"500",marginTop:"50px",marginBottom:"40px"}}>View Product list</div>
                    <table className='table' style={{ fontSize: "26px" }}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {props.best_array.map((best_array, index) => (
                <tr key={index}>
                    <td>{best_array.id}</td>
                    <td>{best_array.name}</td>
                    <td>{best_array.price}</td>
                    <td>{best_array.description}</td>
                    <td>{best_array.category}</td>
                </tr>
            ))}
        </tbody>
    </table>
                 
                </div>):(<></>)} 
                {order?(<div>{orders.map((orders,i)=>{return <div key={i}>
                    <Ordercard setOrdersChanged={setOrdersChanged} token={props.token} orders={orders} />
                </div>})} </div>):(<></>)}
               
                
            </div>
        )
    }
    else{
        navigate('/login')
    }
   
}

export default Adminpage