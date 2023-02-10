/* eslint-disable no-param-reassign */
import AnimeLayout from '@/views/anime/AnimeLayout.vue';
import AnimeRecomendationsVue from '@/views/anime/AnimeRecomendations.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/animes',
    name: 'animes',
    component: AnimeLayout,
    children: [
      {
        path: '',
        name: 'anime-recomendations',
        component: AnimeRecomendationsVue,
      },
      {
        path: ':id',
        name: 'anime-information',
        component: () => import('@/views/anime/AnimeInformation.vue'),
        props: true,
        async beforeEnter(to, from, next) {
          try {
            await store.dispatch('animeModule/getAnime', to.params.id);
            to.params.anime = store.state.animeModule.anime;
            next();
          } catch (error) {
            // next({ name: 'not-found-view' });
            console.log(error);
          }
        },
      },
    ],
  },
  {
    path: '*',
    redirect: { name: 'animes' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
