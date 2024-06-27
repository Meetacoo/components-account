import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import pages from './pages';
import MainLayout, { AfterAdminUserLoginLayout, AfterTenantUserLoginLayout, AfterUserLoginLayout, BeforeLoginLayout } from './MainLayout';
import RightOptions from './RightOptions';
import './index.scss';

const { Home, Account, Admin, InitAdmin, Error, NotFound } = pages;

const App = ({ globalPreset }) => {
  const [searchParams] = useSearchParams();
  return (
    <Routes>
      <Route path="account" element={<BeforeLoginLayout preset={globalPreset} themeToken={globalPreset.themeToken} />}>
        <Route path="*" element={<Account baseUrl="/account" isTenant={searchParams.get('isTenant') === 'true'} />} />
      </Route>
      <Route path="admin/initAdmin" element={<AfterUserLoginLayout preset={globalPreset} themeToken={globalPreset.themeToken} paths={[]} />}>
        <Route index element={<InitAdmin baseUrl="/admin" />} />
      </Route>
      <Route
        path="tenant"
        element={
          <AfterTenantUserLoginLayout
            preset={globalPreset}
            themeToken={globalPreset.themeToken}
            navigation={{
              rightOptions: <RightOptions />
            }}
          />
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route
        path="admin"
        element={
          <AfterAdminUserLoginLayout
            preset={globalPreset}
            themeToken={globalPreset.themeToken}
            navigation={{
              showIndex: false,
              base: '/admin',
              list: [
                {
                  key: 'home',
                  title: '首页',
                  path: '/admin'
                },
                {
                  key: 'tenant',
                  title: '租户管理',
                  path: '/admin/tenant'
                },
                {
                  key: 'user',
                  title: '用户管理',
                  path: '/admin/user'
                },
                {
                  key: 'permission',
                  title: '应用权限管理',
                  path: '/admin/permission'
                }
              ],
              rightOptions: <RightOptions />
            }}
          />
        }
      >
        <Route index element={<Admin baseUrl="/admin" />} />
        <Route path="*" element={<Admin baseUrl="/admin" />} />
      </Route>
      <Route
        element={
          <AfterUserLoginLayout
            preset={globalPreset}
            themeToken={globalPreset.themeToken}
            paths={[]}
            navigation={{
              rightOptions: <RightOptions />
            }}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="admin/*" element={<InitAdmin baseUrl="/admin" />} />
      </Route>
      <Route element={<MainLayout preset={globalPreset} themeToken={globalPreset.themeToken} paths={[]} />}>
        <Route path="error" element={<Error />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
