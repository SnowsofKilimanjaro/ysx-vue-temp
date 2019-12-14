/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const shopManageRouter = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/category',
  alwaysShow: true, // will always show the root menu
  name: '商城管理平台',
  children: [
    {
      path: 'category',
      component: () => import('@/views/CategoryManage/index'),
      name: '类目管理'
    },
    {
      path: 'commodity',
      component: () => import('@/views/CommodityManage/index'),
      name: '商品管理'
    },
    {
      path: 'commodity/add',
      component: () =>
        import('@/views/CommodityManage/AddOrUpdateCommodity/index'),
      name: '添加商品',
      meta: {
        activeMenu: '/manage/commodity'
      }
    },
    {
      path: 'commodity/update',
      component: () =>
        import('@/views/CommodityManage/AddOrUpdateCommodity/index'),
      name: '编辑商品',
      meta: {
        activeMenu: '/manage/commodity'
      }
    }
  ]
}
export default shopManageRouter
