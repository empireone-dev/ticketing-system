import{f as t}from"./app-qkIkutRS.js";function c(e){try{return t.post("/api/change_site",e)}catch(r){return r}}function n(e){try{return t.post("/api/user",e)}catch(r){return r}}async function a(e){try{return await t.get("/api/user"+window.location.search)}catch(r){return r}}function o(e){try{return t.get("/api/get_user_by_position/"+e)}catch(r){return r}}export{n as a,o as b,c,a as g};