import React from 'react';

const Exercisedetails = (props) => {

    const { cart, btnClick } = props;
    let total = 0;
    let current = 0;
    for (const exercise of cart) {
        total = total + parseInt(exercise.time)

    }
    return (
        <div>
            <img src="../../../../public/images/Noyon1.jpg" alt="" />
            <h5 className='text-center'>Sawroar Hossain Noyon </h5>
            <div className='bg-secondary bg-opacity-10 rounded p-1 mt-5 '>
                <div className='d-flex justify-content-around'>
                    <h6>Weight</h6>
                    <h6>Hight</h6>
                    <h6>Age</h6>
                </div>
                <div className='d-flex justify-content-around'>
                    <h6>59 KG</h6>
                    <h6>5.4 inch</h6>
                    <h6>24</h6>
                </div>
            </div>
            <h5 className='mt-5 mb-5'>Add A Break</h5>
            <div className='d-flex justify-content-around text-center mt-2'>
                <button type="button" onClick={btnClick(props.btn)} class="btn btn-outline-success" >10s</button>
                <button type="button" onClick={btnClick} class="btn btn-outline-success">20s</button>
                <button type="button" onClick={btnClick} class="btn btn-outline-success">30s</button>
                <button type="button" onClick={btnClick} class="btn btn-outline-success">40s</button>
                <button type="button" onClick={btnClick} class="btn btn-outline-success">50s</button>
            </div>
            <h5 className='mt-5'>Exercise Details</h5>
            <div className='text-center mt-5 '>
                <h5 className='bg-secondary bg-opacity-10 rounded p-2 py-3'>Exercise Time:  <span className='text-primary'>{total} </span> Seconds</h5>
                <h5 className='bg-secondary bg-opacity-10 rounded p-2 py-3 mt-2'>Break Time: <span className='text-primary'>16 </span>Seconds</h5>
            </div>
            <button className='btn btn-primary w-100 mt-5' id='liveToastBtn'>Activity Completed</button>

        </div>
    );
};

export default Exercisedetails;