<template lang="pug">
  input(:id="prop.id", :type="prop.type", :class="prop.classes", @input="prop.callback(prop.callbackKey,  $event.target.value)", :disabled="prop.disabled", :placeholder="prop.placeholder")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './Inpt';

export default{
  props: {
    prop: {
      type: Model,
    }
  }
}
</script>
