(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),o=u(n(0)),a=(u(n(1)),n(18));n(2);function u(e){return e&&e.__esModule?e:{default:e}}n(22);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectMenu:0},n.onClickMenu1=n.onClickMenu1.bind(n),n.onClickMenu2=n.onClickMenu2.bind(n),n.onClickMenu3=n.onClickMenu3.bind(n),n.onClickMenu4=n.onClickMenu4.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"renderToolbar",value:function(){return o.default.createElement(a.Toolbar,null,o.default.createElement("div",{className:"center"},"CSSで見た目を変える"))}},{key:"onClickMenu1",value:function(){this.setState({selectMenu:1})}},{key:"onClickMenu2",value:function(){this.setState({selectMenu:2})}},{key:"onClickMenu3",value:function(){this.setState({selectMenu:3})}},{key:"onClickMenu4",value:function(){this.setState({selectMenu:4})}},{key:"render",value:function(){var e="item",t="hallo";1==this.state.selectMenu&&(e="item-selected",t="hallo-1");var n="item";2==this.state.selectMenu&&(n="item-selected",t="hallo-2");var l="item";3==this.state.selectMenu&&(l="item-selected",t="hallo-3");var u="item";return 4==this.state.selectMenu&&(u="item-selected",t="hallo-4"),o.default.createElement(a.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",{className:"midashi"},"見出しタイトル"),o.default.createElement("p",{className:t},"はろー！"),o.default.createElement("ul",{className:"menu"},o.default.createElement("li",{className:e,onClick:this.onClickMenu1},"メニュー１"),o.default.createElement("li",{className:n,onClick:this.onClickMenu2},"メニュー2"),o.default.createElement("li",{className:l,onClick:this.onClickMenu3},"メニュー3"),o.default.createElement("li",{className:u,onClick:this.onClickMenu4},"メニュー4")))}}]),t}(o.default.Component);t.default=i},22:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n(9);var l=n(11),o=c(n(0)),a=c(n(1)),u=c(n(2)),i=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}n(23),n(24),u.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var r=document.getElementById("app");a.default.render(o.default.createElement(l.AppContainer,null,o.default.createElement(i.default,null)),r)}},[[7,1,2]]]);