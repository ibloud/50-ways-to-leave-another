"use strict";
// Synthetic-only PIXIE classroom; no storage, network or real authorization.
(function(root,factory){const api=factory();if(typeof module!=="undefined"&&module.exports)module.exports=api;root.PixieClassroom=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
const GOVERNANCE="LOCKED";
const STATES=["draft","in_review","changes_requested","approved_sample","withdrawn"];
const DENIAL="Governance is LOCKED. No approval or publication occurred.";
function create(){
 const state={seminar:"draft",corrections:[],events:[],consent:false,credential:false,grant:false};
 let n=0;
 function record(action,detail){const item=Object.freeze({id:++n,action,detail});state.events.push(item);return item;}
 function deny(reason){record("denied",reason);return {ok:false,reason};}
 function act(op,actor="visitor"){
  if(op==="publish"||op==="approve")return deny(DENIAL);
  if(["save","invite","share","upload","record","connect"].includes(op))return deny("Synthetic preview only. This action cannot execute.");
  if(op==="review-credential"){if(actor!=="owner")return deny("Steward only");state.credential=true;record(op,"synthetic verification only");return {ok:true};}
  if(op==="grant"){if(actor!=="owner"||!state.credential)return deny("Credential review and steward required");state.grant=true;record(op,"synthetic scoped grant");return {ok:true};}
  if(op==="revoke"){state.grant=false;state.consent=false;state.seminar="withdrawn";record(op,"immediate synthetic revocation");return {ok:true};}
  if(op==="correct"){if(actor!=="professional"||!state.credential||!state.grant)return deny("Credential and scoped grant required");const correction=Object.freeze({id:++n,supersedes:state.corrections.at(-1)?.id||null,text:"Synthetic clearance correction"});state.corrections.push(correction);record(op,correction.id);return {ok:true};}
  if(op==="submit"){if(actor!=="professional"||!state.credential||!state.grant)return deny("Credential and scoped grant required");if(!["draft","changes_requested"].includes(state.seminar))return deny("Invalid transition");state.seminar="in_review";record(op,state.seminar);return {ok:true};}
  if(op==="request-changes"){if(actor!=="editor"||state.seminar!=="in_review")return deny("Editor and review state required");state.seminar="changes_requested";record(op,state.seminar);return {ok:true};}
  if(op==="preview"){return {ok:true,text:"Synthetic classroom only. Governance remains LOCKED."};}
  return deny("Unsupported operation");
 }
 return {state,act};
}
return Object.freeze({GOVERNANCE,STATES,DENIAL,create});
});
