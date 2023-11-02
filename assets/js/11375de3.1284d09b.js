"use strict";(self.webpackChunksake=self.webpackChunksake||[]).push([[297],{3717:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var s=d(5893),n=d(1151);const t={},c="Working Directory",i={id:"work-dir",title:"Working Directory",description:"Change Working Directory",source:"@site/../../sake/docs/work-dir.md",sourceDirName:".",slug:"/work-dir",permalink:"/work-dir",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Variables",permalink:"/variables"},next:{title:"Output",permalink:"/output"}},l={},h=[{value:"Change Working Directory",id:"change-working-directory",level:2},{value:"Remote Tasks",id:"remote-tasks",level:2},{value:"Local Tasks",id:"local-tasks",level:2}];function o(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"working-directory",children:"Working Directory"}),"\n",(0,s.jsx)(r.h2,{id:"change-working-directory",children:"Change Working Directory"}),"\n",(0,s.jsxs)(r.p,{children:["You can change the default ",(0,s.jsx)(r.code,{children:"work_dir"})," in the server section and the task section (nested tasks/commands included).\nThe order of precedence is as follows:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"task list"}),"\n",(0,s.jsx)(r.li,{children:"task"}),"\n",(0,s.jsx)(r.li,{children:"referenced task"}),"\n",(0,s.jsx)(r.li,{children:"server"}),"\n",(0,s.jsxs)(r.li,{children:["default, which is","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"the executed task directory for local clients"}),"\n",(0,s.jsx)(r.li,{children:"the users home directory for remote clients"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'servers:\n  localhost:\n    host: localhost\n    work_dir: "/opt" # 4\n    local: true\n\ntasks:\n  work-ref:\n    name: pwd\n    work_dir: "/usr" # 3\n    cmd: pwd\n\n  work-dir:\n    work_dir: "/home" # 2\n    tasks:\n      - task: work-ref\n\n      - cmd: pwd\n        name: pwd\n\n      - cmd: pwd\n        name: pwd\n        work_dir: "/" # 1\n'})}),"\n",(0,s.jsx)(r.p,{children:"See example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"$ sake run work-dir --output table\n\n Server    | Pwd   | Pwd   | Pwd\n-----------+-------+-------+-----\n localhost | /home | /home | /\n\n# if we comment work_dir (# 2) then we get\n\n Server    | Pwd  | Pwd  | Pwd\n-----------+------+------+-----\n localhost | /usr | /opt | /\n"})}),"\n",(0,s.jsx)(r.p,{children:"The complete decision tree for composing a working directory is found below."}),"\n",(0,s.jsx)(r.p,{children:"Note:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Absolute directories (",(0,s.jsx)(r.code,{children:"/opt"}),") won't be joined."]}),"\n",(0,s.jsxs)(r.li,{children:["The variables ",(0,s.jsx)(r.code,{children:"Task Context"})," and ",(0,s.jsx)(r.code,{children:"Server Context"})," are the local directories where the tasks/servers are defined."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"remote-tasks",children:"Remote Tasks"}),"\n",(0,s.jsxs)(r.p,{children:["Resolve ",(0,s.jsx)(r.code,{children:"work_dir"})," according to ",(0,s.jsx)(r.code,{children:"Server Dir"})," and ",(0,s.jsx)(r.code,{children:"Task Dir"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Host"}),(0,s.jsx)(r.th,{children:"Task"}),(0,s.jsx)(r.th,{children:"Server Dir"}),(0,s.jsx)(r.th,{children:"Task Dir"}),(0,s.jsx)(r.th,{children:"work_dir"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home/user"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home/user/task"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home/user/server"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home/user/server/task"})})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"local-tasks",children:"Local Tasks"}),"\n",(0,s.jsxs)(r.p,{children:["Resolve ",(0,s.jsx)(r.code,{children:"work_dir"})," according to ",(0,s.jsx)(r.code,{children:"Task Context"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Host"}),(0,s.jsx)(r.th,{children:"Task"}),(0,s.jsx)(r.th,{children:"Server Dir"}),(0,s.jsx)(r.th,{children:"Task Dir"}),(0,s.jsx)(r.th,{children:"work_dir"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Resolve ",(0,s.jsx)(r.code,{children:"work_dir"})," according to ",(0,s.jsx)(r.code,{children:"Task Context"})," and ",(0,s.jsx)(r.code,{children:"Task Dir"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Host"}),(0,s.jsx)(r.th,{children:"Task"}),(0,s.jsx)(r.th,{children:"Server Dir"}),(0,s.jsx)(r.th,{children:"Task Dir"}),(0,s.jsx)(r.th,{children:"work_dir"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]/task"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]/task"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]/task"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Task Context]/task"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Resolve ",(0,s.jsx)(r.code,{children:"work_dir"})," according to ",(0,s.jsx)(r.code,{children:"Server Context"})," and ",(0,s.jsx)(r.code,{children:"Server Dir"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Host"}),(0,s.jsx)(r.th,{children:"Task"}),(0,s.jsx)(r.th,{children:"Server Dir"}),(0,s.jsx)(r.th,{children:"Task Dir"}),(0,s.jsx)(r.th,{children:"work_dir"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"remote"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Server Context]/server"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'""'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Server Context]/server"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Resolve ",(0,s.jsx)(r.code,{children:"work_dir"})," according to ",(0,s.jsx)(r.code,{children:"Server Context"}),", ",(0,s.jsx)(r.code,{children:"Server Dir"})," and ",(0,s.jsx)(r.code,{children:"Task Dir"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Host"}),(0,s.jsx)(r.th,{children:"Task"}),(0,s.jsx)(r.th,{children:"Server Dir"}),(0,s.jsx)(r.th,{children:"Task Dir"}),(0,s.jsx)(r.th,{children:"work_dir"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Server Context]/server/cmd"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:'"server"'}),(0,s.jsx)(r.td,{children:'"task"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[Server Context]/server/cmd"})})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,r,d)=>{d.d(r,{Z:()=>i,a:()=>c});var s=d(7294);const n={},t=s.createContext(n);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);