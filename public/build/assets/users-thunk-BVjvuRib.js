import{g as n,a as i,b as u}from"./users-service-B2zqG6KH.js";import{v as a}from"./app-DIJm5SK1.js";import{g as c}from"./ticket-service-BGDnmJ-8.js";function f(s){return async function(t,r){return await i(s)}}function l(s){return async function(t,r){const e=await n();t(a.actions.setUsers(e.data.result)),t(a.actions.setAllUsers(e.data.users))}}function y(s){return async function(t,r){const e=await u(s);t(a.actions.setUsers(e.data.result))}}function d(s){return async function(t,r){const e=await c(s);t(a.actions.setTickets(e.data.result))}}export{d as a,l as b,f as c,y as g};