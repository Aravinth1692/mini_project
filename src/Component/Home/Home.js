import OrderList from '../orderList/orderList';
import OrderForm from '../orderForm/orderForm';
import OrderDetails from '../orderDetails/orderDetails'
import React, { useState } from 'react';
import Header  from '../Header/header';
import './Home.css'
import Modal from 'react-modal';

const Home = () => {
    const [orders, setOrders] = useState([
      { id: 1, name: 'Order 1',Qty:3 },
      { id: 1, name: 'Order 1',Qty:3 }
      

        
        // Add more initial orders as needed
      ]);
      // let subtitle;
      const [modalIsOpen, setIsOpen] = useState(false);
      const [selectedOrder, setSelectedOrder] = useState(null);
    
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
 
      const handleOrderClick = (orderId) => {
        const selected = orders.find(order => order.id === orderId);
        setSelectedOrder(selected);
      };
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const handleCreateOrder = (val) => {
        const newOrder = { id: orders.length + 1, name: val.orderName ,Qty:val.orderQty};
        setOrders([...orders, newOrder]);
        closeModal()
      };
    return (
        <div>
        <Header orderCount = {orders.length} />
        <div className='createBtns'>
            <button className='btnStyle' onClick={openModal}>Create Order</button>
            </div>
        <div className='cardDesign'>
          <div className='width50'>
          <OrderList orders={orders} onOrderClick={handleOrderClick} />
          </div>
          {/* <div className='width10'>
          <OrderDetails order={selectedOrder} />
          </div> */}
        </div>
        
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <OrderForm onSubmit={handleCreateOrder} />

       
      </Modal>
      </div>
      
      );
}
export default Home;