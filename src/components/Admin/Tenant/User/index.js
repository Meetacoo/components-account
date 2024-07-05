import { createWithRemoteLoader } from '@kne/remote-loader';
import getColumns from './getColumns';
import { Space, Flex, Button, App } from 'antd';
import FormInner from './FormInner';
import { useRef, useState } from 'react';
import InviteList from './InviteList';

const User = createWithRemoteLoader({
  modules: ['components-core:Table@TablePage', 'components-core:FormInfo@useFormModal', 'components-core:Global@usePreset', 'components-core:Modal@useModal', 'components-core:Filter']
})(({ remoteModules, record }) => {
  const [TablePage, useFormModal, usePreset, useModal, Filter] = remoteModules;
  const { ajax, apis } = usePreset();
  const formModal = useFormModal();
  const modal = useModal();
  const tenantId = record.id;
  const { message } = App.useApp();
  const ref = useRef(null);

  const { fields: filterFields, getFilterValue, SearchInput } = Filter;
  const [filter, setFilter] = useState([]);
  const { InputFilterItem, AdvancedSelectFilterItem } = filterFields;

  return (
    <Flex vertical gap={8} flex={1}>
      <Filter
        value={filter}
        onChange={setFilter}
        className="page-filter"
        list={[
          [
            <InputFilterItem label="邮箱" name="email" />,
            <InputFilterItem label="电话" name="phone" />,
            <AdvancedSelectFilterItem
              label="状态"
              name="status"
              single
              api={{
                loader: () => {
                  return {
                    pageData: [
                      { label: '正常', value: 0 },
                      {
                        label: '初始化未激活',
                        value: 10
                      },
                      { label: '已关闭', value: 12 }
                    ]
                  };
                }
              }}
            />,
            <AdvancedSelectFilterItem
              label="是否管理员"
              name="isSuperAdmin"
              single
              api={{
                loader: () => {
                  return {
                    pageData: [
                      { label: '是', value: true },
                      { label: '否', value: false }
                    ]
                  };
                }
              }}
            />
          ]
        ]}
        extra={
          <Space>
            <Flex>
              <SearchInput size="small" name="name" label="姓名" />
            </Flex>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                const formApi = formModal({
                  title: '添加租户用户',
                  size: 'small',
                  formProps: {
                    onSubmit: async data => {
                      const { data: resData } = await ajax(
                        Object.assign({}, apis.account.addTenantUser, {
                          data: Object.assign({}, data, { tenantId })
                        })
                      );
                      if (resData.code !== 0) {
                        return;
                      }
                      message.success('添加成功');
                      formApi.close();
                      ref.current.reload();
                    }
                  },
                  children: <FormInner tenantId={tenantId} />
                });
              }}
            >
              添加租户用户
            </Button>
            <Button
              size="small"
              onClick={() => {
                modal({
                  title: '管理邀请链接',
                  children: <InviteList tenantId={tenantId} />
                });
              }}
            >
              管理邀请链接
            </Button>
          </Space>
        }
      />
      <TablePage
        {...Object.assign({}, apis.account.getTenantUserListByAdmin, {
          params: Object.assign({}, { tenantId, filter: getFilterValue(filter) })
        })}
        name="tenant-user-list"
        pagination={{ paramsType: 'params' }}
        ref={ref}
        columns={[
          ...getColumns(),
          {
            name: 'options',
            title: '操作',
            type: 'options',
            fixed: 'right',
            valueOf: item => {
              return [
                {
                  children: '编辑',
                  onClick: () => {
                    const formApi = formModal({
                      title: '编辑租户用户',
                      size: 'small',
                      formProps: {
                        data: Object.assign({}, item, {
                          roleIds: item.tenantRoles.map(({ id }) => {
                            return id;
                          }),
                          orgIds: item.tenantOrgs.map(({ id }) => {
                            return id;
                          })
                        }),
                        onSubmit: async data => {
                          const { data: resData } = await ajax(
                            Object.assign({}, apis.account.saveTenantUser, {
                              data: Object.assign({}, data, { tenantId, id: item.id })
                            })
                          );
                          if (resData.code !== 0) {
                            return;
                          }
                          message.success('保存成功');
                          formApi.close();
                          ref.current.reload();
                        }
                      },
                      children: <FormInner tenantId={tenantId} />
                    });
                  }
                },
                item.status === 0
                  ? {
                      children: '关闭',
                      message: '确定要关闭该账号，关闭后用户不能进入当前租户？',
                      isDelete: false,
                      onClick: async () => {
                        const { data: resData } = await ajax(
                          Object.assign({}, apis.account.closeTenantUser, {
                            data: { tenantId, tenantUserId: item.id }
                          })
                        );
                        if (resData.code !== 0) {
                          return;
                        }
                        message.success('账号关闭成功');
                        ref.current.reload();
                      }
                    }
                  : {
                      children: '开启',
                      message: '确定要开启该账号，开启后该账号可以正常登录并使用该租户系统？',
                      isDelete: false,
                      onClick: async () => {
                        const { data: resData } = await ajax(
                          Object.assign({}, apis.account.openTenantUser, {
                            data: { tenantId, tenantUserId: item.id }
                          })
                        );
                        if (resData.code !== 0) {
                          return;
                        }
                        message.success('账号开启成功');
                        ref.current.reload();
                      }
                    },
                {
                  children: '删除',
                  message: '确定要删除该账号？',
                  confirm: true,
                  isDelete: true,
                  onClick: async () => {
                    const { data: resData } = await ajax(
                      Object.assign({}, apis.account.deleteTenantUser, {
                        data: { tenantId, tenantUserId: item.id }
                      })
                    );
                    if (resData.code !== 0) {
                      return;
                    }
                    message.success('账号删除成功');
                    ref.current.reload();
                  }
                }
              ];
            }
          }
        ]}
      />
    </Flex>
  );
});

export default User;
