<template lang="pug">
  button.button(:id="prop.id", :class="prop.classes", @click="prop.callback(prop.callbackKey)", :disabled="prop.disabled") {{ prop.label }}
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './Btn';

export default{
  props: {
    prop: {
      type: Model,
    }
  }
}
</script>
