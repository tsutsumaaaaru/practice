export default class PageNation {
  constructor(
    id,
    classes,
    activeClasses,
    callbackKey,
    callback,
    amount,
    page,
    perPage,
  ) {
    this.id = id
    this.classes = classes
    this.activeClasses = activeClasses
    this.callbackKey = callbackKey
    this.callback = callback
    this.amount = amount
    this.page = page
    this.perPage = perPage
  }
}
