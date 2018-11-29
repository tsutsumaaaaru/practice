<template lang='pug'>
  #app(:class="{ 'layout_trace_sidemenu': needSideMenu, 'layout_trace': !needSideMenu }")
    side-menu.sidemenu_adsalary(v-if="needSideMenu", :prop="componentProps.sideMenuModel")
    router-view
</template>
<script>
import SideMenu from '@/components/organisms/SideMenu/Index.vue'
import SideMenuModel from '@/components/organisms/SideMenu/SideMenu'
import SideMenuItemModel from '@/components/organisms/SideMenu/SideMenuItem';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export default {
  data () {
    return {
      componentProps: {
        sideMenuModel: [],
      },
      needSideMenu: false
    }
  },
  components: {
    SideMenu
  },
  created() {
    this.componentProps.sideMenuModel = new SideMenuModel([
      new SideMenuItemModel('Startups', 'Attendance'),
      new SideMenuItemModel('Apps', 'Payroll'),
      new SideMenuItemModel('Gadgets', 'Employee'),
      new SideMenuItemModel('Events', 'Setting'),
      new SideMenuItemModel('Video', 'Setting'),
    ])
  },
  watch: {
    '$route' (to, from) {
      this.needSideMenuLayout(this.$route.path)
    }
  },
  mounted() {
    this.needSideMenuLayout(this.$route.path)
  },
  methods: {
    childCallback(key, value) {
      switch (key) {
        case CALLBACK_KEY_ADD_PROJECT:
          this.$router.push({name: 'Create'})
          break;
        default:
          break;
      }
    },
    needSideMenuLayout(pathName) {
      switch(pathName) {
        case '/mit':
        case '/search':
          this.needSideMenu = true
          break;
        default:
          this.needSideMenu = false
          break;
      }
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main.styl'
</style>
