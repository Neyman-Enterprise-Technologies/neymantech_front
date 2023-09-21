import React, { useState } from 'react';
// import Pagination from './Pagination/Pagination';
import "./Pagination.scss"

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const totalItems = 50; // Total number of items

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderData = () => {
    // Replace this with your data fetching logic
    const data = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex).map((item, index) => (
      <div key={index}>{item}</div>
    ));
  };

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      {renderData()}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
