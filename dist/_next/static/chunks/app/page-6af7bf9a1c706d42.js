(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2705:function(s,e,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,5070))},5070:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var i=t(3827),o=t(1944),a=t(8792),d=t(4090),n=t(7617);function r(){let{data:s,isloading:e}=(0,o.Z)("https://raw.githubusercontent.com/Ronnyzxzz/apiFesti/main/db.json"),[t,r]=(0,d.useState)([]),[c,l]=(0,d.useState)(void 0),[u,h]=(0,d.useState)(void 0),[f,p]=(0,d.useState)(void 0),[m,x]=(0,d.useState)(void 0),[v,g]=(0,d.useState)(void 0);(0,d.useEffect)(()=>{s&&r([...s.productos.selfiesSeries,...s.productos.Selfies,...s.productos.pinatas,...s.productos.adornosTortaImp,...s.productos.centros3D,...s.productos.figuras,...s.productos.letras,...s.productos.pinatasCirculares,...s.productos.pinatasFiguras,...s.productos.pinatasHex,...s.productos.pinatasSiluetas,...s.productos.pinches,...s.productos.selfiesImpresos,...s.productos.tupperCake])},[s]),(0,d.useEffect)(()=>{t&&(h(t.find(s=>54==s.id)),p(t.find(s=>118==s.id)),x(t.find(s=>55==s.id)),g(t.find(s=>18==s.id)),l(t.find(s=>55==s.id)))},[t]);let j=s=>{l(s)};return(0,i.jsx)(i.Fragment,{children:c&&(0,i.jsxs)("div",{className:"destacadoContainer",children:[(0,i.jsx)("div",{id:"destacado",className:"destacadoImg",children:(0,i.jsx)("img",{src:c.imagenes[0],alt:""})}),(0,i.jsxs)("div",{className:"destacadoInfo",children:[(0,i.jsxs)("div",{className:"destacadoInfo-infodestacado",children:[(0,i.jsx)("h1",{children:"Productos destacados"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:c.nombre}),(0,i.jsx)("p",{children:c.descripcion})]}),(0,i.jsx)(a.default,{class:"btnMensaje inline-block rounded bg-indigo-600 px-5 py-2 mt-5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500",href:"/catalogol/".concat(c.id),passHref:!0,children:"M\xe1s informacion"})]}),(0,i.jsxs)("div",{id:"destacados",className:"destacadoInfo-destacados",children:[u.id==c.id?null:(0,i.jsx)("div",{children:(0,i.jsx)(n.rU,{className:"cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:70,duration:500,to:"destacado",onClick:()=>j(u),children:(0,i.jsx)("img",{height:"100px",width:"100px",src:u.imagenes[0],alt:""})})}),f.id==c.id?null:(0,i.jsx)("div",{children:(0,i.jsx)(n.rU,{className:"cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:70,duration:500,to:"destacado",onClick:()=>j(f),href:"##",children:(0,i.jsx)("img",{height:"100px",width:"100px",src:f.imagenes[0],alt:""})})}),m.id==c.id?null:(0,i.jsx)("div",{children:(0,i.jsx)(n.rU,{className:"cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:70,duration:500,to:"destacado",onClick:()=>j(m),href:"##",children:(0,i.jsx)("img",{height:"100px",width:"100px",src:m.imagenes[0],alt:""})})}),v.id==c.id?null:(0,i.jsx)("div",{children:(0,i.jsx)(n.rU,{className:"cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:70,duration:500,to:"destacado",onClick:()=>j(v),href:"##",children:(0,i.jsx)("img",{height:"100px",width:"100px",src:v.imagenes[0],alt:""})})})]})]})]})})}},1944:function(s,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(4090);function o(s){let[e,t]=(0,i.useState)({data:null,isLoading:!0,errors:null}),o=async()=>{try{let e=await fetch(s),i=await e.json();t({data:i,isLoading:!1,errors:null})}catch(s){t({data:null,isLoading:!1,errors:!0})}};return(0,i.useEffect)(()=>{s&&o()},[s]),e}}},function(s){s.O(0,[792,617,749,971,69,744],function(){return s(s.s=2705)}),_N_E=s.O()}]);