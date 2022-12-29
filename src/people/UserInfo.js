import axios from 'axios';
import React from 'react';
import { useCurrentUser } from '../useCurrentUser';
import { useDataSource } from '../useDataSource';
import { useResource } from '../useResource';
import { useUser } from '../useUser';

export const UserInfo = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {};
    
    return user ? (
        <>
         <h3>{name}</h3>
         <p>Age: {age} years</p>
         <p>Hair Color: {hairColor}</p>
         <h3>Hobbies:</h3>
         <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
         </ul>
        </>
    ) : <p>Loading...</p>;
}

export const UserInfoWithCustomHook = () => {
    const user = useCurrentUser();
    const { name, age, hairColor, hobbies } = user || {};
    
    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    ) : <p>Loading...</p>;
}

export const UseUserCustomHook = ({ userId }) => {
    const user = useUser(userId);
    const { name, age, hairColor, hobbies } = user || {};
    
    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    ) : <p>Loading...</p>;
}

export const UserInfoWithUseResource = ({ userId }) => {
    const user = useResource(`/users/${userId}`);
    const { name, age, hairColor, hobbies } = user || {};
    
    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    ) : <p>Loading...</p>;
}

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

const localStorageResource = key => () => {
    return localStorage.getItem(key);
}

export const UserInfoWithDataSource = ({ userId }) => {
    
    const user = useDataSource(serverResource(`users/${userId}`));

    const { name, age, hairColor, hobbies } = user || {};
    
    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    ) : <p>Loading...</p>;
}

