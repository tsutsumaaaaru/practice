<template lang="pug">
div
  .select_wrap
    select(:id="prop.id", :type="prop.type", :class="prop.classes", @change="prop.callback(prop.callbackKey,  $event.target.value)", :disabled="prop.disabled")
      option(v-for="option in prop.options", :value="JSON.stringify(option)", :label="prop.optionDisplayKey ? option[prop.optionDisplayKey] : option")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Model from './SelectBox';

@Component({
  props: {
    prop: {
      type: Model,
    }
  }
})
export default class SelectBox extends Vue {}
</script>
