(this["webpackJsonpstock-profitorloss"]=this["webpackJsonpstock-profitorloss"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var i=r(1),c=r(4),n=r(2),o=(r(13),r(0));function s(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),r=t[0],c=t[1],s=Object(i.useState)("black"),a=Object(n.a)(s,2),u=a[0],l=a[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("form",{className:"input-container",onSubmit:function(e){e.preventDefault();var t=Number(e.target.init.value),r=Number(e.target.current.value),i=Number(e.target.quatity.value);if(isNaN(t)||isNaN(r))l("black"),c("invalid inputs");else if(0===i)l("black"),c("do not have any stock");else if(t>r){var n=((t-r)*i).toFixed(2),o=(n/(t*i)*100).toFixed(2);l("red"),c("oops!! Your loss is ".concat(n," and loss Percentage is ").concat(o,"%"))}else if(r>t){var s=((r-t)*i).toFixed(2),a=(s/(t*i)*100).toFixed(2);l("green"),c("Yeah!! Your profit is ".concat(s," and profit Percentage is ").concat(a,"%"))}else l("blue"),c("No Gain, No Pain")},children:[Object(o.jsx)("h3",{children:"Where is my Stocks?"}),Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("input",{autoComplete:"off",id:"init",min:"0",type:"number",placeholder:"Enter inital price here",required:!0}),Object(o.jsx)("input",{autoComplete:"off",id:"quatity",type:"number",min:"0",placeholder:"Enter Number of Stocks here",required:!0}),Object(o.jsx)("input",{autoComplete:"off",id:"current",min:"0",type:"number",placeholder:"Enter Current Price Here",required:!0})]}),Object(o.jsx)("div",{className:"btn-container",children:Object(o.jsx)("button",{type:"submit",children:"\u279c"})})]}),Object(o.jsx)("div",{className:"output-container",children:Object(o.jsx)("div",{style:{color:u},className:"output",children:r})})]})}var a=document.getElementById("root");Object(c.createRoot)(a).render(Object(o.jsx)(i.StrictMode,{children:Object(o.jsx)(s,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3320f284.chunk.js.map