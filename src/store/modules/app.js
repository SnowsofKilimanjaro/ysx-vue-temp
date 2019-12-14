import Cookies from 'js-cookie'
import { resetCookies } from '@/utils/auth'
import { resetRouter } from '@/router'
import querystring from 'querystring'
import request from '@/utils/request'
import { ssoUrl, appId } from '../../../config'
import { convertToTree } from '../../utils/index'

const loginOutUrl = ssoUrl + '/auth/logout'
const headerMenuUrl = ssoUrl + '/menu/list_root_user_menus'
const sidebarMenuUrl = ssoUrl + '/menu/list_user_menus'
const LOGIN = ssoUrl + '/auth/login'
const CODE = ssoUrl + '/auth/verifyCode'
const state = {
  siderbarMenuData: [
    // {
    //   name: '云舒写SSO统一管理平台',
    //   id: 64,
    //   icon:
    //     'http://ysx-sts-upload.oss-cn-beijing.aliyuncs.com/pic/thadm/material/2019/12/06/10/12/39/98567a8ad49348f2adad65e2a10228a4/1ba0fdbc-89fc-48ea-95c9-608df67105d1.png',
    //   url: '/manage',
    //   children: [
    //     {
    //       name: '部门管理',
    //       url: 'guide',
    //       id: 69,
    //       icon:
    //         'http://ysx-sts-upload.oss-cn-beijing.aliyuncs.com/pic/fe/test/2019/10/23/19/08/22/4d3c1199e9ea4b1d82dcb60559ef5a21/1be68851-0dbb-435d-a9c4-6a08ff9ca888.png'
    //     },
    //     {
    //       name: '角色管理',
    //       url: 'keyboard',
    //       id: 68,
    //       icon:
    //         'http://ysx-sts-upload.oss-cn-beijing.aliyuncs.com/pic/fe/test/2019/10/23/17/39/00/fe57358e703f48ff9af3785b08267244/306e610e-d0c2-4bba-b7df-72ae3c8f11ac.png'
    //     },
    //     {
    //       name: '用户管理',
    //       url: 'line',
    //       id: 67,
    //       icon:
    //         'http://ysx-sts-upload.oss-cn-beijing.aliyuncs.com/pic/fe/test/2019/10/23/17/33/47/d4fb1e2af4444a16b2860a2132db61df/31a1e995-1187-4b93-8f69-a493e53fdaad.png'
    //     },
    //     {
    //       name: '菜单管理',
    //       url: 'mix-chart',
    //       id: 66,
    //       icon:
    //         'http://ysx-sts-upload.oss-cn-beijing.aliyuncs.com/pic/fe/test/2019/10/23/17/33/14/e750a02d8c7e4a2fbfc34300c40cdd42/0683bd42-39ab-4b39-8bcc-2bf47b8b8b76.png'
    //     }
    //   ]
    // }
  ],
  headerMenuData: [],
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  setHeaderMenuData: (state, data) => {
    state.headerMenuData = data
  },
  setSiderbarMenuData: (state, data) => {
    state.siderbarMenuData = data
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  getHeaderMenuData({ commit }) {
    return request({
      url: headerMenuUrl,
      method: 'post'
    }).then(response => {
      if (response.code === 0) {
        commit('setHeaderMenuData', response.data)
      }
    })
  },
  getSidebarMenuData({ commit }) {
    return request({
      url: sidebarMenuUrl,
      method: 'post'
    }).then(response => {
      if (response.code === 0) {
        const data = response.data.filter(item => item.appId === appId)
        for (let index = 0; index < data.length; index++) {
          const element = data[index]
          if (element.type === 0) {
            //如果 0 代表目录
            element.url = '/manage'
          }
        }
        let result = convertToTree(data, { id: 'id', pid: 'pid' })
        commit('setSiderbarMenuData', result)
      }
    })
  },
  // user login
  login(state, userInfo) {
    return request({
      url: LOGIN,
      method: 'post',
      data: querystring.stringify(userInfo)
    }).then(response => {
      return response
    })
  },
  // user logout
  loginOut({ commit, state, dispatch }, params) {
    return request({
      url: loginOutUrl,
      method: 'get',
      params
    }).then(response => {
      if (response.code === 302) {
        console.log(329)
        resetCookies()
        resetRouter()
        // reset visited views and cached views
        dispatch('tagsView/delAllViews', null, { root: true })
      }
    })
  },
  // get code
  getCode() {
    return request({
      url: CODE,
      method: 'get'
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
