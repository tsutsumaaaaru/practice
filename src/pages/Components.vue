<template lang="pug">
div
  h1 Components
  div
    h2 Actions
    div
      .mb-1
        h4 Button
        div
          btn(:prop="componentProps.btnPrimaryModel").mb-1
        div
          btn(:prop="componentProps.btnDangerModel").mb-1
        div
          btn(:prop="componentProps.btnCancelModel").mb-1
        div
          btn(:prop="componentProps.btnMiniPrimaryModel").mb-1
        div
          btn(:prop="componentProps.btnMiniDangerModel").mb-1
        div
          textarea {{ componentProps.btnPrimaryModel }}
      .mb-1
        h4 Input
        .mb-1
          .label Label
          inpt(:prop="componentProps.inptModel")
        div
          textarea {{ componentProps.inptModel }}
      .mb-1
        h4 TextArea
        .label Label
        TextArea(:prop="componentProps.textAreaModel").mb-2
      div
        h4 Select Box
        div
          select-box(:prop="componentProps.selectboxModel")
        div
          textarea {{ componentProps.selectboxModel }}
      div
        h4 Dropdown
        div
          dropdown(:prop="componentProps.dropdownModel")
        div
          textarea {{ componentProps.dropdownModel }}
  div
    h2 App Components
    div
      h4 Side Menu
      div
        side-menu(:prop="componentProps.sideMenuModel")
      div
          textarea {{componentProps.sideMenuModel}}
      h4 Tab
      div
        tab(:prop="componentProps.tabModel")
          tab-item(v-for="model in componentProps.tabItemModels", :key="key",:prop="model")
            p tab {{ model.label }}
      div
          textarea {{componentProps.tabModel}}
      div
          textarea {{componentProps.tabItemModels}}

      h4 Collapse
      div
        collapse(:prop="componentProps.collapseModel")
          template(slot="trigger")
            p button
          template
            p hoge
      div
          textarea {{componentProps.collapseModel}}

      h4 Modal
      div
        Modal(:prop="componentProps.modalModel")
          template(slot="trigger")
            p button
          template
            .card
      div
          textarea {{componentProps.modalModel}}

      h4 PageNation
      div
        PageNation(:prop="componentProps.pageNationModel")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
// actions
import Btn from '@/components/atoms/Btn/Index.vue'
import BtnModel from '@/components/atoms/Btn/Btn'
import Inpt from '@/components/atoms/Inpt/Index.vue'
import InptModel from '@/components/atoms/Inpt/Inpt'
import SelectBox from '@/components/atoms/SelectBox/Index.vue'
import SelectBoxModel from '@/components/atoms/SelectBox/SelectBox'
import Dropdown from '@/components/atoms/Dropdown/Index.vue'
import DropdownModel from '@/components/atoms/Dropdown/Dropdown'
import PageNation from '@/components/atoms/PageNation/Index.vue'
import PageNationModel from '@/components/atoms/PageNation/PageNation'
import TextArea from '@/components/atoms/TextArea/Index.vue'
import TextAreaModel from '@/components/atoms/TextArea/TextArea'
// app components
import SideMenu from '@/components/organisms/SideMenu/Index.vue'
import SideMenuModel from '@/components/organisms/SideMenu/SideMenu'
import SideMenuItemModel from '@/components/organisms/SideMenu/SideMenuItem'
import Tab from '@/components/organisms/Tab/Index.vue'
import TabModel from '@/components/organisms/Tab/Tab'
import TabItem from '@/components/molecules/TabItem/Index.vue'
import TabItemModel from '@/components/molecules/TabItem/TabItem'
import Collapse from '@/components/organisms/Collapse/Index.vue'
import CollapseModel from '@/components/organisms/Collapse/Collapse'
import Modal from '@/components/organisms/Modal/Index.vue'
import ModalModel from '@/components/organisms/Modal/Modal'

export default {
  components: {
    Btn,
    Inpt,
    SelectBox,
    Dropdown,
    PageNation,
    TextArea,
    SideMenu,
    Tab,
    TabItem,
    Collapse,
    Modal
  },
  data: () => {
    return {
      componentProps: {
        btnPrimaryModel: null,
        btnDangerModel: null,
        btnCancelModel: null,
        btnMiniPrimaryModel: null,
        btnMiniDangerModel: null,
        inptModel: null,
        selectboxModel: null,
        dropdownModel: null,
        pageNationModel: null,
        textAreaModel: null,
        sideMenuModel: null,
        tabModel: null,
        tabItemModels: [],
        collapseModel: null,
        modalModel: null
      },
      btnModel: null,
      inptModel: null,
      activeTab: 0
    }
  },
  created() {
    this.componentProps.btnPrimaryModel =  new BtnModel('theButton', 'button buttonPrimary', 'buttonPrimary', 'ACTION_BUTTON', this.childCallback, false)
    this.componentProps.btnDangerModel =  new BtnModel('theButton', 'button buttonDanger', 'buttonDanger', 'ACTION_BUTTON', this.childCallback, false)
    this.componentProps.btnCancelModel =  new BtnModel('theButton', 'button buttonCancel', 'buttonCancel', 'ACTION_BUTTON', this.childCallback, false)
    this.componentProps.btnMiniPrimaryModel =  new BtnModel('theButton', 'button btnMiniPrimary', 'btnMiniPrimary', 'ACTION_BUTTON', this.childCallback, false)
    this.componentProps.btnMiniDangerModel =  new BtnModel('theButton', 'button btnMiniDanger', 'btnMiniDanger', 'ACTION_BUTTON', this.childCallback, false)
    this.componentProps.inptModel = new InptModel('textInput', 'input', 'text', 'some text here.', 'ACTION_INPUT', this.childCallback, false, null)
    this.componentProps.textAreaModel = new TextAreaModel('textInput', 'input', 'text', 'Reason', 'INPUT_TEXTAREA', this.childCallback, false, true, '', 4, 40)
    this.componentProps.selectboxModel = new SelectBoxModel('dropdown', 'select', [{id: 1, label: 'option1'}, {id: 2, label: 'option2'}, {id: 3, label: 'option3'}], 'label','ACTION_DROPDOWN', this.childCallback, false)
    this.componentProps.dropdownModel = new DropdownModel('dropdown', 'dropdown', [{id: 1, label: 'option1'}, {id: 2, label: 'option2'}, {id: 3, label: 'option3'}], 'label','ACTION_DROPDOWN', this.childCallback, false)
    this.componentProps.pageNationModel = new PageNationModel('id', 'pagenation', 'pagenation-active', 'PAGENATION_ACTION', this.childCallback, 100, 50, 20)
    this.componentProps.sideMenuModel = new SideMenuModel([new SideMenuItemModel('MenuItem1', ''), new SideMenuItemModel('MenuItem2', ''), new SideMenuItemModel('MenuItem3', '')])
    this.componentProps.tabModel = new TabModel('tab', 'tab', 'tab-item', 'tab-item-active');
    this.componentProps.tabItemModels = [
      new TabItemModel('tabItem1', 'tabItem', 'item 1'),
      new TabItemModel('tabItem2', 'tabItem', 'item 2'),
      new TabItemModel('tabItem2', 'tabItem', 'item 3'),
    ];
    this.componentProps.collapseModel = new CollapseModel('collapse', 'collapse')
    this.componentProps.modalModel = new ModalModel('modal', 'modal', 'fade', false)
  },
  methods: {
    childCallback(key, value) {
      console.log(key)
      console.log(value)
      return
    }
  }
}

</script>
