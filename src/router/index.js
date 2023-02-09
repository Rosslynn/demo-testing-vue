import AnimeLayout from '@/views/anime/AnimeLayout.vue';
import AnimeRecomendationsVue from '@/views/anime/AnimeRecomendations.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

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
