<script>
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      tableData: [
        {
          createTime: '2016-05-02',
          name: '大语文系统课寒假班',
          status: 0,
          id: 1,
          category: ['直播课', '大语文系统课']
        },
        {
          createTime: '2016-05-02',
          name: '大语文系统课寒假班',
          status: 0,
          id: 2,
          category: ['直播课', '大语文系统课']
        },
        {
          createTime: '2016-05-02',
          name: '大语文系统课寒假班',
          status: 0,
          id: 3,
          category: ['直播课', '大语文系统课']
        },
        {
          createTime: '2016-05-02',
          name: '大语文系统课寒假班',
          status: 0,
          id: 4,
          category: ['直播课', '大语文系统课']
        }
      ],
      form: {
        name: ''
      },
      list: null,
      total: 10,
      listQuery: {
        page: 1,
        limit: 20,
        status: '',
        name: ''
      }
    }
  },
  methods: {
    getList() {}
  }
}
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
