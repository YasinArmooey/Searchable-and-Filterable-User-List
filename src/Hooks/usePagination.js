import { useState } from "react";

const usePagination = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(8);

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = data.slice(indexOfirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return { currentPage, currentUsers, paginate, usersPerPage, setUsersPerPage };

 
};

export default usePagination;
