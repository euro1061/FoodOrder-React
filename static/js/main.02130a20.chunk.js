(this["webpackJsonpFoodOrder-React"]=this["webpackJsonpFoodOrder-React"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__39Ym4",control:"Checkout_control__3ovoY",actions:"Checkout_actions__3zZzJ",submit:"Checkout_submit__lm-pJ",invalid:"Checkout_invalid__Yp55I"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__dxTX1",total:"Cart_total__4uim_",actions:"Cart_actions__1ENaJ","button--alt":"Cart_button--alt__30dkP",button:"Cart_button__11EpX"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__FErnW",summary:"CartItem_summary__3h82k",price:"CartItem_price__2FaoU",amount:"CartItem_amount__23Coq",actions:"CartItem_actions__2ihBI"}},,,function(e,t,n){e.exports={button:"HeaderCardButton_button__3RV1u",icon:"HeaderCardButton_icon__1ioup",badge:"HeaderCardButton_badge__W6N4C",bump:"HeaderCardButton_bump__31cCY"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__70O4p","meals-appear":"AvailableMeals_meals-appear__2Q3rg",loading:"AvailableMeals_loading__g3trf"}},function(e,t,n){e.exports={meal:"MealItem_meal__1CTAs",description:"MealItem_description__3Symf",price:"MealItem_price__3GBd-"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3BLPk",modal:"Modal_modal__2MND_","slide-down":"Modal_slide-down__YxrAs"}},,,function(e,t,n){e.exports={header:"Header_header__2SlpC","main-image":"Header_main-image__24q1_"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1_6W8"}},function(e,t,n){e.exports={card:"Card_card__QLkMy"}},function(e,t,n){e.exports={input:"Input_input__2oGU9"}},function(e,t,n){e.exports={form:"MealItemForm_form__35j1I"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(18),l=n.n(o),d=n.p+"static/media/foodbg.ef36ea7a.jfif",u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(10),b=n.n(m),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},addItemSingle:function(e){},clearItemHandler:function(){}}),f=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(c?b.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(u.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"\u0e15\u0e23\u0e30\u0e01\u0e23\u0e49\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(u.jsx)("span",{className:b.a.badge,children:o})]})},x=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"\u0e23\u0e49\u0e32\u0e19\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e41\u0e14\u0e07"}),Object(u.jsx)(f,{onClick:function(){e.onCartShow()}})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:d,alt:"A Food Bro!"})})]})},h=n(19),p=n.n(h),_=function(){return Object(u.jsxs)("section",{className:p.a.summary,children:[Object(u.jsx)("h2",{children:"\u0e04\u0e33\u0e41\u0e23\u0e01\u0e15\u0e34\u0e14\u0e43\u0e08 \u0e04\u0e33\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e15\u0e34\u0e14\u0e04\u0e2d"}),Object(u.jsx)("p",{children:"\u0e44\u0e0a\u0e19\u0e48\u0e32\u0e40\u0e1a\u0e25\u0e2d\u0e08\u0e36\u0e4a\u0e01\u0e42\u0e01\u0e40\u0e15\u0e47\u0e01\u0e0b\u0e4c \u0e14\u0e47\u0e2d\u0e01\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e0b\u0e35\u0e14\u0e32\u0e19\u0e41\u0e1f\u0e01\u0e0b\u0e4c\u0e08\u0e31\u0e07\u0e42\u0e01\u0e49\u0e25\u0e2d\u0e23\u0e4c\u0e14 \u0e2d\u0e35\u0e41\u0e15\u0e4b\u0e19\u0e04\u0e25\u0e31\u0e1a\u0e44\u0e04\u0e25\u0e41\u0e21\u0e47\u0e01\u0e0b\u0e4c \u0e40\u0e2d\u0e47\u0e01\u0e0b\u0e4c\u0e42\u0e1b\u0e42\u0e22\u0e40\u0e01\u0e34\u0e23\u0e4c\u0e15\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04 \u0e17\u0e31\u0e27\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e14\u0e35\u0e1e\u0e32\u0e23\u0e4c\u0e17\u0e40\u0e21\u0e19\u0e17\u0e4c \u0e44\u0e1b\u0e40\u0e14\u0e2d\u0e23\u0e4c \u0e41\u0e23\u0e07\u0e14\u0e39\u0e14\u0e41\u0e1b\u0e4b\u0e27 \u0e41\u0e23\u0e07\u0e43\u0e08\u0e1e\u0e31\u0e19\u0e18\u0e01\u0e34\u0e08 \u0e44\u0e25\u0e17\u0e4c \u0e42\u0e14\u0e21\u0e34\u0e42\u0e14"}),Object(u.jsx)("p",{children:"\u0e08\u0e4a\u0e32\u0e1a\u0e14\u0e35\u0e40\u0e08\u0e0b\u0e32\u0e15\u0e32\u0e19 \u0e23\u0e34\u0e01\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e2d\u0e32\u0e27\u0e4c\u0e41\u0e1f\u0e25\u0e47\u0e15 \u0e40\u0e2b\u0e35\u0e48\u0e22\u0e27\u0e22\u0e48\u0e19 \u0e40\u0e1b\u0e35\u0e22\u0e42\u0e19\u0e40\u0e1e\u0e32\u0e40\u0e27\u0e2d\u0e23\u0e4c \u0e40\u0e2d\u0e2a\u0e40\u0e1e\u0e23\u0e2a\u0e42\u0e0b \u0e2d\u0e36\u0e4b\u0e21\u0e1b\u0e32\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e1c\u0e39\u0e49\u0e19\u0e33\u0e41\u0e04\u0e0a\u0e40\u0e0a\u0e35\u0e22\u0e23\u0e4c \u0e1e\u0e32\u0e2a\u0e15\u0e49\u0e32\u0e2b\u0e19\u0e48\u0e2d\u0e21\u0e41\u0e19\u0e49\u0e21 \u0e41\u0e0b\u0e47\u0e01\u0e22\u0e30\u0e40\u0e22\u0e37\u0e2d\u0e01\u0e41\u0e1f\u0e25\u0e0a\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e07\u0e35\u0e49 \u0e04\u0e25\u0e34\u0e1b\u0e2d\u0e34\u0e2a\u0e23\u0e0a\u0e19 \u0e2a\u0e15\u0e23\u0e2d\u0e40\u0e1a\u0e2d\u0e23\u0e35\u0e40\u0e17\u0e1b \u0e19\u0e32\u0e22\u0e1e\u0e23\u0e32\u0e19\u0e04\u0e2d\u0e19\u0e42\u0e17\u0e23\u0e25\u0e23\u0e32\u0e40\u0e21\u0e47\u0e07"})]})},v=n(20),C=n.n(v),N=function(e){return Object(u.jsx)("div",{className:C.a.card,children:e.children})},y=n(13),g=n.n(y),I=n(14),k=n.n(I),A=n(4),S=n(21),M=n.n(S),E=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(A.a)(Object(A.a)({},e.input),{},{ref:t}))]})})),w=n(22),F=n.n(w),H=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(u.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):(e.onAddToCart(c),s.current.value=1)},children:[Object(u.jsx)(E,{label:"\u0e08\u0e33\u0e19\u0e27\u0e19",ref:s,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ \u0e40\u0e1e\u0e34\u0e48\u0e21"}),!c&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=function(e){var t=Object(i.useContext)(O),n="\u0e3f".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:k.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:k.a.description,children:e.description}),Object(u.jsx)("div",{className:k.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(12),B=n(6),D=n.n(B),L=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(null),s=Object(r.a)(a,2),o=s[0],l=s[1],d=Object(i.useCallback)(function(){var e=Object(T.a)(D.a.mark((function e(t,n){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),l(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,a.json();case 10:r=e.sent,n(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something went wrong!");case 17:c(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:o,sendRequest:d}},J=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=L(),s=a.isLoading,o=a.error,l=a.sendRequest;Object(i.useEffect)((function(){l({url:"https://react-http-cfe16-default-rtdb.firebaseio.com/meals.json"},(function(e){var t=[];for(var n in e)t.push({id:n,name:e[n].name,price:e[n].price,description:e[n].description});c(t)}))}),[l]);var d=n.map((function(e){return Object(u.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price,children:e.name},e.id)}));return Object(u.jsxs)("section",{className:g.a.meals,children:[!s&&!o&&Object(u.jsx)(N,{children:Object(u.jsx)("ul",{children:d})}),s&&Object(u.jsx)("p",{className:g.a.loading,children:"Loading..."}),o&&!s&&Object(u.jsxs)("p",{className:g.a.loading,children:["Error : ",o]})]})},P=function(){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(J,{})]})},q=n(5),z=n.n(q),G=n(15),Y=n.n(G),V=function(e){return Object(u.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},W=function(e){return Object(u.jsx)("div",{className:Y.a.modal,children:Object(u.jsx)("div",{className:Y.a.content,children:e.children})})},Q=document.getElementById("overlays"),U=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(u.jsx)(V,{onClose:e.onClose}),Q),a.a.createPortal(Object(u.jsx)(W,{children:e.children}),Q)]})},X=n(7),Z=n.n(X),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Z.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:Z.a.summary,children:[Object(u.jsx)("span",{className:Z.a.price,children:t}),Object(u.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:Z.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(3),ee=n.n(K),te=function(e){return""===e.trim()},ne=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postal:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),m="".concat(ee.a.control," ").concat(c.street?"":ee.a.invalid),b="".concat(ee.a.control," ").concat(c.city?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(c.postal?"":ee.a.invalid);return Object(u.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=l.current.value,i=d.current.value,u=!te(n),j=!te(c),m=5===r.trim().length,b=!te(i),O=u&&j&&m&&b;a({name:u,street:j,city:b,postal:m}),O&&e.onConfirm({name:n,street:c,postal:r,city:i})},children:[Object(u.jsxs)("div",{className:j,children:[Object(u.jsx)("label",{htmlFor:"name",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"}),Object(u.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(u.jsx)("p",{children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d"})]}),Object(u.jsxs)("div",{className:m,children:[Object(u.jsx)("label",{htmlFor:"street",children:"\u0e16\u0e19\u0e19"}),Object(u.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(u.jsx)("p",{children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e0a\u0e37\u0e48\u0e2d\u0e16\u0e19\u0e19"})]}),Object(u.jsxs)("div",{className:O,children:[Object(u.jsx)("label",{htmlFor:"postal",children:"\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c"}),Object(u.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postal&&Object(u.jsx)("p",{children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c\u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"})]}),Object(u.jsxs)("div",{className:b,children:[Object(u.jsx)("label",{htmlFor:"city",children:"\u0e40\u0e21\u0e37\u0e2d\u0e07"}),Object(u.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(u.jsx)("p",{children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e21\u0e37\u0e2d\u0e07"})]}),Object(u.jsxs)("div",{className:ee.a.actions,children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ce=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],m=Object(i.useState)(!1),b=Object(r.a)(m,2),f=b[0],x=b[1],h=Object(i.useContext)(O),p=function(){e.onCardHide()},_="\u0e3f".concat(h.totalAmount.toFixed(2)),v=h.items.length>0,C=function(e){h.removeItem(e)},N=function(e){h.addItemSingle(e)},y=function(){var e=Object(T.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://react-http-cfe16-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:j(!1),x(!0),h.clearItemHandler();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(u.jsx)("ul",{className:z.a["cart-items"],children:h.items.map((function(e){return Object(u.jsx)($,{name:e.name,amount:e.amount,price:e.price,onAdd:N.bind(null,e),onRemove:C.bind(null,e.id)},e.id)}))}),I=Object(u.jsxs)("div",{className:z.a.actions,children:[Object(u.jsx)("button",{className:z.a["button--alt"],onClick:p,children:"\u0e1b\u0e34\u0e14"}),v&&Object(u.jsx)("button",{className:z.a.button,onClick:function(){a(!0)},children:"\u0e2a\u0e31\u0e48\u0e07"})]}),k=Object(u.jsxs)(s.a.Fragment,{children:[g,Object(u.jsxs)("div",{className:z.a.total,children:[Object(u.jsx)("span",{children:"\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e34\u0e49\u0e19"}),Object(u.jsx)("span",{children:_})]}),c&&Object(u.jsx)(ne,{onCancel:e.onCardHide,onConfirm:y}),!c&&I]}),A=Object(u.jsx)("p",{children:"Sending order data..."}),S=Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("p",{children:"Successfully send the order!"}),Object(u.jsx)("div",{className:z.a.actions,children:Object(u.jsx)("button",{className:z.a.button,onClick:p,children:"\u0e1b\u0e34\u0e14"})})]});return Object(u.jsxs)(U,{onClose:e.onCardHide,children:[!d&&!f&&k,d&&A,!d&&f&&S]})},ae=n(16),re={items:[],totalAmount:0},ie=function(e,t){if("ADD_ITEM"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("ADD_ITEM_SINGLE"===t.type){var s,o=e.totalAmount+t.item.price,l=e.items.findIndex((function(e){return e.id===t.item.id})),d=e.items[l];if(d){var u=Object(A.a)(Object(A.a)({},d),{},{amount:d.amount+1});(s=Object(ae.a)(e.items))[l]=u}return{items:s,totalAmount:o}}if("REMOVE_ITEM"===t.type){var j,m=e.items.findIndex((function(e){return e.id===t.id})),b=e.items[m],O=e.totalAmount-b.price;if(1===b.amount)j=e.items.filter((function(e){return e.id!==t.id}));else{var f=Object(A.a)(Object(A.a)({},b),{},{amount:b.amount-1});(j=Object(ae.a)(e.items))[m]=f}return{items:j,totalAmount:O}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})},addItemSingle:function(e){a({type:"ADD_ITEM_SINGLE",item:e})},clearItemHandler:function(){a({type:"CLEAR_ITEM"})}};return Object(u.jsx)(O.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(se,{children:[n&&Object(u.jsx)(ce,{onCardHide:function(){c(!1)}}),Object(u.jsx)(x,{onCartShow:function(){c(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(P,{})})]})};a.a.render(Object(u.jsx)(oe,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.02130a20.chunk.js.map