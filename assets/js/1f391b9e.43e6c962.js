"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6061],{7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var a=t(4164),i=t(1213),s=t(7559),l=t(8778),r=t(5533),c=t(3691),o=t(996),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function f(e){const{content:n}=e,{metadata:{title:t,editUrl:f,description:v,frontMatter:h,unlisted:g,lastUpdatedBy:x,lastUpdatedAt:p},assets:L}=n,{keywords:j,wrapperClassName:N,hide_table_of_contents:C}=h,A=L.image??h.image,b=!!(f||p||x);return(0,u.jsx)(i.e3,{className:(0,a.A)(N??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(i.be,{title:t,description:v,keywords:j,image:A}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!C&&"col--8"),children:[g&&(0,u.jsx)(o.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),b&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:p,lastUpdatedBy:x})]}),!C&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},3691:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(6540),i=t(4164),s=t(6342);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,a.useRef)(void 0),t=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(8774),f=t(4848);function v(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,f.jsxs)("li",{children:[(0,f.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(v);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:d,...u}=e;const v=(0,s.p)(),g=o??v.tableOfContents.minHeadingLevel,x=d??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:l(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return m((0,a.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[i,c,g,x])),(0,f.jsx)(h,{toc:p,className:t,linkClassName:i,...u})}const x={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},p="table-of-contents__link toc-highlight",L="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,f.jsx)("div",{className:(0,i.A)(x.tableOfContents,"thin-scrollbar",n),children:(0,f.jsx)(g,{...t,linkClassName:p,linkActiveClassName:L})})}},996:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var a=t(4164),i=t(1312),s=t(5260),l=t(4848);function r(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),m=t(7293);function u(e){let{className:n}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(u,{...e})]})}}}]);