<template lang="pug">
  textarea(:id="prop.id", :type="prop.type", :rows="prop.rows", :cols="prop.cols" ,:class="prop.classes", v-model="inputVal", @input="prop.callback(prop.callbackKey, inputVal, prop.id)", :disabled="prop.disabled", :placeholder="prop.placeholder")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Model from './TextArea'

@Component({
  props: {
    prop: {
      type: Model
    }
  },
  data () {
    return {
      inputVal: ''
    }
  },
  watch: {
    'prop': {
      handler: function (val, oldVal) {
        if (this.prop.isDefault) {
          this.inputVal = this.prop.defaultValue
        } else {
          return
        }
      },
      deep: true
    }
  },
  mounted() {
    if (this.prop.isDefault) {
      this.inputVal = this.prop.defaultValue
    } else {
      return
    }
  }
})
export default class TextArea extends Vue {}
</script>
