webpackJsonp([4],{717:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(664),l=u(r),o=n(668),f=u(o),a=n(669),s=u(a),d=n(673),i=u(d),c=n(692),p=u(c),m=n(332),_=u(m),I=n(485),v=n(571),E=function(e){function t(){return(0,f["default"])(this,t),(0,i["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,p["default"])(t,e),(0,s["default"])(t,[{key:"render",value:function(){var e=this,t=this.props.userInfo,n=t.userInfo,u=t.isLoading,r=t.errorMsg;return _["default"].createElement("div",null,u?"请求信息中......":r||_["default"].createElement("div",null,_["default"].createElement("p",null,"用户信息："),_["default"].createElement("p",null,"用户名：",n.name),_["default"].createElement("p",null,"介绍：",n.intro)),_["default"].createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}}]),t}(m.Component);t["default"]=(0,I.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:v.getUserInfo})(E)}});