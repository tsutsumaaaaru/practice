<template lang="pug">
div
  div(@focus="func($event)", tabIndex="0") button
  p(v-if="true") hoge
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './Dropdown';

export default {
  props: {
    prop: {
      type: Model,
    }
  },
  watch: {
    'document.hasFocus': function() {
      console.log('has focus')
    }
  },
  methods: {
    func(e) {
      console.log(e.target.hasFocus());
    }
  }
}
</script>
