<template>
  <div>
    <div>
      <strong>Título: </strong> {{ anime.title }}
      <br>
    </div>
    <div>
      <img :src="getAnimeImgUrl" alt="Anime imagen">
    </div>

    <div>
      <strong>Información: </strong> {{  anime.background  }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AnimeInformation',
  async created() {
    this['animeModule/getAnime'](this.$route.params.id);
  },
  computed: {
    ...mapState('animeModule', {
      anime: (state) => state.anime,
    }),
    getAnimeImgUrl() {
      return this.anime.images.jpg.image_url;
    },
  },
  methods: {
    ...mapActions([
      'animeModule/getAnime',
    ]),
  },
};
</script>

<style lang="scss" scoped>

</style>
