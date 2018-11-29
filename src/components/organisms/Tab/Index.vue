<template lang="pug">
  div
    div(:class="prop.classes")
      nav
        ul
          li(v-for='(tabItem, index) in tabItems', :key='index', :class="[activeTab === index ? getActiveClass : '', prop.tabItemClasses]", @click='tabClick(index)')
            a
              template
                span {{ tabItem.prop.label }}
    section.tab-content
      slot
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Model from "./Tab";

@Component({
  props: {
    prop: Model,
  },
  data: () => {
    return {
      activeTab: 0,
      tabItems: [],
      _isTabs: true
    }
  },
  computed: {
    getActiveClass: function() {
      return this.$props.activeClasses ? this.$props.prop.activeClasses : 'tab-active';
    }
  },
  methods: {
    changeTab(newIndex) {
      if (this.$data.activeTab === newIndex) return
      this.$data.tabItems[this.$data.activeTab].deactivate(this.$data.activeTab, newIndex)
      this.$data.tabItems[newIndex].activate(this.$data.activeTab, newIndex)
      this.$data.activeTab = newIndex
      this.$emit('change', newIndex)
    },
    tabClick(value) {
      this.changeTab(value);
    }
  },
  watch: {
    value(value) {
      this.changeTab(value)
    },
    tabItems(value) {
      if (this.tabItems.length) {
        this.tabItems[this.activeTab].isActive = true
      }
    }
  },

})
export default class Tab extends Vue {}
</script>
