import React from 'react';
import './Orders.css';
import SingleOrder from '../SingleOrder/SingleOrder'

const Orders = ({orders}) => {
  const orderEls = orders.map(order => {
    return (
      <SingleOrder 
      id={order.id}  
      name={order.name}
      ingredients={order.ingredients}  
      key={order.id}
      />
  )
    })
    return(
      <div className='order-list'>
      {orderEls}
      </div>
    )
}

export default Orders;