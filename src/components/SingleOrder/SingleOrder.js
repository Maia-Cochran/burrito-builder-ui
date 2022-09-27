import React from 'react';
import './SingleOrder.css'

const SingleOrder = ({id, name, ingredients}) => {
    return (
        <div className='single-order'>
            {id}
            {name}
            {ingredients}
        </div>
    )
}

export default SingleOrder;