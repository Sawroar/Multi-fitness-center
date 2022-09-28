import React from 'react';
import logo from '../../multifitness.png'
const Header = () => {
    return (
        <div className='d-flex align-items-center container  text-center '>
            <img src={logo} className='img-fluid' height="100px" width="300px" alt="" />
            <h1 className='text-primary'>Multi Fitness Center</h1>
        </div>
    );
};

export default Header;