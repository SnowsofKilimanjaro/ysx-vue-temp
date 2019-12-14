import request from '@/utils/request'
import { ssoUrl } from '../../../../config'

const state = {
  commidtiesList: [
    {
      createTime: '2019-12-13 11:23:43',
      name: '大语文系统课寒假班',
      status: 1,
      id: 1,
      category: '直播课->大语文系统课',
      url:
        '//ysx-pic.oss-cn-beijing.aliyuncs.com/activity/2019/bifiles/menu_icon.png',
      shelvesTime: '2019-03-18 11:23:43',
      takeOffTime: '2019-12-13 11:23:43'
    },
    {
      createTime: '2016-05-02',
      name: '大语文系统课寒假班',
      status: 1,
      id: 2,
      category: '直播课->大语文系统课',
      shelvesTime: '2019-03-18 11:23:43',
      takeOffTime: '2019-03-18 11:23:43'
    },
    {
      createTime: '2016-05-02',
      name: '大语文系统课寒假班',
      status: 0,
      id: 3,
      category: '直播课->大语文系统课',
      shelvesTime: '2019-03-18 11:23:43',
      takeOffTime: '2019-03-18 11:23:43'
    },
    {
      createTime: '2016-05-02',
      name: '大语文系统课寒假班',
      status: 0,
      id: 4,
      category: '直播课->大语文系统课',
      shelvesTime: '2019-03-18 11:23:43',
      takeOffTime: '2019-03-18 11:23:43'
    }
  ],
  currentCommidty: null //选择操作的时候暂存的当前操作商品信息
}
const mutations = {
  setCommidtiesList: (state, data) => {
    state.commidtiesList = data
  },
  setCurrentCommidty: (state, data) => {
    state.currentCommidty = data
  }
}
const actions = {
  getCommidtiesList({ commit }, params) {
    request({
      url: ssoUrl + '/menu/list_user_menus',
      method: 'post',
      data: params
    }).then(response => {
      if (response.code === 0) {
        // commit('setCommidtiesList', response.data)
      }
    })
  },
  takeOff({ commit }, params) {
    return request({
      url: ssoUrl + '/menu/list_user_menus',
      method: 'post',
      data: params
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
