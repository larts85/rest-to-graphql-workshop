import {
  fetchCharacterById,
  fetchCharacters,
  fetchEpisodeById,
  fetchEpisodes,
} from "../database";
import { characters } from "../database/characters";
import { episodes } from "../database/episodes";
// Resolvers define the technique for fetching the types in the

// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
  Query: {
    character: (parent, { id }) => fetchCharacterById(id),
    characters: () => fetchCharacters(),
    episodes: () => fetchEpisodes(),
    episode: (parent, { id }) => fetchEpisodeById(id),
  },
};
