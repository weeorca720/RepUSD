(this["webpackJsonpclimb-presale-fe"]=this["webpackJsonpclimb-presale-fe"]||[]).push([[5],{428:function(e,a,t){"use strict";var n=t(13),c=t(23),r=(t(0),t(6)),s=t(237),o=t(461),i=(t(240),t(1)),l=Object(s.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),d=function(e){var a=e.src,t=e.srcSet,s=e.alt,d=e.lazy,u=e.lazyProps,b=e.className,p=Object(c.a)(e,["src","srcSet","alt","lazy","lazyProps","className"]),j=l();return d?Object(i.jsx)(o.LazyLoadImage,Object(n.a)(Object(n.a)({className:Object(r.a)("image",j.root,j.dBlock,b),alt:s,src:a,srcSet:t,effect:"opacity"},u),p)):Object(i.jsx)("img",Object(n.a)({className:Object(r.a)("image",j.root,b),alt:s,src:a,srcSet:t},p))};d.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}},a.a=d},432:function(e,a,t){"use strict";var n=t(13),c=t(23),r=t(5),s=(t(0),t(6)),o=t(237),i=t(1),l=Object(o.a)((function(e){return{root:Object(r.a)({width:"100%",margin:"0 auto",padding:e.spacing(6,2)},e.breakpoints.up("sm"),{padding:e.spacing(8,10)}),fullWidth:{maxWidth:"100%"},disablePadding:{padding:0},narrow:{maxWidth:800}}}));a.a=function(e){var a=e.children,t=e.fullWidth,r=e.narrow,o=e.disablePadding,d=e.alternate,u=e.className,b=Object(c.a)(e,["children","fullWidth","narrow","disablePadding","alternate","className"]),p=l();return Object(i.jsx)("section",Object(n.a)(Object(n.a)({className:Object(s.a)("section",p.root,t?p.fullWidth:{},r?p.narrow:{},o?p.disablePadding:{},d?p.alternate:{},u)},b),{},{children:a}))}},450:function(e,a,t){"use strict";var n=t(0),c=n.createContext();a.a=c},463:function(e,a,t){"use strict";var n=t(2),c=t(77),r=t(12),s=t(0),o=(t(8),t(6)),i=t(155),l=t(476),d=t(16),u=t(416),b=s.forwardRef((function(e,a){var t=e.autoFocus,d=e.checked,b=e.checkedIcon,p=e.classes,j=e.className,h=e.defaultChecked,m=e.disabled,g=e.icon,f=e.id,x=e.inputProps,O=e.inputRef,v=e.name,y=e.onBlur,k=e.onChange,C=e.onFocus,w=e.readOnly,N=e.required,S=e.tabIndex,R=e.type,L=e.value,I=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),E=Object(i.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),z=Object(c.a)(E,2),P=z[0],B=z[1],W=Object(l.a)(),M=m;W&&"undefined"===typeof M&&(M=W.disabled);var D="checkbox"===R||"radio"===R;return s.createElement(u.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,j,P&&p.checked,M&&p.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){y&&y(e),W&&W.onBlur&&W.onBlur(e)},ref:a},I),s.createElement("input",Object(n.a)({autoFocus:t,checked:d,defaultChecked:h,className:p.input,disabled:M,id:D&&f,name:v,onChange:function(e){var a=e.target.checked;B(a),k&&k(e,a)},readOnly:w,ref:O,required:N,tabIndex:S,type:R,value:L},x)),P?b:g)}));a.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b)},476:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),c=t(87);function r(){return n.useContext(c.a)}},517:function(e,a,t){"use strict";var n=t(17),c=t(3),r=t.n(c),s=t(34),o=t(5),i=t(0),l=t(237),d=t(355),u=t(414),b=t(411),p=t(908),j=t(619),h=t(63),m=t(59),g=t(38),f=t(25),x=t(84),O=t(13),v=t(905),y=t(1),k=Object(l.a)({root:{color:"#13c552","&$checked":{color:"#13c552"}},checked:{}});function C(e){var a=k();return Object(y.jsx)(v.a,Object(O.a)({classes:{root:a.root,checked:a.checked}},e))}var w=t(428),N=Object(l.a)((function(e){var a,t;return{actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(1),border:"none"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{marginBottom:e.spacing(2.5)},labelLine:{marginBottom:e.spacing(1)},labelLine1:{marginTop:e.spacing(1),paddingRight:e.spacing(1),float:"right",color:"#16ACE2"},input:{display:"none"},imagePad:{width:200,height:200,background:"none",margin:"10px",borderRadius:"5px",border:"1px solid rgb(107,118,161)"},dialogContent:(a={},Object(o.a)(a,e.breakpoints.down(360),{maxHeight:"200px",padding:e.spacing(.5)}),Object(o.a)(a,e.breakpoints.down("xs"),{maxHeight:"382px",padding:e.spacing(1,0,1,.5)}),Object(o.a)(a,"display","flex"),Object(o.a)(a,"justifyContent","center"),Object(o.a)(a,"padding",e.spacing(1)),Object(o.a)(a,"maxHeight","460px"),Object(o.a)(a,"width","auto"),Object(o.a)(a,"overflowX","unset"),Object(o.a)(a,"overflowY","scroll"),Object(o.a)(a,"&::-webkit-scrollbar-track",{borderRadius:2,backgroundColor:e.palette.background.default}),Object(o.a)(a,"&::-webkit-scrollbar",{width:5,backgroundColor:e.palette.background.default}),a),container:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{padding:0}),Object(o.a)(t,"display","flex"),Object(o.a)(t,"padding","2px 8px 8px 8px"),Object(o.a)(t,"margin",0),Object(o.a)(t,"flexGrow",1),t),gridCls:{padding:e.spacing(0)},label:{fontSize:"20px"}}}));a.a=function(e){var a=e.onClose,t=e.account,c=e.chainId,o=e.library,l=e.reward,O=N(),v=Object(m.b)(),k=Object(h.b)().enqueueSnackbar,S=Object(x.a)(t,c,o),R=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a();case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),L=Object(i.useState)(l),I=Object(n.a)(L,2),E=I[0],z=I[1],P=Object(i.useState)(!1),B=Object(n.a)(P,2),W=B[0],M=B[1],D=function(){var e=Object(s.a)(r.a.mark((function e(){var a,n,c,s,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=39;break}return a=!1,"sharing"===E&&(a=!0),M(!0),e.prev=4,n=!0,c=null,e.next=9,S.changeRewardMethod(a);case 9:s=e.sent,i=s.hash;case 11:if(!n){e.next=24;break}return e.next=14,o.getTransactionReceipt(i);case 14:if(c=e.sent,console.log("kevin transaction tx",c),!Object(f.b)(c)){e.next=21;break}return e.next=19,Object(f.a)(300);case 19:e.next=22;break;case 21:n=!1;case 22:e.next=11;break;case 24:if(1!==c.status){e.next=29;break}return M(!1),e.abrupt("return");case 29:return M(!1),k("failed:",{variant:"error"}),e.abrupt("return");case 32:e.next=39;break;case 34:e.prev=34,e.t0=e.catch(4),k("error: ".concat(null===e.t0||void 0===e.t0||null===(l=e.t0.data)||void 0===l?void 0:l.message),{variant:"error"}),M(!1),console.log("kevin===>",e.t0);case 39:case"end":return e.stop()}}),e,null,[[4,34]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(m.a,{open:!0,onClose:a,children:Object(y.jsx)("form",{onSubmit:R,children:Object(y.jsxs)("div",{className:v.root,children:[Object(y.jsx)(d.a,{variant:"h6",className:O.titleLine,children:"Set Reward Method"}),Object(y.jsx)(u.a,{dividers:!0,className:O.dialogContent,children:Object(y.jsxs)(b.a,{container:!0,spacing:2,className:O.container,justifyContent:"space-between",children:[Object(y.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",xs:12,md:6,spacing:2,children:Object(y.jsx)(w.a,{src:"assets/images/RepUSD.png",className:O.image,alt:"Web3 Legal Engineering"})}),Object(y.jsx)(b.a,{item:!0,xs:12,md:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(y.jsxs)(p.a,{"aria-label":"gender",value:E,onChange:function(e){z(e.target.value)},children:[Object(y.jsx)(j.a,{classes:{label:O.label},value:"interest",control:Object(y.jsx)(C,{}),label:"Earning interest"}),Object(y.jsx)(j.a,{classes:{label:O.label},value:"sharing",control:Object(y.jsx)(C,{}),label:"Profit sharing"})]})})]})}),Object(y.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(y.jsx)(g.a,{loading:W,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.5rem",marginTop:"1rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer",color:"textSecondary"},onClick:function(){return D()},children:"Choose Reward"})})]})})})}},619:function(e,a,t){"use strict";var n=t(2),c=t(12),r=t(0),s=(t(8),t(6)),o=t(476),i=t(16),l=t(355),d=t(18),u=r.forwardRef((function(e,a){e.checked;var t=e.classes,i=e.className,u=e.control,b=e.disabled,p=(e.inputRef,e.label),j=e.labelPlacement,h=void 0===j?"end":j,m=(e.name,e.onChange,e.value,Object(c.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(o.a)(),f=b;"undefined"===typeof f&&"undefined"!==typeof u.props.disabled&&(f=u.props.disabled),"undefined"===typeof f&&g&&(f=g.disabled);var x={disabled:f};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof u.props[a]&&"undefined"!==typeof e[a]&&(x[a]=e[a])})),r.createElement("label",Object(n.a)({className:Object(s.a)(t.root,i,"end"!==h&&t["labelPlacement".concat(Object(d.a)(h))],f&&t.disabled),ref:a},m),r.cloneElement(u,x),r.createElement(l.a,{component:"span",className:Object(s.a)(t.label,f&&t.disabled)},p))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},905:function(e,a,t){"use strict";var n=t(2),c=t(12),r=t(0),s=(t(8),t(6)),o=t(463),i=t(154),l=Object(i.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(i.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=t(16);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var a=e.checked,t=e.classes,n=e.fontSize;return r.createElement("div",{className:Object(s.a)(t.root,a&&t.checked)},r.createElement(l,{fontSize:n}),r.createElement(d,{fontSize:n,className:t.layer}))})),p=t(36),j=t(18),h=t(70),m=t(450);var g=r.createElement(b,{checked:!0}),f=r.createElement(b,null),x=r.forwardRef((function(e,a){var t=e.checked,i=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,b=e.onChange,p=e.size,x=void 0===p?"medium":p,O=Object(c.a)(e,["checked","classes","color","name","onChange","size"]),v=r.useContext(m.a),y=t,k=Object(h.a)(b,v&&v.onChange),C=u;return v&&("undefined"===typeof y&&(y=v.value===e.value),"undefined"===typeof C&&(C=v.name)),r.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:r.cloneElement(f,{fontSize:"small"===x?"small":"default"}),checkedIcon:r.cloneElement(g,{fontSize:"small"===x?"small":"default"}),classes:{root:Object(s.a)(i.root,i["color".concat(Object(j.a)(d))]),checked:i.checked,disabled:i.disabled},name:C,checked:y,onChange:k,ref:a},O))}));a.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(x)},908:function(e,a,t){"use strict";var n=t(2),c=t(77),r=t(12),s=t(0),o=(t(8),t(6)),i=t(16),l=s.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.row,l=void 0!==i&&i,d=Object(r.a)(e,["classes","className","row"]);return s.createElement("div",Object(n.a)({className:Object(o.a)(t.root,c,l&&t.row),ref:a},d))})),d=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l),u=t(21),b=t(155),p=t(450),j=t(160),h=s.forwardRef((function(e,a){var t=e.actions,o=e.children,i=e.name,l=e.value,h=e.onChange,m=Object(r.a)(e,["actions","children","name","value","onChange"]),g=s.useRef(null),f=Object(b.a)({controlled:l,default:e.defaultValue,name:"RadioGroup"}),x=Object(c.a)(f,2),O=x[0],v=x[1];s.useImperativeHandle(t,(function(){return{focus:function(){var e=g.current.querySelector("input:not(:disabled):checked");e||(e=g.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var y=Object(u.a)(a,g),k=Object(j.a)(i);return s.createElement(p.a.Provider,{value:{name:k,onChange:function(e){v(e.target.value),h&&h(e,e.target.value)},value:O}},s.createElement(d,Object(n.a)({role:"radiogroup",ref:y},m),o))}));a.a=h},914:function(e,a,t){"use strict";t.r(a);var n=t(5),c=t(0),r=t(237),s=t(459),o=t.n(s),i=(t(460),t(242),t(240),t(432)),l=t(3),d=t.n(l),u=t(34),b=t(17),p=t(45),j=t(411),h=t(355),m=t(63),g=t(38),f=t(428),x=t(25),O=t(84),v=t(79),y=t(517),k=t(1),C=Object(r.a)((function(e){var a;return{root:{},chooseProfit:{background:"#0F1014",boxShadow:"0px 0px 5px 0 rgba(243,243,243,.8)",borderRadius:e.spacing(2),width:"100%",padding:e.spacing(6,3),height:"calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(4),"px)")},exchangeLabel:{color:e.palette.warning.dark,fontSize:34,fontWeight:900},desc:{fontSize:16,marginBottom:e.spacing(3),color:"rgb(60,60,60)",fontWeight:900},val:{fontSize:"30px",color:"rgb(40,40,40)",fontFamily:"fontMedium",fontWeight:600,display:"inline-block"},valCurrency:{marginLeft:e.spacing(1),fontSize:"20px",color:"rgb(40,40,40)",fontWeight:600,display:"inline-block"},image:(a={},Object(n.a)(a,e.breakpoints.down("sm"),{maxWidth:200,marginBottom:60}),Object(n.a)(a,"maxWidth",200),a),label:{fontSize:"20px",fontFamily:"fontMedium"},totalreward:{width:"100%",borderRadius:e.spacing(2),backgroundColor:"#fff",boxShadow:"0px 0px 5px 0 rgba(243,243,243,.8)",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},claimamount:{width:"100%",borderRadius:e.spacing(2),backgroundColor:"#fff",boxShadow:"0px 0px 5px 0 rgba(243,243,243,.8)",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},secondRow:{width:"100%",borderRadius:e.spacing(2),backgroundColor:"#fff",boxShadow:"0px 0px 5px 0 rgba(243,243,243,.8)",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},gridClass:{padding:e.spacing(2)},menuFont:{fontWeight:600,fontSize:"16px",color:"rgb(40,40,40)","&:hover":{color:"rgb(0,0,200)"},marginTop:e.spacing(2),cursor:"pointer"}}})),w=function(){var e=C(),a=Object(p.a)(),t=Object(c.useContext)(v.a),n=t.account,r=t.chainId,s=t.library,o=Object(m.b)().enqueueSnackbar,i=Object(O.a)(n,r,s),l=Object(c.useState)(!1),w=Object(b.a)(l,2),N=w[0],S=w[1],R=Object(c.useState)(""),L=Object(b.a)(R,2),I=L[0],E=L[1],z=Object(c.useState)("18%"),P=Object(b.a)(z,2),B=P[0],W=P[1],M=Object(c.useState)(""),D=Object(b.a)(M,2),F=D[0],T=D[1],H=Object(c.useState)(""),A=Object(b.a)(H,2),U=A[0],$=A[1],q=Object(c.useState)(""),G=Object(b.a)(q,2),Y=G[0],J=G[1],V=Object(c.useState)(""),X=Object(b.a)(V,2),Z=X[0],K=X[1],Q=Object(c.useState)("interest"),_=Object(b.a)(Q,2),ee=_[0],ae=_[1],te=Object(c.useState)(!1),ne=Object(b.a)(te,2),ce=ne[0],re=ne[1],se=function(){var e=Object(u.a)(d.a.mark((function e(){var a,t,c,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=41;break}return S(!0),e.next=4,i.getUserTotalReward(n.toLowerCase());case 4:return a=e.sent,e.prev=5,t=!0,c=null,e.next=10,i.claimReward("".concat(a));case 10:r=e.sent,l=r.hash;case 12:if(!t){e.next=25;break}return e.next=15,s.getTransactionReceipt(l);case 15:if(c=e.sent,console.log("kevin transaction tx",c),!Object(x.b)(c)){e.next=22;break}return e.next=20,Object(x.a)(300);case 20:e.next=23;break;case 22:t=!1;case 23:e.next=12;break;case 25:if(1!==c.status){e.next=31;break}return S(!1),o("withdraw success:",{variant:"success"}),e.abrupt("return");case 31:return S(!1),o("failed:",{variant:"error"}),e.abrupt("return");case 34:e.next=41;break;case 36:e.prev=36,e.t0=e.catch(5),o("unknow error",{variant:"error"}),S(!1),console.log("kevin===>",e.t0);case 41:case"end":return e.stop()}}),e,null,[[5,36]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(a){var t,n,c,r,s,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getUserTotalReward(a.toLowerCase());case 3:return e.t0=e.sent,t=e.t0/1e18,e.next=7,i.userInfo(a.toLowerCase());case 7:return n=e.sent,c=n.reputation/1e18,r=Math.round(1e4*n.lastLoanDate)/10,e.next=12,i.getUserTotalLifetimeEarnings(a.toLowerCase());case 12:return e.t1=e.sent,s=e.t1/1e18,e.next=16,i.totalBorrowedAmount();case 16:e.t2=e.sent,l=e.t2/1e18,E(Math.round(100*t)/100),T(Math.round(100*c)/100),$(Math.round(100*l)/100),J(Math.round(100*s)/100),u=(u=new Date(r)).getMonth()+1+"/"+u.getDate()+"/"+u.getFullYear(),0!==r&&K(u),n.rewardMethod?(ae("sharing"),W("16.5%")):(W("18%"),ae("interest")),e.next=31;break;case 28:e.prev=28,e.t3=e.catch(0),o("An unknown error occurred.",{variant:"error"});case 31:case"end":return e.stop()}}),e,null,[[0,28]])})))).apply(this,arguments)}n&&function(a){e.apply(this,arguments)}(n.toLowerCase())}),[n]),Object(k.jsxs)(j.a,{container:!0,justifyContent:"space-between",spacing:4,children:[Object(k.jsx)(j.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"center",xs:12,md:3,"data-aos":"fade-right",className:e.gridClass,children:Object(k.jsxs)("div",{className:e.chooseProfit,children:[Object(k.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:12,children:Object(k.jsx)(h.a,{className:e.exchangeLabel,children:"My Earnings"})}),Object(k.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",xs:12,style:{height:"98%"},children:Object(k.jsx)(f.a,{src:"assets/images/handRep.png",alt:"Web3 Legal Engineering",className:e.image,"data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"})})]})}),Object(k.jsxs)(j.a,{item:!0,container:!0,xs:12,md:9,"data-aos":"fade-up",style:{padding:0},children:[Object(k.jsx)(j.a,{item:!0,container:!0,xs:12,md:6,"data-aos":"fade-down",className:e.gridClass,children:Object(k.jsx)("div",{className:e.totalreward,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:8,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"Available Earned Interest"}),Object(k.jsx)(h.a,{className:e.val,children:I}),Object(k.jsx)(h.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsx)(j.a,{container:!0,justifyContent:"center",item:!0,xs:12,md:4,style:{paddingLeft:a.spacing(4)},children:Object(k.jsx)(g.a,{loading:N,onClick:function(){return se()},size:"large",style:{height:"2.5rem",marginTop:"1rem",borderRadius:"5px",borderColor:"red",cursor:"pointer",color:"textSecondary"},children:"Claim"})})]})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-left",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"Total Value Locked"}),Object(k.jsx)(h.a,{className:e.val,children:U}),Object(k.jsx)(h.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"Total Life Time Earned"}),Object(k.jsx)(h.a,{className:e.val,children:Y}),Object(k.jsx)(h.a,{className:e.valCurrency,children:"RepUSD"})]})]})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-up",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsx)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:Object(k.jsxs)(j.a,{item:!0,xs:12,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"APY"}),Object(k.jsx)(h.a,{className:e.val,children:B}),Object(k.jsx)(h.a,{onClick:function(){re(!0)},className:e.menuFont,children:"If you like to change your reward settings, click here"})]})})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-up",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"Current Loaned Amount"}),Object(k.jsx)(h.a,{className:e.val,children:F}),Object(k.jsx)(h.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:a.spacing(4)},children:[Object(k.jsx)(h.a,{className:e.desc,children:"Last Loaned Time"}),Object(k.jsx)(h.a,{className:e.val,children:Z})]})]})})})]}),ce&&Object(k.jsx)(y.a,{onClose:function(){re(!1)},account:n,chainId:r,library:s,reward:ee})]})},N=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#000"},section:Object(n.a)({padding:e.spacing(3,1)},e.breakpoints.up("sm"),{padding:e.spacing(4,5)})}}));a.default=function(e){var a=N(),t=e.context;return o.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"}),Object(k.jsx)("div",{className:a.root,children:Object(k.jsx)(i.a,{className:a.section,children:Object(k.jsx)("div",{className:a.root,children:Object(k.jsx)(w,{context:t})})})})}}}]);
//# sourceMappingURL=5.dbfa304b.chunk.js.map