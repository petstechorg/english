import{a4 as t}from"./index-d0XtgkNU.js";const a=()=>t({url:"/vpadmin/project/listall",method:"get"}),n=()=>t({url:"/vpadmin/project/listAllowed",method:"get"}),i=(e,r=!0)=>t({url:"/vpadmin/file/list",method:"get",params:{path:e,isFilter:r}}),s=(e,r=!0)=>t({url:"/vpadmin/file/listchanged",method:"get",params:{path:e,isFilter:r}}),m=e=>{const r=new FormData;return r.append("file",e.file),t({url:"/vpadmin/file/upload",method:"post",data:r,params:{path:e.path},headers:{"Content-Type":"multipart/form-data",repeatSubmit:!1}})},l=e=>t({url:"/vpadmin/file/download",method:"get",params:{path:e},responseType:"blob"}),d=e=>t({url:"/vpadmin/file/image",method:"get",params:{path:e},responseType:"blob"}),p=e=>t({url:"/vpadmin/file/delete",method:"delete",params:{path:e}}),u=e=>t({url:"/vpadmin/file/rename",method:"put",params:e}),c=e=>t({url:"/vpadmin/file/move",method:"put",params:e}),f=e=>t({url:"/vpadmin/file/createFolder",method:"post",params:{path:e}}),v=e=>t({url:"/vpadmin/file/read",method:"get",params:{path:e}}),h=e=>t({url:"/vpadmin/file/saveContent",method:"put",data:e}),g=e=>t({url:"/vpadmin/project/deploy",method:"post",data:e}),j=e=>t({url:"/vpadmin/project/commit",method:"post",data:e}),F=e=>t({url:"/vpadmin/file/revert",method:"post",data:e}),y=e=>t({url:"/vpadmin/project/history",method:"get",params:{path:e}}),b=e=>t({url:"/vpadmin/project/rollback",method:"put",data:e}),w=e=>t({url:"/vpadmin/file/diff",method:"get",params:e}),C=e=>t({url:"/vpadmin/file/diffImage",method:"get",params:e,responseType:"blob"}),D=e=>t({url:"/vpadmin/file/diffImageWithCommit",method:"get",params:e,responseType:"blob"}),P=(e,r="HEAD")=>t({url:"/vpadmin/project/historyRange",method:"get",params:{path:e,startCommitId:r}}),I=e=>t({url:"/vpadmin/file/diffWithCommit",method:"get",params:e});function R(e){return t({url:"/vpadmin/project/recoveries",method:"get",params:{path:e}})}function T(e){return t({url:"/vpadmin/project/recovery",method:"put",data:e})}function A(e){return t({url:"/vpadmin/project/addRecovery",method:"post",data:e})}function W(e){return t({url:`/vpadmin/project/download/${e}`,method:"get"})}export{h as A,R as a,A as b,b as c,y as d,C as e,w as f,a as g,D as h,I as i,d as j,v as k,W as l,P as m,g as n,j as o,s as p,F as q,T as r,n as s,i as t,m as u,c as v,p as w,u as x,f as y,l as z};
