(this.webpackJsonpcommerce_site=this.webpackJsonpcommerce_site||[]).push([[0],{136:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(10),r=n.n(c),i=n(8),s=n.n(i),o=n(16),l=n(12),j=n(71),u=new(n.n(j).a)("pk_2771796d732fce66332153782f0a95bfef7d62d192b7f",!0),d=n(170),b=n(172),p=n(173),m=n(174),h=n(175),x=n(176),O=n(14),f=n(28),g=n.p+"static/media/commerce.457bea4f.png",v=n(13),y=n(167),k=n(18),w=Object(y.a)((function(t){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),C=n(2),N=function(t){var e=t.totalItems,n=w(),a=Object(O.f)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(p.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:g,alt:"Stock Market",height:"25px",className:n.image}),"Stock Market"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{component:f.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})}),";"]})})})},S=n(182),B=n(177),T=n(178),_=n(179),R=n(180),q=n(181),A=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),I=function(t){var e=t.product,n=t.onAddToCart,a=A();return Object(C.jsxs)(B.a,{className:a.root,children:[Object(C.jsx)(T.a,{className:a.media,image:e.media.source,title:e.name}),Object(C.jsxs)(_.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:e.name}),Object(C.jsx)(p.a,{variant:"h6",children:e.price.formatted_with_symbol})]}),Object(C.jsx)(p.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(R.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(m.a,{"aria-label":"Add to cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(q.a,{})})})]})},F=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,n=t.onAddToCart,a=F();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(S.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(I,{product:t,onAddToCart:n})},t.id)}))})]})},E=n(183),z=n(184),D=Object(y.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(v.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),G=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),P=function(t){var e=t.item,n=t.onUpdateCartQty,a=t.onRemoveFromCart,c=G();return Object(C.jsx)("div",{children:Object(C.jsxs)(B.a,{children:[Object(C.jsx)(T.a,{image:e.media.source,alt:e.name,className:c.media}),Object(C.jsxs)(_.a,{className:c.cardContent,children:[Object(C.jsx)(p.a,{variant:"h4",children:e.name}),Object(C.jsx)(p.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(C.jsxs)(R.a,{className:c.cardActions,children:[Object(C.jsxs)("div",{className:c.buttons,children:[Object(C.jsx)(E.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(C.jsx)(p.a,{children:e.quantity}),Object(C.jsx)(E.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(C.jsx)(E.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:"Remove"})]})]})})},Q=function(t){var e=t.cart,n=t.handleUpdateCarQty,a=t.handleRemoveFromCart,c=t.handleEmptyCart,r=D(),i=function(){return Object(C.jsxs)(p.a,{variant:"subtitle1",children:["You have no items in you cart, ",Object(C.jsx)(f.b,{to:"/",className:r.link,children:"Go add some"}),"!"]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(S.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(P,{item:t,onUpdateCartQty:n,onRemoveFromCart:a})},t.id)}))}),Object(C.jsxs)("div",{className:r.cardDetails,children:[Object(C.jsxs)(p.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(E.a,{className:r.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:c,children:"Empty Cart"}),Object(C.jsx)(E.a,{component:f.b,to:"/checkout",oclassName:r.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(C.jsxs)(z.a,{children:[Object(C.jsx)("div",{className:r.toolbar}),Object(C.jsx)(p.a,{className:r.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading..."},U=n(77),W=n(194),M=n(187),J=n(189),Y=n(58),H=n(192),Z=n(188),K=n(193),V=n(43),X=n(190),$=function(t){var e=t.required,n=t.name,a=t.label,c=Object(V.d)().control;return Object(C.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(V.a,{as:X.a,control:c,fullwidth:!0,name:n,label:a,required:e})})},tt=function(t){var e=t.checkoutToken,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],i=c[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),b=d[0],m=d[1],h=Object(a.useState)([]),x=Object(l.a)(h,2),O=(x[0],x[1],Object(a.useState)("")),f=Object(l.a)(O,2),g=(f[0],f[1],Object(a.useState)([])),v=Object(l.a)(g,2),y=(v[0],v[1],Object(a.useState)("")),k=Object(l.a)(y,2),w=(k[0],k[1],Object(V.c)()),N=Object.entries(r).map((function(t){var e=Object(l.a)(t,2);return{id:e[0],label:e[1]}})),B=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,i(a),m(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){B(e.id)}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(V.b,Object(Y.a)(Object(Y.a)({},w),{},{children:Object(C.jsx)("form",{onSubmit:"",children:Object(C.jsxs)(S.a,{container:!0,spacing:3,children:[Object(C.jsx)($,{required:!0,name:"firstName",label:"First Name"}),Object(C.jsx)($,{required:!0,name:"lastName",label:"Last Name"}),Object(C.jsx)($,{required:!0,name:"address1",label:"Address"}),Object(C.jsx)($,{required:!0,name:"email",label:"Email"}),Object(C.jsx)($,{required:!0,name:"city",label:"City"}),Object(C.jsx)($,{required:!0,name:"zip",label:"ZIP / Postal code"}),Object(C.jsxs)(S.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(H.a,{children:"Shipping Country"}),Object(C.jsx)(Z.a,{value:b,fullWidth:!0,onChange:function(t){return m(t.target.value)},children:N.map((function(t){return Object(C.jsx)(K.a,{value:t.id,children:t.label},t.id)}))})]})]})})}))]})},et=function(){return Object(C.jsx)("div",{children:"PaymentForm"})},nt=Object(y.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(v.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),at=["Shipping Address","Payment Details"],ct=function(t){var e=t.cart,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],i=(c[1],Object(a.useState)(null)),j=Object(l.a)(i,2),d=j[0],b=j[1],m=nt();Object(a.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,console.log(n),b(n),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var h=function(){return Object(C.jsx)("div",{children:"Confirmation"})},x=function(){return 0===r?Object(C.jsx)(tt,{checkoutToken:d}):Object(C.jsx)(et,{})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:m.toolbar}),Object(C.jsx)("main",{className:m.layout,children:Object(C.jsxs)(U.a,{className:m.paper,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(W.a,{activeStep:r,className:m.stepper,children:at.map((function(t){return Object(C.jsx)(M.a,{children:Object(C.jsx)(J.a,{children:t})},t)}))}),r===at.length?Object(C.jsx)(h,{}):d&&Object(C.jsx)(x,{})]})})]})},rt=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),j=i[0],d=i[1],b=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,u.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.add(e,n);case 2:a=t.sent,d(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.update(e,{quantity:n});case 2:a=t.sent,d(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.remove(e);case 2:a=t.sent,d(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.empty();case 2:a=t.sent,d(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){b(),p()}),[]),Object(C.jsx)(f.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{totalItems:j.total_items})," ",Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{exact:!0,path:"/",children:Object(C.jsx)(L,{products:n,onAddToCart:m})}),Object(C.jsx)(O.a,{exact:!0,path:"/cart",children:Object(C.jsx)(Q,{cart:j,handleUpdateCarQty:h,handleRemoveFromCart:x,handleEmptyCart:g})}),Object(C.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(ct,{cart:j})})]})]})})};r.a.render(Object(C.jsx)(rt,{}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.026d2cad.chunk.js.map