<template>
  <div>
    <div>
      <strong>Título: </strong> {{ anime.title }}
      <br>
    </div>
    <div>
      <img data-test-id="anime-image"
      :src="anime.images.jpg.image_url" alt="Imagen del anime">
    </div>

    <div>
      <strong>Información: </strong> {{  anime.background || 'N/A' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeInformation',
  props: {
    anime: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
