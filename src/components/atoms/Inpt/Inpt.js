export default class Btn {
  constructor(
    id,
    classes,
    type,
    placeholder,
    callbackKey,
    callback,
    disabled,
    defaultValue
  ) {
    this.id = id
    this.type = type
    this.placeholder = placeholder
    this.classes = classes
    this.callbackKey = callbackKey
    this.callback = callback
    this.disabled = disabled
    this.defaultValue = defaultValue
  }
}
