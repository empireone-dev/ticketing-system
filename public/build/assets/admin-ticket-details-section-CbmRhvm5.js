import{u as m,j as s}from"./app-Bx9m_Czv.js";import a from"./admin-ticket-change-status-section-zn5IMCOD.js";import l from"./admin-ticket-assigned-section-CasusjIk.js";import"./tickets-thunk-DkEZxlIF.js";import"./ticket-service-BbdHVoCZ.js";import"./it-thunk-BGDWfvgX.js";import"./index-Bx7xNqx-.js";import"./index-Nodq5img.js";import"./index-BY39-JY2.js";import"./index-CJwuiIz9.js";import"./index-DclHcJBt.js";import"./EyeOutlined-3Y_RI0Fx.js";function v(){var e,d;const{ticket:t}=m(i=>i.tickets);return s.jsxs("div",{children:[s.jsxs("div",{class:"px-4 sm:px-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{class:"text-base font-semibold leading-7 text-gray-900",children:"Project Information"}),s.jsxs("div",{className:"flex gap-3",children:[t.status=="Pending"&&s.jsx(l,{}),s.jsx(a,{})]})]}),s.jsx("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-500",children:"Project details and application."})]}),s.jsx("div",{class:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{class:"divide-y divide-gray-100",children:[s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Ticket ID:"}),s.jsxs("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:["#",t.ticket_id]})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Assigned To:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:(e=t==null?void 0:t.assigned_to)==null?void 0:e.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Category"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:(d=t==null?void 0:t.category)==null?void 0:d.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Status"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t==null?void 0:t.status})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Urgent?"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:(t==null?void 0:t.isUrgent)==null?"No":"Yes"})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6 text-gray-900",children:"Details"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t==null?void 0:t.details})]})]})})]})}export{v as default};