export default class Btn {
  constructor(
    id,
    classes,
    label,
    callbackKey,
    callback,
    disabled
  ) {
    this.id = id
    this.classes = classes
    this.label = label
    this.callbackKey = callbackKey
    this.callback = callback
    this.disabled = disabled
  }
}
