
const ResultsList = ({ data = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 border-b">ID</th>
            <th className="px-4 py-3 border-b">Name</th>
            <th className="px-4 py-3 border-b">Email</th>
            <th className="px-4 py-3 border-b">Location</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center font-medium">{item.name}</td>
              <td className="px-4 py-2 text-center text-gray-600">{item.email}</td>
              <td className="px-4 py-2 text-center">{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default ResultsList;
