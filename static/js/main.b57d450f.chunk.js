(window["webpackJsonpsmart-home"]=window["webpackJsonpsmart-home"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),l=a.n(s),r=a(2),m=a(3),o=a(5),i=a(4),f=a(6),u=a(8),O=a(7),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={isOn:!1},a.toggleSwitch=function(){a.setState({isOn:!a.state.isOn})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isOn?"switchOn":"switchOff";return n.createElement("div",{className:"switch"},n.createElement("button",{className:"rounded-btn ".concat(e),onClick:this.toggleSwitch},n.createElement(O.a,{icon:u.c})))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"device"},n.createElement("div",{className:"flex-layout space-between"},n.createElement("h4",{className:"device-name"},this.props.name),n.createElement(h,null)))}}]),t}(n.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"room"},n.createElement("div",{className:"flex-layout space-between"},n.createElement("h4",{className:"room-name"},this.props.name),n.createElement(h,null)))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={temperature:72,systemOff:!0,heatOn:!1,coolOn:!1,fanOn:!1,fanOff:!1,fanAuto:!0},a.increaseTemp=function(){a.setState({temperature:a.state.temperature+1})},a.decreaseTemp=function(){a.setState({temperature:a.state.temperature-1})},a.resetTemp=function(){a.setState({temperature:72})},a.toggleSystem=function(){a.state.heatOn&&a.setState({heatOn:!1,coolOn:!0,systemOff:!1}),a.state.coolOn&&a.setState({heatOn:!1,coolOn:!1,systemOff:!0}),a.state.systemOff&&a.setState({heatOn:!0,coolOn:!1,systemOff:!1})},a.toggleFan=function(){a.state.fanOn&&a.setState({fanOn:!1,fanOff:!0,fanAuto:!1}),a.state.fanOff&&a.setState({fanOn:!1,fanOff:!1,fanAuto:!0}),a.state.fanAuto&&a.setState({fanOn:!0,fanOff:!1,fanAuto:!1})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.systemOff?"Off":this.state.coolOn?"Cool":"Heat",t=this.state.fanOn?"On":this.state.fanOff?"Off":"Auto";return n.createElement("div",{className:"thermostat"},n.createElement("h1",{className:"current-temp"},this.state.temperature,"\xb0"),n.createElement("div",{className:"flex-layout"},n.createElement("button",{className:"climate-btn",onClick:this.decreaseTemp},n.createElement(O.a,{icon:u.a})),n.createElement("button",{className:"climate-btn",onClick:this.resetTemp},"Reset"),n.createElement("button",{className:"climate-btn",onClick:this.increaseTemp},n.createElement(O.a,{icon:u.b}))),n.createElement("div",{className:"flex-layout"},n.createElement("div",{className:"climate-mode"},n.createElement("p",{className:"climate-details"},e),n.createElement("button",{className:"climate-btn",onClick:this.toggleSystem},"Set Mode")),n.createElement("div",{className:"fan-mode"},n.createElement("p",{className:"climate-details"},t),n.createElement("button",{className:"climate-btn",onClick:this.toggleFan},"Set Fan"))))}}]),t}(n.Component);var d=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"flex-layout"},c.a.createElement("div",{className:"block"},c.a.createElement("h2",null,"Lighting"),c.a.createElement(p,{name:"Living Room"}),c.a.createElement(p,{name:"kitchen"}),c.a.createElement(p,{name:"bedroom"}),c.a.createElement(p,{name:"study"})),c.a.createElement("div",{className:"block"},c.a.createElement("h2",null,"Climate Control"),c.a.createElement(b,null)),c.a.createElement("div",{className:"block"},c.a.createElement("h2",null,"Devices"),c.a.createElement(E,{name:"Wi-fi network"}),c.a.createElement(E,{name:"television"}),c.a.createElement(E,{name:"home security system"}))))};a(23);l.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b57d450f.chunk.js.map