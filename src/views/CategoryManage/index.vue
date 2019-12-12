<script>
import Pagination from '@/components/Pagination'

export default {
  name: 'ShopManage',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone: 18610747777,
          email: '1817893777@qq.com'
        }
      ],
      form: {
        name: ''
      },
      list: null,
      total: 10,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  components: {
    Pagination
  },
  created() {},
  mounted() {},
  methods: {
    getList() {
      console.log(this.form, 'form')
      this.loading = true
      // this.$store
      //   .dispatch('', {
      //     ...this.listQuery,
      //     ...this.form
      //   })
      //   .then(res => {
      //     console.log(res, 'res')
      //   })
    },
    onSubmit() {
      this.getList()
    },
    onClear(formName) {
      this.form = {
        name: ''
      }
    },
    add() {}
  }
}
</script>

<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
