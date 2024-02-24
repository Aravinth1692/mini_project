import React, { useState } from 'react';
import './orderForm.css'

const OrderForm = ({onSubmit }) =>{
    const [orderName, setOrderName] = useState('');
    const [orderQty, setOrderQty] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      if(orderName === "" || orderName === undefined){
        setError(true)
        return
      }
      let orderArray ={
        orderName:orderName,
        orderQty:orderQty
      }
      onSubmit(orderArray);
      setOrderName('');
      setOrderQty('')
    };

    return (
      <div className='textaligncenter'>
        <h2>Create New Order</h2>
        <form onSubmit={handleSubmit}>
          <div className='display'>
          <label>
           <div className='mrgRt'>Order Name </div> 
            <input
              type="text"
              value={orderName}
              className='borderRadius'
              onChange={(e) => setOrderName(e.target.value)}
            />
          </label>
          <label>
           <div className='mrgRt'>Quantity</div> 
            <input
              type="text"
              value={orderQty}
              className='borderRadius'
              onChange={(e) => setOrderQty(e.target.value)}
            />
          </label>
          
          </div>
          {error === true && <div className='errorStyle' style={{ color: 'red' }}>Please fill Order</div>}
          <button type="submit" className='btnStyle mrgBtm'>Create Order</button>
         
        </form>
      </div>
    );
}
export default OrderForm;