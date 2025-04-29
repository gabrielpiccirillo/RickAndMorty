import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';
import { Character } from '../types/character';
import { getCharacters } from '../service/api';
import '../css/home.css'; 

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const data = await getCharacters(currentPage);
        
        data.results.map((item) => {
          if(item.location.name === 'unknown'){
            item.location.name = 'Desconhecido'
          }
          if(item.status === 'unknown'){
            item.status = 'Desconhecido'
          }
        })
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error fetching characters:", error);
        alert("Ocorreu um erro ao carregar os personagens. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const user = localStorage.getItem('name');
  
  return (
    <div className="home-container">
      <Header userName={user || ''} />
      <div className="home-content">
        <h1 className="home-title">Rick and Morty Characters</h1>
        {loading ? (
          <div className="text-center text-gray-500">
            <svg
              className="animate-spin h-8 w-8 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25 cx-12 cy-12 r-10 stroke-current stroke-width-4"
                stroke="#4B5563"
              ></circle>
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="#4B5563"
              ></path>
            </svg>
            Carregando personagens...
          </div>
        ) : (
          <div>
            <div className="characters-grid">
              {characters.map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
            <div className="pagination-container">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;