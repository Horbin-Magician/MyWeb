const adminMenuList = [
  {key: 'home',title: '首页',},
  {key: 'write',title: '写作台',},
  {key: 'manages-base',title: '基础管理',
    children: [
      {key: 'user',title: '用户管理',}, 
      {key: 'authority',title: '角色管理',},
    ],
  },
  {key: 'manages-passages',title: '文章管理',
    children: 
      [{key: 'passage-type',title: '文章类别',}, 
      {key: 'passage-list',title: '文章条目',},
      {key: 'pick-intelligence',title: '拾慧管理',},
    ],
  },
  {key: 'settings',title: '设置',
    children: [
      {key: 'base',title: '基础设置',},
    ],
  },
]
export default adminMenuList