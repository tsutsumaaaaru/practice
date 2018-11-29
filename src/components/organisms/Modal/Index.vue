<template lang="pug">
  div(:class='prop.classes')
    .modal-trigger(@click='toggle')
      slot(name='trigger', :open='isOpen')
    transition(:name='prop.animation')
      .modal-content(@click.self='toggle',v-show='isOpen')
        slot
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import Model from './Modal';

export default {
  name: 'Modal',
  props: {
    prop: Model
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  watch: {
    'prop': {
      handler: function (val, oldVal) {
        this.isOpen = this.prop.open
      },
      deep: true
    }
  },
  moutnted() {
    console.log(this.prop)
    this.isOpen = this.prop.open
  },
  methods: {
    toggle() {
      console.log('hoge')
      this.$data.isOpen = !this.$data.isOpen
    }
  }
}
</script>
