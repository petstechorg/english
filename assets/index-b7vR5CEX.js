import{d as Q,h as U,ac as j,r as c,ad as z,b as H,o as u,c as E,p as a,q as t,w as J,A as k,y as i,t as l,e as m,m as b,ae as C,F as K,a3 as O,x as W,P as X,af as Y,B as Z,v as x,_ as ee}from"./index-d0XtgkNU.js";/* empty css                  */import{E as ae,a as te}from"./el-descriptions-item-bsTDM34O.js";/* empty css                */import{E as le,a as oe}from"./el-table-column-FMbndehW.js";import"./el-checkbox-ulbqhsoI.js";import{_ as ne}from"./index-_SdeSYKq.js";/* empty css               */import{_ as ie}from"./index-DYvI2SmG.js";import{l as se}from"./index-VnykVvco.js";import{E as re}from"./index-B618k1Fg.js";import{E as de}from"./index-BvJTD2e8.js";import"./_initCloneObject-Cvrh7RdV.js";/* empty css                */import"./index-D4hogjBm.js";const ce={class:"p-2"},pe={class:"break-word"},ue={class:"dialog-footer"},me=Q({__name:"index",setup(fe){const{t:I}=U(),{proxy:f}=O(),{vpa_giftcard_status:y}=j(f==null?void 0:f.useDict("vpa_giftcard_status")),h=c([]),_=c(!0),V=c([]),N=c(!0),B=c(!0),p=z({visible:!1,title:I("viewDetails"),isEdit:!1}),n=c({}),w=e=>{if(!e.createTime||!e.validDays)return 0;const g=new Date(e.createTime).getTime()+e.validDays*24*60*60*1e3,v=new Date().getTime();return Math.ceil((g-v)/(24*60*60*1e3))},F=e=>{n.value={...e},p.visible=!0},$=async()=>{try{_.value=!0;const e=await se();h.value=e.data||[]}catch(e){console.error("Failed to fetch gift card list:",e)}finally{_.value=!1}},L=e=>{V.value=e.map(s=>s.id),N.value=e.length!=1,B.value=!e.length};return H(()=>{$()}),(e,s)=>{const g=ie,v=re,r=le,D=ne,T=W,R=X,S=oe,A=de,d=ae,M=Y,q=te,G=Z,P=x;return u(),E("div",ce,[a(A,{shadow:"never",class:"table-container"},{header:t(()=>[a(v,{gutter:10,class:"mb8"},{default:t(()=>[a(g,{search:!1,onQueryTable:$})]),_:1})]),default:t(()=>[J((u(),k(S,{data:h.value,"max-height":"calc(100vh - 230px)",class:"table-wrapper",onSelectionChange:L},{default:t(()=>[a(r,{label:e.$t("giftcard.cardId"),align:"center",prop:"cardId","show-overflow-tooltip":""},null,8,["label"]),a(r,{label:e.$t("giftcard.cardName"),align:"center",prop:"cardName"},null,8,["label"]),a(r,{label:e.$t("giftcard.denomination"),align:"center",prop:"denomination"},null,8,["label"]),a(r,{label:e.$t("giftcard.validDays"),align:"center",prop:"validDays"},{default:t(o=>[i(l(o.row.validDays)+" "+l(e.$t("giftcard.days")),1)]),_:1},8,["label"]),a(r,{label:e.$t("giftcard.status"),align:"center",prop:"status"},{default:t(o=>[a(D,{options:m(y),value:o.row.status},null,8,["options","value"])]),_:1},8,["label"]),a(r,{label:e.$t("giftcard.createTime"),align:"center",prop:"createTime",width:"180"},{default:t(o=>[b("span",null,l(m(C)(o.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")),1)]),_:1},8,["label"]),a(r,{label:e.$t("operations"),align:"center","class-name":"small-padding fixed-width",fixed:"right"},{default:t(o=>[a(R,{content:e.$t("viewDetails"),placement:"top"},{default:t(()=>[a(T,{link:"",type:"primary",icon:"View",onClick:_e=>F(o.row)},null,8,["onClick"])]),_:2},1032,["content"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,_.value]])]),_:1}),a(G,{modelValue:p.visible,"onUpdate:modelValue":s[1]||(s[1]=o=>p.visible=o),title:p.title,"append-to-body":""},{footer:t(()=>[b("div",ue,[a(T,{onClick:s[0]||(s[0]=o=>p.visible=!1)},{default:t(()=>[i(l(e.$t("close")),1)]),_:1})])]),default:t(()=>[a(q,{column:1,border:""},{default:t(()=>[a(d,{label:e.$t("giftcard.cardId")},{default:t(()=>[b("span",pe,l(n.value.cardId),1)]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.cardName")},{default:t(()=>[i(l(n.value.cardName),1)]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.denomination")},{default:t(()=>[i(l(n.value.denomination),1)]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.validDays")},{default:t(()=>[i(l(n.value.validDays)+" "+l(e.$t("giftcard.days")),1)]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.createTime")},{default:t(()=>[i(l(m(C)(n.value.createTime,"{y}-{m}-{d} {h}:{i}:{s}")),1)]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.remainingDays")},{default:t(()=>[w(n.value)>=0?(u(),E(K,{key:0},[i(l(w(n.value))+" "+l(e.$t("giftcard.days")),1)],64)):(u(),k(M,{key:1,type:"danger"},{default:t(()=>[i(l(e.$t("giftcard.expired")),1)]),_:1}))]),_:1},8,["label"]),a(d,{label:e.$t("giftcard.status")},{default:t(()=>[a(D,{options:m(y),value:n.value.status},null,8,["options","value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])])}}}),Be=ee(me,[["__scopeId","data-v-ffed2c97"]]);export{Be as default};
