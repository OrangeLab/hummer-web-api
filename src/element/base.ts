export class Base {
  __TYPE: string;
  constructor() {
    this.__TYPE = 'base'
  }

  setAttribute (key: string, value: any) {
    switch (key) {
      default:
        this._setAttribute(key, value)
        break;
    }
  }

  _setAttribute (key: string, value: any) {}

  getAttribute (key: string) {
    return this._getAttribute(key)
  }

  _getAttribute(key: string) {}

  appendChild (node: any) {
    switch (node.__TYPE) {
      default:
        this._appendChild(node)
        break;
    }
  }

  _appendChild(node: any) {}
}
