/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const shopManageRouter = {
  path: '/manage',
  component: Layout,
  redirect: 'category',
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
    }
  ]
}
export default shopManageRouter
