import{S as X,i as Y,s as Z,e as g,t as P,c as v,a as _,g as A,d as o,b as d,f as w,H as h,h as se,I as B,k as E,j as G,n as S,m as R,o as H,x as M,u as O,v as F,l as ue,J as ce,K as ie}from"../chunks/vendor-b7c2f4f0.js";function $e(m){let e,r,a;return{c(){e=g("li"),r=g("a"),a=P(m[1]),this.h()},l(l){e=v(l,"LI",{class:!0});var t=_(e);r=v(t,"A",{class:!0,href:!0,target:!0});var s=_(r);a=A(s,m[1]),s.forEach(o),t.forEach(o),this.h()},h(){d(r,"class",m[2]),d(r,"href",m[0]),d(r,"target",m[3]),d(e,"class","nav-item")},m(l,t){w(l,e,t),h(e,r),h(r,a)},p(l,[t]){t&2&&se(a,l[1]),t&1&&d(r,"href",l[0])},i:B,o:B,d(l){l&&o(e)}}}function we(m,e,r){let{linkValue:a,linkLabel:l,faData:t,targetValue:s}=e;const i=t?`nav-item nav-link ${t}`:"nav-item nav-link",n=s||"_blank";return m.$$set=f=>{"linkValue"in f&&r(0,a=f.linkValue),"linkLabel"in f&&r(1,l=f.linkLabel),"faData"in f&&r(4,t=f.faData),"targetValue"in f&&r(5,s=f.targetValue)},[a,l,i,n,t,s]}class oe extends X{constructor(e){super();Y(this,e,we,$e,Z,{linkValue:0,linkLabel:1,faData:4,targetValue:5})}}function Ee(m){let e,r,a,l,t,s,i,n,f,u,c,p,b,k,L,V;return f=new oe({props:{faData:"fa fa-envelope",linkValue:"mailto:shinsina@att.net",linkLabel:"\xA0shinsina@att.net"}}),c=new oe({props:{faData:"fa fa-copy",linkValue:"Resume%20(Jake%20Collins).pdf",linkLabel:"\xA0Resume"}}),b=new oe({props:{faData:"fa fa-github",linkValue:"https://github.com/Shinsina?tab=repositories",linkLabel:"\xA0GitHub"}}),L=new oe({props:{faData:"fa fa-linkedin",linkValue:"https://www.linkedin.com/in/jake-collins-6a3768198",linkLabel:"\xA0LinkedIn"}}),{c(){e=g("div"),r=g("h1"),a=P("Jake Collins"),l=E(),t=g("p"),s=P(`Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.`),i=E(),n=g("ul"),G(f.$$.fragment),u=E(),G(c.$$.fragment),p=E(),G(b.$$.fragment),k=E(),G(L.$$.fragment),this.h()},l(D){e=v(D,"DIV",{class:!0});var I=_(e);r=v(I,"H1",{});var T=_(r);a=A(T,"Jake Collins"),T.forEach(o),l=S(I),t=v(I,"P",{class:!0});var z=_(t);s=A(z,`Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.`),z.forEach(o),i=S(I),n=v(I,"UL",{class:!0});var y=_(n);R(f.$$.fragment,y),u=S(y),R(c.$$.fragment,y),p=S(y),R(b.$$.fragment,y),k=S(y),R(L.$$.fragment,y),y.forEach(o),I.forEach(o),this.h()},h(){d(t,"class","lead"),d(n,"class","nav justify-content-center lead"),d(e,"class","jumbotron bg-transparent jumbotron-fluid")},m(D,I){w(D,e,I),h(e,r),h(r,a),h(e,l),h(e,t),h(t,s),h(e,i),h(e,n),H(f,n,null),h(n,u),H(c,n,null),h(n,p),H(b,n,null),h(n,k),H(L,n,null),V=!0},p:B,i(D){V||(M(f.$$.fragment,D),M(c.$$.fragment,D),M(b.$$.fragment,D),M(L.$$.fragment,D),V=!0)},o(D){O(f.$$.fragment,D),O(c.$$.fragment,D),O(b.$$.fragment,D),O(L.$$.fragment,D),V=!1},d(D){D&&o(e),F(f),F(c),F(b),F(L)}}}class Se extends X{constructor(e){super();Y(this,e,null,Ee,Z,{})}}function me(m,e,r){const a=m.slice();return a[1]=e[r],a[3]=r,a}function he(m,e,r){const a=m.slice();return a[4]=e[r],a}function de(m,e,r){const a=m.slice();return a[4]=e[r],a}function ge(m){let e,r=m[4]+"",a;return{c(){e=g("th"),a=P(r)},l(l){e=v(l,"TH",{});var t=_(e);a=A(t,r),t.forEach(o)},m(l,t){w(l,e,t),h(e,a)},p:B,d(l){l&&o(e)}}}function Ve(m){let e,r;return{c(){e=g("td"),r=P("Python")},l(a){e=v(a,"TD",{});var l=_(e);r=A(l,"Python"),l.forEach(o)},m(a,l){w(a,e,l),h(e,r)},p:B,d(a){a&&o(e)}}}function De(m){let e,r;return{c(){e=g("th"),r=P("Other")},l(a){e=v(a,"TH",{});var l=_(e);r=A(l,"Other"),l.forEach(o)},m(a,l){w(a,e,l),h(e,r)},p:B,d(a){a&&o(e)}}}function Ie(m){let e,r=m[0][m[4]][m[3]]+"",a;return{c(){e=g("td"),a=P(r)},l(l){e=v(l,"TD",{});var t=_(e);a=A(t,r),t.forEach(o)},m(l,t){w(l,e,t),h(e,a)},p:B,d(l){l&&o(e)}}}function ve(m){let e;function r(t,s){return t[0][t[4]][t[3]]?Ie:!t[0][t[4]][t[3]]&&t[3]===5?De:Ve}let l=r(m)(m);return{c(){l.c(),e=ue()},l(t){l.l(t),e=ue()},m(t,s){l.m(t,s),w(t,e,s)},p(t,s){l.p(t,s)},d(t){l.d(t),t&&o(e)}}}function pe(m){let e,r,a=Object.keys(m[0]),l=[];for(let t=0;t<a.length;t+=1)l[t]=ve(he(m,a,t));return{c(){e=g("tr");for(let t=0;t<l.length;t+=1)l[t].c();r=E()},l(t){e=v(t,"TR",{});var s=_(e);for(let i=0;i<l.length;i+=1)l[i].l(s);r=S(s),s.forEach(o)},m(t,s){w(t,e,s);for(let i=0;i<l.length;i+=1)l[i].m(e,null);h(e,r)},p(t,s){if(s&1){a=Object.keys(t[0]);let i;for(i=0;i<a.length;i+=1){const n=he(t,a,i);l[i]?l[i].p(n,s):(l[i]=ve(n),l[i].c(),l[i].m(e,r))}for(;i<l.length;i+=1)l[i].d(1);l.length=a.length}},d(t){t&&o(e),ce(l,t)}}}function Le(m){let e,r,a,l=Object.keys(m[0]),t=[];for(let n=0;n<l.length;n+=1)t[n]=ge(de(m,l,n));let s=m[0].Frameworks,i=[];for(let n=0;n<s.length;n+=1)i[n]=pe(me(m,s,n));return{c(){e=g("table"),r=g("tr");for(let n=0;n<t.length;n+=1)t[n].c();a=E();for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=v(n,"TABLE",{class:!0});var f=_(e);r=v(f,"TR",{});var u=_(r);for(let c=0;c<t.length;c+=1)t[c].l(u);u.forEach(o),a=S(f);for(let c=0;c<i.length;c+=1)i[c].l(f);f.forEach(o),this.h()},h(){d(e,"class","table lead table-bordered")},m(n,f){w(n,e,f),h(e,r);for(let u=0;u<t.length;u+=1)t[u].m(r,null);h(e,a);for(let u=0;u<i.length;u+=1)i[u].m(e,null)},p(n,[f]){if(f&1){l=Object.keys(n[0]);let u;for(u=0;u<l.length;u+=1){const c=de(n,l,u);t[u]?t[u].p(c,f):(t[u]=ge(c),t[u].c(),t[u].m(r,null))}for(;u<t.length;u+=1)t[u].d(1);t.length=l.length}if(f&1){s=n[0].Frameworks;let u;for(u=0;u<s.length;u+=1){const c=me(n,s,u);i[u]?i[u].p(c,f):(i[u]=pe(c),i[u].c(),i[u].m(e,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=s.length}},i:B,o:B,d(n){n&&o(e),ce(t,n),ce(i,n)}}}function je(m){return[{"Web-Oriented":["HTML5","JavaScript","TypeScript","CSS","SASS"],Frameworks:["Svelte","Marko","React","Vue","Angular","Tailwind","Bootstrap"],"Server-Side":["MongoDB","Node.js","Firebase","GraphQL","SQL","AWS S3","Docker"]}]}class Te extends X{constructor(e){super();Y(this,e,je,Le,Z,{})}}function ye(m){let e,r,a,l,t;return l=new Te({}),{c(){e=g("h2"),r=P("Skills"),a=E(),G(l.$$.fragment)},l(s){e=v(s,"H2",{});var i=_(e);r=A(i,"Skills"),i.forEach(o),a=S(s),R(l.$$.fragment,s)},m(s,i){w(s,e,i),h(e,r),w(s,a,i),H(l,s,i),t=!0},p:B,i(s){t||(M(l.$$.fragment,s),t=!0)},o(s){O(l.$$.fragment,s),t=!1},d(s){s&&o(e),s&&o(a),F(l,s)}}}class Ce extends X{constructor(e){super();Y(this,e,null,ye,Z,{})}}function _e(m){let e,r,a;return{c(){e=g("br"),r=g("a"),a=P("Project Page\xA0"),this.h()},l(l){e=v(l,"BR",{}),r=v(l,"A",{href:!0,target:!0});var t=_(r);a=A(t,"Project Page\xA0"),t.forEach(o),this.h()},h(){d(r,"href",m[2]),d(r,"target",m[4])},m(l,t){w(l,e,t),w(l,r,t),h(r,a)},p(l,t){t&4&&d(r,"href",l[2])},d(l){l&&o(e),l&&o(r)}}}function Pe(m){let e,r,a,l,t,s,i,n,f,u=m[2]&&_e(m);return{c(){e=g("br"),r=P(m[0]),a=E(),l=g("br"),t=P(m[1]),s=E(),u&&u.c(),i=E(),n=g("a"),f=P("\xA0Source Code"),this.h()},l(c){e=v(c,"BR",{}),r=A(c,m[0]),a=S(c),l=v(c,"BR",{}),t=A(c,m[1]),s=S(c),u&&u.l(c),i=S(c),n=v(c,"A",{href:!0,target:!0});var p=_(n);f=A(p,"\xA0Source Code"),p.forEach(o),this.h()},h(){d(n,"href",m[3]),d(n,"target",m[4])},m(c,p){w(c,e,p),w(c,r,p),w(c,a,p),w(c,l,p),w(c,t,p),w(c,s,p),u&&u.m(c,p),w(c,i,p),w(c,n,p),h(n,f)},p(c,[p]){p&1&&se(r,c[0]),p&2&&se(t,c[1]),c[2]?u?u.p(c,p):(u=_e(c),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),p&8&&d(n,"href",c[3])},i:B,o:B,d(c){c&&o(e),c&&o(r),c&&o(a),c&&o(l),c&&o(t),c&&o(s),u&&u.d(c),c&&o(i),c&&o(n)}}}function Ae(m,e,r){let{title:a,description:l,projectLink:t,sourceCodeLink:s,targetValue:i}=e;const n=i||"_blank";return m.$$set=f=>{"title"in f&&r(0,a=f.title),"description"in f&&r(1,l=f.description),"projectLink"in f&&r(2,t=f.projectLink),"sourceCodeLink"in f&&r(3,s=f.sourceCodeLink),"targetValue"in f&&r(5,i=f.targetValue)},[a,l,t,s,n,i]}class ae extends X{constructor(e){super();Y(this,e,Ae,Pe,Z,{title:0,description:1,projectLink:2,sourceCodeLink:3,targetValue:5})}}function Be(m){let e,r,a,l,t,s,i,n,f,u,c,p,b,k,L,V,D,I,T,z,y,C,N,x,ee,Q,U,j;return f=new ae({props:{title:"Ausick",description:"A marketing app built using Vue (with TypeScript), Tailwind, Express, GraphQL and MongoDB",sourceCodeLink:"https://github.com/Shinsina/Ausick"}}),c=new ae({props:{title:"FaceChat",description:"A messaging app built using React, Tailwind and Firebase",sourceCodeLink:"https://github.com/Shinsina/CS-458-Chat-Application"}}),L=new ae({props:{title:"Treeze",description:"A blog app built using React, Tailwind and Firebase",sourceCodeLink:"https://github.com/Shinsina/Treeze"}}),T=new ae({props:{title:"Shinsina Utilities",description:"Various utility functions utilizing Node.js",sourceCodeLink:"https://github.com/Shinsina/Shinsina-Utilities"}}),N=new ae({props:{title:"The Living Log",description:"A web forum built using Django and Bootstrap",projectLink:"https://the-living-log.herokuapp.com/",sourceCodeLink:"https://github.com/Shinsina/The-Living-Log"}}),U=new ae({props:{title:"Slinger Showdown",description:"Programming in Game Engines final project built using Pygame",sourceCodeLink:"https://github.com/Shinsina/Slinger-Showdown"}}),{c(){e=g("br"),r=E(),a=g("h2"),l=P("Projects"),t=E(),s=g("div"),i=g("div"),n=g("p"),G(f.$$.fragment),u=E(),G(c.$$.fragment),p=E(),b=g("div"),k=g("p"),G(L.$$.fragment),V=E(),D=g("br"),I=E(),G(T.$$.fragment),z=E(),y=g("div"),C=g("p"),G(N.$$.fragment),x=E(),ee=g("br"),Q=E(),G(U.$$.fragment),this.h()},l($){e=v($,"BR",{}),r=S($),a=v($,"H2",{});var q=_(a);l=A(q,"Projects"),q.forEach(o),t=S($),s=v($,"DIV",{class:!0});var J=_(s);i=v(J,"DIV",{class:!0});var te=_(i);n=v(te,"P",{class:!0});var le=_(n);R(f.$$.fragment,le),u=S(le),R(c.$$.fragment,le),le.forEach(o),te.forEach(o),p=S(J),b=v(J,"DIV",{class:!0});var re=_(b);k=v(re,"P",{class:!0});var K=_(k);R(L.$$.fragment,K),V=S(K),D=v(K,"BR",{}),I=S(K),R(T.$$.fragment,K),K.forEach(o),re.forEach(o),z=S(J),y=v(J,"DIV",{class:!0});var ne=_(y);C=v(ne,"P",{class:!0});var W=_(C);R(N.$$.fragment,W),x=S(W),ee=v(W,"BR",{}),Q=S(W),R(U.$$.fragment,W),W.forEach(o),ne.forEach(o),J.forEach(o),this.h()},h(){d(n,"class","lead"),d(i,"class","col"),d(k,"class","lead"),d(b,"class","col"),d(C,"class","lead"),d(y,"class","col"),d(s,"class","row")},m($,q){w($,e,q),w($,r,q),w($,a,q),h(a,l),w($,t,q),w($,s,q),h(s,i),h(i,n),H(f,n,null),h(n,u),H(c,n,null),h(s,p),h(s,b),h(b,k),H(L,k,null),h(k,V),h(k,D),h(k,I),H(T,k,null),h(s,z),h(s,y),h(y,C),H(N,C,null),h(C,x),h(C,ee),h(C,Q),H(U,C,null),j=!0},p:B,i($){j||(M(f.$$.fragment,$),M(c.$$.fragment,$),M(L.$$.fragment,$),M(T.$$.fragment,$),M(N.$$.fragment,$),M(U.$$.fragment,$),j=!0)},o($){O(f.$$.fragment,$),O(c.$$.fragment,$),O(L.$$.fragment,$),O(T.$$.fragment,$),O(N.$$.fragment,$),O(U.$$.fragment,$),j=!1},d($){$&&o(e),$&&o(r),$&&o(a),$&&o(t),$&&o(s),F(f),F(c),F(L),F(T),F(N),F(U)}}}class Ge extends X{constructor(e){super();Y(this,e,null,Be,Z,{})}}function be(m){let e,r;return{c(){e=g("p"),r=P(m[3])},l(a){e=v(a,"P",{});var l=_(e);r=A(l,m[3]),l.forEach(o)},m(a,l){w(a,e,l),h(e,r)},p(a,l){l&8&&se(r,a[3])},d(a){a&&o(e)}}}function Re(m){let e,r,a,l,t,s,i,n,f,u,c,p=m[3]&&be(m);return{c(){e=g("button"),r=g("img"),l=E(),t=g("div"),s=g("div"),i=g("div"),n=g("div"),f=g("img"),c=E(),p&&p.c(),this.h()},l(b){e=v(b,"BUTTON",{type:!0,class:!0,"data-toggle":!0,"data-target":!0});var k=_(e);r=v(k,"IMG",{src:!0,class:!0,alt:!0}),k.forEach(o),l=S(b),t=v(b,"DIV",{id:!0,class:!0,tabindex:!0,role:!0});var L=_(t);s=v(L,"DIV",{class:!0});var V=_(s);i=v(V,"DIV",{class:!0});var D=_(i);n=v(D,"DIV",{class:!0});var I=_(n);f=v(I,"IMG",{src:!0,class:!0,alt:!0}),c=S(I),p&&p.l(I),I.forEach(o),D.forEach(o),V.forEach(o),L.forEach(o),this.h()},h(){ie(r.src,a=m[1])||d(r,"src",a),d(r,"class","img-fluid"),d(r,"alt",m[2]),d(e,"type","button"),d(e,"class","btn btn-primary"),d(e,"data-toggle","modal"),d(e,"data-target",m[4]),ie(f.src,u=m[1])||d(f,"src",u),d(f,"class","img-fluid"),d(f,"alt",m[2]),d(n,"class","modal-body"),d(i,"class","modal-content"),d(s,"class","modal-dialog modal-xl"),d(t,"id",m[0]),d(t,"class","modal fade"),d(t,"tabindex","0"),d(t,"role","dialog")},m(b,k){w(b,e,k),h(e,r),w(b,l,k),w(b,t,k),h(t,s),h(s,i),h(i,n),h(n,f),h(n,c),p&&p.m(n,null)},p(b,[k]){k&2&&!ie(r.src,a=b[1])&&d(r,"src",a),k&4&&d(r,"alt",b[2]),k&2&&!ie(f.src,u=b[1])&&d(f,"src",u),k&4&&d(f,"alt",b[2]),b[3]?p?p.p(b,k):(p=be(b),p.c(),p.m(n,null)):p&&(p.d(1),p=null),k&1&&d(t,"id",b[0])},i:B,o:B,d(b){b&&o(e),b&&o(l),b&&o(t),p&&p.d()}}}function He(m,e,r){let{modalId:a,src:l,alt:t,caption:s}=e;const i=`#${a}`;return m.$$set=n=>{"modalId"in n&&r(0,a=n.modalId),"src"in n&&r(1,l=n.src),"alt"in n&&r(2,t=n.alt),"caption"in n&&r(3,s=n.caption)},[a,l,t,s,i]}class ke extends X{constructor(e){super();Y(this,e,He,Re,Z,{modalId:0,src:1,alt:2,caption:3})}}function Me(m){let e,r,a,l,t,s,i,n,f,u,c,p,b,k,L,V,D,I,T,z,y,C,N,x,ee,Q,U;return p=new ke({props:{modalId:"modal1",src:"GameManual.png",alt:"Game Manual"}}),Q=new ke({props:{modalId:"modal2",src:"Breakthrough.png",alt:"Game Manual",caption:Oe}}),{c(){e=g("h2"),r=P("Slinger Showdown"),a=E(),l=g("p"),t=P("A simple top down checkpoint based arcade racer built using Pygame"),s=E(),i=g("div"),n=g("div"),f=g("h3"),u=P("About The Game"),c=E(),G(p.$$.fragment),b=E(),k=g("div"),L=g("h3"),V=P("Gameplay Demo"),D=E(),I=g("div"),T=g("iframe"),y=E(),C=g("div"),N=g("h3"),x=P("Breakthrough"),ee=E(),G(Q.$$.fragment),this.h()},l(j){e=v(j,"H2",{});var $=_(e);r=A($,"Slinger Showdown"),$.forEach(o),a=S(j),l=v(j,"P",{class:!0});var q=_(l);t=A(q,"A simple top down checkpoint based arcade racer built using Pygame"),q.forEach(o),s=S(j),i=v(j,"DIV",{class:!0});var J=_(i);n=v(J,"DIV",{class:!0});var te=_(n);f=v(te,"H3",{});var le=_(f);u=A(le,"About The Game"),le.forEach(o),c=S(te),R(p.$$.fragment,te),te.forEach(o),b=S(J),k=v(J,"DIV",{class:!0});var re=_(k);L=v(re,"H3",{});var K=_(L);V=A(K,"Gameplay Demo"),K.forEach(o),D=S(re),I=v(re,"DIV",{class:!0});var ne=_(I);T=v(ne,"IFRAME",{class:!0,src:!0,title:!0,muted:!0}),_(T).forEach(o),ne.forEach(o),re.forEach(o),y=S(J),C=v(J,"DIV",{class:!0});var W=_(C);N=v(W,"H3",{});var fe=_(N);x=A(fe,"Breakthrough"),fe.forEach(o),ee=S(W),R(Q.$$.fragment,W),W.forEach(o),J.forEach(o),this.h()},h(){d(l,"class","lead"),d(n,"class","col"),d(T,"class","embed-responsive-item"),ie(T.src,z="Gameplay Demo.mp4")||d(T,"src",z),d(T,"title","Gameplay Demo"),T.allowFullscreen=!0,d(T,"muted",""),d(I,"class","embed-responsive embed-responsive-16by9"),d(k,"class","col"),d(C,"class","col"),d(i,"class","row")},m(j,$){w(j,e,$),h(e,r),w(j,a,$),w(j,l,$),h(l,t),w(j,s,$),w(j,i,$),h(i,n),h(n,f),h(f,u),h(n,c),H(p,n,null),h(i,b),h(i,k),h(k,L),h(L,V),h(k,D),h(k,I),h(I,T),h(i,y),h(i,C),h(C,N),h(N,x),h(C,ee),H(Q,C,null),U=!0},p:B,i(j){U||(M(p.$$.fragment,j),M(Q.$$.fragment,j),U=!0)},o(j){O(p.$$.fragment,j),O(Q.$$.fragment,j),U=!1},d(j){j&&o(e),j&&o(a),j&&o(l),j&&o(s),j&&o(i),F(p),F(Q)}}}const Oe='This is the update method for the car onscreen, the "breakthrough" here was solving how to do collision detection. One coordinate direction (X or Y) is verified ascolliding and then whatever one was NOT verified as colliding is then set to the appropriate value. This alongside the self.angle calculation utilizing a normal vector of the movement vector by which is based on the x and y coordinate change between each checkpoint results in the car traveling around the track between the checkpoints in the desired motion. Taking this "angle" of a mathematics approach to problem solving I have found be very helpful in solving many issues I have faced via programming in my personal projects.';class Fe extends X{constructor(e){super();Y(this,e,null,Me,Z,{})}}function Ne(m){let e,r,a,l,t,s,i,n,f,u,c,p,b,k,L;return l=new Se({}),i=new Ge({}),c=new Ce({}),k=new Fe({}),{c(){e=g("div"),r=g("div"),a=g("div"),G(l.$$.fragment),t=E(),s=g("div"),G(i.$$.fragment),n=E(),f=g("div"),u=g("div"),G(c.$$.fragment),p=E(),b=g("div"),G(k.$$.fragment),this.h()},l(V){e=v(V,"DIV",{class:!0});var D=_(e);r=v(D,"DIV",{class:!0});var I=_(r);a=v(I,"DIV",{class:!0});var T=_(a);R(l.$$.fragment,T),T.forEach(o),t=S(I),s=v(I,"DIV",{class:!0});var z=_(s);R(i.$$.fragment,z),z.forEach(o),n=S(I),f=v(I,"DIV",{class:!0});var y=_(f);u=v(y,"DIV",{class:!0});var C=_(u);R(c.$$.fragment,C),C.forEach(o),p=S(y),b=v(y,"DIV",{class:!0});var N=_(b);R(k.$$.fragment,N),N.forEach(o),y.forEach(o),I.forEach(o),D.forEach(o),this.h()},h(){d(a,"class","col text-center"),d(s,"class","col text-center"),d(u,"class","col text-center"),d(b,"class","col text-center"),d(f,"class","row"),d(r,"class","row"),d(e,"class","container-fluid")},m(V,D){w(V,e,D),h(e,r),h(r,a),H(l,a,null),h(r,t),h(r,s),H(i,s,null),h(r,n),h(r,f),h(f,u),H(c,u,null),h(f,p),h(f,b),H(k,b,null),L=!0},p:B,i(V){L||(M(l.$$.fragment,V),M(i.$$.fragment,V),M(c.$$.fragment,V),M(k.$$.fragment,V),L=!0)},o(V){O(l.$$.fragment,V),O(i.$$.fragment,V),O(c.$$.fragment,V),O(k.$$.fragment,V),L=!1},d(V){V&&o(e),F(l),F(i),F(c),F(k)}}}class ze extends X{constructor(e){super();Y(this,e,null,Ne,Z,{})}}export{ze as default};