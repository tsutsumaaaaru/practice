<template lang="pug">
label(:class="prop.classes") {{prop.label}}
  input(:id="prop.id", type="file" ,@change="prop.callback(prop.callbackKey, $event, prop.id)", style="display: none;", :placeholder="prop.placeholder")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Model from './FileInpt'

export default{
  props: {
    prop: {
      type: Model,
    }
  }
}
</script>
