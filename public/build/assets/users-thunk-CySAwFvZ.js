import{h as a,x as s}from"./app-CudlOiIy.js";import{g as c}from"./ticket-service-BU18KPrv.js";function u(e){try{return a.post("/api/user",e)}catch(t){return t}}async function i(e){try{return await a.get("/api/user"+window.location.search)}catch(t){return t}}function o(e){try{return a.get("/api/get_user_by_position/"+e)}catch(t){return t}}function f(e){return async function(t,n){return await u(e)}}function y(e){return async function(t,n){const r=await i();t(s.actions.setUsers(r.data.result)),t(s.actions.setAllUsers(r.data.users))}}function l(e){return async function(t,n){const r=await o(e);t(s.actions.setUsers(r.data.result))}}function p(e){return async function(t,n){const r=await c(e);t(s.actions.setTickets(r.data.result))}}export{p as a,y as b,f as c,l as g};