
const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center gap-2 py-3">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-3 py-1 rounded ${
            number === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
