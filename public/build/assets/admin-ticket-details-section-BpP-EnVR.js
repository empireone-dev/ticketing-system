import{u as l,j as s}from"./app-DT5TrkIF.js";import n from"./admin-ticket-change-status-section-Cz_Ua63D.js";import a from"./admin-ticket-assigned-section-BdTYx74c.js";import"./tickets-thunk-D8iw4ltm.js";import"./ticket-service-DUqFUMGJ.js";import"./it-thunk-BXdYSmLo.js";import"./index-d6vgBHlx.js";import"./button-B_Zv3YjN.js";import"./index-Bm51j7VL.js";import"./AntdIcon-hVyDPaL2.js";import"./index-jeHZDHXJ.js";import"./ContextIsolator-BC2p7wAS.js";import"./motion-BgXI6ao8.js";import"./index-FSvKkBtg.js";import"./PurePanel-BXQez2Fd.js";import"./index-BUSLZoJ_.js";import"./CheckOutlined-U0xuD_OU.js";import"./index-Cet-z0vk.js";import"./index-Bqzqwpy2.js";import"./EyeOutlined-LDIe7Ts0.js";function P(){var d,i,t;const{ticket:m}=l(e=>e.tickets);return console.log("ticket",m),s.jsxs("div",{children:[s.jsxs("div",{class:"px-4 sm:px-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{class:"text-base font-semibold leading-7 text-gray-900",children:"Project Information"}),s.jsxs("div",{className:"flex gap-3",children:[m.status=="Pending"&&s.jsx(a,{}),s.jsx(n,{})]})]}),s.jsxs("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-800",children:["Start At: ",m.start]}),s.jsxs("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-800",children:["End At: ",m.end]})]}),s.jsx("div",{class:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{class:"divide-y divide-gray-100",children:[s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Ticket ID:"}),s.jsxs("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:["#",m.ticket_id]})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Filed by:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(d=m.user)==null?void 0:d.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Assigned To:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(i=m==null?void 0:m.assigned_to)==null?void 0:i.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Category:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(t=m==null?void 0:m.category)==null?void 0:t.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Status:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:m==null?void 0:m.status})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Urgent?:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(m==null?void 0:m.isUrgent)===null||(m==null?void 0:m.isUrgent)==="undefined"?"No":"Yes"})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Details:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:m==null?void 0:m.details})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"PC/Station No.:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(m==null?void 0:m.station)==="undefined"?"N/A":(m==null?void 0:m.station)??""})]})]})})]})}export{P as default};