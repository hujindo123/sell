// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes 传入的参数路由
  linkActiveClass: 'active' // 这个属性是设置了被点击的a标签的class名，为了方便设置选项中的样式
});// 声明一个路由对象
/* eslint-disable no-new */
// 挂载整个应用 new一个vue实例对象
const app = new Vue({
  el: '#app', // 挂载点，挂载点在id为app的组件上
  template: '<App/>',
  router, // 声明的router对象作为参数传给vue对象
  components: {App} // 注册组件 这里是es6的缩写，相当于components:{App: App}
});
app.$mount('#app'); // 把vue挂载到dom上
router.push('/goods'); // 代替原来的router.go(),让页面初始默认跳转到goods

