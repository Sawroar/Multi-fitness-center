import React from 'react';


const Exercise = (props) => {
    const { name, image, info, age, time } = props.exercise;
    const { handleClick } = props



    return (
        <div className='exercise'>

            <div className=''>
                <div className="col-">
                    <div className="card h-100">
                        <img src={image} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{info}</p>
                            <h5>For Age:{age}</h5>
                            <h5>Time Required:{time}s</h5>
                            <button className='btn btn-primary w-100' onClick={() => handleClick(props.exercise)}>Add to list</button>
                        </div>

                    </div>
                </div>


            </div>


        </div >
    );
};

export default Exercise;