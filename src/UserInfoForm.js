import React from 'react';
import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from './withEditableResource';

export const UserInfoForm = withEditableUser(({
    user, onChangeUser, onSaveUser, onResetUser
}) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
        <label>
            Name:
            <input 
                value={name} 
                onChange={e => onChangeUser({ name: e.target.value })} />
        </label><br></br>
        <label>
            Age:
            <input 
                value={age} 
                onChange={e => onChangeUser({ age: Number(e.target.value) })} />
        </label><br></br>
        <label>
            Hair Color:
            <input 
                value={hairColor} 
                onChange={e => onChangeUser({ hairColor: e.target.value })} />
        </label><br></br>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading...</p>;
}, '123');

export const UserInfoForm2 = withEditableResource(({
    user, onChangeUser, onSaveUser, onResetUser
}) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
        <label>
            Name:
            <input 
                value={name} 
                onChange={e => onChangeUser({ name: e.target.value })} />
        </label><br></br>
        <label>
            Age:
            <input 
                value={age} 
                onChange={e => onChangeUser({ age: Number(e.target.value) })} />
        </label><br></br>
        <label>
            Hair Color:
            <input 
                value={hairColor} 
                onChange={e => onChangeUser({ hairColor: e.target.value })} />
        </label><br></br>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading...</p>;
}, '/users/123', 'user');

