import './orderList.css'

const OrderList = ({ orders, onOrderClick,onDeleteOrder }) => {
    return (
        <div>
          <h2>Order List </h2>
          <div className='listDesign mrgRight'>
          {
            orders.length === 0 ?
            <div className='norecord'> 
            No Record Found
                </div>:
            <div className={orders.length <= 10 ? 'scrollDisbale' : 'listStyle'}>

            <div className="display_flex align_item">
               {orders.map(order => (
               <div className="ItemDesign" >
                        <div  onClick={() => onOrderClick(order.id)}>
                        <div className='card_bg_color' >
                            <div className='sale_design'>

                                <div> {order.name}</div>
                            </div>
                        </div>
                        <div className="desc_mrg_top">
                            Quantity : {order.Qty}
                        </div>
                        </div>
                       
                        <div className="desc_mrg_top" onClick={() => onDeleteOrder(order.id)}>
                            <button>Remove</button>
                        </div>
                    </div>
                    
               ))}
              </div>
              </div>
              
          //   <ul className={orders.length < 13 ? 'scrollDisbale' : 'listStyle'}>
          //   {orders.map(order => (
          //     <li key={order.id} className='cursor'  onClick={() => onOrderClick(order.id)}>
          //       {order.name}
          //     </li>
          //   ))}
          // </ul>
          }
          </div>
          
        
        </div>
      );
}
export default OrderList;