(this["webpackJsonpclimb-presale-fe"]=this["webpackJsonpclimb-presale-fe"]||[]).push([[8],{427:function(e,t,a){"use strict";var n=a(13),r=a(24),c=(a(0),a(6)),o=a(237),i=a(460),s=(a(240),a(1)),l=Object(o.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),d=function(e){var t=e.src,a=e.srcSet,o=e.alt,d=e.lazy,u=e.lazyProps,b=e.className,p=Object(r.a)(e,["src","srcSet","alt","lazy","lazyProps","className"]),j=l();return d?Object(s.jsx)(i.LazyLoadImage,Object(n.a)(Object(n.a)({className:Object(c.a)("image",j.root,j.dBlock,b),alt:o,src:t,srcSet:a,effect:"opacity"},u),p)):Object(s.jsx)("img",Object(n.a)({className:Object(c.a)("image",j.root,b),alt:o,src:t,srcSet:a},p))};d.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}},t.a=d},431:function(e,t,a){"use strict";var n=a(13),r=a(24),c=a(5),o=(a(0),a(6)),i=a(237),s=a(1),l=Object(i.a)((function(e){return{root:Object(c.a)({width:"100%",margin:"0 auto",padding:e.spacing(6,2)},e.breakpoints.up("sm"),{padding:e.spacing(8,10)}),fullWidth:{maxWidth:"100%"},disablePadding:{padding:0},narrow:{maxWidth:800}}}));t.a=function(e){var t=e.children,a=e.fullWidth,c=e.narrow,i=e.disablePadding,d=e.alternate,u=e.className,b=Object(r.a)(e,["children","fullWidth","narrow","disablePadding","alternate","className"]),p=l();return Object(s.jsx)("section",Object(n.a)(Object(n.a)({className:Object(o.a)("section",p.root,a?p.fullWidth:{},c?p.narrow:{},i?p.disablePadding:{},d?p.alternate:{},u)},b),{},{children:t}))}},516:function(e,t,a){"use strict";var n=a(17),r=a(3),c=a.n(r),o=a(33),i=a(5),s=a(0),l=a(237),d=a(355),u=a(412),b=a(409),p=a(907),j=a(618),h=a(63),g=a(59),m=a(38),x=a(20),f=a(77),O=a(13),w=a(904),v=a(1),k=Object(l.a)({root:{color:"#13c552","&$checked":{color:"#13c552"}},checked:{}});function y(e){var t=k();return Object(v.jsx)(w.a,Object(O.a)({classes:{root:t.root,checked:t.checked}},e))}var C=a(427),S=Object(l.a)((function(e){var t,a;return Object(i.a)({actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(1),border:"none"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{color:"#fff",marginBottom:e.spacing(2.5)},label:{color:"#fff"},labelLine:{marginBottom:e.spacing(1)},labelLine1:{marginTop:e.spacing(1),paddingRight:e.spacing(1),float:"right",color:"#16ACE2"},input:{display:"none"},imagePad:{width:200,height:200,background:"none",margin:"10px",borderRadius:"5px",border:"1px solid rgb(107,118,161)"},image:{width:150,height:150,background:"none",margin:"10px",borderRadius:"5px"},dialogContent:(t={},Object(i.a)(t,e.breakpoints.down(360),{maxHeight:"200px",padding:e.spacing(.5)}),Object(i.a)(t,e.breakpoints.down("xs"),{maxHeight:"382px",padding:e.spacing(1,0,1,.5)}),Object(i.a)(t,"display","flex"),Object(i.a)(t,"justifyContent","center"),Object(i.a)(t,"padding",e.spacing(1)),Object(i.a)(t,"maxHeight","460px"),Object(i.a)(t,"width","auto"),Object(i.a)(t,"overflowX","unset"),Object(i.a)(t,"overflowY","scroll"),Object(i.a)(t,"&::-webkit-scrollbar-track",{borderRadius:2,backgroundColor:e.palette.background.default}),Object(i.a)(t,"&::-webkit-scrollbar",{width:5,backgroundColor:e.palette.background.default}),t),container:(a={},Object(i.a)(a,e.breakpoints.down("sm"),{padding:0}),Object(i.a)(a,"display","flex"),Object(i.a)(a,"padding","2px 8px 8px 8px"),Object(i.a)(a,"margin",0),Object(i.a)(a,"flexGrow",1),a),gridCls:{padding:e.spacing(0)}},"label",{fontSize:"20px"})}));t.a=function(e){var t=e.onClose,a=e.account,r=e.chainId,i=e.library,l=e.reward,O=S(),w=Object(g.b)(),k=Object(h.b)().enqueueSnackbar,N=Object(f.a)(a,r,i),F=function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(s.useState)(l),R=Object(n.a)(I,2),P=R[0],A=R[1],E=Object(s.useState)(!1),L=Object(n.a)(E,2),W=L[0],z=L[1],B=function(){var e=Object(o.a)(c.a.mark((function e(){var n,r,o,s,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=42;break}return n=!1,"sharing"===P&&(n=!0),z(!0),e.prev=4,r=!0,o=null,e.next=9,N.changeRewardMethod(n);case 9:s=e.sent,l=s.hash;case 11:if(!r){e.next=24;break}return e.next=14,i.getTransactionReceipt(l);case 14:if(o=e.sent,console.log("kevin transaction tx",o),!Object(x.b)(o)){e.next=21;break}return e.next=19,Object(x.a)(300);case 19:e.next=22;break;case 21:r=!1;case 22:e.next=11;break;case 24:if(1!==o.status){e.next=31;break}return z(!1),k("Reward Method Change Successful.",{variant:"success"}),t(),e.abrupt("return");case 31:return z(!1),k("failed:",{variant:"error"}),t(),e.abrupt("return");case 35:e.next=42;break;case 37:e.prev=37,e.t0=e.catch(4),k("error: ".concat(null===e.t0||void 0===e.t0||null===(d=e.t0.data)||void 0===d?void 0:d.message),{variant:"error"}),z(!1),console.log("kevin===>",e.t0);case 42:case"end":return e.stop()}}),e,null,[[4,37]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(g.a,{open:!0,onClose:t,children:Object(v.jsx)("form",{onSubmit:F,children:Object(v.jsxs)("div",{className:w.root,children:[Object(v.jsx)(d.a,{variant:"h6",className:O.titleLine,children:"Set Reward Method"}),Object(v.jsx)(u.a,{dividers:!0,className:O.dialogContent,children:Object(v.jsxs)(b.a,{container:!0,spacing:2,className:O.container,justifyContent:"space-between",children:[Object(v.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",xs:12,md:6,spacing:2,children:Object(v.jsx)(C.a,{src:"assets/images/RepUSD.png",className:O.image,alt:"Web3 Legal Engineering"})}),Object(v.jsx)(b.a,{item:!0,xs:12,md:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(v.jsxs)(p.a,{"aria-label":"gender",value:P,onChange:function(e){A(e.target.value)},children:[Object(v.jsx)(j.a,{style:{color:"#fff"},value:"interest",control:Object(v.jsx)(y,{}),label:"Earning interest"}),Object(v.jsx)(j.a,{style:{color:"white"},value:"sharing",control:Object(v.jsx)(y,{}),label:"Profit sharing"})]})}),Object(v.jsxs)(b.a,{item:!0,xs:12,md:12,container:!0,justifyContent:"center",alignItems:"center",children:["sharing"!==l&&Object(v.jsxs)(d.a,{style:{color:"#fff"},children:["Your method is Earn Interest with 36% APY.",Object(v.jsx)("br",{}),"If you like to change your reward method to Profit Sharing with earnings of 30RepUSD per 100RepUSD per year, select the Profit Sharing option below and click change. ",Object(v.jsx)("br",{}),"If you want to continue with Earn Interest reward method, click close."]}),"sharing"===l&&Object(v.jsxs)(d.a,{style:{color:"#fff"},children:["Your reward method is Profit Sharing with 30% APY. If you like to change your reward method to Earning Interest with 36% APY, select the Earning Interest option above and click change below. ",Object(v.jsx)("br",{}),"If you want to continue with Profit Sharing reward method, click close."]})]})]})}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"},children:[Object(v.jsx)(m.a,{loading:W,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.5rem",marginTop:"1rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer",color:"#fff"},onClick:function(){return B()},children:"Change"}),Object(v.jsx)(m.a,{variant:"outlined",color:"primary",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.3rem",marginTop:"1.1rem",borderRadius:"1rem",borderColor:"white",cursor:"pointer",color:"#fff"},onClick:function(){return t()},children:"Close"})]})]})})})}},911:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a(237),o=a(409),i=a(458),s=a.n(i),l=(a(459),a(242),a(240),a(431)),d=a(13),u=a(24),b=a(6),p=a(45),j=a(618),h=a(355),g=a(427),m=["Pancakeswap","Uniswap","Quickswap","Compound","Curve","Marker","Sushiswap","Venus","Yearn","InstaDApp","MDex","Balancer","AAVE","WBTC","Alpaca","Convex","Chainlink","Terra","Avalanche","Dai"],x=a(912),f=a(616),O=a.n(f),w=a(617),v=a.n(w),k=a(1),y=Object(c.a)({root:{color:"#13c552","&$checked":{color:"#13c552"}},checked:{}});function C(e){var t=y();return Object(k.jsx)(x.a,Object(d.a)({classes:{root:t.root,checked:t.checked},checkedIcon:Object(k.jsx)(O.a,{}),icon:Object(k.jsx)(v.a,{})},e))}var S=a(80),N=a(38),F=Object(c.a)((function(e){return{root:{borderRadius:e.spacing(2),background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 4px 1px #0F123F08",border:"1px solid #E0E0E4EB",opacity:"1",width:"100%",padding:e.spacing(4,3)},exchangeLabel:{color:"rgb(89,87,213)",fontSize:25,fontWeight:700},searchInput:{marginTop:e.spacing(1),maxWidth:300},platforms:{display:"block",height:"calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(12),"px)"),overflow:"scroll",marginTop:e.spacing(1),paddingTop:e.spacing(1)},label:{fontSize:"22px",color:"rgb(60,60,60)"},image:Object(n.a)({width:200,height:100,marginTop:e.spacing(.5)},e.breakpoints.down("sm"),{width:200,height:100}),desc:{color:"#555",fontSize:14,marginTop:e.spacing(1)}}})),I=function(e){var t=e.className,a=Object(u.a)(e,["className"]),n=F(),c=Object(p.a)(),i=Object(r.useContext)(S.a),s=i.markets,l=i.setMarkets,g=i.setSearchInvest,x=i.loadingSerach,f=function(e){var t=JSON.parse(JSON.stringify(s));if(e.target.checked)t.push(e.target.name.toLowerCase()),l(t);else{var a=t.indexOf(e.target.name.toLowerCase());a>-1&&t.splice(a,1),l(t)}};return Object(k.jsx)("div",Object(d.a)(Object(d.a)({className:Object(b.a)(n.root,t)},a),{},{children:Object(k.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(h.a,{className:n.exchangeLabel,children:" Markets "})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(h.a,{className:n.desc,children:"Select the markets you have invested in below and click search to get the value of your reputation."})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)("div",{className:n.platforms,children:m.map((function(e){return Object(k.jsx)(j.a,{classes:{label:n.label},style:{marginBottom:c.spacing(1),padding:c.spacing(1.5),display:"flex"},control:Object(k.jsx)(C,{name:e,onChange:f}),label:e},e)}))})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(N.a,{onClick:function(){g(!0)},loading:x,style:{height:"2.5rem",marginTop:"1rem",borderRadius:"5px",borderColor:"red",cursor:"pointer",background:"rgb(89,87,213)",color:"#fff"},children:"Search"})})]})}))},R=a(3),P=a.n(R),A=a(33),E=a(17),L=a(167),W=a.n(L),z=a(63),B=a(209);function T(e){return{headers:{Authorization:"Bearer ".concat(e)}}}var D=a(516),M=a(77),U=Object(c.a)((function(e){var t,a;return{root:{},reputation:{fontSize:24,fontWeight:500,marginRight:e.spacing(1),marginTop:e.spacing(2)},reputationValue:{fontSize:24,fontWeight:700,marginRight:e.spacing(1),marginTop:e.spacing(2)},infoboard:(t={padding:e.spacing(1,3),width:"100%",background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 4px 1px #0F123F08",border:"1px solid #E0E0E4EB",opacity:"1",borderRadius:"6px",marginBottom:e.spacing(4)},Object(n.a)(t,"boxShadow","0px 0px 5px 0 rgba(243,243,243,.8)"),Object(n.a)(t,"backgroundColor","rgb(255,255,255)"),t),divider:{border:"1px solid",borderColor:"rgb(60,60,60,0.8)",width:"100%",margin:e.spacing(1,0)},searchPan:{padding:e.spacing(1,2),display:"block",width:"100%",height:"calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight,"px)"),overflow:"scroll"},market:{fontSize:20,fontWeight:600,color:e.palette.warning.dark,marginBottom:e.spacing(2)},property:{fontSize:16,fontWeight:600,color:"rgb(100,100,100)"},valinfo:{fontSize:18,fontWeight:600,color:"rgb(60,60,60)"},image:(a={},Object(n.a)(a,e.breakpoints.down("sm"),{maxWidth:200,marginBottom:60}),Object(n.a)(a,"maxWidth",400),a)}})),V=function(e){var t=U(),a=(Object(p.a)(),Object(z.b)().enqueueSnackbar),n=Object(r.useContext)(S.a),c=n.markets,i=n.account,s=n.chainId,l=n.library,d=n.token,u=n.setLoadingSearch,b=n.isSearchInvest,j=n.setSearchInvest,m=Object(M.a)(i,s,l),x=Object(r.useState)([]),f=Object(E.a)(x,2),O=f[0],w=f[1],v=Object(r.useState)({reputation:0,borrowAmount:0}),y=Object(E.a)(v,2),C=y[0],F=y[1],I=Object(r.useState)(!1),R=Object(E.a)(I,2),L=R[0],V=R[1],Y=Object(r.useState)(!0),H=Object(E.a)(Y,2),J=H[0],$=H[1],q=Object(r.useState)(!1),_=Object(E.a)(q,2),G=_[0],Q=_[1],X=Object(r.useState)("interest"),K=Object(E.a)(X,2),Z=K[0],ee=K[1];Object(r.useEffect)((function(){function e(){return(e=Object(A.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B.a+"search",e.next=3,W.a.post(a,{address:i.toLowerCase(),invested_platforms:t},T(d));case 3:(n=e.sent).data.success&&($(!1),w(n.data.result.reputation),F({reputation:parseFloat(n.data.result.totalReputation).toFixed(2),borrowAmount:parseFloat(n.data.result.borrowAmount).toFixed(2)})),u(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&b?(u(!0),a("Searching...",{variant:"info"}),function(t){return e.apply(this,arguments)}(c).then((function(){a("Searching Completed",{variant:"info"})}))):b&&(u(!1),a("Please wait until login success for a moment.",{variant:"error"})),j(!1)}),[b]),Object(r.useEffect)((function(){function e(){return(e=Object(A.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.a+"getreputation",e.next=3,W.a.post(t,{address:i.toLowerCase()},T(d));case 3:(a=e.sent).data.success&&(F({reputation:parseFloat(a.data.result).toFixed(2),borrowAmount:C.borrowAmount}),u(!1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&i&&function(){e.apply(this,arguments)}()}),[i,d]);return Object(k.jsxs)(o.a,{container:!0,spacing:4,justifyContent:"space-between",children:[Object(k.jsxs)(o.a,{container:!0,item:!0,xs:12,md:5,children:[Object(k.jsx)(h.a,{style:{color:"rgb(120,120,120)"},className:t.reputation,children:"My Reputation"}),Object(k.jsx)(h.a,{className:t.reputationValue,children:"$ "}),Object(k.jsx)(h.a,{className:t.reputationValue,children:C.reputation})]}),Object(k.jsxs)(o.a,{container:!0,item:!0,xs:12,md:4,children:[Object(k.jsx)(h.a,{style:{color:"rgb(120,120,120)"},className:t.reputation,children:"Borrowable"}),Object(k.jsx)(h.a,{className:t.reputationValue,children:"$ "}),Object(k.jsx)(h.a,{className:t.reputationValue,children:C.borrowAmount})]}),Object(k.jsx)(o.a,{item:!0,container:!0,xs:12,md:3,justifyContent:"flex-end",children:Object(k.jsx)(N.a,{loading:L,onClick:function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.userInfo(t.toLowerCase());case 3:e.sent.rewardMethod?ee("sharing"):ee("interest"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a("An unknown error occurred.",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(A.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=B.a+"invest",t.next=3,W.a.post(r,{address:i.toLowerCase(),invested_platforms:n},T(d));case 3:if(!t.sent.data.success){t.next=12;break}return t.next=7,e(i.toLowerCase());case 7:a("Lending success.",{variant:"success"}),V(!1),Q(!0),t.next=14;break;case 12:a("You borrowed RepUSD already.",{variant:"error"}),V(!1);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}V(!0),d?function(e){n.apply(this,arguments)}(c):(V(!1),a("Please wait until login success for a moment.",{variant:"error"}))},variant:"outlined",color:"primary",size:"large",children:"Borrow RepUSD"})}),Object(k.jsxs)("div",{className:t.searchPan,children:[J?Object(k.jsx)(o.a,{item:!0,container:!0,xs:12,children:Object(k.jsx)("div",{style:{margin:"auto"},children:Object(k.jsx)(g.a,{src:"assets/images/RepUSD white1.png",alt:"Web3 Legal Engineering",className:t.image,"data-aos":"fade-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"})})}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(o.a,{item:!0,container:!0,xs:12,children:O.map((function(e,a){return Object(k.jsxs)("div",{className:t.infoboard,children:[Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(h.a,{className:t.market,children:e.dapp},a+"market")},a+"grid"),e.reputation.map((function(n,r){var c=e.reputation.length-1!==r;return Object(k.jsxs)(o.a,{container:!0,children:[Object(k.jsxs)(o.a,{item:!0,xs:12,md:3,children:[Object(k.jsx)(h.a,{className:t.property,children:"Pool"},a+"row"+r+"pool"),Object(k.jsx)(h.a,{className:t.valinfo,children:n.poolName},a+"row"+r+"poolval")]},a+"row"+r+"col1"),Object(k.jsxs)(o.a,{item:!0,xs:12,md:3,children:[Object(k.jsx)(h.a,{className:t.property,children:"Token"},a+"row"+r+"token"),Object(k.jsx)(h.a,{className:t.valinfo,children:n.symbol},a+"row"+r+"symbol")]},a+"row"+r+"col2"),Object(k.jsxs)(o.a,{item:!0,xs:12,md:3,children:[Object(k.jsx)(h.a,{className:t.property,children:"Amount"},a+"row"+r+"amount"),Object(k.jsx)(h.a,{className:t.valinfo,children:parseFloat(n.amount).toFixed(7)},a+"row"+r+"amountval")]},a+"row"+r+"col3"),Object(k.jsxs)(o.a,{item:!0,xs:12,md:3,children:[Object(k.jsx)(h.a,{className:t.property,children:"Value USD"},a+"row"+r+"usd"),Object(k.jsx)(h.a,{className:t.valinfo,children:parseFloat(n.repUSD).toFixed(2)},a+"row"+r+"usdval")]},a+"row"+r+"col4"),c?Object(k.jsx)("div",{className:t.divider},a+"row"+r+"divid"):Object(k.jsx)(k.Fragment,{})]},a+"row"+r)}))]},a)}))})]}),G&&Object(k.jsx)(D.a,{onClose:function(){Q(!1),window.location.href="/vault"},account:i,chainId:s,library:l,reward:Z})]})},Y=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(237, 240, 244)"},section:Object(n.a)({padding:e.spacing(3,1)},e.breakpoints.up("sm"),{padding:e.spacing(4,5)})}}));t.default=function(){var e=Y();return s.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"}),Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(l.a,{className:e.section,children:Object(k.jsx)("div",{className:e.root,children:Object(k.jsxs)(o.a,{container:!0,justifyContent:"space-between",spacing:4,children:[Object(k.jsx)(o.a,{container:!0,item:!0,xs:12,md:3,children:Object(k.jsx)(I,{})}),Object(k.jsx)(o.a,{item:!0,xs:12,md:9,children:Object(k.jsx)(V,{})})]})})})})}}}]);
//# sourceMappingURL=8.2ca49e72.chunk.js.map