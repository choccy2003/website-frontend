import React, { useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productadd = (props) => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    const [success, setsuccess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://website-s8u7.onrender.com/admin/addproduct', product, {
                headers: { Authorization: `Bearer ${props.token}` },
              })
            .then((response) => {
                console.log('Product added successfully:', response.data);
                setsuccess(response.data.success)
                setTimeout(() => { setsuccess(false) }, 2000)

                toast.success('Product added successfully!', {
                    onClose: () => {
                        navigate('/admin');
                    },
                });
            })
            .catch((error) => {
                console.error('Error adding product:', error);
                toast.error('Error adding product. Please try again.');
            });
    };

    return (
        <>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    zIndex: '9999',
                    top: '0px',
                    left: '0px',
                }}
            >
                <div
                    style={{
                        height: '550px',
                        width: '400px',
                        backgroundColor: 'rgb(233, 233, 233)',
                        margin: 'auto',
                        marginTop: '10%',
                        borderRadius: '7px',
                    }}
                >
                    <div><RxCross1 style={{height:"30px",width:"30px",position:"relative",left:"350px",top:"20px"}} onClick={()=>{navigate('/admin')}}/></div>
                    <div
                        style={{
                            marginLeft: '20px',
                            fontSize: '32px',
                            fontWeight: '500',
                            width: 'fit-content',
                            margin: 'auto',
                            paddingTop: '10px',
                            paddingBottom: '30px',
                        }}
                    >
                        Add products
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                            }}
                        >
                            Product name
                        </div>
                        <input
                            value={product.name}
                            name="name"
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                                border: '1px solid black',
                                borderRadius: '5px',
                            }}
                            type="text"
                            onChange={handleChange}
                        />
                        <div
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                            }}
                        >
                            Product description
                        </div>
                        <input
                            value={product.description}
                            name="description"
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                                border: '1px solid black',
                                borderRadius: '5px',
                            }}
                            type="text"
                            onChange={handleChange}
                        />
                        <div
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                            }}
                        >
                            Product price
                        </div>
                        <input
                            value={product.price}
                            name="price"
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                                border: '1px solid black',
                                borderRadius: '5px',
                            }}
                            type="text"
                            onChange={handleChange}
                        />
                        <div
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                            }}
                        >
                            Product category
                        </div>
                        <input
                            value={product.category}
                            name="category"
                            style={{
                                marginLeft: '40px',
                                fontSize: '22px',
                                fontWeight: '500',
                                marginTop: '10px',
                                border: '1px solid black',
                                borderRadius: '5px',
                            }}
                            type="text"
                            onChange={handleChange}
                        />

                        <div style={{ width: 'fit-content', margin: 'auto' }}>
                            <button
                                type="submit"
                                style={{
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '35px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    height: '50px',
                                    width: '150px',
                                    backgroundColor: '#7ba550',
                                    color: 'white',
                                    border: '1px solid #46760A',
                                }}
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>

                {success && (
                    <div
                        style={{
                            width: 'fit-content',
                            margin: 'auto',
                            fontSize: '26px',
                            marginTop: '20px'
                        }}
                    >
                        <span style={{ fontSize: '40px', display: 'inline-block' }}>
                            <BsCheckAll />
                        </span>
                        <span style={{ position: 'relative', bottom: '10px' }}>
                            Product added successfully
                        </span>
                    </div>
                )}
            </div>
            <ToastContainer/>
        </>
    );
};

export default Productadd;
