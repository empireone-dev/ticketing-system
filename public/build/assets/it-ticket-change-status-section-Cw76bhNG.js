import{r as o,u,j as a,s as p}from"./app-DG0oUn15.js";import{u as _,b as S}from"./tickets-thunk-B_KaCMV7.js";import{s as C}from"./index-BbbrlD2n.js";import{B as T}from"./index-BBp4l9YW.js";import{M as w}from"./index-DIXiB-td.js";import{S as j,I as v}from"./index-CvRy2yjJ.js";import"./ticket-service-BUXOqfJK.js";import"./index-XLxPQVGP.js";import"./EyeOutlined-CMKklKYH.js";const{TextArea:M}=v;function R(){var r;const[m,n]=o.useState(!1),[c,f]=C.useMessage(),{users:l}=u(e=>e.it),{user:s}=u(e=>e.app),[h,d]=o.useState(!1),[t,i]=o.useState({status:"Closed",user_id:s==null?void 0:s.id,ticket_id:window.location.pathname.split("/")[4],assigned_to:(r=l[0])==null?void 0:r.id});o.useEffect(()=>{var e;i({...t,user_id:s==null?void 0:s.id,assigned_to:(e=l[0])==null?void 0:e.id})},[t.status]),o.useEffect(()=>{},[]);const g=()=>{n(!0)};async function k(e){t.notes?(d(!0),await p.dispatch(_(t)),i({status:"Close ticket",ticket_id:window.location.pathname.split("/")[4],assigned_to:l[0]}),p.dispatch(S()),c.success("Updated Success!"),n(!1),d(!1)):c.error("Notes is required!")}const x=()=>{n(!1)};return a.jsxs("div",{children:[f,a.jsx(T,{size:"large",type:"primary",onClick:g,children:"Update Ticket Status"}),a.jsx(w,{title:"Update Ticket Status",open:m,onOk:k,okText:"Submit",onCancel:x,confirmLoading:h,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(j,{size:"large",value:t.status,className:"w-full",onChange:e=>i({...t,status:e}),options:[{value:"Closed",label:"Close Ticket"},{value:"Assigned",label:"Transfer Ticket"},{value:"Declined",label:"Declined Ticket"}]}),a.jsx(M,{value:t.notes??"",onChange:e=>i({...t,notes:e.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{R as default};