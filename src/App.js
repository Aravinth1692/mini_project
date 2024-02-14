
import './App.css';
import React, { useState } from 'react';
import OrderList from './Component/orderList/orderList';
import OrderDetails from './Component/orderDetails/orderDetails';
import OrderForm from './Component/orderForm/orderForm'

const App = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
    // Add more initial orders as needed
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (orderId) => {
    const selected = orders.find(order => order.id === orderId);
    setSelectedOrder(selected);
  };

  const handleCreateOrder = (orderName) => {
    const newOrder = { id: orders.length + 1, name: orderName };
    setOrders([...orders, newOrder]);
  };

  return (
    <div>
      <OrderList orders={orders} onOrderClick={handleOrderClick} />
      <OrderDetails order={selectedOrder} />
      <OrderForm onSubmit={handleCreateOrder} />
    </div>
  );
};

export default App;
