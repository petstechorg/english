import{d as y,ar as N,k as U,r as _,o as q,A as C,q as o,p as l,e as t,y as s,U as R,x as v,a3 as I}from"./index-d0XtgkNU.js";import{E as w,a as B}from"./el-form-item-Co10Fxal.js";/* empty css                       *//* empty css                 */import{f as F}from"./index-hj1DPKit.js";import{E as $,a as P}from"./index-DdrOsfGg.js";const H=y({__name:"userInfo",props:{user:N.any.isRequired},setup(b){const p=b,r=U(()=>p.user),{proxy:n}=I(),i=_(),V=_({nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}),c=()=>{var m;(m=i.value)==null||m.validate(async e=>{e&&(await F(p.user),n==null||n.$modal.msgSuccess("修改成功"))})},k=()=>{n==null||n.$tab.closePage()};return(m,e)=>{const d=R,u=w,f=$,x=P,g=v,E=B;return q(),C(E,{ref_key:"userRef",ref:i,model:t(r),rules:t(V),"label-width":"80px"},{default:o(()=>[l(u,{label:"用户昵称",prop:"nickName"},{default:o(()=>[l(d,{modelValue:t(r).nickName,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).nickName=a),maxlength:"30"},null,8,["modelValue"])]),_:1}),l(u,{label:"手机号码",prop:"phonenumber"},{default:o(()=>[l(d,{modelValue:t(r).phonenumber,"onUpdate:modelValue":e[1]||(e[1]=a=>t(r).phonenumber=a),maxlength:"11"},null,8,["modelValue"])]),_:1}),l(u,{label:"邮箱",prop:"email"},{default:o(()=>[l(d,{modelValue:t(r).email,"onUpdate:modelValue":e[2]||(e[2]=a=>t(r).email=a),maxlength:"50"},null,8,["modelValue"])]),_:1}),l(u,{label:"性别"},{default:o(()=>[l(x,{modelValue:t(r).sex,"onUpdate:modelValue":e[3]||(e[3]=a=>t(r).sex=a)},{default:o(()=>[l(f,{value:"0"},{default:o(()=>e[4]||(e[4]=[s("男")])),_:1}),l(f,{value:"1"},{default:o(()=>e[5]||(e[5]=[s("女")])),_:1})]),_:1},8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(g,{type:"primary",onClick:c},{default:o(()=>e[6]||(e[6]=[s("保存")])),_:1}),l(g,{type:"danger",onClick:k},{default:o(()=>e[7]||(e[7]=[s("关闭")])),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{H as _};
