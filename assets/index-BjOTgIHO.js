import{d as J,r as p,ad as j,ac as _e,b as Ve,ai as ye,o as c,c as W,p as a,q as n,w as g,m as $,e as l,I as E,y as v,W as G,ah as ke,A as _,ag as we,i as D,t as Ne,F as Ue,z as Ce,a3 as he,dq as Ee,dr as Te,ds as Ie,dt as Pe,du as Se,dv as qe,dw as $e,U as De,x as Fe,aq as xe,P as Re,R as Be,S as Le,B as Ke,v as ze}from"./index-d0XtgkNU.js";/* empty css                  */import{E as Ae}from"./el-date-picker-BXOap1bn.js";import{_ as Ye}from"./index-EJp3Rhqf.js";import{E as Me,a as Qe}from"./el-table-column-FMbndehW.js";import"./el-checkbox-ulbqhsoI.js";/* empty css               */import{_ as He}from"./index-DYvI2SmG.js";/* empty css               *//* empty css                */import{E as Oe,a as je}from"./el-form-item-Co10Fxal.js";import{s as We}from"./index-DVDyr_xu.js";import{E as Ge}from"./index-BvJTD2e8.js";import{E as Je}from"./index-CjH6m0Rs.js";import{E as Xe}from"./index-B618k1Fg.js";import"./index-vyBddJ8T.js";import"./_initCloneObject-Cvrh7RdV.js";/* empty css                */import"./index-D4hogjBm.js";import"./_baseClone-Ci69n5Iw.js";const Ze={class:"p-2"},ea={class:"mb-[10px]"},aa={class:"dialog-footer"},la=J({name:"Tenant"}),Ua=J({...la,setup(ta){const{proxy:d}=he(),F=p([]),x=p([]),U=p(!1),V=p(!0),C=p(!0),T=p([]),R=p(!0),B=p(!0),I=p(0),L=p(),P=p(),f=j({visible:!1,title:""}),K={id:void 0,tenantId:void 0,contactUserName:"",contactPhone:"",username:"",password:"",companyName:"",licenseNumber:"",domain:"",address:"",intro:"",remark:"",packageId:"",expireTime:"",accountCount:0,status:"0"},X=j({form:{...K},queryParams:{pageNum:1,pageSize:10,tenantId:"",contactUserName:"",contactPhone:"",companyName:""},rules:{id:[{required:!0,message:"id不能为空",trigger:"blur"}],tenantId:[{required:!0,message:"租户编号不能为空",trigger:"blur"}],contactUserName:[{required:!0,message:"联系人不能为空",trigger:"blur"}],contactPhone:[{required:!0,message:"联系电话不能为空",trigger:"blur"}],companyName:[{required:!0,message:"企业名称不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"}]}}),{queryParams:u,form:s,rules:Z}=_e(X),z=async()=>{const o=await We();x.value=o.data},y=async()=>{V.value=!0;const o=await Ee(u.value);F.value=o.rows,I.value=o.total,V.value=!1},ee=async o=>{let e=o.status==="0"?"启用":"停用";try{await(d==null?void 0:d.$modal.confirm('确认要"'+e+'""'+o.companyName+'"租户吗？')),await Te(o.id,o.tenantId,o.status),d==null||d.$modal.msgSuccess(e+"成功")}catch{o.status=o.status==="0"?"1":"0"}},ae=()=>{S(),f.visible=!1},S=()=>{var o;s.value={...K},(o=P.value)==null||o.resetFields()},w=()=>{u.value.pageNum=1,y()},le=()=>{var o;(o=L.value)==null||o.resetFields(),w()},te=o=>{T.value=o.map(e=>e.id),R.value=o.length!=1,B.value=!o.length},ne=()=>{S(),z(),f.visible=!0,f.title="添加租户"},A=async o=>{S(),await z();const e=(o==null?void 0:o.id)||T.value[0],i=await Ie(e);Object.assign(s.value,i.data),f.visible=!0,f.title="修改租户"},oe=()=>{var o;(o=P.value)==null||o.validate(async e=>{e&&(U.value=!0,s.value.id?await Pe(s.value).finally(()=>U.value=!1):await Se(s.value).finally(()=>U.value=!1),d==null||d.$modal.msgSuccess("操作成功"),f.visible=!1,await y())})},Y=async o=>{const e=(o==null?void 0:o.id)||T.value;await(d==null?void 0:d.$modal.confirm('是否确认删除租户编号为"'+e+'"的数据项？')),V.value=!0,await qe(e).finally(()=>V.value=!1),await y(),d==null||d.$modal.msgSuccess("删除成功")},se=async o=>{try{await(d==null?void 0:d.$modal.confirm('是否确认同步租户套餐租户编号为"'+o.tenantId+'"的数据项？')),V.value=!0,await $e(o.tenantId,o.packageId),await y(),d==null||d.$modal.msgSuccess("同步成功")}catch{return}finally{V.value=!1}},de=()=>{d==null||d.download("system/tenant/export",{...u.value},`tenant_${new Date().getTime()}.xlsx`)};return Ve(()=>{y()}),(o,e)=>{var H,O;const i=De,r=Oe,m=Fe,M=je,Q=Ge,h=Je,re=He,ie=Xe,b=Me,ue=xe,q=Re,me=Qe,pe=Ye,ce=Be,ge=Le,fe=Ae,be=Ke,k=ye("hasPermi"),ve=ze;return c(),W("div",Ze,[a(ke,{"enter-active-class":(H=l(d))==null?void 0:H.animate.searchAnimate.enter,"leave-active-class":(O=l(d))==null?void 0:O.animate.searchAnimate.leave},{default:n(()=>[g($("div",ea,[a(Q,{shadow:"hover"},{default:n(()=>[a(M,{ref_key:"queryFormRef",ref:L,model:l(u),inline:!0},{default:n(()=>[a(r,{label:"租户编号",prop:"tenantId"},{default:n(()=>[a(i,{modelValue:l(u).tenantId,"onUpdate:modelValue":e[0]||(e[0]=t=>l(u).tenantId=t),placeholder:"请输入租户编号",clearable:"",onKeyup:E(w,["enter"])},null,8,["modelValue"])]),_:1}),a(r,{label:"联系人",prop:"contactUserName"},{default:n(()=>[a(i,{modelValue:l(u).contactUserName,"onUpdate:modelValue":e[1]||(e[1]=t=>l(u).contactUserName=t),placeholder:"请输入联系人",clearable:"",onKeyup:E(w,["enter"])},null,8,["modelValue"])]),_:1}),a(r,{label:"联系电话",prop:"contactPhone"},{default:n(()=>[a(i,{modelValue:l(u).contactPhone,"onUpdate:modelValue":e[2]||(e[2]=t=>l(u).contactPhone=t),placeholder:"请输入联系电话",clearable:"",onKeyup:E(w,["enter"])},null,8,["modelValue"])]),_:1}),a(r,{label:"企业名称",prop:"companyName"},{default:n(()=>[a(i,{modelValue:l(u).companyName,"onUpdate:modelValue":e[3]||(e[3]=t=>l(u).companyName=t),placeholder:"请输入企业名称",clearable:"",onKeyup:E(w,["enter"])},null,8,["modelValue"])]),_:1}),a(r,null,{default:n(()=>[a(m,{type:"primary",icon:"Search",onClick:w},{default:n(()=>e[23]||(e[23]=[v("搜索")])),_:1}),a(m,{icon:"Refresh",onClick:le},{default:n(()=>e[24]||(e[24]=[v("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[G,l(C)]])]),_:1},8,["enter-active-class","leave-active-class"]),a(Q,{shadow:"hover"},{header:n(()=>[a(ie,{gutter:10,class:"mb8"},{default:n(()=>[a(h,{span:1.5},{default:n(()=>[g((c(),_(m,{type:"primary",plain:"",icon:"Plus",onClick:ne},{default:n(()=>e[25]||(e[25]=[v("新增")])),_:1})),[[k,["system:tenant:add"]]])]),_:1}),a(h,{span:1.5},{default:n(()=>[g((c(),_(m,{type:"success",plain:"",icon:"Edit",disabled:l(R),onClick:e[4]||(e[4]=t=>A())},{default:n(()=>e[26]||(e[26]=[v("修改")])),_:1},8,["disabled"])),[[k,["system:tenant:edit"]]])]),_:1}),a(h,{span:1.5},{default:n(()=>[g((c(),_(m,{type:"danger",plain:"",icon:"Delete",disabled:l(B),onClick:e[5]||(e[5]=t=>Y())},{default:n(()=>e[27]||(e[27]=[v(" 删除 ")])),_:1},8,["disabled"])),[[k,["system:tenant:remove"]]])]),_:1}),a(h,{span:1.5},{default:n(()=>[g((c(),_(m,{type:"warning",plain:"",icon:"Download",onClick:de},{default:n(()=>e[28]||(e[28]=[v("导出")])),_:1})),[[k,["system:tenant:export"]]])]),_:1}),a(re,{showSearch:l(C),"onUpdate:showSearch":e[6]||(e[6]=t=>we(C)?C.value=t:null),onQueryTable:y},null,8,["showSearch"])]),_:1})]),default:n(()=>[g((c(),_(me,{data:l(F),onSelectionChange:te},{default:n(()=>[a(b,{type:"selection",width:"55",align:"center"}),D("",!0),a(b,{label:"租户编号",align:"center",prop:"tenantId"}),a(b,{label:"联系人",align:"center",prop:"contactUserName"}),a(b,{label:"联系电话",align:"center",prop:"contactPhone"}),a(b,{label:"企业名称",align:"center",prop:"companyName"}),a(b,{label:"社会信用代码",align:"center",prop:"licenseNumber"}),a(b,{label:"过期时间",align:"center",prop:"expireTime",width:"180"},{default:n(t=>[$("span",null,Ne(o.parseTime(t.row.expireTime,"{y}-{m}-{d}")),1)]),_:1}),a(b,{label:"租户状态",align:"center",prop:"status"},{default:n(t=>[a(ue,{modelValue:t.row.status,"onUpdate:modelValue":N=>t.row.status=N,"active-value":"0","inactive-value":"1",onChange:N=>ee(t.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(b,{width:"150",label:"操作",align:"center",fixed:"right","class-name":"small-padding fixed-width"},{default:n(t=>[a(q,{content:"修改",placement:"top"},{default:n(()=>[g(a(m,{link:"",type:"primary",icon:"Edit",onClick:N=>A(t.row)},null,8,["onClick"]),[[k,["system:tenant:edit"]]])]),_:2},1024),a(q,{content:"同步套餐",placement:"top"},{default:n(()=>[g(a(m,{link:"",type:"primary",icon:"Refresh",onClick:N=>se(t.row)},null,8,["onClick"]),[[k,["system:tenant:edit"]]])]),_:2},1024),a(q,{content:"删除",placement:"top"},{default:n(()=>[g(a(m,{link:"",type:"primary",icon:"Delete",onClick:N=>Y(t.row)},null,8,["onClick"]),[[k,["system:tenant:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[ve,l(V)]]),g(a(pe,{page:l(u).pageNum,"onUpdate:page":e[7]||(e[7]=t=>l(u).pageNum=t),limit:l(u).pageSize,"onUpdate:limit":e[8]||(e[8]=t=>l(u).pageSize=t),total:l(I),onPagination:y},null,8,["page","limit","total"]),[[G,l(I)>0]])]),_:1}),a(be,{modelValue:l(f).visible,"onUpdate:modelValue":e[22]||(e[22]=t=>l(f).visible=t),title:l(f).title,width:"500px","append-to-body":""},{footer:n(()=>[$("div",aa,[a(m,{loading:l(U),type:"primary",onClick:oe},{default:n(()=>e[29]||(e[29]=[v("确 定")])),_:1},8,["loading"]),a(m,{onClick:ae},{default:n(()=>e[30]||(e[30]=[v("取 消")])),_:1})])]),default:n(()=>[a(M,{ref_key:"tenantFormRef",ref:P,model:l(s),rules:l(Z),"label-width":"80px"},{default:n(()=>[a(r,{label:"企业名称",prop:"companyName"},{default:n(()=>[a(i,{modelValue:l(s).companyName,"onUpdate:modelValue":e[9]||(e[9]=t=>l(s).companyName=t),placeholder:"请输入企业名称"},null,8,["modelValue"])]),_:1}),a(r,{label:"联系人",prop:"contactUserName"},{default:n(()=>[a(i,{modelValue:l(s).contactUserName,"onUpdate:modelValue":e[10]||(e[10]=t=>l(s).contactUserName=t),placeholder:"请输入联系人"},null,8,["modelValue"])]),_:1}),a(r,{label:"联系电话",prop:"contactPhone"},{default:n(()=>[a(i,{modelValue:l(s).contactPhone,"onUpdate:modelValue":e[11]||(e[11]=t=>l(s).contactPhone=t),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),l(s).id?D("",!0):(c(),_(r,{key:0,label:"用户名",prop:"username"},{default:n(()=>[a(i,{modelValue:l(s).username,"onUpdate:modelValue":e[12]||(e[12]=t=>l(s).username=t),placeholder:"请输入系统用户名",maxlength:"30"},null,8,["modelValue"])]),_:1})),l(s).id?D("",!0):(c(),_(r,{key:1,label:"用户密码",prop:"password"},{default:n(()=>[a(i,{modelValue:l(s).password,"onUpdate:modelValue":e[13]||(e[13]=t=>l(s).password=t),type:"password",placeholder:"请输入系统用户密码",maxlength:"20"},null,8,["modelValue"])]),_:1})),a(r,{label:"租户套餐",prop:"packageId"},{default:n(()=>[a(ge,{modelValue:l(s).packageId,"onUpdate:modelValue":e[14]||(e[14]=t=>l(s).packageId=t),disabled:!!l(s).tenantId,placeholder:"请选择租户套餐",clearable:"",style:{width:"100%"}},{default:n(()=>[(c(!0),W(Ue,null,Ce(l(x),t=>(c(),_(ce,{key:t.packageId,label:t.packageName,value:t.packageId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(r,{label:"过期时间",prop:"expireTime"},{default:n(()=>[a(fe,{modelValue:l(s).expireTime,"onUpdate:modelValue":e[15]||(e[15]=t=>l(s).expireTime=t),clearable:"",type:"datetime","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择过期时间"},null,8,["modelValue"])]),_:1}),a(r,{label:"用户数量",prop:"accountCount"},{default:n(()=>[a(i,{modelValue:l(s).accountCount,"onUpdate:modelValue":e[16]||(e[16]=t=>l(s).accountCount=t),placeholder:"请输入用户数量"},null,8,["modelValue"])]),_:1}),a(r,{label:"绑定域名",prop:"domain"},{default:n(()=>[a(i,{modelValue:l(s).domain,"onUpdate:modelValue":e[17]||(e[17]=t=>l(s).domain=t),placeholder:"请输入绑定域名"},null,8,["modelValue"])]),_:1}),a(r,{label:"企业地址",prop:"address"},{default:n(()=>[a(i,{modelValue:l(s).address,"onUpdate:modelValue":e[18]||(e[18]=t=>l(s).address=t),placeholder:"请输入企业地址"},null,8,["modelValue"])]),_:1}),a(r,{label:"企业代码",prop:"licenseNumber"},{default:n(()=>[a(i,{modelValue:l(s).licenseNumber,"onUpdate:modelValue":e[19]||(e[19]=t=>l(s).licenseNumber=t),placeholder:"请输入统一社会信用代码"},null,8,["modelValue"])]),_:1}),a(r,{label:"企业简介",prop:"intro"},{default:n(()=>[a(i,{modelValue:l(s).intro,"onUpdate:modelValue":e[20]||(e[20]=t=>l(s).intro=t),type:"textarea",placeholder:"请输入企业简介"},null,8,["modelValue"])]),_:1}),a(r,{label:"备注",prop:"remark"},{default:n(()=>[a(i,{modelValue:l(s).remark,"onUpdate:modelValue":e[21]||(e[21]=t=>l(s).remark=t),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{Ua as default};
