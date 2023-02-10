import { shallowMount } from '@vue/test-utils';
import AnimeInformation from '../views/anime/AnimeInformation.vue';

describe('AnimeInformation', () => {
  it('should render the anime information', () => {
    const anime = {
      title: 'Katekyō Hitman Reborn!',
      images: {
        jpg: {
          image_url: 'https://play.google.com/store/apps/details?id=com.hitman.reborngg&hl=es_CO&gl=US',
        },
      },
      background: 'Un anime buenazo',
    };

    const wrapper = shallowMount(AnimeInformation, {
      propsData: {
        anime,
      },
    });
    const wrapperHTML = wrapper.html();
    const animeImage = wrapper.find('[data-test-id="anime-image"]');

    expect(wrapperHTML).toContain(anime.title);
    expect(wrapperHTML).toContain(anime.background);
    expect(wrapperHTML).not.toContain('N/A');
    expect(animeImage.attributes('src')).toBe(anime.images.jpg.image_url);
    expect(animeImage.element.tagName).toBe('IMG');
  });

  it('if the background of the anime is not available should render N/A', () => {
    const anime = {
      title: 'Otro anime',
      images: {
        jpg: {
          image_url: 'otra url',
        },
      },
    };

    const wrapper = shallowMount(AnimeInformation, {
      propsData: {
        anime,
      },
    });

    expect(wrapper.html()).toContain('N/A');
  });
});
