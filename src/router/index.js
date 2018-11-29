import Vue from 'vue';
import Router from 'vue-router';
import Components from '@/pages/Components.vue';
import Layout from '@/pages/Layout.vue';
import MIT from '@/pages/MIT.vue';
import Search from '@/pages/Search.vue';
import Ideo from '@/pages/Ideo.vue';
import practice from '@/pages/practice.vue';
import qiita from '@/pages/qiita.vue';



// import Cloudinary from '@/pages/Cloudinary.vue';


// import Nogizaka from '@/pages/Nogizaka.vue'



Vue.use(Router)

function authValidater () {
  if (localStorage.getItem('session') !== null) {
    // return
  } else {
    return '/signin'
  }
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'Components' }},
    {
      path: '/components',
      name: 'Components',
      component: Components,
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/mit',
      name: 'MIT',
      component: MIT,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/ideo',
      name: 'Ideo',
      component: Ideo,
    },
    {
      path: '/practise',
      name: 'practice',
      component: practice,
    },
    {
      path: '/qiita',
      name: 'qiita',
      component: qiita,
    },
  ],
})
