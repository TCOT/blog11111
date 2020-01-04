import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/article/index'),
  },
  {path: '*', redirect: '/404'}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
