(this["webpackJsonphello-there"]=this["webpackJsonphello-there"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),r=c.n(a),i=c(8),o=c(2),j=c.p+"static/media/hface.808f4dd2.png",l=c(0),b=function(e){var t=e.text;return Object(l.jsxs)("div",{className:"bmsg-container",children:[Object(l.jsx)("div",{className:"msg",children:Object(l.jsx)("p",{children:t})}),Object(l.jsx)("div",{className:"pp",children:Object(l.jsx)("img",{src:j,alt:"logo"})})]})},d=c.p+"static/media/logo.1f431167.png",h=function(e){var t=e.botmsg;return Object(l.jsxs)("div",{className:"bmsg-container",children:[Object(l.jsx)("div",{className:"pp",children:Object(l.jsx)("img",{src:d,alt:"logo"})}),Object(l.jsx)("div",{className:"bo-msg",children:Object(l.jsx)("p",{children:t})})]})},u=c(7),O=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(o.a)(a,2),j=r[0],O=r[1],m=Object(s.useState)(""),f=Object(o.a)(m,2),p=f[0],x=f[1],v=Object(s.useState)(""),g=Object(o.a)(v,2),N=g[0],y=g[1],S=Object(s.useState)(""),k=Object(o.a)(S,2),w=k[0],C=k[1];Object(s.useEffect)((function(){fetch("https://nlp-botty.herokuapp.com/bmsg/".concat(N)).then((function(e){return e.json()})).then((function(e){x(e.msg)}))}),[N]),Object(s.useEffect)((function(){"phone"===w?alert("I am not quite ready for voice call..Let's chat !!"):"video"===w?alert("Agh! My face not as pretty as yours..But my handwriting is good :) !"):"info"===w&&alert("I am chatbot.I answer your query on harry potter ! Please Wait 1 second before pressing 'Enter' after u type msg to help me understand better.")}),[w]);var E=function(e){e.preventDefault(),fetch("https://nlp-botty.herokuapp.com/creat",{method:"POST",body:JSON.stringify({content:c})}),c&&(O([].concat(Object(i.a)(j),[c,p])),n(""))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"center",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"center-h",children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"bot-profile",children:Object(l.jsx)("img",{src:d,alt:"logo"})}),Object(l.jsxs)("div",{className:"Title",children:[Object(l.jsx)("h1",{children:"Hello There !"}),Object(l.jsx)("p",{children:"Active Now"})]}),Object(l.jsx)("div",{className:"icons"}),Object(l.jsx)("i",{class:"fas fa-phone-alt",onClick:function(){return C("phone")}}),Object(l.jsx)("i",{class:"fas fa-video",onClick:function(){return C("video")}}),Object(l.jsx)("i",{class:"fas fa-info-circle",onClick:function(){return C("info")}})]})}),Object(l.jsx)(u.a,{children:Object(l.jsx)("div",{className:"center-mb",children:Object(l.jsx)("div",{className:"msg-body",children:j.map((function(e,t){return(t+1)%2!==0?Object(l.jsx)(b,{text:e},t):Object(l.jsx)(h,{botmsg:e},t)}))})})}),Object(l.jsxs)("div",{className:"userinput",children:[Object(l.jsx)("div",{className:"box",children:Object(l.jsx)("form",{onSubmit:E,children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Type here",value:c,onChange:function(e){return function(e){n(e.target.value),y(e.target.value)}(e)},autoFocus:!0})})}),Object(l.jsx)("div",{className:"sent",children:Object(l.jsx)("i",{class:"far fa-paper-plane",onClick:E})})]})]})})})};c(14);var m=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(O,{})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.668fb11a.chunk.js.map