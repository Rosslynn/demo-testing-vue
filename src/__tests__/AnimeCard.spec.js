import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import AnimeCard from '../views/anime/AnimeCard.vue';

describe('AnimeCard', () => {
  it('should display the information of the anime', () => {
    const mockCardProps = {
      id: 321,
      title: 'Self Care',
    };

    const wrapper = shallowMount(AnimeCard, {
      propsData: mockCardProps,
      stubs: {
        RouterLink: true,
      },
    });
    const wrapperHTML = wrapper.html();

    expect(wrapperHTML).toContain(mockCardProps.id);
    expect(wrapperHTML).toContain(mockCardProps.title);
  });

  describe('when clicked', () => {
    it('goes to the information page', () => {
      const mockCardProps = {
        id: 765,
        title: 'Pizza',
      };
      const expectedResult = { name: 'anime-information', params: { id: mockCardProps.id } };

      const wrapper = shallowMount(AnimeCard, {
        propsData: mockCardProps,
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const animeCard = wrapper.findComponent(RouterLinkStub);

      expect(animeCard.props().to).toEqual(expectedResult);
    });
  });
});
