<template lang="pug">
  div(:class="prop.classes")
    .collapse-trigger(@click='toggle')
      slot(name='trigger', :open='isOpen')
    transition(:name="prop.animation")
      .collapse-content(v-show="isOpen")
        slot
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './Collapse';

@Component({
  name: 'Collapse',
  props: {
    prop: Model
  },
  data: () => {
    return {
      isOpen: true
    }
  },
  mounted() {
    console.log(this.prop)
    this.isOpen = this.prop.open
  },
  methods: {
    toggle() {
      this.$data.isOpen = !this.$data.isOpen;
    }
  }
})
export default class Collapse extends Vue {}
</script>
