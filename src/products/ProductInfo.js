import React from 'react';
import { useResource } from '../useResource';

export const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};

    return product ? (
        <>
        <h3>{name}</h3>
        <p>{price}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <p>Average Rating: {rating}</p>
        </>
    ) : <p>Loading...</p>;
}

export const ProductInfoWithUseResource = ({ productId }) => {
    const product = useResource(`/products/${productId}`);
    const { name, price, description, rating } = product || {};

    return product ? (
        <>
        <h3>{name}</h3>
        <p>{price}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <p>Average Rating: {rating}</p>
        </>
    ) : <p>Loading...</p>;
}