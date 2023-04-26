import { useState } from 'react';

export const Pagination = ({
  totalPages,
  onChange,
  className,
  siblings = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
    if (onChange) {
      onChange(page);
    }
  };

  const renderPaginationItem = (pageIndex) => (
    <button
      key={pageIndex}
      onClick={() => goToPage(pageIndex)}
      className={`px-3 py-2 ${
        pageIndex === currentPage
          ? 'bg-indigo-600 text-white font-semibold border border-indigo-600'
          : 'border border-transparent text-indigo-600 hover:border-gray-300'
      }`}
    >
      {pageIndex}
    </button>
  );

  const renderPaginationItems = () => {
    const range = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i > currentPage - siblings && i < currentPage + siblings) {
        range.push(i);
      }
    }
    return range
    .map((page) => renderPaginationItem(page));
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button
        onClick={() => goToPage(Math.max(currentPage - 1, 1))}
        className="px-3 py-2 bg-white border border-gray-300 text-indigo-600"
      >
        &laquo; Prev
      </button>
      {renderPaginationItems()}
      <button
        onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-2 bg-white border border-gray-300 text-indigo-600"
      >
        Next &raquo;
      </button>
    </div>
  );
};





