import { Head } from './element/head'
import { Script } from './element/script'

export default {
  install () {
    // @ts-ignore
    globalThis.document = {
      // @ts-ignore
      head: new Head(),
      // @ts-ignore
      scripts: [],
      getElementsByTagName: (tag: any) => {
        if (tag === 'script') {
          return (globalThis as any).document.scripts
        }
      },
      // @ts-ignore
      createElement: (tag: any) => {
        if (tag === 'script') {
          let script = new Script();
          // @ts-ignore
          (globalThis as any).document.scripts.push(script)
          return script
        }
      }
    }
  }
}