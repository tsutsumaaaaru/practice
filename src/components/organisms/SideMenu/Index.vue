<template lang="pug">
.p-1
  .sideMenu
    .sideMenu_title.p-p8
      img(src="../../../assets/techcamp.png").wid30.height30
    .mt-p5
      .sideMenu_item.p-p8(v-for="menuItem in prop.menuItems", @click="itemClick(menuItem)", :class="{ 'sideMenu_item-active': isItemActive(menuItem) }") {{ menuItem.label }}
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './SideMenu';

export default{
  name: 'SideMenu',
  props: {
    prop: Model
  },
  methods: {
    itemClick(item) {
      console.log(item)
      this.$router.push({ name: item.href})
    },
    isItemActive(item) {
      return item.href === this.$route.name
    }
  }
}
</script>
