webpackJsonp([0],{554:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(2),l=_interopRequireDefault(i),u=a(3),r=_interopRequireDefault(u),n=a(4),o=_interopRequireDefault(n),p=a(6),c=_interopRequireDefault(p),s=a(225),f=_interopRequireDefault(s),d=a(5),m=_interopRequireDefault(d),_=a(555),h=_interopRequireDefault(_),y=function(e){function Project(){return(0,r.default)(this,Project),(0,c.default)(this,(Project.__proto__||(0,l.default)(Project)).apply(this,arguments))}return(0,m.default)(Project,e),(0,o.default)(Project,[{key:"componentDidMount",value:function(){(0,f.default)(Project.prototype.__proto__||(0,l.default)(Project.prototype),"componentDidMount",this).call(this),console.log("Here is project!!")}}]),Project}(h.default);t.default=y},555:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(2),l=_interopRequireDefault(i),u=a(3),r=_interopRequireDefault(u),n=a(4),o=_interopRequireDefault(n),p=a(6),c=_interopRequireDefault(p),s=a(5),f=_interopRequireDefault(s),d=a(0),m=_interopRequireDefault(d),_=a(89),h=a(90),y=_interopRequireDefault(h);a(557);var D=window.innerHeight-570;D=D<385?385:D;var g={cardStyle:{width:"1000px",margin:"20px auto 40px auto",minHeight:D+"px"},cardTitleStyle:{textAlign:"center"},chip:{style:{margin:"0 20px",height:"20px"},labelStyle:{fontSize:"12px",lineHeight:"20px"}}},x=function(e){function CustomChip(){return(0,r.default)(this,CustomChip),(0,c.default)(this,(CustomChip.__proto__||(0,l.default)(CustomChip)).apply(this,arguments))}return(0,f.default)(CustomChip,e),(0,o.default)(CustomChip,[{key:"render",value:function(){return m.default.createElement(y.default,{style:g.chip.style,labelStyle:g.chip.labelStyle},this.props.chip)}}]),CustomChip}(d.Component),q=function(e){function PageDetail(e){(0,r.default)(this,PageDetail);var t=(0,c.default)(this,(PageDetail.__proto__||(0,l.default)(PageDetail)).call(this,e));return t.state={fadeIn:!1},t}return(0,f.default)(PageDetail,e),(0,o.default)(PageDetail,[{key:"componentDidMount",value:function(){this.setState({fadeIn:!0})}},{key:"render",value:function(){return m.default.createElement("div",{className:this.state.fadeIn?"pageFadeIn":""},m.default.createElement("div",{className:"PageDetail-wrap"},m.default.createElement(_.Card,{style:g.cardStyle},m.default.createElement(_.CardTitle,{title:"Card title",subtitle:"2017年03月06日 13:48",style:g.cardTitleStyle}),m.default.createElement("div",{className:"PageDetail-label"},m.default.createElement(x,{chip:"Text Chip"}),m.default.createElement(x,{chip:"Text Chip"})),m.default.createElement(_.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."))))}}]),PageDetail}(d.Component);t.default=q},556:function(e,t,a){t=e.exports=a(549)(),t.push([e.i,".PageDetail-wrap .PageDetail-label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.pageFadeIn{-webkit-animation:pageFadeIn .8s ease-in;animation:pageFadeIn .8s ease-in;opacity:1}@-webkit-keyframes pageFadeIn{0%{opacity:0}to{opacity:1}}@keyframes pageFadeIn{0%{opacity:0}to{opacity:1}}",""])},557:function(e,t,a){var i=a(556);"string"==typeof i&&(i=[[e.i,i,""]]);a(550)(i,{});i.locals&&(e.exports=i.locals)}});