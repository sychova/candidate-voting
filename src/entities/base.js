class Base {
  constructor(attr) {
    this.attr = attr
  }

  get id() {
    return this.attr.id
  }
}

module.exports = Base
