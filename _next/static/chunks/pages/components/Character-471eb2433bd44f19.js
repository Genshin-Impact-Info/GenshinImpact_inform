(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{9150:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Character",function(){return s(7871)}])},6825:function(e,a,s){"use strict";s.d(a,{Z:function(){return l}});var c=s(5893),t=s(7354),n=s.n(t),r=s(9332);function l(){let e=(0,r.useRouter)();return(0,c.jsxs)("div",{className:n().coloring,children:[(0,c.jsx)("img",{className:n().logo,src:"images/logo.png",onClick:()=>e.push("/")}),(0,c.jsxs)("ul",{className:n().selectmenu,children:[(0,c.jsx)("li",{className:n().movemenu,onClick:()=>e.push("/components/Character"),children:(0,c.jsx)("span",{children:"Character"})}),(0,c.jsx)("li",{className:n().movemenu,children:(0,c.jsx)("span",{children:"Weapons"})}),(0,c.jsx)("li",{className:n().movemenu,onClick:()=>e.push("/components/Artifacts"),children:(0,c.jsx)("span",{children:"Artifacts"})}),(0,c.jsx)("li",{className:n().movemenu,children:(0,c.jsx)("span",{children:"Boss"})}),(0,c.jsx)("li",{className:n().movemenu,children:(0,c.jsx)("span",{children:"God"})}),(0,c.jsx)("li",{className:n().movemenu,children:(0,c.jsx)("span",{children:"Universe"})})]})]})}},7871:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return o}});var c=s(5893),t=s(6825),n=s(6472),r=s.n(n),l=s(7294),i=s(9901),m=s(6154);function o(){let[e,a]=(0,l.useState)("0"),[s,n]=(0,l.useState)([]),[o,h]=(0,l.useState)(0);function d(e){a(e),m.Z.get("https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/preview?ele=".concat(e)).then(e=>{let a=e.data;n(a.data),console.log(s)}).catch(e=>console.error("Error fetching JSON:",e))}return(0,l.useEffect)(()=>{o<=1&&(d("0"),h(e=>e+1))},[o]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{}),(0,c.jsxs)("div",{className:r().charactermain,children:[(0,c.jsxs)("div",{className:r().selectelement,children:[(0,c.jsx)("img",{src:"./images/element/Element_Pyro.svg",className:"0"==e?r().selectedelements:r().elements,onClick:()=>d("0")}),(0,c.jsx)("img",{src:"./images/element/Element_Hydro.svg",className:"1"==e?r().selectedelements:r().elements,onClick:()=>d("1")}),(0,c.jsx)("img",{src:"./images/element/Element_Anemo.svg",className:"2"==e?r().selectedelements:r().elements,onClick:()=>d("2")}),(0,c.jsx)("img",{src:"./images/element/Element_Electro.svg",className:"3"==e?r().selectedelements:r().elements,onClick:()=>d("3")}),(0,c.jsx)("img",{src:"./images/element/Element_Cryo.svg",className:"4"==e?r().selectedelements:r().elements,onClick:()=>d("4")}),(0,c.jsx)("img",{src:"./images/element/Element_Dendro.svg",className:"5"==e?r().selectedelements:r().elements,onClick:()=>d("5")}),(0,c.jsx)("img",{src:"./images/element/Element_Geo.svg",className:"6"==e?r().selectedelements:r().elements,onClick:()=>d("6")})]}),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.default,{chdata:s,elemental:e})})]})]})}},9901:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var c=s(5893);s(6825),s(4685);var t=s(6472),n=s.n(t),r=s(7973);s(5004);var l=s(7294);s(2858);var i=s(1163);function m(e){let a=(0,i.useRouter)(),[s,t]=(0,l.useState)([]),[m,o]=(0,l.useState)(!1),[h,d]=(0,l.useState)();return(0,l.useEffect)(()=>{t(e.chdata),d(e.elemental),0!=s.length&&o(!0),console.log(m)},[e.chdata,e.elemental]),(0,c.jsx)(c.Fragment,{children:m?(0,c.jsxs)(r.tq,{spaceBetween:20,slidesPerView:1.1,loop:!0,children:[s.map(e=>(0,c.jsxs)(r.o5,{children:[(0,c.jsx)("h1",{className:n().shadowtext,children:"ss"}),(0,c.jsx)("div",{className:n().swipercontainer,style:{backgroundImage:"url(".concat(e.bg,")")},children:(0,c.jsxs)("div",{className:n().characterbox,children:[(0,c.jsx)("div",{className:n().characterimgbox,children:(0,c.jsx)("img",{className:n().characterimg,src:e.img})}),(0,c.jsxs)("div",{className:n().characterinfo,children:[(0,c.jsx)("p",{className:n().charactername,children:e.name}),(0,c.jsx)("p",{className:n().charactertext,children:e.text})]}),(0,c.jsx)("img",{className:n().characterdetail,src:"/images/etc/morebutton.png",onClick:()=>{var s;return s=e.id,void(a.push({pathname:"/components/characterdetail/Detail",query:{id:s,element:h}}),console.log(s,h))}})]})})]},e.id)),"x"]}):null})}},4685:function(){},7354:function(e){e.exports={coloring:"Header_coloring__jXtPf",logo:"Header_logo__h1sXA",selectmenu:"Header_selectmenu__XbZK7",movemenu:"Header_movemenu__7AT54"}},6472:function(e){e.exports={charactermain:"Character_charactermain__IWjat",selectelement:"Character_selectelement__ugJS5",selectedelements:"Character_selectedelements__Hna2z",elements:"Character_elements__nedfF",shadowtext:"Character_shadowtext__HvBNK",swipercontainer:"Character_swipercontainer__nKpUC",characterbox:"Character_characterbox__ufiKQ",somenail:"Character_somenail__OOzma",characterimgbox:"Character_characterimgbox__Nj5_k",characterinfo:"Character_characterinfo__VMIYf",charactername:"Character_charactername__IId6Y",characterimg:"Character_characterimg__ryHpG",charactertext:"Character_charactertext__ZMlE7",characterdetail:"Character_characterdetail__b0Vj2"}}},function(e){e.O(0,[774,212,154,888,179],function(){return e(e.s=9150)}),_N_E=e.O()}]);