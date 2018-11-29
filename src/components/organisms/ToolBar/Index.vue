<template lang="pug">
  .toolBar
    .toolBar_title.ml-1(@click="itemClick(prop)") {{prop.label}}
    .flexed.mr-1
      .toolBar_item.p-p8(v-if='!prop.menuItemDisable',v-for="menuItem in prop.menuItems", @click="itemClick(menuItem)", :class="{ 'toolBar_item-active': isItemActive(menuItem) }") {{ menuItem.label }}
      .toolBar_item.p-p8(v-if='!prop.menuItemDisable', @click='logOutReq') Logout
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './ToolBar';

export default{
  name: 'ToolBar',
  props: {
    prop: Model
  },
  methods: {
    logOutReq() {
      localStorage.removeItem('session')
      localStorage.removeItem('session_expire')
      localStorage.removeItem('uuid')
      localStorage.removeItem('salt')
      localStorage.removeItem('admin_id')
      window.location.href = '/signin'
    },
    itemClick(item) {
      this.$router.push({ name: item.href})
    },
    isItemActive(item) {
      return item.href === this.$route.name
    }
  }
}
</script>
