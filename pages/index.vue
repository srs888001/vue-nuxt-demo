<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">About</nuxt-link>
    <br>
    <foo :posts="posts" />
  </div>
</template>

<script>
import axios from 'axios'
import Foo from '@/components/Foo'

export default {
  name: 'HomePage',
  components: {
    Foo
  },

  // asyncData 说明：
  // asyncData 方法返回的数据在融合 data 方法返回的数据后，一并返回给模板进行展示
  // 调用时机：服务器渲染期间 和 客户端路由更新之前
  // 注意点：
  // 只能页面组件中使用
  // asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。

  // 当你想要动态页面内容有利于 SEO 或者是提升首屏渲染速度的时候，就在 asyncData 中发请求拿数据
  async asyncData () {
    console.log('asyncData')
    console.log(this)
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    return res.data
  },

  // 如果是非异步数据或者普通数据，则正常的初始化到 data 中即可
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style>

</style>
