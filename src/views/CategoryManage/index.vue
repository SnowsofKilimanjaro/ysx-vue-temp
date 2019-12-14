<script>
import Pagination from '@/components/Pagination'
import { mapState } from 'vuex'

export default {
  name: 'ShopManage',
  data() {
    return {
      tableData: [
        {
          id: '0',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '已上架'
        },
        {
          id: '1',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '2',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '3',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '4',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '5',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '6',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '7',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '8',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        },
        {
          id: '9',
          name: '直播课>大语文系统直播课',
          spe: '年级、周、上课时间',
          date: '2019-03-18 11:23:43',
          status: '未上架'
        }
      ],
      form: {
        status: ''
      },
      list: null,
      total: 30,
      listQuery: {
        page: 1,
        limit: 20
      },
      options: [
        {
          value: 0,
          label: '未上架'
        },
        {
          value: 1,
          label: '已上架'
        }
      ],
      mobileList: [],
      loading: false,
      finished: false
    }
  },
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  components: {
    Pagination
  },
  created() {},
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.$store
        .dispatch('ShopManage/category/getList', {
          ...this.listQuery,
          ...this.form
        })
        .then(res => {
          this.loading = false
          console.log(res, 'res')
        })
    },
    onSubmit() {
      this.getList()
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    add() {},
    immediatelyOn(row) {
      this.$store
        .dispatch('ShopManage/category/immediatelyOn', {
          id: row.id
        })
        .then(res => {
          this.loading = false
          this.$message({
            message: '已上架',
            type: 'success'
          })
          this.getList()
        })
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.tableData.push({
            id: '1',
            name: '直播课>大语文系统直播课',
            spe: '年级、周、上课时间',
            date: '2019-03-18 11:23:43',
            status: '未上架'
          })
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 5000)
    }
  }
}
</script>

<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
