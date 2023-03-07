import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _163be7ca = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _a3eaf7f2 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _61d6adde = () => interopDefault(import('..\\pages\\home\\sidebar\\index.vue' /* webpackChunkName: "pages/home/sidebar/index" */))
const _5c1b379e = () => interopDefault(import('..\\pages\\home\\sidebar\\news\\index.vue' /* webpackChunkName: "pages/home/sidebar/news/index" */))
const _04dbe24c = () => interopDefault(import('..\\pages\\home\\sidebar\\profile\\index.vue' /* webpackChunkName: "pages/home/sidebar/profile/index" */))
const _75774446 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _08c68a74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _163be7ca,
    children: [{
      path: "",
      component: _a3eaf7f2,
      name: "home"
    }, {
      path: "sidebar",
      component: _61d6adde,
      name: "home-sidebar"
    }, {
      path: "sidebar/news",
      component: _5c1b379e,
      name: "home-sidebar-news"
    }, {
      path: "sidebar/profile",
      component: _04dbe24c,
      name: "home-sidebar-profile"
    }]
  }, {
    path: "/login",
    component: _75774446,
    name: "login"
  }, {
    path: "/",
    component: _08c68a74,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
