(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{31:function(n,e){},51:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(21),c=t.n(i),o=t(5),s=t.n(o),d=t(6),l=t(10),p=(t(31),t(22)),u=t.n(p),b=function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.get("https://pokemon-api-unicamp.herokuapp.com/api/v1/pokemons");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),x=t(1),m=Object(r.createContext)({});function j(n){var e=n.children,t=Object(r.useState)(!1),a=Object(l.a)(t,2),i=a[0],c=a[1],o=Object(r.useState)([]),p=Object(l.a)(o,2),u=p[0],j=p[1],g=Object(r.useCallback)(Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(!0),setTimeout(Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b();case 2:(e=n.sent)&&e.pokemons&&j(e.pokemons),c(!1);case 5:case"end":return n.stop()}}),n)}))),1500);case 2:case"end":return n.stop()}}),n)}))),[]);return Object(r.useEffect)((function(){g()}),[g]),Object(x.jsx)(m.Provider,{value:{isFetchingPokedex:i,pokemons:u,addPokemon:function(){},updatePokemon:function(){},deletePokemon:function(){}},children:e})}var g,h,f,O=t.p+"static/media/loading.a937902d.gif",v=t(3),k=t(4),w=k.b.div(g||(g=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-right: 4rem;\n\n  span {\n    font-weight: 600;\n    font-size: 22px;\n    margin-top: 1rem;\n    margin-left: 4.2rem;\n  }\n"])));function y(){return Object(x.jsxs)(w,{children:[Object(x.jsx)("img",{src:O,alt:"Loading..."}),Object(x.jsx)("span",{children:"Carregando Poked\xe9x..."})]})}!function(n){n.BUG="Bug",n.GHOST="Ghost",n.STEEL="Steel",n.FIRE="Fire",n.ROCK="Rock",n.WATER="Water",n.ELECTRIC="Electric",n.PSYCHIC="Psychic"}(h||(h={}));var E,C,F=k.b.div(f||(f=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  width: 100%;\n\n  span {\n    font-size: 1rem;\n  }\n\n  > div {\n    flex: 1;\n    height: 4px;\n    border-radius: 4px;\n    background: var(--gray-line);\n    margin: 0 1.5rem;\n    position: relative;\n  }\n\n  > div > div {\n    height: 4px;\n    border-radius: 4px;\n    background: var(--green);\n  }\n\n  span.current-value {\n    position: absolute;\n    top: 12px;\n    transform: translateX(-50);\n    font-weight: 600;\n  }\n"]))),T=function(n){var e=n.value;return Object(x.jsxs)(F,{children:[Object(x.jsx)("span",{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{width:"".concat(e,"%")}}),Object(x.jsx)("span",{className:"current-value",style:{left:"".concat(e-5,"%")},children:e})]}),Object(x.jsx)("span",{})]})},B=k.b.div(E||(E=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background: var(--white);\n\n  width: 300px;\n  height: 180px;\n  padding: 15px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n\n  transition: box-shadow 0.4s;\n\n  &:hover {\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  }\n\n  img {\n    height: 85px;\n    width: 85px;\n  }\n\n  span {\n    span {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.color}));function P(n){n.index;var e=n.pokemon;return Object(x.jsxs)(B,{color:function(){switch(e.pokemonType){case h.BUG:return"#A8B820";case h.GHOST:return"#705898";case h.STEEL:return"#B8B8D0";case h.FIRE:return"#F08030";case h.ROCK:return"#B8A038";case h.WATER:return"#6890F0";case h.ELECTRIC:return"#F8D030";case h.PSYCHIC:return"#F85888";default:return"#2E384D"}}(),children:[Object(x.jsx)("img",{src:e.pokemonImageUrl,alt:e.pokemonName}),Object(x.jsxs)("span",{children:[e.pokemonName," \u2022 ",Object(x.jsx)("span",{children:e.pokemonType})]}),Object(x.jsx)("br",{}),Object(x.jsx)(T,{value:e.strength})]})}var S,R,I=k.b.div(C||(C=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  color: var(--title);\n"])));function D(){var n=Object(r.useContext)(m),e=n.isFetchingPokedex,t=n.pokemons;return e?Object(x.jsx)(y,{}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(I,{children:t.map((function(n,e){return Object(x.jsx)(P,{index:e,pokemon:n},n.id)}))})})}var z=k.b.main(S||(S=Object(v.a)(["\n  height: 100vh;\n  max-width: 992px;\n  margin: 0 auto;\n  padding: 2.5rem 0rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  header {\n    display: flex;\n  }\n\n  section {\n    flex: 1;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 6.25rem;\n    align-content: center;\n  }\n"])));k.b.div(R||(R=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-right: 4rem;\n\n  span {\n    font-weight: 600;\n    font-size: 22px;\n    margin-top: 1rem;\n    margin-left: 4.2rem;\n  }\n"])));var A,G=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(j,{children:Object(x.jsx)(z,{children:Object(x.jsx)(D,{})})})})},L=Object(k.a)(A||(A=Object(v.a)(['\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --white:#fff;\n  --background: #F2F3F5;\n  --gray-line: #DCDDE0;\n  --text: #666666;\n  --title: #2E384D;\n  --red: #E83F5B;\n  --black-primary: rgb(19, 17, 14);\n  --green: rgb(96, 191, 131);\n  --green-dark: rgb(58, 146, 90);\n  --yellow: rgb(253, 224, 94);\n  --yellow-dark: rgb(249, 203, 4);\n  --yellow-darker: rgb(181, 148, 3);\n  --yellow-accent: rgb(255, 255, 0);\n}\n\n@media (max-width: 1080px) {\n  html {\n    font-size: 93.75%;\n  }\n}\n\n@media (max-width: 720px) {\n  html {\n    font-size: 87.5%;\n  }\n}\n\nbody {\n  background: var(--background);\n  color: var(--text);\n}\n\nbody, input, textarea, button, p {\n  font: 400 1rem "Barlow", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n'])));c.a.render(Object(x.jsxs)(a.a.StrictMode,{children:[Object(x.jsx)(L,{}),Object(x.jsx)(G,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b6997717.chunk.js.map