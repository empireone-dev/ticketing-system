import{h as i,n as s}from"./app-BjK72Ya3.js";function o(t){try{return i.post("/api/open_ticket_notification",t)}catch(n){return n}}function a(t){return async function(n,e){n(s.actions.setUser(t))}}function c(t){return async function(n,e){await o(t)}}export{a as g,c as s};