# hummer load script demo

懒加载分包 demo

webpack下的懒加载最终是通过动态添加script标签实现的，所以我们利用hummer底层loadScript API 对document进行部分能力实现 最终暴露同样的接口出去

在当前目录下执行
```
hummer dev
```
即可预览