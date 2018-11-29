import ToolBarItem from './ToolBarItem'

export default class ToolBar {
  constructor(label, href, menuItems, menuItemDisable) {
    this.label = label
    this.href = href
    this.menuItems = menuItems
    this.menuItemDisable = menuItemDisable
  }
}
