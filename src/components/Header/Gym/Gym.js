import React, { useEffect, useState } from 'react';
import Exercisedetails from '../../Exercise.Details/Exercisedetails';
import Exercise from '../../Exercise/Exercise';



const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, SetCart] = useState([]);
    const [breakTime, setBreakTime] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    const handleClick = (exercise) => {

        const newCart = [...cart, exercise];
        SetCart(newCart);
    }
    const handleBreakTime = selectedBreakTime => {

        localStorage.setItem("Break-Time", selectedBreakTime);
        setBreakTime(selectedBreakTime);

    };

    useEffect(() => {
        const getBreakTime = localStorage.getItem("Break-Time");
        setBreakTime(getBreakTime);
    }, []);



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12  '>
                    <div className='row'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'> {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleClick={handleClick} ></Exercise>)}
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <Exercisedetails cart={cart} handleBreakTime={handleBreakTime} breakTime={breakTime} ></Exercisedetails>
                </div>

            </div>

            <h1 className='text-center mt-2'>Question and Answers</h1>
            <div className='bg-dark  bg-opacity-10 rounded'>
                <h2 className='text-center'> 1.How does react works ?</h2>

                <h4 className='p-2'>
                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h4>
            </div>
            <div className='bg-dark  bg-opacity-10 rounded-2 mt-2' >
                <h2 className='text-center'> Difference Between props and state ?</h2>

                <h4 className='p-2'>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</h4>
            </div>
            <div className='bg-dark  bg-opacity-10 rounded mt-2 mb-5'>
                <h2 className='text-center'>what are the usecases of useEffect except loading data from api ?</h2>

                <h4 className='p-2'>
                    1. Running on state change: validating input field <br />
                    2. Running on state change: live filtering <br />
                    3. Running on state change: trigger animation on new array value <br />
                    4. Running on props change: update paragraph list on fetched API data update <br />
                    5. Running on props change: updating fetched API data to get BTC updated price cannot be passed to other components. The this. setState property is used to update the state values in the component.</h4>

            </div>






        </div>
    );
};

export default Gym;