import './orderDetails.css'

const OrderDetails = ({ order , noRecord}) =>{
    return (
        <div >
          <h2 className='textalign'>Order Details{}</h2>
          { noRecord === true ? 
            <div className="borderval border"> 
            <div>No Record Found </div>
            </div>  : 
          <div>
        {order && (
            <div className="border"> 
              <p>ID: {order.id}</p>
              <p>Name: {order.name}</p>
              <p>Qty: {order.Qty}</p>
              {/* Add more details as needed */}
            </div>
          )}
          </div>
          

          }
         
        </div>
      );
}
export default OrderDetails;