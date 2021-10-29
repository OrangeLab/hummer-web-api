import { Base } from './base'

export class Head extends Base {
  constructor() {
    super()
    this.__TYPE = 'head'
  }

  _appendChild(node: any) {
    switch (node.__TYPE) {
      case 'script':
        let script = node
        Hummer.loadScriptWithUrl(script.src, (res: any)=> {
          // res 为 null/undefine 则加载正常
          if (!res) {
            script.onload()
          } else {
            script.onerror(res)
          }
        })
        break;
    
      default:
        break;
    }
  }
}