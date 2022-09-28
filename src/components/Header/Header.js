import React from 'react';
import logo from '../../multi.svg'
const Header = () => {
    return (
        <div className='' >
            <div className='d-flex align-items-center text-center'>
                <img src={logo} className='img-fluid' height="100px" width="200px" alt="" />
                <h1 className='text-primary'>Multi Fitness Center</h1>
            </div>
            <h3 className='ms-4'>Select Your Exercise</h3>
        </div>
    );
};

export default Header;