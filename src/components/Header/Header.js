import React from 'react';
import logo from '../../multi.svg'
const Header = () => {
    return (
        <div className='container mt-5' >
            <div className='d-flex align-items-center justify-content-center'>
                <div className='d-flex align-items-center text-center'>
                    <img src={logo} className='img-fluid' height="100px" width="200px" alt="" />
                    <h1 className='text-primary'>Multi Fitness Center</h1>
                </div>
            </div>
            <h3 className='text-center mb-3'>Select Your Exercise</h3>
        </div>
    );
};

export default Header;