import React from 'react';
import '../css/pagination.css'; 

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      alert('Você está na primeira página.');
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else {
      alert('Você está na última página.');
    }
  };

  return (
    <div className="pagination-container"> 
      <button onClick={handlePreviousPage} className="page-button prev-button">
        Anterior
      </button>
      <span className="page-number">Página {currentPage} de {totalPages}</span>
      <button onClick={handleNextPage} className="page-button next-button">
        Próxima
      </button>
    </div>
  );
};

export default Pagination;