export default class TextArea {
  constructor(
    id,
    classes,
    type,
    placeholder,
    callbackKey,
    callback,
    disabled,
    isDefault,
    defaultValue,
    rows,
    cols
  ) {
    this.id = id
    this.type = type
    this.placeholder = placeholder
    this.classes = classes
    this.callbackKey = callbackKey
    this.callback = callback
    this.disabled = disabled
    this.isDefault = isDefault
    this.defaultValue = defaultValue
    this.rows = rows
    this.cols = cols
  }
}
