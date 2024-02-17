import './orderDetails.css'

const OrderDetails = ({ order }) =>{
    return (
        <div >
          <h2>Order Details</h2>
          {order && (
            <div className="border"> 
              <p>ID: {order.id}</p>
              <p>Name: {order.name}</p>
              <p>Qty: {order.Qty}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      );
}
export default OrderDetails;