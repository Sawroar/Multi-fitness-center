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
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12 border '>
                    <div className='row'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'> {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleClick={handleClick}></Exercise>)}
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 border'>
                    <Exercisedetails cart={cart} btnClick={btnClick}></Exercisedetails>
                </div>
            </div>

        </div>
    );
};

export default Gym;