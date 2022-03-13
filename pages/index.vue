<template>
  <div>
     <h1>hello nuxt</h1> 
  </div>
</template>
 
<script>
export default {
    name: "HomePage",
    // 默认是layouts/default.vue
    // 一旦有default.vue, 所以页面都是使用这个布局。除非主动修改
    layout: "custom"
    // layout: "default"
}
</script>

<style>

</style>