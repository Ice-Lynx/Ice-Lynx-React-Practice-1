(this["webpackJsonplayout-exercise"]=this["webpackJsonplayout-exercise"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(5),i=a.n(n),l=(a(10),a(11),a(3)),h=a(2),s=a(1);function d(){var e=o.useState(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(o.useState)(0),i=Object(l.a)(n,2),d=i[0],c=i[1];return Object(s.jsx)(h.b.div,{style:{width:50,height:35,borderRadius:0,margin:0},variants:{checked:{scale:1,background:"rgba(0,100,255,0)"},unchecked:{scale:1,background:"rgba(255,255,255,0)",width:"auto"}},animate:{rotate:d},onClick:function(){return r(!a)&c(d+180)},children:Object(s.jsxs)("svg",{width:"100",height:"100",scale:"1",children:[Object(s.jsx)("path",{d:"m 5 5 l 40 0 l 0 5 l -40 0",fill:"rgba(233,46,159,1)"}),Object(s.jsx)("path",{d:"m 5 15 l 40 0 l 0 5 l -40 0",fill:"rgba(253,92,98,1)"}),Object(s.jsx)("path",{d:"m 5 25 l 40 0 l 0 5 l -40 0",fill:"rgba(251,158,49,1)"})]})})}var c=[{title:"Zezima",color:"rgba(233,46,159,1)"},{title:"Duriel321",color:"rgba(233,46,159,1)"},{title:"CowKiller1337",color:"rgba(233,46,159,1)"},{title:"Exam",color:"rgba(233,46,159,1)"},{title:"ElveMage",color:"rgba(233,46,159,1)"}];function u(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(s.jsx)(h.a,{children:Object(s.jsx)("div",{style:{transform:"translateZ(0)"},children:c.map((function(e,t){var o=e.title,n=e.color;return Object(s.jsxs)(h.b.li,{animate:!0,className:"title ".concat(t===a&&"selected"),style:{color:t===a?n:"rgba(0,0,0,0.7)"},onHoverStart:function(){return r(t)},children:[t===a&&Object(s.jsx)(h.b.div,{layoutId:"sideline",className:"sideline"}),t===a&&Object(s.jsx)(h.b.div,{layoutId:"underline",className:"underline"}),o]},t)}))})})}function b(e){e.title,e.children;var t=Object(o.useState)(!1),a=Object(l.a)(t,2),r=a[0],n=a[1];return Object(s.jsxs)("div",{className:"left-menu",children:[Object(s.jsx)("div",{className:"menudiv",onClick:function(){n((function(e){return!e}))},children:Object(s.jsx)(d,{})}),r&&Object(s.jsx)(u,{})]})}function f(){var e={checked:{pathLength:0,stroke:"rgb(145,205,255)",transition:{duration:3,ease:"easeOut"}},unchecked:{pathLength:1,stroke:"rgb(145,205,255)",transition:{duration:.2}}},t=o.useState(!0),a=Object(l.a)(t,2),r=a[0],n=a[1],i=Object(h.c)(0),d=Object(h.d)(i,[.05,.15],[0,1]);return Object(s.jsx)(h.b.div,{class:"logo",style:{width:100,height:115,borderRadius:5,padding:0,backgroundColor:"rgba(0,100,255,0)"},onHoverStart:function(){return n(!r)},onHoverEnd:function(){return n(!r)},onClick:function(){return n(!r)},children:Object(s.jsxs)("svg",{width:"90",height:"115",children:[Object(s.jsx)("path",{d:"M 25 60 l 5 0 l 10 10 l -5 0 l -10 -5",fill:"#91cdff"}),Object(s.jsx)("path",{d:"M 65 60 l -5 0 l -10 10 l 5 0 l 10 -5",fill:"#91cdff"}),Object(s.jsx)("path",{d:"M 45 80 l 5 5 l -2.5 5 l -5 0 l -2.5 -5",fill:"#91cdff"}),Object(s.jsx)("path",{d:"M 45 40 l -15 -5 l -15 -15 l -5 -15 l -5 -5 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5 l 10 10 l 10 0 l 10 -10 l 5 5 l 5 25 l 10 -40 l 10 5 l -5 -20 l -10 -15 l 10 -15 l -5 -15 l 5 -15 l -5 5 l -5 15 l -15 15 l -15 5",fill:"rgba(255,255,255,0.1)"}),Object(s.jsxs)("svg",{width:"90",height:"115",scale:"1",children:[Object(s.jsx)(h.b.path,{d:"m 5 0 l 5 5 l 5 15 l 15 15 l 15 5",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d},animate:r?"checked":"unchecked"}),Object(s.jsx)(h.b.path,{d:"m 85 0 l -5 5 l -5 15 l -15 15 l -15 5",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d}}),Object(s.jsx)(h.b.path,{d:"M 5 0 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d}}),Object(s.jsx)(h.b.path,{d:"M 85 0 l -5 15 l 5 15 l -10 15 l 10 15 l 5 20 l -10 -5 l -10 40 l -5 -25 l -5 -5",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d}}),Object(s.jsx)(h.b.path,{d:"M 30 85 l 10 10 l 5 0",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d}}),Object(s.jsx)(h.b.path,{d:"M 60 85 l -10 10 l -5 0",fill:"transparent",strokeWidth:"1",stroke:"rgb(145,205,255)",strokeLinecap:"round",variants:e,style:{pathLength:i,opacity:d}})]})]})})}var g=function(){return Object(s.jsxs)("div",{class:"wrapper",children:[Object(s.jsx)("div",{class:"header",children:Object(s.jsx)("img",{src:"data:image/png;base64,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",class:"App-logo",alt:"logo"})}),Object(s.jsxs)("div",{class:"body",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{class:"content",children:[Object(s.jsx)("h1",{children:"Prince Ali Rescue"}),Object(s.jsx)("p",{children:"You would ideally start in Varrock, where you would buy or withdraw from your bank the minor related items required. You also need a pickaxe to mine with, an axe for Woodcutting, and a tinderbox though you may find ashes from someone else's fire. If you can't find ashes already, cut a tree, light the logs, and then wait for it to burn out while banking the axe and tinderbox you no longer need. Alternatively, you can kill an imp and take the ashes it drops. Bring your shears if you already have them to save time. You should also withdraw some cash to pay for the required items and toll gate crossings."}),Object(s.jsx)("p",{children:"Buy the pink skirt at the clothes shop, then leave by the south city exit. Buy the 3 (or 4) beers at the Blue Moon Inn on the way out, or take some from the longhall in the Barbarian Village for free."}),Object(s.jsx)("p",{children:"At the South-east Varrock mine, you can mine one tin and one copper ore to make a bronze bar, and pick one bunch of redberries from the nearby bushes, and then go to the sheep pen and shear three sheep. At the South-west Varrock mine, you can mine one clay."}),Object(s.jsx)("p",{children:"If you have not already started the quest, then go south into the Al Kharid desert area, passing the Al Kharid mine, down to the palace and begin the quest; then, talk to Hassan and then Osman. If you did not bring a bucket or jug of water you can grab the jug of water off of the table in the east room of the palace. Otherwise, take the road south towards Lumbridge. Cross the north bridge to the forge, and smith a bronze bar there, or use the Al Kharid forge if you are there."}),Object(s.jsx)("p",{children:"Go to Lumbridge Castle and spin all the wool. Take the jug from the kitchen and fill it with water if you didn't get the jug of water from the palace, then take a pot from the kitchen, and a bucket from the basement if you need them. Fill the bucket with water, wet the clay with it, then fill it again."}),Object(s.jsx)("h1",{children:"Shio Village"}),Object(s.jsx)("p",{children:"You would ideally start in Varrock, where you would buy or withdraw from your bank the minor related items required. You also need a pickaxe to mine with, an axe for Woodcutting, and a tinderbox though you may find ashes from someone else's fire. If you can't find ashes already, cut a tree, light the logs, and then wait for it to burn out while banking the axe and tinderbox you no longer need. Alternatively, you can kill an imp and take the ashes it drops. Bring your shears if you already have them to save time. You should also withdraw some cash to pay for the required items and toll gate crossings."}),Object(s.jsx)("p",{children:"Buy the pink skirt at the clothes shop, then leave by the south city exit. Buy the 3 (or 4) beers at the Blue Moon Inn on the way out, or take some from the longhall in the Barbarian Village for free."}),Object(s.jsx)("p",{children:"At the South-east Varrock mine, you can mine one tin and one copper ore to make a bronze bar, and pick one bunch of redberries from the nearby bushes, and then go to the sheep pen and shear three sheep. At the South-west Varrock mine, you can mine one clay."}),Object(s.jsx)("p",{children:"If you have not already started the quest, then go south into the Al Kharid desert area, passing the Al Kharid mine, down to the palace and begin the quest; then, talk to Hassan and then Osman. If you did not bring a bucket or jug of water you can grab the jug of water off of the table in the east room of the palace. Otherwise, take the road south towards Lumbridge. Cross the north bridge to the forge, and smith a bronze bar there, or use the Al Kharid forge if you are there."}),Object(s.jsx)("p",{children:"Go to Lumbridge Castle and spin all the wool. Take the jug from the kitchen and fill it with water if you didn't get the jug of water from the palace, then take a pot from the kitchen, and a bucket from the basement if you need them. Fill the bucket with water, wet the clay with it, then fill it again."}),Object(s.jsx)("h1",{children:"Sheep herder"}),Object(s.jsx)("p",{children:"You would ideally start in Varrock, where you would buy or withdraw from your bank the minor related items required. You also need a pickaxe to mine with, an axe for Woodcutting, and a tinderbox though you may find ashes from someone else's fire. If you can't find ashes already, cut a tree, light the logs, and then wait for it to burn out while banking the axe and tinderbox you no longer need. Alternatively, you can kill an imp and take the ashes it drops. Bring your shears if you already have them to save time. You should also withdraw some cash to pay for the required items and toll gate crossings."}),Object(s.jsx)("p",{children:"Buy the pink skirt at the clothes shop, then leave by the south city exit. Buy the 3 (or 4) beers at the Blue Moon Inn on the way out, or take some from the longhall in the Barbarian Village for free."}),Object(s.jsx)("p",{children:"At the South-east Varrock mine, you can mine one tin and one copper ore to make a bronze bar, and pick one bunch of redberries from the nearby bushes, and then go to the sheep pen and shear three sheep. At the South-west Varrock mine, you can mine one clay."}),Object(s.jsx)("p",{children:"If you have not already started the quest, then go south into the Al Kharid desert area, passing the Al Kharid mine, down to the palace and begin the quest; then, talk to Hassan and then Osman. If you did not bring a bucket or jug of water you can grab the jug of water off of the table in the east room of the palace. Otherwise, take the road south towards Lumbridge. Cross the north bridge to the forge, and smith a bronze bar there, or use the Al Kharid forge if you are there."}),Object(s.jsx)("p",{children:"Go to Lumbridge Castle and spin all the wool. Take the jug from the kitchen and fill it with water if you didn't get the jug of water from the palace, then take a pot from the kitchen, and a bucket from the basement if you need them. Fill the bucket with water, wet the clay with it, then fill it again."})]})]}),Object(s.jsxs)("div",{class:"footer",children:[Object(s.jsx)(f,{}),"Ice Lynx \xa9 ",(new Date).getFullYear()]})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,o=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),o(e),r(e),n(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.981363c8.chunk.js.map