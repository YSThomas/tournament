import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'main',
      component: () => import(/* webpackChunkName: "main"*/ "../view/TournamentPage")
    }
  ]
})