(this["webpackJsonphello-there"]=this["webpackJsonphello-there"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),i=c.n(a),r=c(8),j=c(2),l=c.p+"static/media/hface.808f4dd2.png",o=c(0),b=function(e){var t=e.text;return Object(o.jsxs)("div",{className:"bmsg-container",children:[Object(o.jsx)("div",{className:"msg",children:Object(o.jsx)("p",{children:t})}),Object(o.jsx)("div",{className:"pp",children:Object(o.jsx)("img",{src:l,alt:"logo"})})]})},d=c.p+"static/media/logo.1f431167.png",h=function(e){var t=e.botmsg;return Object(o.jsxs)("div",{className:"bmsg-container",children:[Object(o.jsx)("div",{className:"pp",children:Object(o.jsx)("img",{src:d,alt:"logo"})}),Object(o.jsx)("div",{className:"bo-msg",children:Object(o.jsx)("p",{children:t})})]})},O=c(7),u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(j.a)(a,2),l=i[0],u=i[1],m=Object(s.useState)(""),f=Object(j.a)(m,2),x=f[0],p=f[1],v=Object(s.useState)(""),g=Object(j.a)(v,2),N=g[0],y=g[1],S=Object(s.useState)(""),k=Object(j.a)(S,2),w=k[0],C=k[1];Object(s.useEffect)((function(){fetch("/bmsg/".concat(N)).then((function(e){return e.json()})).then((function(e){p(e.msg)}))}),[N]),Object(s.useEffect)((function(){"phone"===w?alert("i am not quite ready for voice call..Let's chat !!"):"video"===w?alert("Agh! My face not as pretty as yours..But my handwriting is good :) !"):"info"===w&&alert("I am chatbot.I answer your query on harry potter !")}),[w]);var T=function(e){e.preventDefault(),fetch("/creat",{method:"POST",body:JSON.stringify({content:c})}),c&&(u([].concat(Object(r.a)(l),[c,x])),n(""))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"center",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"center-h",children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"bot-profile",children:Object(o.jsx)("img",{src:d,alt:"logo"})}),Object(o.jsxs)("div",{className:"Title",children:[Object(o.jsx)("h1",{children:"Hello There !"}),Object(o.jsx)("p",{children:"Active Now"})]}),Object(o.jsx)("div",{className:"icons"}),Object(o.jsx)("i",{class:"fas fa-phone-alt",onClick:function(){return C("phone")}}),Object(o.jsx)("i",{class:"fas fa-video",onClick:function(){return C("video")}}),Object(o.jsx)("i",{class:"fas fa-info-circle",onClick:function(){return C("info")}})]})}),Object(o.jsx)(O.a,{children:Object(o.jsx)("div",{className:"center-mb",children:Object(o.jsx)("div",{className:"msg-body",children:l.map((function(e,t){return(t+1)%2!==0?Object(o.jsx)(b,{text:e},t):Object(o.jsx)(h,{botmsg:e},t)}))})})}),Object(o.jsxs)("div",{className:"userinput",children:[Object(o.jsx)("div",{className:"box",children:Object(o.jsx)("form",{onSubmit:T,children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Type here",value:c,onChange:function(e){return function(e){n(e.target.value),y(e.target.value)}(e)},autoFocus:!0})})}),Object(o.jsx)("div",{className:"sent",children:Object(o.jsx)("i",{class:"far fa-paper-plane",onClick:T})})]})]})})})};c(14);var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.03749dfa.chunk.js.map