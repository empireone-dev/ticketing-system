import{r as i,u as m,s as c,j as a}from"./app-CudlOiIy.js";import{u as S,a as j}from"./tickets-thunk-DCAE0kEK.js";import{g as w}from"./it-thunk-D9Iv67WG.js";import{s as A}from"./index-6kESkass.js";import{B as M}from"./button-CVQgGWCc.js";import{M as v}from"./index-vACDdURh.js";import{S as T,I as y}from"./index-Da2k2_35.js";import"./ticket-service-BU18KPrv.js";import"./AntdIcon-81uPOxm2.js";import"./index-1ty8LscP.js";import"./index-5qshk1mb.js";import"./EyeOutlined-7UjJ5yQy.js";const{TextArea:C}=y;function U(){var p,u;const[f,n]=i.useState(!1),[l,g]=A.useMessage(),{users:o}=m(s=>s.it),{user:e}=m(s=>s.app),[h,r]=i.useState(!1),[t,d]=i.useState({status:"Assigned",user_id:e==null?void 0:e.id,ticket_id:window.location.pathname.split("/")[3],assigned_to:(p=o[0])==null?void 0:p.id});i.useEffect(()=>{var s;d({...t,user_id:e==null?void 0:e.id,assigned_to:(s=o[0])==null?void 0:s.id})},[t.status]),i.useEffect(()=>{c.dispatch(w(2))},[]);const _=()=>{n(!0)};async function x(s){r(!0),t.notes?(await c.dispatch(S(t)),await c.dispatch(j()),l.success("Updated Success!"),setTimeout(()=>{r(!1),n(!1)},2e3)):(r(!1),l.error("Notes is required!"))}const k=()=>{n(!1)};return a.jsxs("div",{children:[g,a.jsx(M,{size:"large",type:"primary",danger:!0,onClick:_,children:"Assign Ticket"}),a.jsx(v,{title:"Assign Ticket",open:f,onOk:x,okText:"Submit",confirmLoading:h,onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[t.status=="Assigned"&&a.jsx(T,{size:"large",value:t.assigned_to,className:"w-full",onChange:s=>d({...t,assigned_to:s}),options:(u=o==null?void 0:o.data)==null?void 0:u.map(s=>({value:s.id,label:s.name}))}),a.jsx(C,{value:t.notes??"",onChange:s=>d({...t,notes:s.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{U as default};