!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,a=window.wp.blockEditor;(0,e.registerBlockType)("custom-block/contact-details",{edit:function(e){let{attributes:o,setAttributes:r}=e;const{companyName:c,companyEmail:l}=o;return(0,n.createElement)("div",(0,a.useBlockProps)(),(0,n.createElement)("h3",null,(0,t.__)("Company Name","gutenberg-examples")),(0,n.createElement)(a.RichText,{tagName:"p",placeholder:(0,t.__)("Please enter company name","gutenberg-examples"),value:c,onChange:e=>{r({companyName:e})},className:"company-name"}),(0,n.createElement)("h3",null,(0,t.__)("Company Email","gutenberg-examples")),(0,n.createElement)(a.RichText,{tagName:"p",placeholder:(0,t.__)("Please enter company email","gutenberg-examples"),value:l,onChange:e=>{r({companyEmail:e})},className:"company-email"}))},save:function(e){let{attributes:o}=e;const r=a.useBlockProps.save(),{companyName:c,companyEmail:l}=o;return(0,n.createElement)("div",r,(0,n.createElement)("h3",null,(0,t.__)("Company Name","gutenberg-examples")),(0,n.createElement)(a.RichText.Content,{tagName:"p",className:"company-name",value:c}),(0,n.createElement)("h3",null,(0,t.__)("Company Email","gutenberg-examples")),(0,n.createElement)(a.RichText.Content,{tagName:"p",className:"company-email",value:l}))}})}},t={};function a(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=function(n,t,o,r){if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],r=e[u][2];for(var l=!0,m=0;m<t.length;m++)(!1&r||c>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[m])}))?t.splice(m--,1):(l=!1,r<c&&(c=r));if(l){e.splice(u--,1);var i=o();void 0!==i&&(n=i)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,c=t[0],l=t[1],m=t[2],i=0;if(c.some((function(n){return 0!==e[n]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(m)var u=m(a)}for(n&&n(t);i<c.length;i++)r=c[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},t=self.webpackChunkcustom_contact_block=self.webpackChunkcustom_contact_block||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=a.O(void 0,[431],(function(){return a(273)}));o=a.O(o)}();