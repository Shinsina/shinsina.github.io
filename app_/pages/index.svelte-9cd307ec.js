import{S as B,i as J,s as z,e as _,t as R,c as p,a as v,h as F,d as u,b as g,g as x,J as h,j as K,n as P,k as E,x as D,m as V,y,z as C,r as T,p as I,C as A,l as Z,K as X}from"../chunks/index-d8d9eeff.js";function se(f){let e,n,a;return{c(){e=_("div"),n=_("a"),a=R(f[1]),this.h()},l(r){e=p(r,"DIV",{});var t=v(e);n=p(t,"A",{class:!0,href:!0,target:!0});var i=v(n);a=F(i,f[1]),i.forEach(u),t.forEach(u),this.h()},h(){g(n,"class",f[2]),g(n,"href",f[0]),g(n,"target",f[3])},m(r,t){x(r,e,t),h(e,n),h(n,a)},p(r,[t]){t&2&&K(a,r[1]),t&1&&g(n,"href",r[0])},i:P,o:P,d(r){r&&u(e)}}}function oe(f,e,n){let{linkValue:a,linkLabel:r,faData:t,targetValue:i}=e;const o=`text-blue-400 ${t}`,s=i||"_blank";return f.$$set=l=>{"linkValue"in l&&n(0,a=l.linkValue),"linkLabel"in l&&n(1,r=l.linkLabel),"faData"in l&&n(4,t=l.faData),"targetValue"in l&&n(5,i=l.targetValue)},[a,r,o,s,t,i]}class q extends B{constructor(e){super(),J(this,e,oe,se,z,{linkValue:0,linkLabel:1,faData:4,targetValue:5})}}function ce(f){let e,n,a,r,t,i,o,s,l,b,c,d,m,S,j,L;return l=new q({props:{faData:"fa fa-envelope",linkValue:"mailto:shinsina@att.net",linkLabel:"\xA0shinsina@att.net"}}),c=new q({props:{faData:"fa fa-copy",linkValue:"Resume%20(Jake%20Collins).pdf",linkLabel:"\xA0Resume"}}),m=new q({props:{faData:"fa fa-github",linkValue:"https://github.com/Shinsina",linkLabel:"\xA0GitHub"}}),j=new q({props:{faData:"fa fa-linkedin",linkValue:"https://www.linkedin.com/in/jake-collins-6a3768198",linkLabel:"\xA0LinkedIn"}}),{c(){e=_("div"),n=_("h1"),a=R("Jake Collins"),r=E(),t=_("p"),i=R(`Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.`),o=E(),s=_("div"),D(l.$$.fragment),b=E(),D(c.$$.fragment),d=E(),D(m.$$.fragment),S=E(),D(j.$$.fragment),this.h()},l(k){e=p(k,"DIV",{class:!0});var w=v(e);n=p(w,"H1",{class:!0});var H=v(n);a=F(H,"Jake Collins"),H.forEach(u),r=V(w),t=p(w,"P",{class:!0});var O=v(t);i=F(O,`Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.`),O.forEach(u),o=V(w),s=p(w,"DIV",{class:!0});var $=v(s);y(l.$$.fragment,$),b=V($),y(c.$$.fragment,$),d=V($),y(m.$$.fragment,$),S=V($),y(j.$$.fragment,$),$.forEach(u),w.forEach(u),this.h()},h(){g(n,"class","text-7xl mb-2"),g(t,"class","text-gray-400 text-lg my-3"),g(s,"class","grid md:grid-cols-4"),g(e,"class","col-span-12 pt-20")},m(k,w){x(k,e,w),h(e,n),h(n,a),h(e,r),h(e,t),h(t,i),h(e,o),h(e,s),C(l,s,null),h(s,b),C(c,s,null),h(s,d),C(m,s,null),h(s,S),C(j,s,null),L=!0},p:P,i(k){L||(T(l.$$.fragment,k),T(c.$$.fragment,k),T(m.$$.fragment,k),T(j.$$.fragment,k),L=!0)},o(k){I(l.$$.fragment,k),I(c.$$.fragment,k),I(m.$$.fragment,k),I(j.$$.fragment,k),L=!1},d(k){k&&u(e),A(l),A(c),A(m),A(j)}}}class fe extends B{constructor(e){super(),J(this,e,null,ce,z,{})}}function ee(f){let e,n;return{c(){e=_("a"),n=R("Project Page\xA0"),this.h()},l(a){e=p(a,"A",{href:!0,target:!0});var r=v(e);n=F(r,"Project Page\xA0"),r.forEach(u),this.h()},h(){g(e,"href",f[2]),g(e,"target",f[4])},m(a,r){x(a,e,r),h(e,n)},p(a,r){r&4&&g(e,"href",a[2])},d(a){a&&u(e)}}}function he(f){let e,n,a,r,t,i,o,s,l,b,c,d=f[2]&&ee(f);return{c(){e=_("div"),n=_("div"),a=R(f[0]),r=E(),t=_("div"),i=R(f[1]),o=E(),s=_("div"),d&&d.c(),l=E(),b=_("a"),c=R("\xA0Source Code"),this.h()},l(m){e=p(m,"DIV",{class:!0});var S=v(e);n=p(S,"DIV",{class:!0});var j=v(n);a=F(j,f[0]),j.forEach(u),r=V(S),t=p(S,"DIV",{class:!0});var L=v(t);i=F(L,f[1]),L.forEach(u),o=V(S),s=p(S,"DIV",{class:!0});var k=v(s);d&&d.l(k),l=V(k),b=p(k,"A",{href:!0,target:!0});var w=v(b);c=F(w,"\xA0Source Code"),w.forEach(u),k.forEach(u),S.forEach(u),this.h()},h(){g(n,"class","text-xl"),g(t,"class","text-md"),g(b,"href",f[3]),g(b,"target",f[4]),g(s,"class","text-blue-400"),g(e,"class","text-gray-400 py-4")},m(m,S){x(m,e,S),h(e,n),h(n,a),h(e,r),h(e,t),h(t,i),h(e,o),h(e,s),d&&d.m(s,null),h(s,l),h(s,b),h(b,c)},p(m,[S]){S&1&&K(a,m[0]),S&2&&K(i,m[1]),m[2]?d?d.p(m,S):(d=ee(m),d.c(),d.m(s,l)):d&&(d.d(1),d=null),S&8&&g(b,"href",m[3])},i:P,o:P,d(m){m&&u(e),d&&d.d()}}}function ue(f,e,n){let{title:a,description:r,projectLink:t,sourceCodeLink:i,targetValue:o}=e;const s=o||"_blank";return f.$$set=l=>{"title"in l&&n(0,a=l.title),"description"in l&&n(1,r=l.description),"projectLink"in l&&n(2,t=l.projectLink),"sourceCodeLink"in l&&n(3,i=l.sourceCodeLink),"targetValue"in l&&n(5,o=l.targetValue)},[a,r,t,i,s,o]}class N extends B{constructor(e){super(),J(this,e,ue,he,z,{title:0,description:1,projectLink:2,sourceCodeLink:3,targetValue:5})}}function de(f){let e,n,a,r,t,i,o,s,l,b,c,d,m,S,j,L,k,w,H,O;return o=new N({props:{title:"Ausick",description:"A marketing app built using Vue, Tailwind, Express, GraphQL and MongoDB",sourceCodeLink:"https://github.com/Shinsina/Ausick"}}),l=new N({props:{title:"FaceChat",description:"A messaging app built using React, Tailwind and Firebase",sourceCodeLink:"https://github.com/Shinsina/CS-458-Chat-Application"}}),d=new N({props:{title:"Treeze",description:"A blog app built using React, Tailwind and Firebase",sourceCodeLink:"https://github.com/Shinsina/Treeze"}}),S=new N({props:{title:"Shinsina Utilities",description:"Various utility functions utilizing Node.js",sourceCodeLink:"https://github.com/Shinsina/Shinsina-Utilities"}}),k=new N({props:{title:"The Living Log",description:"A web forum built using Django and Bootstrap",projectLink:"https://the-living-log.herokuapp.com/",sourceCodeLink:"https://github.com/Shinsina/The-Living-Log"}}),H=new N({props:{title:"Slinger Showdown",description:"Programming in Game Engines final project built using Pygame",sourceCodeLink:"https://github.com/Shinsina/Slinger-Showdown"}}),{c(){e=_("div"),n=_("h2"),a=R("Projects"),r=E(),t=_("div"),i=_("div"),D(o.$$.fragment),s=E(),D(l.$$.fragment),b=E(),c=_("div"),D(d.$$.fragment),m=E(),D(S.$$.fragment),j=E(),L=_("div"),D(k.$$.fragment),w=E(),D(H.$$.fragment),this.h()},l($){e=p($,"DIV",{class:!0});var G=v(e);n=p(G,"H2",{class:!0});var Y=v(n);a=F(Y,"Projects"),Y.forEach(u),r=V(G),t=p(G,"DIV",{class:!0});var M=v(t);i=p(M,"DIV",{class:!0});var Q=v(i);y(o.$$.fragment,Q),s=V(Q),y(l.$$.fragment,Q),Q.forEach(u),b=V(M),c=p(M,"DIV",{class:!0});var U=v(c);y(d.$$.fragment,U),m=V(U),y(S.$$.fragment,U),U.forEach(u),j=V(M),L=p(M,"DIV",{class:!0});var W=v(L);y(k.$$.fragment,W),w=V(W),y(H.$$.fragment,W),W.forEach(u),M.forEach(u),G.forEach(u),this.h()},h(){g(n,"class","text-4xl mb-2"),g(i,"class","col"),g(c,"class","col"),g(L,"class","col"),g(t,"class","grid sm:grid-cols-1 md:grid-cols-3"),g(e,"class","col-span-12 bg-gray-900")},m($,G){x($,e,G),h(e,n),h(n,a),h(e,r),h(e,t),h(t,i),C(o,i,null),h(i,s),C(l,i,null),h(t,b),h(t,c),C(d,c,null),h(c,m),C(S,c,null),h(t,j),h(t,L),C(k,L,null),h(L,w),C(H,L,null),O=!0},p:P,i($){O||(T(o.$$.fragment,$),T(l.$$.fragment,$),T(d.$$.fragment,$),T(S.$$.fragment,$),T(k.$$.fragment,$),T(H.$$.fragment,$),O=!0)},o($){I(o.$$.fragment,$),I(l.$$.fragment,$),I(d.$$.fragment,$),I(S.$$.fragment,$),I(k.$$.fragment,$),I(H.$$.fragment,$),O=!1},d($){$&&u(e),A(o),A(l),A(d),A(S),A(k),A(H)}}}class ge extends B{constructor(e){super(),J(this,e,null,de,z,{})}}function te(f,e,n){const a=f.slice();return a[1]=e[n],a[3]=n,a}function ne(f,e,n){const a=f.slice();return a[4]=e[n],a}function re(f,e,n){const a=f.slice();return a[4]=e[n],a}function ae(f){let e,n=f[4]+"",a;return{c(){e=_("th"),a=R(n),this.h()},l(r){e=p(r,"TH",{class:!0});var t=v(e);a=F(t,n),t.forEach(u),this.h()},h(){g(e,"class","border-2 border-gray-700")},m(r,t){x(r,e,t),h(e,a)},p:P,d(r){r&&u(e)}}}function me(f){let e,n;return{c(){e=_("td"),n=R("Python"),this.h()},l(a){e=p(a,"TD",{class:!0});var r=v(e);n=F(r,"Python"),r.forEach(u),this.h()},h(){g(e,"class","border-2 border-gray-700")},m(a,r){x(a,e,r),h(e,n)},p:P,d(a){a&&u(e)}}}function _e(f){let e,n;return{c(){e=_("th"),n=R("Other"),this.h()},l(a){e=p(a,"TH",{class:!0});var r=v(e);n=F(r,"Other"),r.forEach(u),this.h()},h(){g(e,"class","border-2 border-gray-700")},m(a,r){x(a,e,r),h(e,n)},p:P,d(a){a&&u(e)}}}function pe(f){let e,n=f[0][f[4]][f[3]]+"",a;return{c(){e=_("td"),a=R(n),this.h()},l(r){e=p(r,"TD",{class:!0});var t=v(e);a=F(t,n),t.forEach(u),this.h()},h(){g(e,"class","border-2 border-gray-700")},m(r,t){x(r,e,t),h(e,a)},p:P,d(r){r&&u(e)}}}function le(f){let e;function n(t,i){return t[0][t[4]][t[3]]?pe:!t[0][t[4]][t[3]]&&t[3]===5?_e:me}let r=n(f)(f);return{c(){r.c(),e=Z()},l(t){r.l(t),e=Z()},m(t,i){r.m(t,i),x(t,e,i)},p(t,i){r.p(t,i)},d(t){r.d(t),t&&u(e)}}}function ie(f){let e,n,a=Object.keys(f[0]),r=[];for(let t=0;t<a.length;t+=1)r[t]=le(ne(f,a,t));return{c(){e=_("tr");for(let t=0;t<r.length;t+=1)r[t].c();n=E()},l(t){e=p(t,"TR",{});var i=v(e);for(let o=0;o<r.length;o+=1)r[o].l(i);n=V(i),i.forEach(u)},m(t,i){x(t,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null);h(e,n)},p(t,i){if(i&1){a=Object.keys(t[0]);let o;for(o=0;o<a.length;o+=1){const s=ne(t,a,o);r[o]?r[o].p(s,i):(r[o]=le(s),r[o].c(),r[o].m(e,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}},d(t){t&&u(e),X(r,t)}}}function ve(f){let e,n,a,r,t=Object.keys(f[0]),i=[];for(let l=0;l<t.length;l+=1)i[l]=ae(re(f,t,l));let o=f[0].Frameworks,s=[];for(let l=0;l<o.length;l+=1)s[l]=ie(te(f,o,l));return{c(){e=_("div"),n=_("table"),a=_("tr");for(let l=0;l<i.length;l+=1)i[l].c();r=E();for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var b=v(e);n=p(b,"TABLE",{class:!0});var c=v(n);a=p(c,"TR",{});var d=v(a);for(let m=0;m<i.length;m+=1)i[m].l(d);d.forEach(u),r=V(c);for(let m=0;m<s.length;m+=1)s[m].l(c);c.forEach(u),b.forEach(u),this.h()},h(){g(n,"class","table-fixed border-2 border-gray-700"),g(e,"class","grid grid-cols")},m(l,b){x(l,e,b),h(e,n),h(n,a);for(let c=0;c<i.length;c+=1)i[c].m(a,null);h(n,r);for(let c=0;c<s.length;c+=1)s[c].m(n,null)},p(l,[b]){if(b&1){t=Object.keys(l[0]);let c;for(c=0;c<t.length;c+=1){const d=re(l,t,c);i[c]?i[c].p(d,b):(i[c]=ae(d),i[c].c(),i[c].m(a,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=t.length}if(b&1){o=l[0].Frameworks;let c;for(c=0;c<o.length;c+=1){const d=te(l,o,c);s[c]?s[c].p(d,b):(s[c]=ie(d),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=o.length}},i:P,o:P,d(l){l&&u(e),X(i,l),X(s,l)}}}function ke(f){return[{"Web-Oriented":["HTML5","JavaScript","TypeScript","CSS","SASS"],Frameworks:["Svelte","Marko","React","Vue","Angular","Tailwind","Bootstrap"],"Server-Side":["MongoDB","Node.js","Firebase","GraphQL","SQL","AWS S3","Docker"]}]}class $e extends B{constructor(e){super(),J(this,e,ke,ve,z,{})}}function be(f){let e,n,a,r,t,i;return t=new $e({}),{c(){e=_("div"),n=_("h2"),a=R("Skills"),r=E(),D(t.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0});var s=v(e);n=p(s,"H2",{class:!0});var l=v(n);a=F(l,"Skills"),l.forEach(u),r=V(s),y(t.$$.fragment,s),s.forEach(u),this.h()},h(){g(n,"class","text-4xl mb-2"),g(e,"class","col-span-12 justify-items-center bg-gray-900")},m(o,s){x(o,e,s),h(e,n),h(n,a),h(e,r),C(t,e,null),i=!0},p:P,i(o){i||(T(t.$$.fragment,o),i=!0)},o(o){I(t.$$.fragment,o),i=!1},d(o){o&&u(e),A(t)}}}class Se extends B{constructor(e){super(),J(this,e,null,be,z,{})}}function Ee(f){let e,n,a,r,t,i,o;return n=new fe({}),r=new ge({}),i=new Se({}),{c(){e=_("div"),D(n.$$.fragment),a=E(),D(r.$$.fragment),t=E(),D(i.$$.fragment),this.h()},l(s){e=p(s,"DIV",{class:!0});var l=v(e);y(n.$$.fragment,l),a=V(l),y(r.$$.fragment,l),t=V(l),y(i.$$.fragment,l),l.forEach(u),this.h()},h(){g(e,"class","h-screen w-screen bg-gray-900 text-white text-center font-sans grid grid-cols-12")},m(s,l){x(s,e,l),C(n,e,null),h(e,a),C(r,e,null),h(e,t),C(i,e,null),o=!0},p:P,i(s){o||(T(n.$$.fragment,s),T(r.$$.fragment,s),T(i.$$.fragment,s),o=!0)},o(s){I(n.$$.fragment,s),I(r.$$.fragment,s),I(i.$$.fragment,s),o=!1},d(s){s&&u(e),A(n),A(r),A(i)}}}class Le extends B{constructor(e){super(),J(this,e,null,Ee,z,{})}}export{Le as default};
