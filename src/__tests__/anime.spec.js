import animeModule from '../store/modules/anime';
import { getTopAnimes, getAnimeById } from '../services/animeService';

vi.mock('../services/animeService');

beforeEach(() => {
  vi.clearAllMocks();
});

describe('anime', () => {
  describe('mutations', () => {
    describe('SET_ANIMES', () => {
      it('should add the list of animes to the state', () => {
        const state = {
          animes: [],
        };
        const bestAnimesOfTheWorld = [{ 1: 'Sí', 2: 'No' }];

        animeModule.mutations.SET_ANIMES(state, bestAnimesOfTheWorld);

        expect(state.animes).toEqual(bestAnimesOfTheWorld);
      });
    });

    describe('SET_ANIME', () => {
      it('should add the anime from which you are getting more information about it to the state', () => {
        const currentAnime = { id: 1234, title: 'Diamante Eléctrico' };
        const state = {
          anime: currentAnime,
        };

        animeModule.mutations.SET_ANIME(state, currentAnime);

        expect(state.anime).toEqual(currentAnime);
      });
    });
  });

  describe('actions', () => {
    describe('getAnimes', () => {
      it('should get the list of anime and save them in the state', async () => {
        const commit = vi.fn();
        const animes = [{ id: 1234, title: 'Rotos' }, { id: 456, title: 'Oro' }];
        const mockAnimeList = {
          data: {
            data: animes,
          },
        };

        getTopAnimes.mockResolvedValue(mockAnimeList);

        await animeModule.actions.getAnimes({ commit });

        expect(getTopAnimes).toHaveBeenCalledOnce();
        expect(commit).toHaveBeenCalledWith('SET_ANIMES', animes);
      });
    });

    describe('getAnime', () => {
      it('should obtain information on a specific anime and save it in the state', async () => {
        const commit = vi.fn();
        const anime = { id: 789, title: 'Amalia' };
        const mockAnimeInformation = {
          data: {
            data: anime,
          },
        };

        getAnimeById.mockResolvedValue(mockAnimeInformation);
        await animeModule.actions.getAnime({ commit }, anime.id);

        expect(getAnimeById).toHaveBeenCalledWith(anime.id);
        expect(commit).toHaveBeenCalledWith('SET_ANIME', anime);
      });
    });
  });
});
