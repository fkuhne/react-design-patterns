import React from 'react';

/* Uncontrolled components like this one keep track of their own states
   and release data only when some event occurs (that is, the submit
   event for HTML forms).

   This component isn't really caring about what the values of each of
   these inputs is until some event occurs, that is, each of these inputs
   is just handling its own state until we submit the form.
*/

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = e => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameInput}/>
            <input name="age" type="number" placeholder="Age" ref={ageInput}/>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput}/>
            <input type="submit" placeholder="Submit" />
        </form>
    );
}
