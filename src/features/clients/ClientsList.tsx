import { useNavigate } from 'react-router-dom';

function ClientsList({ clients }) {
  const navigate = useNavigate();

  const handleViewPortfolios = (client) => {
    navigate(`/clients/${client.id}/portfolios`, {
      state: { clientName: client.name }
    });
  };

  return (
    <div>
      {clients.map(client => (
        <div key={client.id} className="mb-2">
          <span>{client.name}</span>
          <button
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => handleViewPortfolios(client)}
          >
            View Portfolios
          </button>
        </div>
      ))}
    </div>
  );
}

export default ClientsList;
