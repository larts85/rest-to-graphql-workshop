import fetch from "node-fetch";

export const fetchEpisodes = () => {
  return fetch("https://rickandmortyapi.com/api/episode/")
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .then((json) => json.results);
};

export const fetchEpisodeById = (id) => {
  return fetch("https://rickandmortyapi.com/api/episode/" + id)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchEpisodeByUrl = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const fetchCharacterById = (id) => {
  return fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchCharacterByUrl = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};
