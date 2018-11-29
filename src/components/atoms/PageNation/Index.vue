<template lang="pug">
  div(class='pagination_wrapper')
    div
      p.pagenation_arrow(@click="prop.callback(prop.callbackKey, 1)") <<
    div
      div.pagenations
        p(v-if='prop.page - 1 >= 1', :class="prop.classes",@click="prop.callback(prop.callbackKey, prop.page - 1)") {{prop.page - 1}}
        p(v-if='prop.page - 1 < 1', :class="prop.classes")
        p(:class="{ 'pagenation': true, 'pagenation-active': true }") {{prop.page}}
        p(v-if='prop.page + 1 <= counts', :class="prop.classes",@click="prop.callback(prop.callbackKey, prop.page + 1)") {{prop.page + 1}}
        p(v-if='prop.page + 1 > counts', :class="prop.classes")
    div
      p.pagenation_arrow(@click="prop.callback(prop.callbackKey, counts)") >>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Model from './PageNation'

export default {
  props: {
    prop: {
      type: Model
    }
  },
  data () {
    return {
      counts: null
    }
  },
  watch: {
    'prop': {
      handler: function (val, oldVal) {
        if (this.prop.amount % this.prop.perPage === 0 || this.prop.amount === 1) {
          this.counts = this.prop.amount / this.prop.perPage
        } else {
          this.counts = this.prop.amount / this.prop.page + 1
        }
      },
      deep: true
    }
  },
  mounted () {
    if (this.prop.amount % this.prop.perPage === 0 || this.prop.amount === 1) {
      this.counts = this.prop.amount / this.prop.perPage
    } else {
      this.counts = this.prop.amount / this.prop.perPage + 1
    }
  }
}
</script>
