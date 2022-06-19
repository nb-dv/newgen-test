(function(){"use strict";var e={1538:function(e,s,t){t(6992),t(8674),t(9601),t(7727);var i=t(9567),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("ListOfCourses")],1)},r=[],o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"courses"},[t("div",{staticClass:"courses__headers"},[e._m(0),t("div",{staticClass:"courses__header"},[t("div",{staticClass:"courses__item"},[t("div",{staticClass:"courses__inner"},[t("span",[e._v("Стоимость")]),t("SelectSortByOrder",{on:{sortCourses:e.sortCourses}})],1),t("InputFilterByPrice",{on:{setRange:e.setRange}})],1)])]),e._l(e.sortedCourses,(function(s,i){return t("div",{key:i,staticClass:"courses__body"},[t("div",{staticClass:"courses__row"},[t("div",{staticClass:"courses__field"},[t("span",[e._v(e._s(s.name))])]),t("div",{staticClass:"courses__field"},[t("span",{directives:[{name:"show",rawName:"v-show",value:null===s.prices[0]&&null===s.prices[1],expression:"course.prices[0] === null && course.prices[1] === null"}]},[e._v("не указана")]),t("span",{directives:[{name:"show",rawName:"v-show",value:null!==s.prices[0],expression:"course.prices[0] !== null "}]},[e._v(" от "+e._s(s.prices[0])+" ")]),t("span",{directives:[{name:"show",rawName:"v-show",value:s.prices[1],expression:"course.prices[1]"}]},[e._v(" до "+e._s(s.prices[1]))])])])])}))],2)},c=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"courses__header"},[t("div",{staticClass:"courses__item"},[e._v(" Курс ")])])}],a=t(4479),u=(t(9653),t(7327),t(1539),t(2707),t(7042),function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"select-sort"},[i("div",{staticClass:"select-sort__title",on:{click:function(s){e.optionsVisible=!e.optionsVisible}}},[i("img",{staticClass:"select-sort__icon",attrs:{src:t(8329)}})]),e.optionsVisible?i("div",{staticClass:"select-sort__options"},e._l(e.options,(function(s,t){return i("p",{key:t,staticClass:"select-sort__option",on:{click:function(t){return e.selectOption(s)}}},[e._v(" "+e._s(s.name)+" ")])})),0):e._e()])}),l=[],p=(t(8309),{name:"SelectSortByOrder",data:function(){return{options:[{name:"По умолчанию",isAscending:null},{name:"По увеличению цены",isAscending:!0},{name:"По уменьшению цены",isAscending:!1}],optionsVisible:!1,selectedOption:"По умолчанию"}},methods:{selectOption:function(e){e.name!==this.selectedOption?(this.selectedOption=e.name,this.$emit("sortCourses",e.isAscending),this.optionsVisible=!1):this.optionsVisible=!1}}}),m=p,f=t(1001),d=(0,f.Z)(m,u,l,!1,null,"510dd859",null),v=d.exports,h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"input-filter"},[t("div",{staticClass:"input-filter__values"},[t("span",[e._v("от")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.minPrice,expression:"minPrice"}],attrs:{type:"text"},domProps:{value:e.minPrice},on:{change:e.setRange,input:function(s){s.target.composing||(e.minPrice=s.target.value)}}}),t("span",[e._v("до")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPrice,expression:"maxPrice"}],attrs:{type:"text"},domProps:{value:e.maxPrice},on:{change:e.setRange,input:function(s){s.target.composing||(e.maxPrice=s.target.value)}}})])])},A=[],C={name:"InputFilterByPrice",data:function(){return{minPrice:null,maxPrice:null}},methods:{setRange:function(){if(Number(this.minPrice)>Number(this.maxPrice)&&null!==this.maxPrice&&""!==this.maxPrice){var e=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=e}this.$emit("setRange",this.minPrice,this.maxPrice)}}},_=C,P=(0,f.Z)(_,h,A,!1,null,"34316a92",null),g=P.exports,x={name:"ListOfCourses",components:{InputFilterByPrice:g,SelectSortByOrder:v},data:function(){return{minPrice:null,maxPrice:null,courses:[{name:"Courses in England",prices:[0,100]},{name:"Courses in Germany",prices:[500,null]},{name:"Courses in Italy",prices:[100,200]},{name:"Courses in Russia",prices:[null,400]},{name:"Courses in China",prices:[50,250]},{name:"Courses in USA",prices:[200,null]},{name:"Courses in Kazakhstan",prices:[56,324]},{name:"Courses in France",prices:[null,null]}],sortedCourses:[]}},methods:{setRange:function(e,s){0===Number(e)?this.minPrice=null:this.minPrice=Number(e),0===Number(s)?this.maxPrice=null:this.maxPrice=Number(s),this.sortedCourses=this.filterCoursesByPriceRange(this.courses,this.minPrice,this.maxPrice)},filterCoursesByPriceRange:function(e,s,t){var i=function(e){return null===e?1/0:e};return e.filter((function(e){return e.prices[0]<=i(t)&&i(e.prices[1])>=s}))},sortCourses:function(e){this.sortedCourses=null!==e?this.courses.slice().sort((function(s,t){return(s.prices[0]-t.prices[0])*(e?1:-1)})):(0,a.Z)(this.courses)}},mounted:function(){this.sortedCourses=(0,a.Z)(this.courses)}},b=x,w=(0,f.Z)(b,o,c,!1,null,"7f784038",null),y=w.exports,O={name:"App",components:{ListOfCourses:y}},B=O,E=(0,f.Z)(B,n,r,!1,null,null,null),G=E.exports;i.Z.config.productionTip=!1,new i.Z({render:function(e){return e(G)}}).$mount("#app")},8329:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADQklEQVRIie2XS0wTYRDHp+3a7fIsLeUZaJCXQluIEYw2MZpAEMSIAhGIBw4Y9YA3TUQ0C6IcPBlj4sVEU/BgKJaIBQmxJYbEGA/QbltQDB4s5akFSreP7a4nCUKLu4UED/6PO/P9f8lm5pv5AMJUebMeLW/Wo+Ge54Vz6ARuQOJ51DAAwCKDlBjxkxRXDz53LMOT8QIv09JSi+Ty9GIZUH04jnP2QbgeqMGHnyYnJ5WkJKdEAAAEKOo48V3dBQANXHwEXJKr8aGHiQmyerlcHvP7W0xMjNDv98vTi6pTbUbNwK6Da9qHWiRxkqtZmZnizbG4ODFKkp6cjOLaKOuIxrBr4Gp86EpsdHTrgdwcSah6lEgkIpfbpdx/tNZnM3Z92DH4HD5QFxUZ/SAv76CUxwvdBDwegFQqxZadK4dz1DXzVmP32Ha+27ZT1Z235VEY9lypUsj4fHaFyzA0mMzEIkmSl7R4mY4z+PxtvVqERvSqClUJAgG3bqFpGkwmYt69Rta/6ih7FywnqGNVy5vCfSjWoyxQcIYCAPD5fFAq8hNEmPBF1a3BYlbgytbX2SiG9auU+UkIwrnN1yVABKBUKhJFIkR39qY+b3P8j19d3qxHMbHgGYIgBWETg4iiqHHSGWgceFTh3U3f//q3tWfFteUCqWx9nR2JRhhUKmWqUCjcEdDv94NpfNxBun0lfZ0V1o2xLX3c33Hmi5f0VJrMllmK4rxYrCtABcBsJuY8HqpqMzQoGABAd//0mN9L1pjHiflAgOYMpWkazIRl3kP6GnT3Tn0MlhPyPuy9WzHq9nkbCTOxQNPs4QxDA2G2LHi85OVQ9/S2YAAAXXvZwJp37ZrFaltkGIYFlAGLZWLJ43Hd2G4yAbCYxxPGbiJLXbfqWl09JpPFY6EGGsMATE5+/rG86urQ4mVP/ubLagOxGTWfMtUXELebPCSVSrFgOVNTX53On87H2rbSTjaerHcuq0HzPuNIbQrl8+eK48SijbHp6W8rC4tLGm1b6XW2fpy2TJtRMygvrs5hGDorNjYWBQCw2+0uh2OuX4uXNnHx4jzle/CSJodjbnjGMeOenZ0j7faZEQWMXuTqs2dPmLC100fbL3A5VaH0tg0LAAAAAElFTkSuQmCC"}},s={};function t(i){var n=s[i];if(void 0!==n)return n.exports;var r=s[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,i,n,r){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],r=e[l][2];for(var c=!0,a=0;a<i.length;a++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[a])}))?i.splice(a--,1):(c=!1,r<o&&(o=r));if(c){e.splice(l--,1);var u=n();void 0!==u&&(s=u)}}return s}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,n,r]}}(),function(){t.d=function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,i){var n,r,o=i[0],c=i[1],a=i[2],u=0;if(o.some((function(s){return 0!==e[s]}))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(a)var l=a(t)}for(s&&s(i);u<o.length;u++)r=o[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},i=self["webpackChunknewgen_test_app"]=self["webpackChunknewgen_test_app"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(1538)}));i=t.O(i)})();
//# sourceMappingURL=app-legacy.7a8ba682.js.map