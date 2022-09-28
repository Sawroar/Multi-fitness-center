import React, { useEffect, useState } from 'react';
import Exercise from '../../Exercise/Exercise';



const Gym = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    return (
        <div className='row'>
            <div className='col-10  border '><div className='row'>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'> {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)}</div></div>
            </div>

            <div className='col-2 border'> <h1>how are you </h1></div>
        </div>
    );
};

export default Gym;