<template>
  <view class="page">
    <text class="slogan" @tap="lazyLog">{{text}}</text>
  </view>
</template>
<style lang="less" scoped>
  .page{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slogan{
    font-size: 0.42rem;
  }
</style>

<script>

export default {
  pageConfig: {
    canScroll: false
  },
  data(){
    return {
      text: '点我执行加载script逻辑并触发log'
    }
  },
  methods: {
    lazyLog() {
      // webpack 规范的懒加载
      import('./lazy').then(({ lazyLog }) => {
        lazyLog()
      })
    }
  }
}
</script>