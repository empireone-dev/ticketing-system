import{u as d,r,s as n,j as e}from"./app-D67iUabj.js";import{d as h,e as x}from"./tickets-thunk-BCUoFpLb.js";import{h as u}from"./moment-C5S46NFB.js";import{B as f}from"./button-DgAWbM5g.js";import"./ticket-service-B8kEmEVT.js";import"./index-QrrsXre8.js";import"./AntdIcon-3KqmtG7u.js";function E(){const{notes:a,path:m}=d(t=>t.tickets),{user:s}=d(t=>t.app),[i,o]=r.useState({}),[p,l]=r.useState(!1);r.useEffect(()=>{s&&o({...s,user_id:s.id,ticket_id:window.location.pathname.split("/")[4]})},[s]),r.useEffect(()=>{n.dispatch(h(window.location.pathname.split("/")[4]))},[m]);async function c(t){l(!0);try{await n.dispatch(x(i)),await n.dispatch(h(window.location.pathname.split("/")[4])),o({...s,user_id:s.id,ticket_id:window.location.pathname.split("/")[4]}),l(!1)}catch{l(!1)}}return e.jsx("section",{class:"bg-white antialiased",children:e.jsxs("div",{class:"mx-auto px-4",children:[e.jsx("div",{class:"flex justify-between items-center mb-6",children:e.jsxs("h2",{class:"text-lg lg:text-2xl font-bold text-gray-900",children:["Notes (",a.length,")"]})}),e.jsxs("form",{class:"mb-6",onSubmit:c,children:[e.jsxs("div",{class:"py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200",children:[e.jsx("label",{for:"comment",class:"sr-only",children:"Your comment"}),e.jsx("textarea",{onChange:t=>o({...i,notes:t.target.value}),id:"notes",value:(i==null?void 0:i.notes)??"",rows:"6",class:"px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  ",placeholder:"Write a comment...",required:!0})]}),e.jsx(f,{onClick:c,loading:p,type:"primary",children:"Post comment"})]}),a&&a.map(t=>e.jsxs("article",{class:"p-6 text-base bg-white rounded-lg ",children:[e.jsxs("footer",{class:"flex justify-between items-center mb-2",children:[e.jsxs("div",{class:"flex items-center",children:[e.jsxs("p",{class:"inline-flex items-center mr-3 text-sm text-gray-900 font-semibold capitalize",children:[e.jsx("img",{class:"mr-2 w-6 h-6 rounded-full",src:"https://flowbite.com/docs/images/people/profile-picture-2.jpg",alt:"Michael Gough"}),t.user.name]}),e.jsx("p",{class:"text-sm text-gray-600",children:e.jsx("time",{pubdate:!0,datetime:"2022-02-08",title:"February 8th, 2022",children:u(t.created_at).format("LLL")})})]}),e.jsx("div",{id:"dropdownComment1",class:"hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow",children:e.jsxs("ul",{class:"py-1 text-sm text-gray-700","aria-labelledby":"dropdownMenuIconHorizontalButton",children:[e.jsx("li",{children:e.jsx("a",{href:"#",class:"block py-2 px-4 hover:bg-gray-100",children:"Edit"})}),e.jsx("li",{children:e.jsx("a",{href:"#",class:"block py-2 px-4 hover:bg-gray-100",children:"Remove"})}),e.jsx("li",{children:e.jsx("a",{href:"#",class:"block py-2 px-4 hover:bg-gray-100",children:"Report"})})]})})]}),e.jsx("p",{class:"text-gray-500",children:t.notes})]}))]})})}export{E as default};