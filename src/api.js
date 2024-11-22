// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharacters = async () => {
  try {
    const response = await api.get("/character");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export const fetchCharacterDetails = async (id) => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character details:", error);
    return null;
  }
};
