const OrderDetails = ({ order }) =>{
    return (
        <div>
          <h2>Order Details</h2>
          {order && (
            <div>
              <p>ID: {order.id}</p>
              <p>Name: {order.name}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      );
}
export default OrderDetails;