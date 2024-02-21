import OrderList from '../orderList/orderList';
import OrderForm from '../orderForm/orderForm';
import OrderDetails from '../orderDetails/orderDetails'
import React, { useState } from 'react';
import Header  from '../Header/header';
import './Home.css'
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [orders, setOrders] = useState([
      ]);
      // let subtitle;
      const [modalIsOpen, setIsOpen] = useState(false);
      const [selectedOrder, setSelectedOrder] = useState(null);
      const [noRecord,setnoRecord] = useState(true);
      const [tableVal,setTableVal] = useState(0);
      const [temp,setTemp] = useState([])
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
        setnoRecord(false)
        setSelectedOrder(selected);
      };
      const notify = () => toast.error("Please select Table");

      function openModal() {
        if(tableVal == ''){
          notify()
          return;
        }
        setIsOpen(true);
      }
      const onDeleteOrder = (val) =>{
        const RemoveArray = orders.filter((data)=>data.id !== val )
        setOrders(RemoveArray);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const getTableName = (tableName) => {
        setTableVal(tableName)
        GetCurrentTable(orders)
      }
      const handleCreateOrder = (val) => {
        const newOrder = { id: orders.length + 1, name: val.orderName ,Qty:val.orderQty,tablename:tableVal};
        setOrders([...orders, newOrder]);
        closeModal()
      };
      const GetCurrentTable  =(order) => {
        const currentArray = order.filter((val)=>val.tablename === tableVal);
        setTemp(order)
        if(currentArray.length > 0){
          setOrders(currentArray)
        }
        else{
          setOrders([])
        }
        setOrders(temp)
      }
    return (
        <div>
          <ToastContainer />
        <Header orderCount = {orders.length} />
        <div className='createBtns'>
        <select className='dropdownstyle' 
        onChange={(event) => getTableName(event.target.value)}>
        <option value="0">Select Table</option>
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
        </select>
        
        <button className={ tableVal === 0 ? "btnStyle" : 'btnStyle cursor'} onClick={openModal}>Create Order</button>
        
            </div>
       
        <div className='cardDesign'>
          <div className='width50'>
          <OrderList orders={orders} onOrderClick={handleOrderClick} onDeleteOrder={onDeleteOrder} />
          </div>
          <div className='width10'>
          <OrderDetails order={selectedOrder} noRecord={noRecord} />
          </div>
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