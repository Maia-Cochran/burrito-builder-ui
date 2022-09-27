import React from 'react';
import './SingleOrder.css'

const SingleOrder = ({id, name, ingredients}) => {
    return (
        <div className='single-order'>
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
        </div>
    )
}

export default SingleOrder;