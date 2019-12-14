<script>
import Pagination from '@/components/Pagination'
import { mapState } from 'vuex'

export default {
  components: {
    Pagination
  },
  mounted() {
    this.$store.dispatch(
      'ShopManage/commodity/getCommidtiesList',
      this.listQuery
    )
  },
  data() {
    return {
      list: null,
      total: 10,
      listQuery: {
        page: 1,
        limit: 20,
        status: '',
        name: ''
      },
      previewVisible: false,
      takeOffVisible: false,
      pickerOptions: {
        disabledDate(time) {
          const date = new Date()
          // date.setTime(date.getTime() + 10 * 60 * 1000)
          return time.getTime() < date.getTime() - 8.64e7
        }
      },
      selectTakeOffTime: null,
      loading: false,
      finished: false
    }
  },
  computed: {
    ...mapState({
      tableData: state => state['ShopManage/commodity'].commidtiesList,
      currentCommidty: state => state['ShopManage/commodity'].currentCommidty,
      device: state => state.app.device
    })
  },
  methods: {
    // BEGIN caodan 19-12-13 17:38
    // DESCRIPTION: 重置
    // END
    resetListQuery() {
      this.listQuery.status = ''
      this.listQuery.name = ''
    },
    // BEGIN caodan 19-12-13 17:38
    // DESCRIPTION: 查询
    // END
    handleSearch() {
      this.$store.dispatch('ShopManage/commodity/getCommidtiesList', {
        ...this.listQuery
      })
    },
    getStatusName(status) {
      switch (status) {
        case 0:
          return '未上架'
        case 1:
          return '已上架'
        default:
          return '未上架'
      }
    },
    getImmediatelyName(status) {
      switch (status) {
        case 0:
          return '立即上架'
        case 1:
          return '立即下架'
        default:
          return '立即上架'
      }
    },
    // BEGIN caodan 19-12-13 17:37
    // DESCRIPTION: 二维码预览
    // END
    previewQRcode(currentCommidty) {
      this.$store.commit(
        'ShopManage/commodity/setCurrentCommidty',
        currentCommidty
      )
      this.previewVisible = true
    },
    handleTakeOff(currentCommidty) {
      this.$store.commit(
        'ShopManage/commodity/setCurrentCommidty',
        currentCommidty
      )
      this.selectTakeOffTime = new Date(currentCommidty.takeOffTime)
      this.takeOffVisible = true
    },
    // BEGIN caodan 19-12-14 12:59
    // DESCRIPTION: 设定下架时间
    // END
    takeOff() {
      const now = new Date()
      if (this.selectTakeOffTime < now) {
        this.$message.error('下架时间不能比当前时间小')
      } else {
        this.takeOffVisible = false
        this.$store.dispatch('ShopManage/commodity/takeOff').then(res => {
          if (res.code === 0) {
            this.$message({
              message: '设置成功',
              type: 'success'
            })
            this.handleSearch()
          }
        })
      }
    },
    // BEGIN caodan 19-12-14 13:09
    // DESCRIPTION: 移动端加载更多
    // END
    onLoad() {
      this.finished = true
    },
    handleAddCommodity() {
      this.$router.push({
        path: 'commodity/add'
      })
    },
    updateCommodity(id) {
      this.$router.push({
        path: 'commodity/update',
        query: { id }
      })
    }
  }
}
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
