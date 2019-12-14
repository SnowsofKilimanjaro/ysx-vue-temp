import request from '@/utils/request'

const LIST = '/sys/user/list'
const IMMEDIATELY = '/sys/role/select'
const ADD = '/sys/user/save'
const UPDATE = '/sys/user/update'
const INFO = id => `/sys/user/info/${id}`

const state = {}

const mutations = {}

const actions = {
  // getList
  getList(state, params) {
    return request({
      url: LIST,
      method: 'get',
      params: {
        ...params
      }
    }).then(response => {
      const { data } = response
      return data
    })
  },
  immediatelyOn(state, params) {
    return request({
      url: IMMEDIATELY,
      method: 'get',
      params: {
        ...params
      }
    }).then(response => {
      const { data } = response
      return data
    })
  },
  add(state, data) {
    return request({
      url: ADD,
      method: 'post',
      data: {
        ...data
      }
    }).then(response => {
      const { data } = response
      return data
    })
  },
  update(state, data) {
    return request({
      url: UPDATE,
      method: 'post',
      data: {
        ...data
      }
    }).then(response => {
      const { data } = response
      return data
    })
  },
  getInfo(state, data) {
    console.log(data, 'data')
    const { id } = data
    return request({
      url: INFO(id),
      method: 'get'
    }).then(response => {
      const { data } = response
      return data
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
