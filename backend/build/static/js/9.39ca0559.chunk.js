(this["webpackJsonpclimb-presale-fe"]=this["webpackJsonpclimb-presale-fe"]||[]).push([[9],{430:function(e,t,a){"use strict";var i=a(13),s=a(24),n=(a(0),a(8)),r=a(246),c=a(455),l=(a(250),a(1)),o=["src","srcSet","alt","lazy","lazyProps","className"],d=Object(r.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),b=function(e){var t=e.src,a=e.srcSet,r=e.alt,b=e.lazy,j=e.lazyProps,p=e.className,u=Object(s.a)(e,o),m=d();return b?Object(l.jsx)(c.LazyLoadImage,Object(i.a)(Object(i.a)({className:Object(n.a)("image",m.root,m.dBlock,p),alt:r,src:t,srcSet:a,effect:"opacity"},j),u)):Object(l.jsx)("img",Object(i.a)({className:Object(n.a)("image",m.root,p),alt:r,src:t,srcSet:a},u))};b.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}},t.a=b},431:function(e,t,a){"use strict";var i=a(13),s=a(24),n=a(6),r=(a(0),a(8)),c=a(246),l=a(1),o=["children","fullWidth","narrow","disablePadding","alternate","className"],d=Object(c.a)((function(e){return{root:Object(n.a)({width:"100%",margin:"0 auto",padding:e.spacing(6,2)},e.breakpoints.up("sm"),{padding:e.spacing(8,10)}),fullWidth:{maxWidth:"100%"},disablePadding:{padding:0},narrow:{maxWidth:800}}}));t.a=function(e){var t=e.children,a=e.fullWidth,n=e.narrow,c=e.disablePadding,b=e.alternate,j=e.className,p=Object(s.a)(e,o),u=d();return Object(l.jsx)("section",Object(i.a)(Object(i.a)({className:Object(r.a)("section",u.root,a?u.fullWidth:{},n?u.narrow:{},c?u.disablePadding:{},b?u.alternate:{},j)},p),{},{children:t}))}},456:function(e,t,a){"use strict";var i=a(13),s=a(24),n=a(6),r=(a(0),a(8)),c=a(246),l=a(414),o=a(361),d=a(1),b=["title","titleVariant","subtitleVariant","subtitle","subtitleColor","label","overline","fadeUp","align","ctaAlign","ctaGroup","disableGutter","titleClasses","className","labelProps","titleProps","subtitleProps"],j=Object(c.a)((function(e){return{root:Object(n.a)({marginBottom:e.spacing(3)},e.breakpoints.up("md"),{marginBottom:e.spacing(4)}),disableGutter:{marginBottom:0},title:{fontWeight:"bold"},cta:{marginLeft:e.spacing(1),"&:first-child":{marginLeft:e.spacing(0)}}}})),p=function(e){var t=e.title,a=e.titleVariant,n=e.subtitleVariant,c=e.subtitle,p=e.subtitleColor,u=e.label,m=e.overline,h=e.fadeUp,g=e.align,O=e.ctaAlign,f=e.ctaGroup,x=e.disableGutter,y=e.titleClasses,v=e.className,w=e.labelProps,N=e.titleProps,P=e.subtitleProps,_=Object(s.a)(e,b),S=j(),W="center",k="center";return"left"===g?W="flex-start":"right"===g&&(W="flex-end"),"left"===O?k="flex-start":"right"===O&&(k="flex-end"),Object(d.jsxs)(l.a,Object(i.a)(Object(i.a)({container:!0,spacing:2,"data-aos":h?"fade-up":"",className:Object(r.a)("section-header",S.root,x?S.disableGutter:{},v)},_),{},{children:[m&&Object(d.jsx)(l.a,{item:!0,container:!0,justifyContent:W,xs:12,className:"section-header__overline-wrapper",children:m}),u&&Object(d.jsx)(l.a,{item:!0,xs:12,className:"section-header__label-wrapper",children:Object(d.jsx)(o.a,Object(i.a)(Object(i.a)({variant:"overline",color:"textPrimary",component:"p",align:g||"center"},w),{},{children:u}))}),Object(d.jsx)(l.a,{item:!0,xs:12,className:"section-header__title-wrapper",children:Object(d.jsx)(o.a,Object(i.a)(Object(i.a)({variant:a,align:g||"center",className:Object(r.a)("section-header__title",S.title,y||{}),color:"textPrimary"},N),{},{children:t}))}),c&&Object(d.jsx)(l.a,{item:!0,xs:12,className:"section-header__subtitle-wrapper",children:Object(d.jsx)(o.a,Object(i.a)(Object(i.a)({variant:n||"h6",align:g||"center",color:p||"textSecondary",className:"section-header__subtitle"},P),{},{children:c}))}),f&&f.length&&Object(d.jsx)(l.a,{item:!0,xs:12,className:"section-header__cta-wrapper",children:Object(d.jsx)(l.a,{container:!0,justifyContent:k,alignItems:"center",wrap:"nowrap",className:"section-header__cta-container",children:f.map((function(e,t){return Object(d.jsx)("div",{className:Object(r.a)("section-header__cta-item-wrapper",S.cta),children:e},t)}))})})]}))};p.defaultProps={titleVariant:"h4",labelProps:{},titleProps:{},subtitleProps:{}},t.a=p},790:function(e,t,a){"use strict";a.r(t);a(0);var i=a(246),s=a(453),n=a.n(s),r=(a(454),a(252),a(250),a(431)),c=a(13),l=a(24),o=a(6),d=a(8),b=a(48),j=a(362),p=a(414),u=a(41),m=a(430),h=a(456),g=a(1),O=["setIsSwapDialog","account","className"],f=Object(i.a)((function(e){var t;return{root:{},image:Object(o.a)({},e.breakpoints.down("sm"),{maxWidth:500,marginBottom:60}),mobileImageContainer:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{position:"absolute",left:0,top:-70}),Object(o.a)(t,"position","absolute"),Object(o.a)(t,"right",0),Object(o.a)(t,"top",-70),t)}})),x=function(e){var t=e.setIsSwapDialog,a=e.account,i=e.className,s=Object(l.a)(e,O),n=f(),r=Object(b.a)(),o=Object(j.a)(r.breakpoints.up("md"),{defaultMatches:!0});return Object(g.jsx)("div",Object(c.a)(Object(c.a)({id:"prologue",className:Object(d.a)(n.root,i)},s),{},{children:Object(g.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:4,direction:o?"row":"column-reverse",children:[Object(g.jsxs)(p.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"center",xs:12,md:5,"data-aos":"fade-up",children:[Object(g.jsx)(m.a,{src:"assets/images/hand.png",alt:"Web3 Legal Engineering",className:n.image,"data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}),Object(g.jsx)("div",{className:n.mobileImageContainer,children:Object(g.jsx)(m.a,{src:"assets/images/cloud.svg",alt:"Web3 Legal Engineering",className:n.image,"data-aos":"fade-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"})})]}),Object(g.jsx)(p.a,{item:!0,container:!0,alignItems:"center",xs:12,md:7,"data-aos":"fade-up",children:Object(g.jsx)(h.a,{title:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(g.jsxs)("span",{style:{color:r.palette.text.primary},children:["LENDING",Object(g.jsx)("br",{})]}),Object(g.jsxs)("span",{style:{color:r.palette.text.primary,fontSize:18,fontWeight:"300",textAlign:"justify",lineHeight:1.8},children:["RepUSD is a reputation based lending dapp. A user who has being investing in dapps can get loans from RepUSD without the need to deposit collateral.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),Object(g.jsxs)("span",{style:{color:r.palette.text.primary,fontSize:18,fontWeight:"300",textAlign:"justify",lineHeight:1.8},children:["The user can borrow up to 75% of his reputation. But if any of his investment contains a RepUSD pool, the user can borrow up to 90% of that reputation.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),Object(g.jsx)("span",{style:{color:r.palette.text.primary,fontSize:18,fontWeight:"300",textAlign:"justify",lineHeight:1.8},children:"When a user borrows on RepUSD, RepUSD tokens are minted. The minted RepUSD are sent to an Interest yielding vault."})]}),ctaGroup:[Object(g.jsx)(u.a,{onClick:function(){a&&t(!0)},variant:"outlined",color:"primary",size:"large",children:"Search"}),Object(g.jsx)(u.a,{variant:"outlined",color:"primary",size:"large",children:"Lending"})],align:o?"left":"center",disableGutter:!0,titleVariant:"h3"})})]})}))},y=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#000"}}}));t.default=function(){var e=y();return n.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"}),Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(r.a,{children:Object(g.jsx)(x,{})})})}}}]);
//# sourceMappingURL=9.39ca0559.chunk.js.map