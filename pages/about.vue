<template>
  <div>
     <h1>About Page</h1> 
     <!-- a链接 刷新 服务端渲染-->
     <h1>a链接</h1> 
     <a href="/"> 首页 </a>

     <!-- router-link 导航链接组件 -->
     <h1>router-lin</h1> 
     <router-link to="/">  首页 </router-link>

     <!-- 编程式导航 -->
     <h1>编程式导航</h1> 
     <button @click="onClick">  首页 </button>
  </div>
</template>
 
<script>
export default {
    name: "AboutPage",
    methods: {
        onClick() {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>