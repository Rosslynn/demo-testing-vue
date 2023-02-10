<template>
  <div class="anime-card">
    <router-link data-test-id="anime-card" :to="{ name: 'anime-information', params: { id }}">
      {{  id  }} - {{  title  }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .anime-card {
    padding: .125rem;

    a {
      color: rgb(13, 13, 13);
      text-decoration: none;

      &:hover {
        color: #42b983;
      }
    }
  }

</style>
