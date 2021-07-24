import {
  fetchCharacterById,
  fetchCharacterByUrl,
  fetchCharacters,
  fetchEpisodeById,
  fetchEpisodeByUrl,
  fetchEpisodes,
} from "../database";

export const resolvers = {
  Query: {
    character: (_, { id }) => fetchCharacterById(id),
    characters: () => fetchCharacters(),
    episodes: () => fetchEpisodes(),
    episode: (_, { id }) => fetchEpisodeById(id),
  },
  Episode: {
    characters: ({ characters }) => characters.map(fetchCharacterByUrl),
  },
  Character: {
    episodes: ({ episode }, args, context, info) =>
      episode.map(fetchEpisodeByUrl),
  },
};
