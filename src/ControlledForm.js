import React, { useState, useEffect } from 'react';

/* The big difference between this and an uncontrolled form is that here
    we are going to track the values of each of our forms inputs using
    a useState hook.
*/

export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [nameInputError, setNameInputError] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Name must have more than two characters');
        } else {
            setNameInputError('');
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input
                name="name" 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />            
            <input
                name="age" 
                type="number" 
                placeholder="Age" 
                value={age} 
                onChange={e => setAge(Number(e.target.value))} 
            />
            <input
                name="hairColor" 
                type="text" 
                placeholder="Hair Color" 
                value={hairColor} 
                onChange={e => setHairColor(e.target.value)} 
            />
            <button >Submit</button>
        </form>
    );
}
