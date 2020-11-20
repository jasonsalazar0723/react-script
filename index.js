function init() {
    var elemDiv = document.createElement('div');
    elemDiv.setAttribute('id', 'root');
    elemDiv.setAttribute("style", "display: none;");
    window.document.body.appendChild(elemDiv);
    var head = document.getElementsByTagName('head')[0];
    var script1 = document.createElement("script");
    var script2 = document.createElement("script");
    var script3 = document.createElement("script");
    var link = document.createElement('link');
    script1.type = "text/javascript";
    script2.type = "text/javascript";
    script3.type = "text/javascript";
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/jasonsalazar0723/react-script/build/static/css/2.b0b5fc8c.chunk.css';
    link.media = 'all';
    head.appendChild(link);
    script1.src = "https://cdn.jsdelivr.net/gh/jasonsalazar0723/react-script@latest/build/static/js/2.6a089dc6.chunk.js"
    script2.src = "https://cdn.jsdelivr.net/gh/jasonsalazar0723/react-script@latest/build/static/js/main.04680fdd.chunk.js"
    script3.innerHTML = `!function(e){function t(t){for(var n,l,f=t[0],i=t[1],a=t[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(t);s.length;)s.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,f=1;f<r.length;f++){var i=r[f];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},u=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var f=this["webpackJsonpselfbook-widget"]=this["webpackJsonpselfbook-widget"]||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var a=0;a<f.length;a++)t(f[a]);var p=i;r()}([])`;
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
}
init();