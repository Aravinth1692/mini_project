const OrderList = ({ orders, onOrderClick }) => {
    return (
        <div>
          <h2>Order List</h2>
          <ul>
            {orders.map(order => (
              <li key={order.id} onClick={() => onOrderClick(order.id)}>
                {order.name}
              </li>
            ))}
          </ul>
        </div>
      );
}
export default OrderList;