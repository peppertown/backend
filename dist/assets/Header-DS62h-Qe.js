import{u as c,e as l,j as t,c as d}from "./index-DXBLHHrj.js";import{c as m,f as h}from "./float-sWumIdEC.js";import{I as p}from "./Icon-CjOVr4Uv.js";const b=({headerText:s,hideArrow:o})=>{const a=c(),n=l(),i=window.history.length>1,r=()=>{n.pathname.includes("restaurant")?a("/"):a(-1)};return t.jsxs("header",{className:e.header,children:[t.jsx("div",{className:e.text,children:s}),!o&&i&&t.jsx(p,{library:"hero-solid",size:24,onClick:()=>r(),className:e.back_btn,iconName:"ArrowLeftIcon"})]})},e={header:h({width:"100%",height:"58px",position:"relative","& > button > svg":{fill:"black"}}),back_btn:d({position:"absolute",left:"15px",top:"50%",transform:"translateY(-50%)"}),text:m({width:"100%",paddingTop:"4px",textStyle:"heading2",fontFamily:"Gmarket Sans"})};export{b as H};