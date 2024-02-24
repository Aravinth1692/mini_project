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
      const [selectedOrder, setSelectedOrder] = useState(null);   //Main array
      const [noRecord,setnoRecord] = useState(true);
      const [tableVal,setTableVal] = useState();
      const [temp,setTemp] = useState([])     // filter array
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'30%'
        },
      };
 
      const handleOrderClick = (orderId) => {
        const selected = orders.find(order => order.id === orderId);
        setnoRecord(false)
        setSelectedOrder(selected);
      };
      const notify = () => toast.error("Please select Table");

      function openModal() {
        if(tableVal === '' || tableVal === undefined){
          notify()
          return;
        }
        setIsOpen(true);
      }
      const onDeleteOrder = (val) =>{
        const RemoveArray = orders.filter((data)=>data.id !== val )
        const RemoveTempArray = temp.filter((data)=>data.id !== val )
        setTemp(RemoveTempArray)
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
        if(tableName === '0'){
          setTemp(orders)
          return
        }
        const currentArray = orders.filter((val)=>val.tablename === tableName);
        
        if(currentArray.length > 0){
          setTemp(currentArray)
        }
        else{
          setTemp([])
        }
      }
      const handleCreateOrder = (val) => {
        const newOrder = { id: orders.length + 1, name: val.orderName ,Qty:val.orderQty,tablename:tableVal};
        setOrders([...orders, newOrder]);
        setTemp([...temp, newOrder]);
        closeModal()
      };
      
    return (
        <div>
          <ToastContainer />
        <Header orderCount = {temp.length} />
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
          <OrderList orders={temp} onOrderClick={handleOrderClick} onDeleteOrder={onDeleteOrder} />
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