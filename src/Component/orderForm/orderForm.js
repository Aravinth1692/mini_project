import React, { useState } from 'react';

const OrderForm = ({onSubmit }) =>{
    const [orderName, setOrderName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(orderName);
      setOrderName('');
    };
  
    return (
      <div>
        <h2>Create New Order</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Order Name:
            <input
              type="text"
              value={orderName}
              onChange={(e) => setOrderName(e.target.value)}
            />
          </label>
          <button type="submit">Create Order</button>
        </form>
      </div>
    );
}
export default OrderForm;