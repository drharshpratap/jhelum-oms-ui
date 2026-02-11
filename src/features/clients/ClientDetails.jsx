import ClientOrdersList from './components/ClientOrdersList';

function ClientDetails({ client }) {
  const address = {
    line1: '123 Business Park',
    city: 'Bangalore',
    country: 'India'
  };

  return (
    <div className="p-4 bg-gray-50 rounded border">
      <div className="mb-3">
        <h3 className="text-lg font-semibold">{client.name}</h3>
        <p className="text-sm text-gray-600">
          {address.line1}, {address.city}, {address.country}
        </p>
      </div>

      <ClientOrdersList clientId={client.id} />
    </div>
  );
}

export default ClientDetails;
