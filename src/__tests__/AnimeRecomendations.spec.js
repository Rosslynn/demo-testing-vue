import {
  createLocalVue, shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';
import AnimeRecomendations from '../views/anime/AnimeRecomendations.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const animes = [
  {
    mal_id: 5114,
    title: 'Fullmetal Alchemist: Brotherhood',
  },
  {
    mal_id: 41467,
    title: 'Bleach: Sennen Kessen-hen',
  },
];

const store = new Vuex.Store({
  modules: {
    animeModule: {
      namespaced: true,
      state: {
        animes,
      },
      actions: {
        getAnimes: vi.fn(),
      },
    },
  },
});
store.dispatch = vi.fn();

let wrapper;

describe('AnimeRecomendations', () => {
  it('should dispatch an action to get the list of animes', () => {
    shallowMount(AnimeRecomendations, {
      store,
      localVue,
    });

    expect(store.dispatch).toHaveBeenCalledWith('animeModule/getAnimes');
  });

  describe('when the list of animes has been loaded successfully', () => {
    describe('AnimeCard', () => {
      it('renders one for each anime returned from the API', () => {
        wrapper = shallowMount(AnimeRecomendations, {
          store,
          localVue,
        });

        const animeCards = wrapper.findAllComponents({ name: 'AnimeCard' });

        expect(animeCards).toHaveLength(animes.length);
      });
    });
  });
});
