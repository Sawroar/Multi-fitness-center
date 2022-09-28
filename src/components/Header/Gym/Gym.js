import React, { useEffect, useState } from 'react';
import Exercisedetails from '../../Exercise.Details/Exercisedetails';
import Exercise from '../../Exercise/Exercise';



const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, SetCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    const handleClick = (exercise) => {

        const newCart = [...cart, exercise];
        SetCart(newCart);
    }
    const btnClick = (btn) => {
        console.log(btn)

    }


    return (
        <div className='row'>
            <div className='col-8  border '>
                <div className='row'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'> {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleClick={handleClick}></Exercise>)}
                    </div>
                </div>
            </div>
            <div className='col-4 border'>
                <Exercisedetails cart={cart} btnClick={btnClick}></Exercisedetails>
            </div>

        </div>
    );
};

export default Gym;