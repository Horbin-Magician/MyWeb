import {
  HomeOutlined,
  FormOutlined,
  UserOutlined,
  SettingOutlined,
  KeyOutlined,
} from '@ant-design/icons';

const adminMenuList = [
  {
    key: 'home',
    title: '首页',
    icon: HomeOutlined,
  },
  {
    key: 'write',
    title: '写作台',
    icon: FormOutlined,
  },
  {
    key: 'manages',
    title: '管理',
    icon: FormOutlined,
    children: [{
      key: 'user',
      title: '用户管理',
      icon: UserOutlined,
    }, {
      key: 'authority',
      title: '角色管理',
      icon: KeyOutlined,
    }],
  },
  {
    key: 'settings',
    title: '设置',
    icon: SettingOutlined,
    children: [{
      key: 'base',
      title: '基础设置',
      icon: SettingOutlined,
    }],
  },
]

export default adminMenuList