import { createWithRemoteLoader } from '@kne/remote-loader';
import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from './Overview';
import Info from './Basic/Info';
import User from './Permission/User';
import Role from './Permission/Role';
import Org from './Permission/Org';

const TenantSetting = createWithRemoteLoader({
  modules: ['components-core:Menu']
})(({ remoteModules, baseUrl, getMenuList }) => {
  const [Menu] = remoteModules;
  const menu = (
    <Menu
      items={getMenuList([
        {
          key: 'overview',
          label: '总览',
          path: `${baseUrl}/overview`
        },
        {
          key: 'basic',
          label: '基本设置',
          children: [
            {
              key: 'info',
              label: '公司信息',
              path: `${baseUrl}/basic/info`
            }
          ]
        },
        {
          key: 'permission',
          label: '权限设置',
          children: [
            {
              key: 'user',
              label: '用户管理',
              path: `${baseUrl}/permission/user`
            },
            {
              key: 'role',
              label: '角色管理',
              path: `${baseUrl}/permission/role`
            },
            {
              key: 'org',
              label: '组织架构管理',
              path: `${baseUrl}/permission/org`
            }
          ]
        }
      ])}
    />
  );
  return (
    <Routes>
      <Route index element={<Navigate to={`${baseUrl}/overview`} replace />} />
      <Route path="overview" element={<Overview menu={menu} />} />
      <Route path="basic/info" element={<Info menu={menu} />} />
      <Route path="permission/user" element={<User menu={menu} />} />
      <Route path="permission/role" element={<Role menu={menu} />} />
      <Route path="permission/org" element={<Org menu={menu} />} />
      <Route path="*" element={<Navigate to={`${baseUrl}/overview`} replace />} />
    </Routes>
  );
});

TenantSetting.defaultProps = {
  getMenuList: list => list,
  baseUrl: ''
};

export default TenantSetting;
