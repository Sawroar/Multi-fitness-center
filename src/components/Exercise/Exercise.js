import React from 'react';

const Exercise = (props) => {
    const { name, img, info, age, time } = props.exercise
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;