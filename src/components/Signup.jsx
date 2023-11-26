import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/checkout.css'
const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://website-s8u7.onrender.com/users/signup', formData)
            .then((response) => {
                console.log('Signed in successfully:', response.data);
                if(response.data.msg==="Signup successful!"){
                    toast.success('Signed in successfully!', {
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/login');
                        }, 2000);
                    },
                });
                }
                else{
                    toast.error('Error signing up.');
                }
                
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                
            });
    };

    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: 'white', position: 'absolute', zIndex: '9999', top: '0px', left: '0px' }}>
            <div>
                <div style={{ fontSize: '44px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '10%', margin: 'auto', maxWidth: 'fit-content', fontWeight: 600 }}>
                    <span><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Website</Link></span>
                </div>
                <div style={{ height: '450px', width: '390px', backgroundColor: 'rgb(233, 233, 233)', borderRadius: '15px', margin: 'auto', marginTop: '70px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <div style={{ fontSize: '28px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '30px', fontWeight: 600, width: 'auto', marginBottom: '30px' }}>
                        <div style={{ width: 'fit-content', margin: 'auto' }}>Create your account</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px', marginTop: '25px' }}>
                            Username<br />
                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px', marginTop: '15px' }}>
                            Phone number<br />
                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px', marginTop: '15px' }}>
                            Email<br />
                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ fontSize: '17px', marginTop: '15px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px' }}>
                            Password<br />
                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <button
                                style={{ width: '230px', marginLeft: '80px', borderRadius: '5px', height: '33px', backgroundColor: '#7ba550', border: '1px solid #46760A', color: 'white', fontSize: '16px' }}
                                type="submit" className='login-btn'
                            >
                                Create your account
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
                <div style={{ width: 'fit-content', margin: 'auto', marginTop: '10px', fontWeight: 500 }}>Already have an account? <span style={{ textDecoration: 'none' }} href="#"><Link to={'/login'}>Log in</Link></span></div>
                <div style={{ fontSize: '14px', width: 'fit-content', margin: 'auto', opacity: '0.6', marginTop: '50px' }}>
                    All content is © 2023 by Website. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Signup;
