import axios from 'axios';
import { Character } from '../types/character';

const API_URL = 'https://rickandmortyapi.com/api';

interface CharactersResponse {
  info: {
    pages: number;
  };
  results: Character[];
}

export const getCharacters = async (page: number): Promise<CharactersResponse> => {
  const response = await axios.get(`${API_URL}/character?page=${page}`);
  return response.data;
};