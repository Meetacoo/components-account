import { createWithRemoteLoader } from '@kne/remote-loader';
import { Navigate, useLocation } from 'react-router-dom';
import Fetch from '@kne/react-fetch';

const CheckAccountIsInit = ({ data, baseUrl, children }) => {
  const location = useLocation();
  if (data.userInfo.status === 1) {
    return <Navigate to={`${baseUrl || ''}/modify/${encodeURIComponent(data.userInfo.email)}?referer=${encodeURIComponent(location.pathname + location.search)}`} replace />;
  }

  return children;
};

export const UserInfo = createWithRemoteLoader({
  modules: ['components-core:Global@SetGlobal', 'components-core:Global@usePreset']
})(({ remoteModules, baseUrl, children }) => {
  const [SetGlobal, usePreset] = remoteModules;
  const { apis } = usePreset();
  return (
    <Fetch
      {...Object.assign({}, apis.account.getUserInfo)}
      render={({ data }) => {
        return (
          <CheckAccountIsInit baseUrl={baseUrl} data={data}>
            <SetGlobal globalKey="userInfo" value={data} needReady>
              {children}
            </SetGlobal>
          </CheckAccountIsInit>
        );
      }}
    />
  );
});

export const SuperAdminInfo = createWithRemoteLoader({
  modules: ['components-core:Global@SetGlobal', 'components-core:Global@usePreset']
})(({ remoteModules, children }) => {
  const [SetGlobal, usePreset] = remoteModules;
  const { apis } = usePreset();
  return (
    <Fetch
      cache="super-admin-info"
      {...Object.assign({}, apis.account.getSuperAdminInfo)}
      render={({ data }) => {
        return (
          <SetGlobal globalKey="userInfo" value={data} needReady>
            {children}
          </SetGlobal>
        );
      }}
    />
  );
});

export const TenantUserInfo = createWithRemoteLoader({
  modules: ['components-core:Global@SetGlobal', 'components-core:Global@usePreset']
})(({ remoteModules, baseUrl, children }) => {
  const [SetGlobal, usePreset] = remoteModules;
  const { apis } = usePreset();
  return (
    <Fetch
      {...Object.assign({}, apis.account.getTenantUserInfo)}
      render={({ data }) => {
        return (
          <CheckAccountIsInit baseUrl={baseUrl} data={data}>
            <SetGlobal globalKey="userInfo" value={data} needReady>
              {children}
            </SetGlobal>
          </CheckAccountIsInit>
        );
      }}
    />
  );
});
