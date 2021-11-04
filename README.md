# Hummer Web API

> 用于特定情况下将Hummer内置API封装为Web API标准方法

```
// 例如通过URL加载一段js
Hummer.loadScriptWithUrl(url, callback)

// ↓↓↓

document.head.appendChild(script)

```


## playground
```
npm i

cd playground/xxx

hummer dev
```
### lazy load
懒加载分包 demo
webpack下的懒加载最终是通过动态添加script标签实现的，所以我们利用hummer底层loadScript API 对document进行部分能力实现 最终暴露同样的接口出去

