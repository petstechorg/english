import{a4 as o}from"./index-d0XtgkNU.js";const r=e=>o({url:"/workflow/processDefinition/list",method:"get",params:e}),n=e=>o({url:`/workflow/processDefinition/getListByKey/${e}`,method:"get"}),s=e=>o({url:`/workflow/processDefinition/definitionXml/${e}`,method:"get"}),l=(e,t)=>o({url:`/workflow/processDefinition/${e}/${t}`,method:"delete"}),f=e=>o({url:`/workflow/processDefinition/updateDefinitionState/${e}`,method:"put"}),u=e=>o({url:`/workflow/processDefinition/convertToModel/${e}`,method:"put"});function c(e){return o({url:"/workflow/processDefinition/deployByFile",method:"post",data:e,headers:{repeatSubmit:!1}})}const a=(e,t)=>o({url:`/workflow/processDefinition/migrationDefinition/${e}/${t}`,method:"put"});export{l as a,c as b,u as c,s as d,n as g,r as l,a as m,f as u};
