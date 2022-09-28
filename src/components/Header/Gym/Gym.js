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
            <div className='col-8 border'>
                {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)}</div>
            <div className='col-4 border'> <h1>how are you </h1></div>
        </div>
    );
};

export default Gym;