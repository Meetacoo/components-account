"use strict";(self.webpackChunk_kne_components_components_account=self.webpackChunk_kne_components_components_account||[]).push([[112],{81727:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b,manifest:()=>x});var o=t(24460),a=t(94679),r=t(53536),s=t(55199);const c={name:"Account",summary:"<p>\u8d26\u53f7\u6a21\u5757</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Account_08bd4",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: Account } = _Account;\nconst { useLocation, Routes, Route, Navigate, useNavigate } = router;\nconst { Space, Button, Switch } = antd;\nconst { createWithRemoteLoader } = remoteLoader;\nconst { useState } = React;\nconst { range } = lodash;\nconst BaseExample = createWithRemoteLoader({\n  modules: ['components-core:Global@PureGlobal']\n})(({ remoteModules }) => {\n  const [PureGlobal] = remoteModules;\n  const location = useLocation();\n  const list = location.pathname.split('/');\n  const baseUrl = list.slice(0, list.indexOf('Account') + 1).join('/') + '/account';\n  const navigate = useNavigate();\n  const [language, setLanguage] = useState(true);\n  return (\n    <PureGlobal\n      preset={{\n        ajax: async () => {\n          return {\n            headers: {\n              'X-User-Id': '001',\n              'X-User-Token': 'xxxxxxxxxxxx'\n            },\n            data: {\n              code: 0,\n              data: range(0, 20).map(key => ({ id: key, name: `\u6d4b\u8bd5\u516c\u53f8${key + 1}` }))\n            }\n          };\n        },\n        apis: {\n          account: {\n            login: {\n              url: '/login'\n            },\n            parseResetEmailToken: {\n              loader: async ({ data }) => {\n                console.log(data);\n                const { email } = await new Promise(resolve => {\n                  setTimeout(() => {\n                    resolve({ email: 'test@test.com' });\n                  }, 1000);\n                });\n                return { email };\n              }\n            },\n            modifyPassword: {\n              url: '/modifyPassword'\n            }\n          }\n        }\n      }}\n    >\n      <Space direction=\"vertical\">\n        <Space>\n          <Button\n            onClick={() => {\n              navigate(`${baseUrl}/login`);\n            }}\n          >\n            \u767b\u5f55\u9875\u9762\n          </Button>\n          <Button\n            onClick={() => {\n              navigate(`${baseUrl}/forget`);\n            }}\n          >\n            \u5fd8\u8bb0\u5bc6\u7801\n          </Button>\n          <Button\n            onClick={() => {\n              navigate(`${baseUrl}/modify/${encodeURIComponent('test@test.com')}`);\n            }}\n          >\n            \u4fee\u6539\u5bc6\u7801\n          </Button>\n          <Button\n            onClick={() => {\n              navigate(`${baseUrl}/reset-password/:${encodeURIComponent('tokenxxxxxxxxxxxx')}`);\n            }}\n          >\n            \u91cd\u7f6e\u5bc6\u7801\n          </Button>\n          <Space>\n            \u8bed\u8a00\u5207\u6362\n            <Switch value={language} onChange={setLanguage} />\n          </Space>\n        </Space>\n        <Routes>\n          <Route path={baseUrl + '/*'} element={<Account baseUrl={baseUrl} language={language} />} />\n          <Route path=\"*\" element={<Navigate to={baseUrl} />} />\n        </Routes>\n      </Space>\n    </PureGlobal>\n  );\n});\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Account",packageName:"@components/Account",component:o},{name:"router",packageName:"react-router-dom",component:a},{name:"lodash",packageName:"lodash",component:r},{name:"antd",packageName:"antd",component:s},{name:"remoteLoader",packageName:"@kne/remote-loader",component:t(13050)}]}]}};var i=t(40922),m=t(3224);const l={name:"Forget",summary:"<p>\u5fd8\u8bb0\u5bc6\u7801</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Forget_7cb5f",style:".Forget_7cb5f .example-driver-preview {\n  background: var(--primary-color); }\n\n.Forget_7cb5f .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: Forget } = _Forget;\nconst { default: LoginOuterContainer } = _LoginOuterContainer;\nconst { useLocation } = router;\nconst BaseExample = () => {\n  const location = useLocation();\n  const list = location.pathname.split('/');\n  const baseUrl = list.slice(0, list.indexOf('Forget') + 1).join('/') + '/account';\n  return (\n    <LoginOuterContainer className=\"outer\">\n      <Forget\n        baseUrl={baseUrl}\n        onSubmit={(data, callback) => {\n          console.log(data);\n          callback();\n        }}\n      />\n    </LoginOuterContainer>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Forget",packageName:"@components/Forget",component:i},{name:"router",packageName:"react-router-dom",component:a},{name:"_LoginOuterContainer",packageName:"@components/LoginOuterContainer",component:m}]}]}};const u={name:"Language",summary:"<p>\u7528\u4e8e\u7cfb\u7edf\u4e2d\u82f1\u6587\u5207\u6362</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Language_4994a",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: Language } = _Language;\nconst { Space } = antd;\nconst BaseExample = () => {\n  return (\n    <Space>\n      <Language />\n      <div\n        style={{\n          padding: '0 10px',\n          background: 'var(--primary-color)'\n        }}\n      >\n        <Language colorful />\n      </div>\n    </Space>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Language",packageName:"@components/Language",component:t(35795)},{name:"antd",packageName:"antd",component:s}]}]}};const p={name:"Login",summary:"<p>\u767b\u5f55\u7a97\u53e3</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Login_99dea",style:".Login_99dea .example-driver-preview {\n  background: var(--primary-color); }\n\n.Login_99dea .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: Login } = _Login;\nconst { default: LoginOuterContainer } = _LoginOuterContainer;\nconst { useLocation } = router;\nconst BaseExample = () => {\n  const location = useLocation();\n  const list = location.pathname.split('/');\n  const baseUrl = list.slice(0, list.indexOf('Login') + 1).join('/') + '/account';\n  return (\n    <LoginOuterContainer className=\"outer\">\n      <Login baseUrl={baseUrl} />\n    </LoginOuterContainer>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Login",packageName:"@components/Login",component:t(246)},{name:"_LoginOuterContainer",packageName:"@components/LoginOuterContainer",component:m},{name:"router",packageName:"react-router-dom",component:a}]}]}},d={name:"LoginOuterContainer",summary:"<p>\u767b\u5f55\u6846\u5916\u90e8\u6837\u5f0f</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"LoginOuterContainer_b8c27",style:".LoginOuterContainer_b8c27 .example-driver-preview {\n  background: var(--primary-color); }\n\n.LoginOuterContainer_b8c27 .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { default: LoginOuterContainer } = _LoginOuterContainer;\nconst BaseExample = () => {\n  return <LoginOuterContainer className="outer" />;\n};\n\nrender(<BaseExample />);\n\n',scope:[{name:"_LoginOuterContainer",packageName:"@components/LoginOuterContainer",component:m}]}]}};const g={name:"Modify",summary:"<p>\u4fee\u6539\u5bc6\u7801</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Modify_7f090",style:".Modify_7f090 .example-driver-preview {\n  background: var(--primary-color); }\n\n.Modify_7f090 .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { default: Modify } = _Modify;\nconst BaseExample = () => {\n  return (\n    <Modify\n      className="outer"\n      email="test@test.com"\n      onSubmit={data => {\n        console.log(data);\n      }}\n    />\n  );\n};\n\nrender(<BaseExample />);\n\n',scope:[{name:"_Modify",packageName:"@components/Modify",component:t(85724)}]}]}};const h={name:"ResetPassword",summary:"<p>\u91cd\u7f6e\u5bc6\u7801</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"ResetPassword_fdf96",style:".ResetPassword_fdf96 .example-driver-preview {\n  background: var(--primary-color); }\n\n.ResetPassword_fdf96 .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: ResetPassword } = _ResetPassword;\nconst { useLocation } = router;\nconst BaseExample = () => {\n  const location = useLocation();\n  const list = location.pathname.split('/');\n  const baseUrl = list.slice(0, list.indexOf('ResetPassword') + 1).join('/') + '/account';\n  return (\n    <ResetPassword\n      className=\"outer\"\n      baseUrl={baseUrl}\n      email=\"test@test.com\"\n      onSubmit={data => {\n        console.log(data);\n      }}\n    />\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_ResetPassword",packageName:"@components/ResetPassword",component:t(65436)},{name:"router",packageName:"react-router-dom",component:a}]}]}};var L=t(62677);const b={Account:c,Forget:l,Language:u,Login:p,LoginOuterContainer:d,Modify:g,ResetPassword:h,Tenant:{name:"Tenant",summary:"<p>\u79df\u6237\u9009\u62e9</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!0,className:"Tenant_6252d",style:".Tenant_6252d .example-driver-preview {\n  background: var(--primary-color); }\n\n.Tenant_6252d .outer {\n  margin: 0 auto; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: Tenant } = _Tenant;\nconst { default: LoginOuterContainer } = _LoginOuterContainer;\nconst { range } = lodash;\nconst BaseExample = () => {\n  return (\n    <LoginOuterContainer className=\"outer\">\n      <Tenant\n        data={range(0, 20).map(key => ({ id: key, name: `\u6d4b\u8bd5\u516c\u53f8${key + 1}` }))}\n        onBack={() => {\n          console.log('\u8fd4\u56de');\n        }}\n        onChange={({ coid }) => {\n          console.log(coid);\n        }}\n      />\n    </LoginOuterContainer>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Tenant",packageName:"@components/Tenant",component:L},{name:"_LoginOuterContainer",packageName:"@components/LoginOuterContainer",component:m},{name:"lodash",packageName:"lodash",component:r}]},{title:"\u79df\u6237\u5217\u8868\u4e3a\u7a7a\u7684\u60c5\u51b5",description:"\u79df\u6237\u5217\u8868\u4e3a\u7a7a\u7684\u60c5\u51b5",code:"const { default: Tenant } = _Tenant;\nconst { default: LoginOuterContainer } = _LoginOuterContainer;\nconst BaseExample = () => {\n  return (\n    <LoginOuterContainer className=\"outer\">\n      <Tenant\n        data={[]}\n        onBack={() => {\n          console.log('\u8fd4\u56de');\n        }}\n        onChange={({ coid }) => {\n          console.log(coid);\n        }}\n      />\n    </LoginOuterContainer>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Tenant",packageName:"@components/Tenant",component:L},{name:"_LoginOuterContainer",packageName:"@components/LoginOuterContainer",component:m}]}]}}},x={name:"components-name",version:"0.1.0","open-version":!0,"public-url":"/components-account",modules:[{name:"Account",baseDir:"/home/runner/work/components-account/components-account/src/components/Account"},{name:"Forget",baseDir:"/home/runner/work/components-account/components-account/src/components/Forget"},{name:"Language",baseDir:"/home/runner/work/components-account/components-account/src/components/Language"},{name:"Login",baseDir:"/home/runner/work/components-account/components-account/src/components/Login"},{name:"LoginOuterContainer",baseDir:"/home/runner/work/components-account/components-account/src/components/LoginOuterContainer"},{name:"Modify",baseDir:"/home/runner/work/components-account/components-account/src/components/Modify"},{name:"ResetPassword",baseDir:"/home/runner/work/components-account/components-account/src/components/ResetPassword"},{name:"Tenant",baseDir:"/home/runner/work/components-account/components-account/src/components/Tenant"}]}}}]);
//# sourceMappingURL=112.faa8b5c1.chunk.js.map