(this["webpackJsonpclimb-presale-fe"]=this["webpackJsonpclimb-presale-fe"]||[]).push([[5],{427:function(e,t,a){"use strict";var n=a(13),r=a(24),c=(a(0),a(6)),o=a(237),s=a(460),i=(a(240),a(1)),l=Object(o.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),d=function(e){var t=e.src,a=e.srcSet,o=e.alt,d=e.lazy,u=e.lazyProps,b=e.className,h=Object(r.a)(e,["src","srcSet","alt","lazy","lazyProps","className"]),p=l();return d?Object(i.jsx)(s.LazyLoadImage,Object(n.a)(Object(n.a)({className:Object(c.a)("image",p.root,p.dBlock,b),alt:o,src:t,srcSet:a,effect:"opacity"},u),h)):Object(i.jsx)("img",Object(n.a)({className:Object(c.a)("image",p.root,b),alt:o,src:t,srcSet:a},h))};d.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}},t.a=d},431:function(e,t,a){"use strict";var n=a(13),r=a(24),c=a(5),o=(a(0),a(6)),s=a(237),i=a(1),l=Object(s.a)((function(e){return{root:Object(c.a)({width:"100%",margin:"0 auto",padding:e.spacing(6,2)},e.breakpoints.up("sm"),{padding:e.spacing(8,10)}),fullWidth:{maxWidth:"100%"},disablePadding:{padding:0},narrow:{maxWidth:800}}}));t.a=function(e){var t=e.children,a=e.fullWidth,c=e.narrow,s=e.disablePadding,d=e.alternate,u=e.className,b=Object(r.a)(e,["children","fullWidth","narrow","disablePadding","alternate","className"]),h=l();return Object(i.jsx)("section",Object(n.a)(Object(n.a)({className:Object(o.a)("section",h.root,a?h.fullWidth:{},c?h.narrow:{},s?h.disablePadding:{},d?h.alternate:{},u)},b),{},{children:t}))}},449:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},462:function(e,t,a){"use strict";var n=a(2),r=a(78),c=a(12),o=a(0),s=(a(8),a(6)),i=a(155),l=a(475),d=a(16),u=a(414),b=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,b=e.checkedIcon,h=e.classes,p=e.className,j=e.defaultChecked,g=e.disabled,f=e.icon,m=e.id,x=e.inputProps,O=e.inputRef,v=e.name,y=e.onBlur,k=e.onChange,w=e.onFocus,C=e.readOnly,N=e.required,S=e.tabIndex,R=e.type,E=e.value,I=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=Object(i.a)({controlled:d,default:Boolean(j),name:"SwitchBase",state:"checked"}),L=Object(r.a)(F,2),P=L[0],z=L[1],B=Object(l.a)(),M=g;B&&"undefined"===typeof M&&(M=B.disabled);var D="checkbox"===R||"radio"===R;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(s.a)(h.root,p,P&&h.checked,M&&h.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),B&&B.onFocus&&B.onFocus(e)},onBlur:function(e){y&&y(e),B&&B.onBlur&&B.onBlur(e)},ref:t},I),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:j,className:h.input,disabled:M,id:D&&m,name:v,onChange:function(e){var t=e.target.checked;z(t),k&&k(e,t)},readOnly:C,ref:O,required:N,tabIndex:S,type:R,value:E},x)),P?b:f)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b)},475:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(87);function c(){return n.useContext(r.a)}},516:function(e,t,a){"use strict";var n=a(17),r=a(3),c=a.n(r),o=a(33),s=a(5),i=a(0),l=a(237),d=a(355),u=a(412),b=a(409),h=a(907),p=a(618),j=a(63),g=a(59),f=a(38),m=a(20),x=a(77),O=a(13),v=a(904),y=a(1),k=Object(l.a)({root:{color:"#13c552","&$checked":{color:"#13c552"}},checked:{}});function w(e){var t=k();return Object(y.jsx)(v.a,Object(O.a)({classes:{root:t.root,checked:t.checked}},e))}var C=a(427),N=Object(l.a)((function(e){var t,a;return Object(s.a)({actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(1),border:"none"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{color:"#fff",marginBottom:e.spacing(2.5)},label:{color:"#fff"},labelLine:{marginBottom:e.spacing(1)},labelLine1:{marginTop:e.spacing(1),paddingRight:e.spacing(1),float:"right",color:"#16ACE2"},input:{display:"none"},imagePad:{width:200,height:200,background:"none",margin:"10px",borderRadius:"5px",border:"1px solid rgb(107,118,161)"},image:{width:150,height:150,background:"none",margin:"10px",borderRadius:"5px"},dialogContent:(t={},Object(s.a)(t,e.breakpoints.down(360),{maxHeight:"200px",padding:e.spacing(.5)}),Object(s.a)(t,e.breakpoints.down("xs"),{maxHeight:"382px",padding:e.spacing(1,0,1,.5)}),Object(s.a)(t,"display","flex"),Object(s.a)(t,"justifyContent","center"),Object(s.a)(t,"padding",e.spacing(1)),Object(s.a)(t,"maxHeight","460px"),Object(s.a)(t,"width","auto"),Object(s.a)(t,"overflowX","unset"),Object(s.a)(t,"overflowY","scroll"),Object(s.a)(t,"&::-webkit-scrollbar-track",{borderRadius:2,backgroundColor:e.palette.background.default}),Object(s.a)(t,"&::-webkit-scrollbar",{width:5,backgroundColor:e.palette.background.default}),t),container:(a={},Object(s.a)(a,e.breakpoints.down("sm"),{padding:0}),Object(s.a)(a,"display","flex"),Object(s.a)(a,"padding","2px 8px 8px 8px"),Object(s.a)(a,"margin",0),Object(s.a)(a,"flexGrow",1),a),gridCls:{padding:e.spacing(0)}},"label",{fontSize:"20px"})}));t.a=function(e){var t=e.onClose,a=e.account,r=e.chainId,s=e.library,l=e.reward,O=N(),v=Object(g.b)(),k=Object(j.b)().enqueueSnackbar,S=Object(x.a)(a,r,s),R=function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(i.useState)(l),I=Object(n.a)(E,2),F=I[0],L=I[1],P=Object(i.useState)(!1),z=Object(n.a)(P,2),B=z[0],M=z[1],D=function(){var e=Object(o.a)(c.a.mark((function e(){var n,r,o,i,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=42;break}return n=!1,"sharing"===F&&(n=!0),M(!0),e.prev=4,r=!0,o=null,e.next=9,S.changeRewardMethod(n);case 9:i=e.sent,l=i.hash;case 11:if(!r){e.next=24;break}return e.next=14,s.getTransactionReceipt(l);case 14:if(o=e.sent,console.log("kevin transaction tx",o),!Object(m.b)(o)){e.next=21;break}return e.next=19,Object(m.a)(300);case 19:e.next=22;break;case 21:r=!1;case 22:e.next=11;break;case 24:if(1!==o.status){e.next=31;break}return M(!1),k("Reward Method Change Successful.",{variant:"success"}),t(),e.abrupt("return");case 31:return M(!1),k("failed:",{variant:"error"}),t(),e.abrupt("return");case 35:e.next=42;break;case 37:e.prev=37,e.t0=e.catch(4),k("error: ".concat(null===e.t0||void 0===e.t0||null===(d=e.t0.data)||void 0===d?void 0:d.message),{variant:"error"}),M(!1),console.log("kevin===>",e.t0);case 42:case"end":return e.stop()}}),e,null,[[4,37]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(g.a,{open:!0,onClose:t,children:Object(y.jsx)("form",{onSubmit:R,children:Object(y.jsxs)("div",{className:v.root,children:[Object(y.jsx)(d.a,{variant:"h6",className:O.titleLine,children:"Set Reward Method"}),Object(y.jsx)(u.a,{dividers:!0,className:O.dialogContent,children:Object(y.jsxs)(b.a,{container:!0,spacing:2,className:O.container,justifyContent:"space-between",children:[Object(y.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",xs:12,md:6,spacing:2,children:Object(y.jsx)(C.a,{src:"assets/images/RepUSD.png",className:O.image,alt:"Web3 Legal Engineering"})}),Object(y.jsx)(b.a,{item:!0,xs:12,md:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(y.jsxs)(h.a,{"aria-label":"gender",value:F,onChange:function(e){L(e.target.value)},children:[Object(y.jsx)(p.a,{style:{color:"#fff"},value:"interest",control:Object(y.jsx)(w,{}),label:"Earning interest"}),Object(y.jsx)(p.a,{style:{color:"white"},value:"sharing",control:Object(y.jsx)(w,{}),label:"Profit sharing"})]})}),Object(y.jsxs)(b.a,{item:!0,xs:12,md:12,container:!0,justifyContent:"center",alignItems:"center",children:["sharing"!==l&&Object(y.jsxs)(d.a,{style:{color:"#fff"},children:["Your method is Earn Interest with 36% APY.",Object(y.jsx)("br",{}),"If you like to change your reward method to Profit Sharing with earnings of 30RepUSD per 100RepUSD per year, select the Profit Sharing option below and click change. ",Object(y.jsx)("br",{}),"If you want to continue with Earn Interest reward method, click close."]}),"sharing"===l&&Object(y.jsxs)(d.a,{style:{color:"#fff"},children:["Your reward method is Profit Sharing with 30% APY. If you like to change your reward method to Earning Interest with 36% APY, select the Earning Interest option above and click change below. ",Object(y.jsx)("br",{}),"If you want to continue with Profit Sharing reward method, click close."]})]})]})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"},children:[Object(y.jsx)(f.a,{loading:B,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.5rem",marginTop:"1rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer",color:"#fff"},onClick:function(){return D()},children:"Change"}),Object(y.jsx)(f.a,{variant:"outlined",color:"primary",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.3rem",marginTop:"1.1rem",borderRadius:"1rem",borderColor:"white",cursor:"pointer",color:"#fff"},onClick:function(){return t()},children:"Close"})]})]})})})}},618:function(e,t,a){"use strict";var n=a(2),r=a(12),c=a(0),o=(a(8),a(6)),s=a(475),i=a(16),l=a(355),d=a(18),u=c.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,u=e.control,b=e.disabled,h=(e.inputRef,e.label),p=e.labelPlacement,j=void 0===p?"end":p,g=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(s.a)(),m=b;"undefined"===typeof m&&"undefined"!==typeof u.props.disabled&&(m=u.props.disabled),"undefined"===typeof m&&f&&(m=f.disabled);var x={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(x[t]=e[t])})),c.createElement("label",Object(n.a)({className:Object(o.a)(a.root,i,"end"!==j&&a["labelPlacement".concat(Object(d.a)(j))],m&&a.disabled),ref:t},g),c.cloneElement(u,x),c.createElement(l.a,{component:"span",className:Object(o.a)(a.label,m&&a.disabled)},h))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},904:function(e,t,a){"use strict";var n=a(2),r=a(12),c=a(0),o=(a(8),a(6)),s=a(462),i=a(154),l=Object(i.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(i.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(16);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(o.a)(a.root,t&&a.checked)},c.createElement(l,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),h=a(36),p=a(18),j=a(70),g=a(449);var f=c.createElement(b,{checked:!0}),m=c.createElement(b,null),x=c.forwardRef((function(e,t){var a=e.checked,i=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,b=e.onChange,h=e.size,x=void 0===h?"medium":h,O=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),v=c.useContext(g.a),y=a,k=Object(j.a)(b,v&&v.onChange),w=u;return v&&("undefined"===typeof y&&(y=v.value===e.value),"undefined"===typeof w&&(w=v.name)),c.createElement(s.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(m,{fontSize:"small"===x?"small":"default"}),checkedIcon:c.cloneElement(f,{fontSize:"small"===x?"small":"default"}),classes:{root:Object(o.a)(i.root,i["color".concat(Object(p.a)(d))]),checked:i.checked,disabled:i.disabled},name:w,checked:y,onChange:k,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(x)},907:function(e,t,a){"use strict";var n=a(2),r=a(78),c=a(12),o=a(0),s=(a(8),a(6)),i=a(16),l=o.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.row,l=void 0!==i&&i,d=Object(c.a)(e,["classes","className","row"]);return o.createElement("div",Object(n.a)({className:Object(s.a)(a.root,r,l&&a.row),ref:t},d))})),d=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l),u=a(22),b=a(155),h=a(449),p=a(160),j=o.forwardRef((function(e,t){var a=e.actions,s=e.children,i=e.name,l=e.value,j=e.onChange,g=Object(c.a)(e,["actions","children","name","value","onChange"]),f=o.useRef(null),m=Object(b.a)({controlled:l,default:e.defaultValue,name:"RadioGroup"}),x=Object(r.a)(m,2),O=x[0],v=x[1];o.useImperativeHandle(a,(function(){return{focus:function(){var e=f.current.querySelector("input:not(:disabled):checked");e||(e=f.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var y=Object(u.a)(t,f),k=Object(p.a)(i);return o.createElement(h.a.Provider,{value:{name:k,onChange:function(e){v(e.target.value),j&&j(e,e.target.value)},value:O}},o.createElement(d,Object(n.a)({role:"radiogroup",ref:y},g),s))}));t.a=j},914:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a(237),o=a(458),s=a.n(o),i=(a(459),a(242),a(240),a(431)),l=a(3),d=a.n(l),u=a(33),b=a(17),h=a(45),p=a(404),j=a(409),g=a(355),f=a(63),m=a(38),x=(a(427),a(20)),O=a(77),v=a(80),y=a(516),k=a(1),w=Object(c.a)((function(e){var t;return{root:{},chooseProfit:{borderRadius:e.spacing(2),background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 4px 1px #0F123F08",border:"1px solid #E0E0E4EB",opacity:"1",width:"100%",padding:e.spacing(6,3),height:"calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(4),"px)")},exchangeLabel:{color:"rgb(89,87,213)",fontSize:25,fontWeight:700},desc:{fontSize:16,marginBottom:e.spacing(3),color:"rgb(60,60,60)",fontWeight:500},earningsdesc:{fontSize:16,marginTop:e.spacing(3),color:"rgb(33 58 151)",fontWeight:500},val:{fontSize:"30px",color:"rgb(40,40,40)",fontFamily:"fontMedium",fontWeight:600,display:"inline-block"},valCurrency:{marginLeft:e.spacing(1),fontSize:"20px",color:"rgb(40,40,40)",fontWeight:600,display:"inline-block"},image:(t={},Object(n.a)(t,e.breakpoints.down("sm"),{maxWidth:200,marginBottom:60}),Object(n.a)(t,"maxWidth",200),t),label:{fontSize:"20px",fontFamily:"fontMedium"},totalreward:{width:"100%",borderRadius:e.spacing(2),background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 4px 1px #0F123F08",border:"1px solid #E0E0E4EB",opacity:"1",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},claimamount:{width:"100%",borderRadius:e.spacing(2),backgroundColor:"#fff",boxShadow:"0px 0px 5px 0 rgba(243,243,243,.8)",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},secondRow:{width:"100%",borderRadius:e.spacing(2),background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 4px 1px #0F123F08",border:"1px solid #E0E0E4EB",opacity:"1",height:"calc(50vh - ".concat((e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.spacing(8))/2,"px)")},gridClass:{padding:e.spacing(2)},menuFont:{fontWeight:600,fontSize:"16px",color:"rgb(40,40,40)","&:hover":{color:"rgb(0,0,200)"},marginTop:e.spacing(2),cursor:"pointer"},imageIcon:{height:"100%"},iconRoot:{textAlign:"center",float:"left",marginRight:"5px"}}})),C=function(e){var t=e.svg,a=w();return Object(k.jsx)(p.a,{classes:{root:a.iconRoot},children:Object(k.jsx)("img",{className:a.imageIcon,src:"assets/icons/"+t+".svg"})})},N=function(){var e=w(),t=Object(h.a)(),a=Object(r.useContext)(v.a),n=a.account,c=a.chainId,o=a.library,s=Object(f.b)().enqueueSnackbar,i=Object(O.a)(n,c,o),l=Object(r.useState)(!1),p=Object(b.a)(l,2),N=p[0],S=p[1],R=Object(r.useState)(""),E=Object(b.a)(R,2),I=E[0],F=E[1],L=Object(r.useState)("36%"),P=Object(b.a)(L,2),z=P[0],B=P[1],M=Object(r.useState)(""),D=Object(b.a)(M,2),T=D[0],A=D[1],W=Object(r.useState)(""),H=Object(b.a)(W,2),U=H[0],Y=H[1],$=Object(r.useState)(""),q=Object(b.a)($,2),G=q[0],J=q[1],V=Object(r.useState)(""),X=Object(b.a)(V,2),Z=X[0],K=X[1],Q=Object(r.useState)("interest"),_=Object(b.a)(Q,2),ee=_[0],te=_[1],ae=Object(r.useState)(!1),ne=Object(b.a)(ae,2),re=ne[0],ce=ne[1],oe=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=49;break}return S(!0),e.next=4,i.getUserTotalReward(n.toLowerCase());case 4:if(!((t=e.sent)<=0)){e.next=9;break}return S(!1),s("No available reward!",{variant:"warning"}),e.abrupt("return");case 9:return e.prev=9,a=!0,r=null,e.next=14,i.claimReward("".concat(t));case 14:c=e.sent,l=c.hash;case 16:if(!a){e.next=29;break}return e.next=19,o.getTransactionReceipt(l);case 19:if(r=e.sent,console.log("kevin transaction tx",r),!Object(x.b)(r)){e.next=26;break}return e.next=24,Object(x.a)(300);case 24:e.next=27;break;case 26:a=!1;case 27:e.next=16;break;case 29:if(1!==r.status){e.next=39;break}return S(!1),e.next=33,i.getUserTotalReward(n.toLowerCase());case 33:return t=e.sent,F(Math.round(1e4*t)/1e4),s("withdraw success:",{variant:"success"}),e.abrupt("return");case 39:return S(!1),s("failed:",{variant:"error"}),e.abrupt("return");case 42:e.next=49;break;case 44:e.prev=44,e.t0=e.catch(9),s("unknow error",{variant:"error"}),S(!1),console.log("kevin===>",e.t0);case 49:case"end":return e.stop()}}),e,null,[[9,44]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(t){var a,n,r,c,o,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getUserTotalReward(t.toLowerCase());case 3:return e.t0=e.sent,a=e.t0/1e18,e.next=7,i.userInfo(t.toLowerCase());case 7:return n=e.sent,r=n.reputation/1e18,c=Math.round(1e4*n.lastLoanDate)/10,e.next=12,i.getUserTotalLifetimeEarnings(t.toLowerCase());case 12:return e.t1=e.sent,o=e.t1/1e18,e.next=16,i.totalBorrowedAmount();case 16:e.t2=e.sent,l=e.t2/1e18,F(Math.round(1e4*a)/1e4),A(Math.round(100*r)/100),Y(Math.round(100*l)/100),J(Math.round(100*o)/100),u=(u=new Date(c)).getMonth()+1+"/"+u.getDate()+"/"+u.getFullYear(),0!==c&&K(u),n.rewardMethod?(te("sharing"),B("30%")):(B("36%"),te("interest")),e.next=31;break;case 28:e.prev=28,e.t3=e.catch(0),s("An unknown error occurred.",{variant:"error"});case 31:case"end":return e.stop()}}),e,null,[[0,28]])})))).apply(this,arguments)}n&&function(t){e.apply(this,arguments)}(n.toLowerCase())}),[n]),Object(k.jsxs)(j.a,{container:!0,justifyContent:"space-between",spacing:4,children:[Object(k.jsx)(j.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"center",xs:12,md:3,"data-aos":"fade-right",className:e.gridClass,children:Object(k.jsxs)("div",{className:e.chooseProfit,children:[Object(k.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:12,children:Object(k.jsx)("div",{style:{margin:"auto"},children:Object(k.jsx)(g.a,{className:e.exchangeLabel,children:"My Earnings"})})}),Object(k.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",xs:12,children:Object(k.jsx)("div",{style:{margin:"auto"},children:Object(k.jsxs)(g.a,{className:e.earningsdesc,children:["Your earnings in RepUSD will be added to your account daily and will appear in Available Earned Interest.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"You can claim your Earned Interest anytime."]})})})]})}),Object(k.jsxs)(j.a,{item:!0,container:!0,xs:12,md:9,"data-aos":"fade-up",style:{padding:0},children:[Object(k.jsx)(j.a,{item:!0,container:!0,xs:12,md:6,"data-aos":"fade-down",className:e.gridClass,children:Object(k.jsx)("div",{className:e.totalreward,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:8,style:{paddingLeft:t.spacing(4)},children:[Object(k.jsx)(C,{svg:"prize"}),Object(k.jsx)(g.a,{className:e.desc,children:"Available Earned Interest"}),Object(k.jsx)(g.a,{className:e.val,children:I}),Object(k.jsx)(g.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsx)(j.a,{container:!0,justifyContent:"center",item:!0,xs:12,md:4,style:{paddingLeft:t.spacing(4)},children:Object(k.jsx)(m.a,{loading:N,onClick:function(){return oe()},size:"large",style:{height:"2.5rem",marginTop:"1rem",borderRadius:"5px",borderColor:"red",cursor:"pointer",background:"rgb(89,87,213)",color:"#fff"},children:"Claim"})})]})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-left",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:t.spacing(2)},children:[Object(k.jsx)(C,{svg:"museum"}),Object(k.jsx)(g.a,{className:e.desc,children:"Total Value Locked"}),Object(k.jsx)(g.a,{className:e.val,children:U}),Object(k.jsx)(g.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:t.spacing(2)},children:[Object(k.jsx)(C,{svg:"farm"}),Object(k.jsx)(g.a,{className:e.desc,children:"Total Life Time Earned"}),Object(k.jsx)(g.a,{className:e.val,children:G}),Object(k.jsx)(g.a,{className:e.valCurrency,children:"RepUSD"})]})]})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-up",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsx)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:Object(k.jsxs)(j.a,{item:!0,xs:12,style:{paddingLeft:t.spacing(4)},children:[Object(k.jsx)(C,{svg:"pie-chart"}),Object(k.jsx)(g.a,{className:e.desc,children:"APY"}),Object(k.jsx)(g.a,{className:e.val,children:z}),Object(k.jsx)(g.a,{onClick:function(){ce(!0)},className:e.menuFont,children:"If you like to change your reward settings, click here"})]})})})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,"data-aos":"fade-up",className:e.gridClass,children:Object(k.jsx)("div",{className:e.secondRow,children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",style:{height:"100%"},children:[Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:t.spacing(2)},children:[Object(k.jsx)(C,{svg:"staked"}),Object(k.jsx)(g.a,{className:e.desc,children:"Current Loaned Amount"}),Object(k.jsx)(g.a,{className:e.val,children:T}),Object(k.jsx)(g.a,{className:e.valCurrency,children:"RepUSD"})]}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,style:{paddingLeft:t.spacing(2)},children:[Object(k.jsx)(C,{svg:"clock"}),Object(k.jsx)(g.a,{className:e.desc,children:"Last Loaned Time"}),Object(k.jsx)(g.a,{className:e.val,children:Z})]})]})})})]}),re&&Object(k.jsx)(y.a,{onClose:function(){function e(){return(e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.userInfo(t.toLowerCase());case 3:e.sent.rewardMethod?(te("sharing"),B("30%")):(B("36%"),te("interest")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s("An unknown error occurred.",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}ce(!1),n&&function(t){e.apply(this,arguments)}(n)},account:n,chainId:c,library:o,reward:ee})]})},S=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(237, 240, 244)"},section:Object(n.a)({padding:e.spacing(3,1)},e.breakpoints.up("sm"),{padding:e.spacing(4,5)})}}));t.default=function(e){var t=S(),a=e.context;return s.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"}),Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(i.a,{className:t.section,children:Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(N,{context:a})})})})}}}]);
//# sourceMappingURL=5.5d0027cc.chunk.js.map