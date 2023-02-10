describe('AnimeRecomendations', () => {
  it('should dispatch an action to get the list of animes', () => {});

  describe('before list of animes has loaded', () => {
    it('renders a loading view', () => {});
  });

  describe('when the list of animes has been loaded successfully', () => {
    describe('AnimeCard', () => {
      it('renders one for each anime returned from the API', () => {});
    });
  });

  describe('when there was an error loading the list of animes', () => {
    it('renders an error view', () => {});
  });
});
