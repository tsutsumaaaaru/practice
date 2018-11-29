import TableData from './TableData'
import { WSAEPROVIDERFAILEDINIT } from 'constants'

export default class ListTable {
  constructor(
    id,
    classes,
    tableData,
    label,
    callbackKey,
    callback,
    disabled,
  ) {
    this.id = id
    this.classes = classes
    this.tableData = tableData
    this.label = label
    this.callbackKey = callbackKey
    this.callback = callback
    this.disabled = disabled
  }
}
