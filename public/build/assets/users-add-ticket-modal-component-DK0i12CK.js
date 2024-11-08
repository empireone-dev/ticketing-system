import{r as p,u as d,j as a,s as o}from"./app-CudlOiIy.js";import{T as k,R as v,D as L}from"./textarea-CdD23JzP.js";import{c as C}from"./tickets-thunk-DCAE0kEK.js";import{S,I as u}from"./select-Dup_9F-n.js";import{a as U}from"./it-thunk-D9Iv67WG.js";import{a as N}from"./category-thunk-BBVUKa80.js";import{s as T}from"./app-thunk-DGGOG_k3.js";import{h as n}from"./moment-C5S46NFB.js";import{s as w}from"./index-6kESkass.js";import{M as D}from"./index-vACDdURh.js";import{U as O}from"./index-CEVNgx01.js";import{B as R}from"./button-CVQgGWCc.js";import"./AntdIcon-81uPOxm2.js";import"./index-1ty8LscP.js";import"./index-5qshk1mb.js";import"./EyeOutlined-7UjJ5yQy.js";import"./ticket-service-BU18KPrv.js";function X({isOpen:g,closeModal:l}){const[f,c]=p.useState(!1),[e,i]=p.useState({status:"Pending"});d(t=>t.it);const{user:m}=d(t=>t.app),[h,x]=w.useMessage(),{RangePicker:y}=L,{allCategories:j}=d(t=>t.category);function _(t){return!(t==null?void 0:t.some(r=>r.status!=="done"))}async function b(t){t.preventDefault(),c(!0);const s=new FormData;if(s.append("assigned_to",e.assigned_to),s.append("category_id",e.category_id),s.append("details",e.details),s.append("station",e.station),s.append("status",e.status),s.append("isUrgent",e.isUrgent),s.append("user_id",m.id),s.append("others",e.others),s.append("start",(e==null?void 0:e.start)??n().format("LLLL")),s.append("end",(e==null?void 0:e.end)??n().format("LLLL")),_(e.files)&&e.files)for(let r=0;r<e.files.length;r++)e.files[r].name!=="uploaded"&&e.files[r].status=="done"&&s.append("files[]",e.files[r].originFileObj);await o.dispatch(C(s)),await o.dispatch(U(m.id)),await o.dispatch(T(s)),e.category_id=="Others"&&o.dispatch(N()),h.success("Created Successfully!"),i({status:"Pending"}),l(),c(!1)}return a.jsxs(a.Fragment,{children:[x,a.jsx(D,{title:"Ticket Information",okText:"Submit",onOk:b,confirmLoading:f,open:g,onCancel:l,children:a.jsxs("form",{className:"max-w-full mx-auto mt-4 ",children:[a.jsxs("div",{className:"grid md:gap-6",children:[a.jsx(S,{value:e.category_id,label:"Category",name:"category_id",onChange:t=>i({...e,category_id:t.target.value}),options:j.map(t=>({label:t.name,value:t.id}))}),e.category_id=="Others"&&a.jsx(u,{onChange:t=>i({...e,others:t.target.value}),value:e.others??"",required:"true",name:"others",label:"Other Request",type:"text"})]}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(y,{onChange:t=>i({...e,start:n(t[0].$d).format("LLLL"),end:n(t[1].$d).format("LLLL")}),showTime:!0})}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(k,{onChange:t=>i({...e,details:t.target.value}),value:e.details??"",required:"true",name:"details",label:"Request Details",type:"text"})}),a.jsx("div",{className:"grid md:gap-6 mt-4 mb-7 ",children:a.jsx(u,{onChange:t=>i({...e,station:t.target.value}),value:e.station??"",name:"station",label:"PC/Station No.",type:"text"})}),a.jsx(O,{onChange:t=>i({...e,files:t.fileList}),multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",className:"upload-list-inline",children:a.jsx(R,{icon:a.jsx(v,{}),children:"Upload"})}),a.jsxs("div",{class:"flex items-center my-4",children:[a.jsx("input",{id:"default-checkbox",type:"checkbox",value:"",name:"isUrgent",checked:e.isUrgent=="true",onChange:t=>i({...e,[t.target.name]:JSON.stringify(t.target.checked)}),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "}),a.jsx("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Is Urgent"})]})]})})]})}export{X as default};