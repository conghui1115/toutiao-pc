import router from 'vue-router'
// 注册全局前置守卫，路由发生变化前执行
router.beforeEach(function (to, from, next) {
  // 拦截的页面
  if (to.path.startWith('/home')) {
    // 看是否有token
    const token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 如果不去主页
    next()
  }
})
