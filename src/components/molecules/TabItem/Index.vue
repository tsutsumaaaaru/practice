<template lang="pug">
  transition(:name='transitionName')
    .tab-item(v-show='isActive')
      slot
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './TabItem';

export default {
  props: {
    prop: {
      type: Model,
    }
  },
  data: () => {
    return {
      isActive: false,
      transitionName: null
    };
  },
  methods: {
    activate(oldIndex, index) {
      this.$data.transitionName = index < oldIndex ? "slide-next" : "slide-prev";
      this.$data.isActive = true;
    },
    deactivate(oldIndex, index) {
      this.$data.transitionName = index < oldIndex ? "slide-next" : "slide-prev";
      this.$data.isActive = false;
    }
  },
  created() {
    if (!this.$parent.$data._isTabs) {
      this.$destroy();
      throw new Error("You should wrap bTabItem on a bTabs");
    }
    this.$parent.tabItems.push(this);
  },
  beforeDestroy() {
    const index = this.$parent.tabItems.indexOf(this);
    if (index >= 0) {
      this.$parent.tabItems.splice(index, 1);
    }
  }
}
</script>
