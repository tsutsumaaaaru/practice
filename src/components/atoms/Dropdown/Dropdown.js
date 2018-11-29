export default class Dropdown {
  constructor(
    id,
    classes,
    options,
    optionDisplayKey,
    callbackKey,
    callback,
    disabled
  ) {
    this.id = id;
    this.classes = classes;
    this.options = options;
    this.optionDisplayKey = optionDisplayKey;
    this.callbackKey = callbackKey;
    this.callback = callback;
    this.disabled = disabled;
  }
}
