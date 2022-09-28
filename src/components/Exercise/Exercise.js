import React from 'react';


const Exercise = (props) => {
    const { name, image, info, age, time } = props.exercise
    return (
        <div className='exercise'>

            <div className=''>
                <div className="col-">
                    <div className="card h-100">
                        <img src={image} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{info}</p>
                            <h5>For Age:{age}</h5>
                            <h5>Time Required:{time}</h5>
                            <button className='btn btn-primary w-100'>Add to list</button>
                        </div>

                    </div>
                </div>


            </div>

            {/* <img src={img} className='img-fluid' alt="" />
            <h4>{name}</h4>
            <p>{info}</p>
            <h5>For Age:{age}</h5>
            <h5>Time Required:{time}</h5> */}
        </div >
    );
};

export default Exercise;