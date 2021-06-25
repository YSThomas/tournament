import {createRouter, createWebHistory} from "vue-router";

import Tournament from "../components/Tournament";


export default createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      component: Tournament
    }
  ]
})