<template lang="pug">
  div
    table(:class="prop.classes")
      thead
        th(v-for="label in prop.tableData.headerLabels") {{ label }}
      tbody
        tr(v-for="data in prop.tableData.data", :key='data.id')
          td(v-for="key in prop.tableData.propKeys") {{ data[key] }}
          td
            slot(:data='data')
          td
            slot(name="2",:data='data')
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import Model from './ListTable'

@Component({
  name: 'ListTable',
  components: {
  },
  props: {
    prop: Model
  },
  methods: {
  }
})
export default class ListTable extends Vue {}
</script>
