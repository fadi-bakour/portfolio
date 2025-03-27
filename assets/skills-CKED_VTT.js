import{u as i,j as e}from"./index-BZBhPCvI.js";import{M as j,C as u,B as t,H as b,F as r,T as n,a as m}from"./Main-CSmSl9rr.js";import{V as f,F as l,a as w,b as y,c as S,d as C,e as v}from"./index-DaTZIqv9.js";import{C as c}from"./circle-CzXFtrIp.js";import{I as F}from"./image-Dncqrfqn.js";const z="/portfolio/assets/laptop_typing-De0cHymH.jpg",A=()=>e.jsx(t,{position:"relative",width:"100%",maxW:"300px",children:e.jsx(F,{src:z,alt:"Developer with laptop",width:"100%",height:"auto"})}),d=({skills:a,direction:s})=>{const x=i("white","gray.800"),p=i("gray.200","gray.700"),g=o=>{switch(o){case"code":return e.jsx(l,{});case"database":return e.jsx(v,{});case"agile":return e.jsx(C,{});case"git":return e.jsx(S,{});case"react":return e.jsx(y,{});case"cloud":return e.jsx(w,{});default:return e.jsx(l,{})}};return e.jsx(f,{spacing:8,align:s==="right"?"flex-end":"flex-start",children:a.map((o,h)=>e.jsxs(r,{align:"center",direction:s==="right"?"row":"row-reverse",w:"100%",children:[e.jsx(t,{flex:1,bg:x,borderRadius:"full",boxShadow:"md",border:"1px solid",borderColor:p,p:4,position:"relative",zIndex:1,children:e.jsxs(r,{align:"center",children:[e.jsx(c,{size:"50px",bg:o.color,color:"white",mr:4,children:g(o.icon)}),e.jsxs(t,{children:[e.jsx(n,{fontWeight:"bold",children:o.title}),e.jsx(n,{fontSize:"sm",children:o.description})]})]})}),e.jsxs(m,{spacing:0,flex:.2,justify:"center",position:"relative",zIndex:0,children:[e.jsx(t,{h:"2px",w:"full",bg:o.color}),e.jsx(c,{size:"10px",bg:o.color})]})]},h))})},T=function(){const s=i("white","gray.800");return e.jsx(j,{children:e.jsx(u,{maxW:"container.xl",py:10,children:e.jsxs(t,{position:"relative",bg:s,borderRadius:"xl",overflow:"hidden",p:4,children:[e.jsx(t,{mb:10,textAlign:"center",children:e.jsx(b,{as:"h1",size:"xl",fontWeight:"bold",children:"My Technical Skills"})}),e.jsxs(r,{direction:{base:"column",lg:"row"},justify:"space-between",align:"center",wrap:"wrap",children:[e.jsx(t,{w:{base:"100%",lg:"40%"},children:e.jsx(d,{skills:[{title:"Programming languages",description:"JS, TS, PHP, HTML, CSS",color:"cyan.400",icon:"code"},{title:"Databases",description:"MySQL, MongoDB",color:"orange.400",icon:"database"},{title:"Methodologies",description:"Agile",color:"pink.400",icon:"agile"},{title:"Version control",description:"Git",color:"teal.400",icon:"git"}],direction:"right"})}),e.jsx(t,{w:{base:"100%",lg:"20%"},my:{base:10,lg:0},display:"flex",justifyContent:"center",children:e.jsx(A,{})}),e.jsx(t,{w:{base:"100%",lg:"40%"},children:e.jsx(d,{skills:[{title:"Frameworks/libraries",description:"ReactJS, Node.js, Express.js, fastify, Laravel, React Native, AJAX, jQuery, Bootstrap",color:"cyan.400",icon:"react"},{title:"DevOps",description:"GitHub Actions, Azure DevOps, AWS",color:"orange.400",icon:"cloud"}],direction:"left"})})]}),e.jsx(t,{position:"absolute",bottom:0,right:0,height:"200px",width:"200px",bg:"pink.400",borderTopLeftRadius:"100%",zIndex:-1})]})})})};export{T as component};
