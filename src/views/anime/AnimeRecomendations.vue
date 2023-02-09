<template>
  <div>
    <anime-card v-for="({ mal_id, title }) in animes" :id="mal_id" :title="title" :key="mal_id" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AnimeCard from './AnimeCard.vue';

export default {
  name: 'AnimeRecomendations',
  components: {
    AnimeCard,
  },
  async created() {
    await this['animeModule/getAnimes']();
  },
  computed: {
    ...mapState('animeModule', {
      animes: (state) => state.animes,
    }),
  },
  methods: {
    ...mapActions([
      'animeModule/getAnimes',
    ]),
  },
};
</script>

<style lang="scss" scoped>

</style>
