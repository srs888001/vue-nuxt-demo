/**
 * Nuxt配置
 */

module.exports = {
    router: {
        base: "/abc",
        
        // routes: 数组，路由配置表
        // resolve: 解析路由组件路径
        extendRoutes (routes, resolve) {
            routes.push({
                path: "/repeat",
                name: "扩展定义",
                component: resolve(__dirname, "pages/about" )
            })
        }
    }
}