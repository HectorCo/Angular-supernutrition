webpackJsonp([1],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";function t(l){return x._27(0,[(l()(),x._8(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),x._25(null,["\n  New product:\n"])),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,14,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"label",[["for","add_food_name"]],null,null,null,null,null)),(l()(),x._25(null,["Name:"])),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,[["newName",1]],null,0,"input",[["id","add_food_name"],["type","text"]],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"label",[["for","add_food_calories"]],null,null,null,null,null)),(l()(),x._25(null,["Calories:"])),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,[["newCal",1]],null,0,"input",[["id","add_food_calories"],["type","number"]],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.addProduct(x._21(l,8),x._21(l,13))&&t}return t},null,null)),(l()(),x._25(null,["Add"])),(l()(),x._25(null,["\n"])),(l()(),x._25(null,["\n"]))],null,null)}function e(l){return x._27(0,[(l()(),x._8(0,null,null,1,"add-food",[],null,null,null,t,D)),x._6(49152,null,0,q,[],null,null)],null,null)}function o(l){return x._27(0,[(l()(),x._8(0,null,null,36,"div",[["id","container"]],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),x._25(null,[""," "])),(l()(),x._8(0,null,null,1,"small",[],null,null,null,null,null)),(l()(),x._25(null,["details!"])),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,28,"section",[["id","detail"]],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,11,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"label",[],null,null,null,null,null)),(l()(),x._25(null,["name:\u2003"])),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,5,"input",[["placeholder","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==x._21(l,15)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==x._21(l,15).onTouched()&&t}if("compositionstart"===n){t=!1!==x._21(l,15)._compositionStart()&&t}if("compositionend"===n){t=!1!==x._21(l,15)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.food.name=u)&&t}return t},null,null)),x._6(16384,null,0,S.b,[x.G,x.k,[2,S.a]],null,null),x._23(1024,null,S.d,function(l){return[l]},[S.b]),x._6(671744,null,0,S.g,[[8,null],[8,null],[8,null],[2,S.d]],{model:[0,"model"]},{update:"ngModelChange"}),x._23(2048,null,S.e,null,[S.g]),x._6(16384,null,0,S.f,[S.e],null,null),(l()(),x._25(null,["\n  "])),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,12,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"label",[],null,null,null,null,null)),(l()(),x._25(null,["calories: "])),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,6,"input",[["placeholder","name"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==x._21(l,28)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==x._21(l,28).onTouched()&&t}if("compositionstart"===n){t=!1!==x._21(l,28)._compositionStart()&&t}if("compositionend"===n){t=!1!==x._21(l,28)._compositionEnd(u.target.value)&&t}if("change"===n){t=!1!==x._21(l,29).onChange(u.target.value)&&t}if("input"===n){t=!1!==x._21(l,29).onChange(u.target.value)&&t}if("blur"===n){t=!1!==x._21(l,29).onTouched()&&t}if("ngModelChange"===n){t=!1!==(e.food.calories=u)&&t}return t},null,null)),x._6(16384,null,0,S.b,[x.G,x.k,[2,S.a]],null,null),x._6(16384,null,0,S.i,[x.G,x.k],null,null),x._23(1024,null,S.d,function(l,n){return[l,n]},[S.b,S.i]),x._6(671744,null,0,S.g,[[8,null],[8,null],[8,null],[2,S.d]],{model:[0,"model"]},{update:"ngModelChange"}),x._23(2048,null,S.e,null,[S.g]),x._6(16384,null,0,S.f,[S.e],null,null),(l()(),x._25(null,["\n  "])),(l()(),x._25(null,["\n  "])),(l()(),x._25(null,["\n"]))],function(l,n){var u=n.component;l(n,17,0,u.food.name),l(n,31,0,u.food.calories)},function(l,n){l(n,3,0,n.component.food.name),l(n,14,0,x._21(n,19).ngClassUntouched,x._21(n,19).ngClassTouched,x._21(n,19).ngClassPristine,x._21(n,19).ngClassDirty,x._21(n,19).ngClassValid,x._21(n,19).ngClassInvalid,x._21(n,19).ngClassPending),l(n,27,0,x._21(n,33).ngClassUntouched,x._21(n,33).ngClassTouched,x._21(n,33).ngClassPristine,x._21(n,33).ngClassDirty,x._21(n,33).ngClassValid,x._21(n,33).ngClassInvalid,x._21(n,33).ngClassPending)})}function i(l){return x._27(0,[(l()(),x._2(16777216,null,null,1,null,o)),x._6(16384,null,0,$.d,[x.Q,x.N],{ngIf:[0,"ngIf"]},null),(l()(),x._25(null,["\n"]))],function(l,n){l(n,1,0,n.component.food)},null)}function a(l){return x._27(0,[(l()(),x._8(0,null,null,1,"food-detail",[],null,null,null,i,T)),x._6(49152,null,0,F,[],null,null)],null,null)}function c(l){return x._27(0,[(l()(),x._8(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),x._25(null,[" "]))],null,null)}function r(l){return x._27(0,[(l()(),x._25(null,["\n      "])),(l()(),x._8(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n        x","\n      "])),(l()(),x._25(null,["\n    "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.quantity)})}function _(l){return x._27(0,[(l()(),x._8(0,null,null,12,"li",[],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),x._25(null,[" ",""])),(l()(),x._25(null,["\n    "])),(l()(),x._2(16777216,null,null,1,null,c)),x._6(16384,null,0,$.d,[x.Q,x.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"div",[],null,[[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("change"===n){t=!1!==e.findSum()&&t}return t},null,null)),(l()(),x._25(null,[""," cal."])),(l()(),x._25(null,["\n    "])),(l()(),x._2(0,[["foodQty",2]],null,0,null,r)),(l()(),x._25(null,["\n  "]))],function(l,n){l(n,6,0,n.context.$implicit.quantity<=1,x._21(n,11))},function(l,n){l(n,3,0,n.context.$implicit.name),l(n,9,0,n.context.$implicit.calories*n.context.$implicit.quantity)})}function d(l){return x._27(0,[(l()(),x._8(0,null,null,20,"div",[["id","container"]],null,null,null,null,null)),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),x._25(null,["\n  Today's Foods list\n"])),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,5,"ul",[],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._2(16777216,null,null,2,null,_)),x._6(802816,null,0,$.c,[x.Q,x.N,x.t],{ngForOf:[0,"ngForOf"]},null),x._22(0,A,[]),(l()(),x._25(null,["\n"])),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,7,"div",[["id","totals"]],null,null,null,null,null)),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),x._25(null,["Total Calories:"])),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),x._25(null,[""," cal."])),(l()(),x._25(null,["\n"])),(l()(),x._25(null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,x._26(n,8,0,x._21(n,9).transform(u.foods)))},function(l,n){l(n,18,0,n.component.findSum())})}function s(l){return x._27(0,[(l()(),x._2(16777216,null,null,1,null,d)),x._6(16384,null,0,$.d,[x.Q,x.N],{ngIf:[0,"ngIf"]},null),(l()(),x._25(null,["\n"]))],function(l,n){l(n,1,0,n.component.findSum()>0)},null)}function f(l){return x._27(0,[(l()(),x._8(0,null,null,1,"today-foods",[],null,null,null,s,R)),x._6(114688,null,0,B,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return x._27(0,[(l()(),x._8(0,null,null,1,"add-food",[],null,[[null,"pleaseDeleteMeEvent"]],function(l,n,u){var t=!0,e=l.component;if("pleaseDeleteMeEvent"===n){t=!1!==e.deleteHandler()&&t}return t},t,D)),x._6(49152,null,0,q,[],null,{pleaseDeleteMeEvent:"pleaseDeleteMeEvent"})],null,null)}function g(l){return x._27(0,[(l()(),x._8(0,null,null,17,"li",[],[[2,"selected",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.onSelect(l.context.$implicit)&&t}return t},null,null)),(l()(),x._25(null,["\n\n        "])),(l()(),x._8(0,null,null,3,"figure",[],null,null,null,null,null)),(l()(),x._25(null,["\n          "])),(l()(),x._8(0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),x._25(null,["\n        "])),(l()(),x._25(null,["\n        "])),(l()(),x._8(0,null,null,9,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n          "])),(l()(),x._8(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),x._25(null,["",""])),(l()(),x._25(null,["\n          "])),(l()(),x._8(0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.addQty(l.context.$implicit)&&t}return t},null,null)),(l()(),x._25(null,["+"])),(l()(),x._25(null,["\n          "])),(l()(),x._8(0,null,null,0,"input",[["type","number"]],[[8,"value",0]],[[null,"change"],[null,"keyup"]],function(l,n,u){var t=!0,e=l.component;if("change"===n){t=!1!==e.changeQty(u,l.context.$implicit)&&t}if("keyup"===n){t=!1!==e.changeQty(u,l.context.$implicit)&&t}return t},null,null)),(l()(),x._25(null,["\n        "])),(l()(),x._25(null,["\n\n      "]))],null,function(l,n){var u=n.component;l(n,0,0,n.context.$implicit===u.selectedFood),l(n,4,0,x._11(1,"",n.context.$implicit.image,""),x._11(1,"",n.context.$implicit.name,"")),l(n,10,0,n.context.$implicit.name),l(n,15,0,x._11(1,"",n.context.$implicit.quantity,""))})}function m(l){return x._27(0,[(l()(),x._8(0,null,null,42,"div",[["id","container"]],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,30,"div",[["class","foodList"]],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,17,"section",[["id","headerOpt"]],null,null,null,null,null)),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,11,"div",[],null,null,null,null,null)),(l()(),x._25(null,["\n      "])),(l()(),x._8(0,null,null,1,"label",[["for","food_name"]],null,null,null,null,null)),(l()(),x._25(null,[" Search: "])),(l()(),x._25(null,["\n      "])),(l()(),x._8(0,null,null,5,"input",[["id","food_name"],["placeholder","food name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==x._21(l,12)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==x._21(l,12).onTouched()&&t}if("compositionstart"===n){t=!1!==x._21(l,12)._compositionStart()&&t}if("compositionend"===n){t=!1!==x._21(l,12)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.pattern=u)&&t}return t},null,null)),x._6(16384,null,0,S.b,[x.G,x.k,[2,S.a]],null,null),x._23(1024,null,S.d,function(l){return[l]},[S.b]),x._6(671744,null,0,S.g,[[8,null],[8,null],[8,null],[2,S.d]],{model:[0,"model"]},{update:"ngModelChange"}),x._23(2048,null,S.e,null,[S.g]),x._6(16384,null,0,S.f,[S.e],null,null),(l()(),x._25(null,["\n    "])),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,1,"button",[["label","Add"],["pButton",""],["title","Add new food product"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!=(e.isOn=!0)&&t}return t},null,null)),(l()(),x._25(null,["+"])),(l()(),x._25(null,["\n    "])),(l()(),x._25(null,["\n    "])),(l()(),x._2(16777216,null,null,1,null,p)),x._6(16384,null,0,$.d,[x.Q,x.N],{ngIf:[0,"ngIf"]},null),(l()(),x._25(null,["\n    "])),(l()(),x._8(0,null,null,5,"ul",[],null,null,null,null,null)),(l()(),x._25(null,["\n      "])),(l()(),x._2(16777216,null,null,2,null,g)),x._6(802816,null,0,$.c,[x.Q,x.N,x.t],{ngForOf:[0,"ngForOf"]},null),x._22(0,N,[]),(l()(),x._25(null,["\n    "])),(l()(),x._25(null,["\n  "])),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,7,"content",[],null,null,null,null,null)),(l()(),x._25(null,["\n  "])),(l()(),x._8(0,null,null,1,"food-detail",[],null,null,null,i,T)),x._6(49152,null,0,F,[],{food:[0,"food"]},null),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,1,"today-foods",[],null,null,null,s,R)),x._6(114688,null,0,B,[],null,null),(l()(),x._25(null,["\n"])),(l()(),x._25(null,["\n\n\n"])),(l()(),x._25(null,["\n"]))],function(l,n){var u=n.component;l(n,14,0,u.pattern),l(n,24,0,u.isOn),l(n,29,0,x._26(n,29,0,x._21(n,30).transform(u.foods,"name",u.pattern))),l(n,37,0,u.selectedFood),l(n,40,0)},function(l,n){l(n,11,0,x._21(n,16).ngClassUntouched,x._21(n,16).ngClassTouched,x._21(n,16).ngClassPristine,x._21(n,16).ngClassDirty,x._21(n,16).ngClassValid,x._21(n,16).ngClassInvalid,x._21(n,16).ngClassPending)})}function h(l){return x._27(0,[(l()(),x._8(0,null,null,1,"app-food-list",[],null,null,null,m,J)),x._6(114688,null,0,E,[],null,null)],function(l,n){l(n,1,0)},null)}function y(l){return x._27(0,[(l()(),x._8(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),x._25(null,["\n  ","\n"])),(l()(),x._25(null,["\n"])),(l()(),x._8(0,null,null,1,"app-food-list",[],null,null,null,m,J)),x._6(114688,null,0,E,[],null,null),(l()(),x._25(null,["\n\n"]))],function(l,n){l(n,4,0)},function(l,n){l(n,1,0,n.component.title)})}function b(l){return x._27(0,[(l()(),x._8(0,null,null,1,"app-root",[],null,null,null,y,L)),x._6(49152,null,0,M,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var x=u("/oeL"),C={production:!0},v=function(){function l(){}return l}(),M=function(){function l(){this.title="Super Nutrition"}return l}(),O=["content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"],P=["#container[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}li[_ngcontent-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}add-food[_ngcontent-%COMP%], content[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#headerOpt[_ngcontent-%COMP%], add-food[_ngcontent-%COMP%], content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}#headerOpt[_ngcontent-%COMP%]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}add-food[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{border:1px solid;padding:1rem;margin:1rem}li[_ngcontent-%COMP%]:hover{background-color:#f8f6f6}li[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{height:5rem;width:10rem}li[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;max-width:100%}content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:2rem}add-food[_ngcontent-%COMP%]{padding-bottom:1rem}input[type=number][_ngcontent-%COMP%]{width:4rem;padding:.5rem 0 .5rem .5rem}"],k=["input[type=number][_ngcontent-%COMP%]{width:4rem;padding:.5rem 0 .5rem .5rem}"],w=(function(){function l(){}}(),[{name:"Pizza",calories:400,image:"https://i.imgur.com/eTmWoAN.png",quantity:0},{name:"Salad",calories:150,image:"https://i.imgur.com/DupGBz5.jpg",quantity:0},{name:"Sweet Potato",calories:120,image:"https://i.imgur.com/hGraGyR.jpg",quantity:0},{name:"Gnocchi",calories:500,image:"https://i.imgur.com/93ekwW0.jpg",quantity:0},{name:"Pot Roast",calories:350,image:"https://i.imgur.com/WCzJDWz.jpg",quantity:0},{name:"Lasagna",calories:750,image:"https://i.imgur.com/ClxOafl.jpg",quantity:0},{name:"Hamburger",calories:400,image:"https://i.imgur.com/LoG39wK.jpg",quantity:0},{name:"Pad Thai",calories:475,image:"https://i.imgur.com/5ktcSzF.jpg",quantity:0},{name:"Almonds",calories:75,image:"https://i.imgur.com/JRp4Ksx.jpg",quantity:0},{name:"Bacon",calories:175,image:"https://i.imgur.com/7GlqDsG.jpg",quantity:0},{name:"Hot Dog",calories:275,image:"https://i.imgur.com/QqVHdRu.jpg",quantity:0},{name:"Chocolate Cake",calories:490,image:"https://i.imgur.com/yrgzA9x.jpg",quantity:0},{name:"Wheat Bread",calories:175,image:"https://i.imgur.com/TsWzMfM.jpg",quantity:0},{name:"Orange",calories:85,image:"https://i.imgur.com/abKGOcv.jpg",quantity:0},{name:"Banana",calories:175,image:"https://i.imgur.com/BMdJhu5.jpg",quantity:0},{name:"Yogurt",calories:125,image:"https://i.imgur.com/URhdrAm.png",quantity:0}]),j=w,q=function(){function l(){this.pleaseDeleteMeEvent=new x.m}return l.prototype.addProduct=function(l,n){j.splice(0,0,{name:l.value,calories:n.value,image:"",quantity:0}),this.pleaseDeleteMeEvent.emit()},l.ctorParameters=function(){return[]},l}(),I=[k],D=x._5({encapsulation:0,styles:I,data:{}}),E=(x._3("add-food",q,e,{},{pleaseDeleteMeEvent:"pleaseDeleteMeEvent"},[]),function(){function l(){this.foods=[],this.isOn=!1,this.foods=j}return l.prototype.onSelect=function(l){this.selectedFood=l},l.prototype.addQty=function(l){l.quantity++},l.prototype.changeQty=function(l,n){n.quantity=l.target.value},l.prototype.deleteHandler=function(){this.isOn=!1},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),S=u("bm2B"),$=u("qbdv"),N=function(){function l(){}return l.prototype.transform=function(l,n,u){if(!l)return[];if(!u)return l;var t=new RegExp(u,"i");return l.filter(function(l){return l[n].match(t)})},l}(),Q=["input[type=number][_ngcontent-%COMP%]{width:4rem;padding:.5rem 0 .5rem .5rem}#detail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1rem}#container[_ngcontent-%COMP%]{border:1px solid;padding:1rem;margin:1rem}"],F=function(){function l(){}return l}(),G=[Q],T=x._5({encapsulation:0,styles:G,data:{}}),z=(x._3("food-detail",F,a,{food:"food"},{},[]),["#container[_ngcontent-%COMP%]{border:1px solid;padding:1rem;margin:1rem}ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2}li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:10px}#totals[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:700}"]),A=function(){function l(){}return l.prototype.transform=function(l,n){return l.filter(function(l){return l.quantity>0})},l}(),B=function(){function l(){this.foods=[],this.foods=j}return l.prototype.findSum=function(){var l=0;return this.foods.forEach(function(n){l+=n.quantity*n.calories,console.log(l)}),l},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),H=[z],R=x._5({encapsulation:0,styles:H,data:{}}),W=(x._3("today-foods",B,f,{},{},[]),[P]),J=x._5({encapsulation:0,styles:W,data:{}}),U=(x._3("app-food-list",E,h,{},{},[]),[O]),L=x._5({encapsulation:0,styles:U,data:{}}),V=x._3("app-root",M,b,{},{},[]),K=u("fc+i"),Y=u("CPp0"),X=x._4(v,[M],function(l){return x._19([x._20(512,x.i,x._0,[[8,[V]],[3,x.i],x.x]),x._20(5120,x.v,x._18,[[3,x.v]]),x._20(4608,$.f,$.e,[x.v]),x._20(4608,x.h,x.h,[]),x._20(5120,x.a,x._9,[]),x._20(5120,x.t,x._15,[]),x._20(5120,x.u,x._16,[]),x._20(4608,K.b,K.s,[$.b]),x._20(6144,x.J,null,[K.b]),x._20(4608,K.e,K.f,[]),x._20(5120,K.c,function(l,n,u,t){return[new K.k(l),new K.o(n),new K.n(u,t)]},[$.b,$.b,$.b,K.e]),x._20(4608,K.d,K.d,[K.c,x.z]),x._20(135680,K.m,K.m,[$.b]),x._20(4608,K.l,K.l,[K.d,K.m]),x._20(6144,x.H,null,[K.l]),x._20(6144,K.p,null,[K.m]),x._20(4608,x.O,x.O,[x.z]),x._20(4608,K.g,K.g,[$.b]),x._20(4608,K.i,K.i,[$.b]),x._20(4608,S.j,S.j,[]),x._20(4608,Y.c,Y.c,[]),x._20(4608,Y.g,Y.b,[]),x._20(5120,Y.i,Y.j,[]),x._20(4608,Y.h,Y.h,[Y.c,Y.g,Y.i]),x._20(4608,Y.f,Y.a,[]),x._20(5120,Y.d,Y.k,[Y.h,Y.f]),x._20(512,$.a,$.a,[]),x._20(1024,x.l,K.q,[]),x._20(1024,x.b,function(l,n){return[K.r(l,n)]},[[2,K.h],[2,x.y]]),x._20(512,x.c,x.c,[[2,x.b]]),x._20(131584,x._7,x._7,[x.z,x._1,x.r,x.l,x.i,x.c]),x._20(2048,x.e,null,[x._7]),x._20(512,x.d,x.d,[x.e]),x._20(512,K.a,K.a,[[3,K.a]]),x._20(512,S.h,S.h,[]),x._20(512,S.c,S.c,[]),x._20(512,Y.e,Y.e,[]),x._20(512,v,v,[])])});C.production&&Object(x.U)(),Object(K.j)().bootstrapModuleFactory(X)},gFIY:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);