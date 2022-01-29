const adminMenuList = [
  {key: 'home',title: '首页',},
  {key: 'manages-base',title: '基础管理',
    children: [
      {key: 'user',title: '用户管理',}, 
      {key: 'authority',title: '角色管理',},
    ],
  },
  {key: 'settings',title: '设置',
    children: [
      {key: 'base',title: '基础设置',},
    ],
  },
]
export default adminMenuList