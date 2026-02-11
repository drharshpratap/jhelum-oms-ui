function ClientOrdersList({ clientId }) {
  const orders = [
    { id: 'ORD-101', date: '2024-01-12', amount: '₹12,000', status: 'Completed' },
    { id: 'ORD-102', date: '2024-02-03', amount: '₹8,500', status: 'Pending' }
  ];

  return (
    <div>
      <h4 className="font-medium mb-2">Previous Orders</h4>
      <ul className="space-y-1">
        {orders.map(order => (
          <li key={order.id} className="text-sm text-gray-700">
            {order.id} • {order.date} • {order.amount} • {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientOrdersList;
