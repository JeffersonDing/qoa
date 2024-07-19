import{r as C,j as Ve,a as wu,b as Cd,c as kd}from"./index-YvgnLtMB.js";function Nd(n,e){typeof n=="function"?n(e):n!=null&&(n.current=e)}function Tu(...n){return e=>n.forEach(t=>Nd(t,e))}function bi(...n){return C.useCallback(Tu(...n),n)}var oo=C.forwardRef((n,e)=>{const{children:t,...r}=n,i=C.Children.toArray(t),s=i.find(Vd);if(s){const a=s.props.children,c=i.map(l=>l===s?C.Children.count(a)>1?C.Children.only(null):C.isValidElement(a)?a.props.children:null:l);return Ve.jsx(Os,{...r,ref:e,children:C.isValidElement(a)?C.cloneElement(a,void 0,c):null})}return Ve.jsx(Os,{...r,ref:e,children:t})});oo.displayName="Slot";var Os=C.forwardRef((n,e)=>{const{children:t,...r}=n;if(C.isValidElement(t)){const i=xd(t);return C.cloneElement(t,{...Od(r,t.props),ref:e?Tu(e,i):i})}return C.Children.count(t)>1?C.Children.only(null):null});Os.displayName="SlotClone";var Dd=({children:n})=>Ve.jsx(Ve.Fragment,{children:n});function Vd(n){return C.isValidElement(n)&&n.type===Dd}function Od(n,e){const t={...e};for(const r in e){const i=n[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?t[r]=(...c)=>{s(...c),i(...c)}:i&&(t[r]=i):r==="style"?t[r]={...i,...s}:r==="className"&&(t[r]=[i,s].filter(Boolean).join(" "))}return{...n,...t}}function xd(n){var r,i;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(i=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function Iu(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=Iu(n[e]))&&(r&&(r+=" "),r+=t);else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function Md(){for(var n,e,t=0,r="";t<arguments.length;)(n=arguments[t++])&&(e=Iu(n))&&(r&&(r+=" "),r+=e);return r}const Ja=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,Za=Md,Ld=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return Za(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:s}=e,a=Object.keys(i).map(d=>{const p=t==null?void 0:t[d],g=s==null?void 0:s[d];if(p===null)return null;const E=Ja(p)||Ja(g);return i[d][E]}),c=t&&Object.entries(t).reduce((d,p)=>{let[g,E]=p;return E===void 0||(d[g]=E),d},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((d,p)=>{let{class:g,className:E,...A}=p;return Object.entries(A).every(k=>{let[P,R]=k;return Array.isArray(R)?R.includes({...s,...c}[P]):{...s,...c}[P]===R})?[...d,g,E]:d},[]);return Za(n,a,l,t==null?void 0:t.class,t==null?void 0:t.className)};function bu(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=bu(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Fd(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=bu(n))&&(r&&(r+=" "),r+=e);return r}const ao="-";function Ud(n){const e=jd(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;function i(a){const c=a.split(ao);return c[0]===""&&c.length!==1&&c.shift(),Au(c,e)||Bd(a)}function s(a,c){const l=t[a]||[];return c&&r[a]?[...l,...r[a]]:l}return{getClassGroupId:i,getConflictingClassGroupIds:s}}function Au(n,e){var a;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),i=r?Au(n.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=n.join(ao);return(a=e.validators.find(({validator:c})=>c(s)))==null?void 0:a.classGroupId}const ec=/^\[(.+)\]$/;function Bd(n){if(ec.test(n)){const e=ec.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function jd(n){const{theme:e,prefix:t}=n,r={nextPart:new Map,validators:[]};return qd(Object.entries(n.classGroups),t).forEach(([s,a])=>{xs(a,r,s,e)}),r}function xs(n,e,t,r){n.forEach(i=>{if(typeof i=="string"){const s=i===""?e:tc(e,i);s.classGroupId=t;return}if(typeof i=="function"){if(zd(i)){xs(i(r),e,t,r);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([s,a])=>{xs(a,tc(e,s),t,r)})})}function tc(n,e){let t=n;return e.split(ao).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t}function zd(n){return n.isThemeGetter}function qd(n,e){return e?n.map(([t,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,c])=>[e+a,c])):s);return[t,i]}):n}function $d(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;function i(s,a){t.set(s,a),e++,e>n&&(e=0,r=t,t=new Map)}return{get(s){let a=t.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return i(s,a),a},set(s,a){t.has(s)?t.set(s,a):i(s,a)}}}const Ru="!";function Wd(n){const{separator:e,experimentalParseClassName:t}=n,r=e.length===1,i=e[0],s=e.length;function a(c){const l=[];let d=0,p=0,g;for(let R=0;R<c.length;R++){let O=c[R];if(d===0){if(O===i&&(r||c.slice(R,R+s)===e)){l.push(c.slice(p,R)),p=R+s;continue}if(O==="/"){g=R;continue}}O==="["?d++:O==="]"&&d--}const E=l.length===0?c:c.substring(p),A=E.startsWith(Ru),k=A?E.substring(1):E,P=g&&g>p?g-p:void 0;return{modifiers:l,hasImportantModifier:A,baseClassName:k,maybePostfixModifierPosition:P}}return t?function(l){return t({className:l,parseClassName:a})}:a}function Hd(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e}function Gd(n){return{cache:$d(n.cacheSize),parseClassName:Wd(n),...Ud(n)}}const Kd=/\s+/;function Qd(n,e){const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=new Set;return n.trim().split(Kd).map(a=>{const{modifiers:c,hasImportantModifier:l,baseClassName:d,maybePostfixModifierPosition:p}=t(a);let g=!!p,E=r(g?d.substring(0,p):d);if(!E){if(!g)return{isTailwindClass:!1,originalClassName:a};if(E=r(d),!E)return{isTailwindClass:!1,originalClassName:a};g=!1}const A=Hd(c).join(":");return{isTailwindClass:!0,modifierId:l?A+Ru:A,classGroupId:E,originalClassName:a,hasPostfixModifier:g}}).reverse().filter(a=>{if(!a.isTailwindClass)return!0;const{modifierId:c,classGroupId:l,hasPostfixModifier:d}=a,p=c+l;return s.has(p)?!1:(s.add(p),i(l,d).forEach(g=>s.add(c+g)),!0)}).reverse().map(a=>a.originalClassName).join(" ")}function Xd(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=Su(e))&&(r&&(r+=" "),r+=t);return r}function Su(n){if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=Su(n[r]))&&(t&&(t+=" "),t+=e);return t}function Yd(n,...e){let t,r,i,s=a;function a(l){const d=e.reduce((p,g)=>g(p),n());return t=Gd(d),r=t.cache.get,i=t.cache.set,s=c,c(l)}function c(l){const d=r(l);if(d)return d;const p=Qd(l,t);return i(l,p),p}return function(){return s(Xd.apply(null,arguments))}}function ne(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const Pu=/^\[(?:([a-z-]+):)?(.+)\]$/i,Jd=/^\d+\/\d+$/,Zd=new Set(["px","full","screen"]),ef=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Ke(n){return Nt(n)||Zd.has(n)||Jd.test(n)}function ut(n){return wn(n,"length",ff)}function Nt(n){return!!n&&!Number.isNaN(Number(n))}function Ur(n){return wn(n,"number",Nt)}function qn(n){return!!n&&Number.isInteger(Number(n))}function of(n){return n.endsWith("%")&&Nt(n.slice(0,-1))}function W(n){return Pu.test(n)}function lt(n){return ef.test(n)}const af=new Set(["length","size","percentage"]);function cf(n){return wn(n,af,Cu)}function uf(n){return wn(n,"position",Cu)}const lf=new Set(["image","url"]);function hf(n){return wn(n,lf,mf)}function df(n){return wn(n,"",pf)}function $n(){return!0}function wn(n,e,t){const r=Pu.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1}function ff(n){return tf.test(n)&&!nf.test(n)}function Cu(){return!1}function pf(n){return rf.test(n)}function mf(n){return sf.test(n)}function gf(){const n=ne("colors"),e=ne("spacing"),t=ne("blur"),r=ne("brightness"),i=ne("borderColor"),s=ne("borderRadius"),a=ne("borderSpacing"),c=ne("borderWidth"),l=ne("contrast"),d=ne("grayscale"),p=ne("hueRotate"),g=ne("invert"),E=ne("gap"),A=ne("gradientColorStops"),k=ne("gradientColorStopPositions"),P=ne("inset"),R=ne("margin"),O=ne("opacity"),M=ne("padding"),L=ne("saturate"),B=ne("scale"),H=ne("sepia"),Q=ne("skew"),v=ne("space"),m=ne("translate"),_=()=>["auto","contain","none"],w=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",W,e],T=()=>[W,e],y=()=>["",Ke,ut],Re=()=>["auto",Nt,W],it=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Ht=()=>["solid","dashed","dotted","double","none"],st=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$e=()=>["start","end","center","between","around","evenly","stretch"],We=()=>["","0",W],Sn=()=>["auto","avoid","all","avoid-page","page","left","right","column"],At=()=>[Nt,Ur],Pe=()=>[Nt,W];return{cacheSize:500,separator:":",theme:{colors:[$n],spacing:[Ke,ut],blur:["none","",lt,W],brightness:At(),borderColor:[n],borderRadius:["none","","full",lt,W],borderSpacing:T(),borderWidth:y(),contrast:At(),grayscale:We(),hueRotate:Pe(),invert:We(),gap:T(),gradientColorStops:[n],gradientColorStopPositions:[of,ut],inset:I(),margin:I(),opacity:At(),padding:T(),saturate:At(),scale:At(),sepia:We(),skew:Pe(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[lt]}],"break-after":[{"break-after":Sn()}],"break-before":[{"break-before":Sn()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...it(),W]}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",qn,W]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:We()}],shrink:[{shrink:We()}],order:[{order:["first","last","none",qn,W]}],"grid-cols":[{"grid-cols":[$n]}],"col-start-end":[{col:["auto",{span:["full",qn,W]},W]}],"col-start":[{"col-start":Re()}],"col-end":[{"col-end":Re()}],"grid-rows":[{"grid-rows":[$n]}],"row-start-end":[{row:["auto",{span:[qn,W]},W]}],"row-start":[{"row-start":Re()}],"row-end":[{"row-end":Re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[E]}],"gap-x":[{"gap-x":[E]}],"gap-y":[{"gap-y":[E]}],"justify-content":[{justify:["normal",...$e()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$e(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$e(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[v]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[v]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",W,e]}],"min-w":[{"min-w":[W,e,"min","max","fit"]}],"max-w":[{"max-w":[W,e,"none","full","min","max","fit","prose",{screen:[lt]},lt]}],h:[{h:[W,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[W,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[W,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[W,e,"auto","min","max","fit"]}],"font-size":[{text:["base",lt,ut]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ur]}],"font-family":[{font:[$n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",Nt,Ur]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ke,W]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ht(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ke,ut]}],"underline-offset":[{"underline-offset":["auto",Ke,W]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...it(),uf]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",cf]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},hf]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[A]}],"gradient-via":[{via:[A]}],"gradient-to":[{to:[A]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[...Ht(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:Ht()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...Ht()]}],"outline-offset":[{"outline-offset":[Ke,W]}],"outline-w":[{outline:[Ke,ut]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[Ke,ut]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",lt,df]}],"shadow-color":[{shadow:[$n]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":[...st(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":st()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",lt,W]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[L]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:Pe()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:Pe()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[B]}],"scale-x":[{"scale-x":[B]}],"scale-y":[{"scale-y":[B]}],rotate:[{rotate:[qn,W]}],"translate-x":[{"translate-x":[m]}],"translate-y":[{"translate-y":[m]}],"skew-x":[{"skew-x":[Q]}],"skew-y":[{"skew-y":[Q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Ke,ut,Ur]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const _f=Yd(gf);function yf(...n){return _f(Fd(n))}const Aw=n=>{const[e,t]=n.split("_");return`${e} ${t==="B"?"Business":t==="E"?"Engineering":"Other"}`},Rw=n=>n.endsWith("upenn.edu"),vf=Ld("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ef=C.forwardRef(({className:n,variant:e,size:t,asChild:r=!1,...i},s)=>{const a=r?oo:"button";return Ve.jsx(a,{className:yf(vf({variant:e,size:t,className:n})),ref:s,...i})});Ef.displayName="Button";/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ku=(...n)=>n.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=C.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...c},l)=>C.createElement("svg",{ref:l,...Tf,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:ku("lucide",i),...c},[...a.map(([d,p])=>C.createElement(d,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=(n,e)=>{const t=C.forwardRef(({className:r,...i},s)=>C.createElement(If,{ref:s,iconNode:e,className:ku(`lucide-${wf(n)}`,r),...i}));return t.displayName=`${n}`,t};function ms(n,e,{checkForDefaultPrevented:t=!0}={}){return function(i){if(n==null||n(i),t===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function Pw(n,e){const t=C.createContext(e);function r(s){const{children:a,...c}=s,l=C.useMemo(()=>c,Object.values(c));return Ve.jsx(t.Provider,{value:l,children:a})}function i(s){const a=C.useContext(t);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${n}\``)}return r.displayName=n+"Provider",[r,i]}function Cw(n,e=[]){let t=[];function r(s,a){const c=C.createContext(a),l=t.length;t=[...t,a];function d(g){const{scope:E,children:A,...k}=g,P=(E==null?void 0:E[n][l])||c,R=C.useMemo(()=>k,Object.values(k));return Ve.jsx(P.Provider,{value:R,children:A})}function p(g,E){const A=(E==null?void 0:E[n][l])||c,k=C.useContext(A);if(k)return k;if(a!==void 0)return a;throw new Error(`\`${g}\` must be used within \`${s}\``)}return d.displayName=s+"Provider",[d,p]}const i=()=>{const s=t.map(a=>C.createContext(a));return function(c){const l=(c==null?void 0:c[n])||s;return C.useMemo(()=>({[`__scope${n}`]:{...c,[n]:l}}),[c,l])}};return i.scopeName=n,[r,bf(i,...e)]}function bf(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const a=r.reduce((c,{useScope:l,scopeName:d})=>{const g=l(s)[`__scope${d}`];return{...c,...g}},{});return C.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return t.scopeName=e.scopeName,t}var Af=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ai=Af.reduce((n,e)=>{const t=C.forwardRef((r,i)=>{const{asChild:s,...a}=r,c=s?oo:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Ve.jsx(c,{...a,ref:i})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function Rf(n,e){n&&wu.flushSync(()=>n.dispatchEvent(e))}function Mt(n){const e=C.useRef(n);return C.useEffect(()=>{e.current=n}),C.useMemo(()=>(...t)=>{var r;return(r=e.current)==null?void 0:r.call(e,...t)},[])}function Sf(n,e=globalThis==null?void 0:globalThis.document){const t=Mt(n);C.useEffect(()=>{const r=i=>{i.key==="Escape"&&t(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[t,e])}var Pf="DismissableLayer",Ms="dismissableLayer.update",Cf="dismissableLayer.pointerDownOutside",kf="dismissableLayer.focusOutside",nc,Nu=C.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Nf=C.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:c,...l}=n,d=C.useContext(Nu),[p,g]=C.useState(null),E=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,A]=C.useState({}),k=bi(e,v=>g(v)),P=Array.from(d.layers),[R]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),O=P.indexOf(R),M=p?P.indexOf(p):-1,L=d.layersWithOutsidePointerEventsDisabled.size>0,B=M>=O,H=Of(v=>{const m=v.target,_=[...d.branches].some(w=>w.contains(m));!B||_||(i==null||i(v),a==null||a(v),v.defaultPrevented||c==null||c())},E),Q=xf(v=>{const m=v.target;[...d.branches].some(w=>w.contains(m))||(s==null||s(v),a==null||a(v),v.defaultPrevented||c==null||c())},E);return Sf(v=>{M===d.layers.size-1&&(r==null||r(v),!v.defaultPrevented&&c&&(v.preventDefault(),c()))},E),C.useEffect(()=>{if(p)return t&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(nc=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(p)),d.layers.add(p),rc(),()=>{t&&d.layersWithOutsidePointerEventsDisabled.size===1&&(E.body.style.pointerEvents=nc)}},[p,E,t,d]),C.useEffect(()=>()=>{p&&(d.layers.delete(p),d.layersWithOutsidePointerEventsDisabled.delete(p),rc())},[p,d]),C.useEffect(()=>{const v=()=>A({});return document.addEventListener(Ms,v),()=>document.removeEventListener(Ms,v)},[]),Ve.jsx(Ai.div,{...l,ref:k,style:{pointerEvents:L?B?"auto":"none":void 0,...n.style},onFocusCapture:ms(n.onFocusCapture,Q.onFocusCapture),onBlurCapture:ms(n.onBlurCapture,Q.onBlurCapture),onPointerDownCapture:ms(n.onPointerDownCapture,H.onPointerDownCapture)})});Nf.displayName=Pf;var Df="DismissableLayerBranch",Vf=C.forwardRef((n,e)=>{const t=C.useContext(Nu),r=C.useRef(null),i=bi(e,r);return C.useEffect(()=>{const s=r.current;if(s)return t.branches.add(s),()=>{t.branches.delete(s)}},[t.branches]),Ve.jsx(Ai.div,{...n,ref:i})});Vf.displayName=Df;function Of(n,e=globalThis==null?void 0:globalThis.document){const t=Mt(n),r=C.useRef(!1),i=C.useRef(()=>{});return C.useEffect(()=>{const s=c=>{if(c.target&&!r.current){let l=function(){Du(Cf,t,d,{discrete:!0})};const d={originalEvent:c};c.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),e.removeEventListener("pointerdown",s),e.removeEventListener("click",i.current)}},[e,t]),{onPointerDownCapture:()=>r.current=!0}}function xf(n,e=globalThis==null?void 0:globalThis.document){const t=Mt(n),r=C.useRef(!1);return C.useEffect(()=>{const i=s=>{s.target&&!r.current&&Du(kf,t,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function rc(){const n=new CustomEvent(Ms);document.dispatchEvent(n)}function Du(n,e,t,{discrete:r}){const i=t.originalEvent.target,s=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&i.addEventListener(n,e,{once:!0}),r?Rf(i,s):i.dispatchEvent(s)}var gs=0;function kw(){C.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??ic()),document.body.insertAdjacentElement("beforeend",n[1]??ic()),gs++,()=>{gs===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),gs--}},[])}function ic(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",n}var _s="focusScope.autoFocusOnMount",ys="focusScope.autoFocusOnUnmount",sc={bubbles:!1,cancelable:!0},Mf="FocusScope",Lf=C.forwardRef((n,e)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:s,...a}=n,[c,l]=C.useState(null),d=Mt(i),p=Mt(s),g=C.useRef(null),E=bi(e,P=>l(P)),A=C.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;C.useEffect(()=>{if(r){let P=function(L){if(A.paused||!c)return;const B=L.target;c.contains(B)?g.current=B:dt(g.current,{select:!0})},R=function(L){if(A.paused||!c)return;const B=L.relatedTarget;B!==null&&(c.contains(B)||dt(g.current,{select:!0}))},O=function(L){if(document.activeElement===document.body)for(const H of L)H.removedNodes.length>0&&dt(c)};document.addEventListener("focusin",P),document.addEventListener("focusout",R);const M=new MutationObserver(O);return c&&M.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",P),document.removeEventListener("focusout",R),M.disconnect()}}},[r,c,A.paused]),C.useEffect(()=>{if(c){ac.add(A);const P=document.activeElement;if(!c.contains(P)){const O=new CustomEvent(_s,sc);c.addEventListener(_s,d),c.dispatchEvent(O),O.defaultPrevented||(Ff(qf(Vu(c)),{select:!0}),document.activeElement===P&&dt(c))}return()=>{c.removeEventListener(_s,d),setTimeout(()=>{const O=new CustomEvent(ys,sc);c.addEventListener(ys,p),c.dispatchEvent(O),O.defaultPrevented||dt(P??document.body,{select:!0}),c.removeEventListener(ys,p),ac.remove(A)},0)}}},[c,d,p,A]);const k=C.useCallback(P=>{if(!t&&!r||A.paused)return;const R=P.key==="Tab"&&!P.altKey&&!P.ctrlKey&&!P.metaKey,O=document.activeElement;if(R&&O){const M=P.currentTarget,[L,B]=Uf(M);L&&B?!P.shiftKey&&O===B?(P.preventDefault(),t&&dt(L,{select:!0})):P.shiftKey&&O===L&&(P.preventDefault(),t&&dt(B,{select:!0})):O===M&&P.preventDefault()}},[t,r,A.paused]);return Ve.jsx(Ai.div,{tabIndex:-1,...a,ref:E,onKeyDown:k})});Lf.displayName=Mf;function Ff(n,{select:e=!1}={}){const t=document.activeElement;for(const r of n)if(dt(r,{select:e}),document.activeElement!==t)return}function Uf(n){const e=Vu(n),t=oc(e,n),r=oc(e.reverse(),n);return[t,r]}function Vu(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function oc(n,e){for(const t of n)if(!Bf(t,{upTo:e}))return t}function Bf(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function jf(n){return n instanceof HTMLInputElement&&"select"in n}function dt(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&jf(n)&&e&&n.select()}}var ac=zf();function zf(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=cc(n,e),n.unshift(e)},remove(e){var t;n=cc(n,e),(t=n[0])==null||t.resume()}}}function cc(n,e){const t=[...n],r=t.indexOf(e);return r!==-1&&t.splice(r,1),t}function qf(n){return n.filter(e=>e.tagName!=="A")}var oi=globalThis!=null&&globalThis.document?C.useLayoutEffect:()=>{},$f=Cd.useId||(()=>{}),Wf=0;function Nw(n){const[e,t]=C.useState($f());return oi(()=>{t(r=>r??String(Wf++))},[n]),e?`radix-${e}`:""}var Hf="Portal",Gf=C.forwardRef((n,e)=>{var c;const{container:t,...r}=n,[i,s]=C.useState(!1);oi(()=>s(!0),[]);const a=t||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return a?kd.createPortal(Ve.jsx(Ai.div,{...r,ref:e}),a):null});Gf.displayName=Hf;function Kf(n,e){return C.useReducer((t,r)=>e[t][r]??t,n)}var Qf=n=>{const{present:e,children:t}=n,r=Xf(e),i=typeof t=="function"?t({present:r.isPresent}):C.Children.only(t),s=bi(r.ref,Yf(i));return typeof t=="function"||r.isPresent?C.cloneElement(i,{ref:s}):null};Qf.displayName="Presence";function Xf(n){const[e,t]=C.useState(),r=C.useRef({}),i=C.useRef(n),s=C.useRef("none"),a=n?"mounted":"unmounted",[c,l]=Kf(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return C.useEffect(()=>{const d=Br(r.current);s.current=c==="mounted"?d:"none"},[c]),oi(()=>{const d=r.current,p=i.current;if(p!==n){const E=s.current,A=Br(d);n?l("MOUNT"):A==="none"||(d==null?void 0:d.display)==="none"?l("UNMOUNT"):l(p&&E!==A?"ANIMATION_OUT":"UNMOUNT"),i.current=n}},[n,l]),oi(()=>{if(e){const d=g=>{const A=Br(r.current).includes(g.animationName);g.target===e&&A&&wu.flushSync(()=>l("ANIMATION_END"))},p=g=>{g.target===e&&(s.current=Br(r.current))};return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:C.useCallback(d=>{d&&(r.current=getComputedStyle(d)),t(d)},[])}}function Br(n){return(n==null?void 0:n.animationName)||"none"}function Yf(n){var r,i;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(i=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function Dw({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,i]=Jf({defaultProp:e,onChange:t}),s=n!==void 0,a=s?n:r,c=Mt(t),l=C.useCallback(d=>{if(s){const g=typeof d=="function"?d(n):d;g!==n&&c(g)}else i(d)},[s,n,i,c]);return[a,l]}function Jf({defaultProp:n,onChange:e}){const t=C.useState(n),[r]=t,i=C.useRef(r),s=Mt(e);return C.useEffect(()=>{i.current!==r&&(s(r),i.current=r)},[r,i,s]),t}var Zf=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Yt=new WeakMap,jr=new WeakMap,zr={},vs=0,Ou=function(n){return n&&(n.host||Ou(n.parentNode))},ep=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=Ou(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},tp=function(n,e,t,r){var i=ep(e,Array.isArray(n)?n:[n]);zr[t]||(zr[t]=new WeakMap);var s=zr[t],a=[],c=new Set,l=new Set(i),d=function(g){!g||c.has(g)||(c.add(g),d(g.parentNode))};i.forEach(d);var p=function(g){!g||l.has(g)||Array.prototype.forEach.call(g.children,function(E){if(c.has(E))p(E);else try{var A=E.getAttribute(r),k=A!==null&&A!=="false",P=(Yt.get(E)||0)+1,R=(s.get(E)||0)+1;Yt.set(E,P),s.set(E,R),a.push(E),P===1&&k&&jr.set(E,!0),R===1&&E.setAttribute(t,"true"),k||E.setAttribute(r,"true")}catch(O){console.error("aria-hidden: cannot operate on ",E,O)}})};return p(e),c.clear(),vs++,function(){a.forEach(function(g){var E=Yt.get(g)-1,A=s.get(g)-1;Yt.set(g,E),s.set(g,A),E||(jr.has(g)||g.removeAttribute(r),jr.delete(g)),A||g.removeAttribute(t)}),vs--,vs||(Yt=new WeakMap,Yt=new WeakMap,jr=new WeakMap,zr={})}},Vw=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),i=Zf(n);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),tp(r,i,t,"aria-hidden")):function(){return null}},Me=function(){return Me=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Me.apply(this,arguments)};function ur(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function np(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}var Xr="right-scroll-bar-position",Yr="width-before-scroll-bar",rp="with-scroll-bars-hidden",ip="--removed-body-scroll-bar-size";function Es(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function sp(n,e){var t=C.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var i=t.value;i!==r&&(t.value=r,t.callback(r,i))}}}})[0];return t.callback=e,t.facade}var op=typeof window<"u"?C.useLayoutEffect:C.useEffect,uc=new WeakMap;function ap(n,e){var t=sp(null,function(r){return n.forEach(function(i){return Es(i,r)})});return op(function(){var r=uc.get(t);if(r){var i=new Set(r),s=new Set(n),a=t.current;i.forEach(function(c){s.has(c)||Es(c,null)}),s.forEach(function(c){i.has(c)||Es(c,a)})}uc.set(t,n)},[n]),t}function cp(n){return n}function up(n,e){e===void 0&&(e=cp);var t=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(s){var a=e(s,r);return t.push(a),function(){t=t.filter(function(c){return c!==a})}},assignSyncMedium:function(s){for(r=!0;t.length;){var a=t;t=[],a.forEach(s)}t={push:function(c){return s(c)},filter:function(){return t}}},assignMedium:function(s){r=!0;var a=[];if(t.length){var c=t;t=[],c.forEach(s),a=t}var l=function(){var p=a;a=[],p.forEach(s)},d=function(){return Promise.resolve().then(l)};d(),t={push:function(p){a.push(p),d()},filter:function(p){return a=a.filter(p),t}}}};return i}function lp(n){n===void 0&&(n={});var e=up(null);return e.options=Me({async:!0,ssr:!1},n),e}var xu=function(n){var e=n.sideCar,t=ur(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return C.createElement(r,Me({},t))};xu.isSideCarExport=!0;function hp(n,e){return n.useMedium(e),xu}var Mu=lp(),ws=function(){},Ri=C.forwardRef(function(n,e){var t=C.useRef(null),r=C.useState({onScrollCapture:ws,onWheelCapture:ws,onTouchMoveCapture:ws}),i=r[0],s=r[1],a=n.forwardProps,c=n.children,l=n.className,d=n.removeScrollBar,p=n.enabled,g=n.shards,E=n.sideCar,A=n.noIsolation,k=n.inert,P=n.allowPinchZoom,R=n.as,O=R===void 0?"div":R,M=n.gapMode,L=ur(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),B=E,H=ap([t,e]),Q=Me(Me({},L),i);return C.createElement(C.Fragment,null,p&&C.createElement(B,{sideCar:Mu,removeScrollBar:d,shards:g,noIsolation:A,inert:k,setCallbacks:s,allowPinchZoom:!!P,lockRef:t,gapMode:M}),a?C.cloneElement(C.Children.only(c),Me(Me({},Q),{ref:H})):C.createElement(O,Me({},Q,{className:l,ref:H}),c))});Ri.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ri.classNames={fullWidth:Yr,zeroRight:Xr};var dp=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function fp(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=dp();return e&&n.setAttribute("nonce",e),n}function pp(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function mp(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var gp=function(){var n=0,e=null;return{add:function(t){n==0&&(e=fp())&&(pp(e,t),mp(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},_p=function(){var n=gp();return function(e,t){C.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},Lu=function(){var n=_p(),e=function(t){var r=t.styles,i=t.dynamic;return n(r,i),null};return e},yp={left:0,top:0,right:0,gap:0},Ts=function(n){return parseInt(n||"",10)||0},vp=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],i=e[n==="padding"?"paddingRight":"marginRight"];return[Ts(t),Ts(r),Ts(i)]},Ep=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return yp;var e=vp(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},wp=Lu(),rn="data-scroll-locked",Tp=function(n,e,t,r){var i=n.left,s=n.top,a=n.right,c=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(rp,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(rn,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Xr,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Yr,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Xr," .").concat(Xr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Yr," .").concat(Yr,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(rn,`] {
    `).concat(ip,": ").concat(c,`px;
  }
`)},lc=function(){var n=parseInt(document.body.getAttribute(rn)||"0",10);return isFinite(n)?n:0},Ip=function(){C.useEffect(function(){return document.body.setAttribute(rn,(lc()+1).toString()),function(){var n=lc()-1;n<=0?document.body.removeAttribute(rn):document.body.setAttribute(rn,n.toString())}},[])},bp=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,i=r===void 0?"margin":r;Ip();var s=C.useMemo(function(){return Ep(i)},[i]);return C.createElement(wp,{styles:Tp(s,!e,i,t?"":"!important")})},Ls=!1;if(typeof window<"u")try{var qr=Object.defineProperty({},"passive",{get:function(){return Ls=!0,!0}});window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Ls=!1}var Jt=Ls?{passive:!1}:!1,Ap=function(n){return n.tagName==="TEXTAREA"},Fu=function(n,e){var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!Ap(n)&&t[e]==="visible")},Rp=function(n){return Fu(n,"overflowY")},Sp=function(n){return Fu(n,"overflowX")},hc=function(n,e){var t=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Uu(n,r);if(i){var s=Bu(n,r),a=s[1],c=s[2];if(a>c)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},Pp=function(n){var e=n.scrollTop,t=n.scrollHeight,r=n.clientHeight;return[e,t,r]},Cp=function(n){var e=n.scrollLeft,t=n.scrollWidth,r=n.clientWidth;return[e,t,r]},Uu=function(n,e){return n==="v"?Rp(e):Sp(e)},Bu=function(n,e){return n==="v"?Pp(e):Cp(e)},kp=function(n,e){return n==="h"&&e==="rtl"?-1:1},Np=function(n,e,t,r,i){var s=kp(n,window.getComputedStyle(e).direction),a=s*r,c=t.target,l=e.contains(c),d=!1,p=a>0,g=0,E=0;do{var A=Bu(n,c),k=A[0],P=A[1],R=A[2],O=P-R-s*k;(k||O)&&Uu(n,c)&&(g+=O,E+=k),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(e.contains(c)||e===c));return(p&&(Math.abs(g)<1||!i)||!p&&(Math.abs(E)<1||!i))&&(d=!0),d},$r=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},dc=function(n){return[n.deltaX,n.deltaY]},fc=function(n){return n&&"current"in n?n.current:n},Dp=function(n,e){return n[0]===e[0]&&n[1]===e[1]},Vp=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},Op=0,Zt=[];function xp(n){var e=C.useRef([]),t=C.useRef([0,0]),r=C.useRef(),i=C.useState(Op++)[0],s=C.useState(Lu)[0],a=C.useRef(n);C.useEffect(function(){a.current=n},[n]),C.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(i));var P=np([n.lockRef.current],(n.shards||[]).map(fc),!0).filter(Boolean);return P.forEach(function(R){return R.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),P.forEach(function(R){return R.classList.remove("allow-interactivity-".concat(i))})}}},[n.inert,n.lockRef.current,n.shards]);var c=C.useCallback(function(P,R){if("touches"in P&&P.touches.length===2)return!a.current.allowPinchZoom;var O=$r(P),M=t.current,L="deltaX"in P?P.deltaX:M[0]-O[0],B="deltaY"in P?P.deltaY:M[1]-O[1],H,Q=P.target,v=Math.abs(L)>Math.abs(B)?"h":"v";if("touches"in P&&v==="h"&&Q.type==="range")return!1;var m=hc(v,Q);if(!m)return!0;if(m?H=v:(H=v==="v"?"h":"v",m=hc(v,Q)),!m)return!1;if(!r.current&&"changedTouches"in P&&(L||B)&&(r.current=H),!H)return!0;var _=r.current||H;return Np(_,R,P,_==="h"?L:B,!0)},[]),l=C.useCallback(function(P){var R=P;if(!(!Zt.length||Zt[Zt.length-1]!==s)){var O="deltaY"in R?dc(R):$r(R),M=e.current.filter(function(H){return H.name===R.type&&(H.target===R.target||R.target===H.shadowParent)&&Dp(H.delta,O)})[0];if(M&&M.should){R.cancelable&&R.preventDefault();return}if(!M){var L=(a.current.shards||[]).map(fc).filter(Boolean).filter(function(H){return H.contains(R.target)}),B=L.length>0?c(R,L[0]):!a.current.noIsolation;B&&R.cancelable&&R.preventDefault()}}},[]),d=C.useCallback(function(P,R,O,M){var L={name:P,delta:R,target:O,should:M,shadowParent:Mp(O)};e.current.push(L),setTimeout(function(){e.current=e.current.filter(function(B){return B!==L})},1)},[]),p=C.useCallback(function(P){t.current=$r(P),r.current=void 0},[]),g=C.useCallback(function(P){d(P.type,dc(P),P.target,c(P,n.lockRef.current))},[]),E=C.useCallback(function(P){d(P.type,$r(P),P.target,c(P,n.lockRef.current))},[]);C.useEffect(function(){return Zt.push(s),n.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:E}),document.addEventListener("wheel",l,Jt),document.addEventListener("touchmove",l,Jt),document.addEventListener("touchstart",p,Jt),function(){Zt=Zt.filter(function(P){return P!==s}),document.removeEventListener("wheel",l,Jt),document.removeEventListener("touchmove",l,Jt),document.removeEventListener("touchstart",p,Jt)}},[]);var A=n.removeScrollBar,k=n.inert;return C.createElement(C.Fragment,null,k?C.createElement(s,{styles:Vp(i)}):null,A?C.createElement(bp,{gapMode:n.gapMode}):null)}function Mp(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const Lp=hp(Mu,xp);var Fp=C.forwardRef(function(n,e){return C.createElement(Ri,Me({},n,{ref:e,sideCar:Lp}))});Fp.classNames=Ri.classNames;var pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Up=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let E=(c&15)<<2|d>>6,A=d&63;l||(A=64,a||(E=64)),r.push(t[p],t[g],t[E],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Up(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||g==null)throw new Bp;const E=s<<2|c>>4;if(r.push(E),d!==64){const A=c<<4&240|d>>2;if(r.push(A),g!==64){const k=d<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jp=function(n){const e=ju(n);return zu.encodeByteArray(e,!0)},ai=function(n){return jp(n).replace(/\./g,"")},qu=function(n){try{return zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=()=>zp().__FIREBASE_DEFAULTS__,$p=()=>{if(typeof process>"u"||typeof pc>"u")return;const n=pc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qu(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return qp()||$p()||Wp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$u=n=>{var e,t;return(t=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hp=n=>{const e=$u(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wu=()=>{var n;return(n=Si())===null||n===void 0?void 0:n.config},Hu=n=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ai(JSON.stringify(t)),ai(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Xp(){var n;const e=(n=Si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zp(){const n=me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function em(){return!Xp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tm(){try{return typeof indexedDB=="object"}catch{return!1}}function nm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rm,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?im(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new rt(i,c,r)}}function im(n,e){return n.replace(sm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sm=/\{\$([^}]+)}/g;function om(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(mc(s)&&mc(a)){if(!ci(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function mc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function am(n,e){const t=new cm(n,e);return t.subscribe.bind(t)}class cm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");um(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function um(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}class Lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dm(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hm(n){return n===kt?void 0:n}function dm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const pm={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},mm=K.INFO,gm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},_m=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class co{constructor(e){this.name=e,this._logLevel=mm,this._logHandler=_m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const ym=(n,e)=>e.some(t=>n instanceof t);let gc,_c;function vm(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Em(){return _c||(_c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gu=new WeakMap,Fs=new WeakMap,Ku=new WeakMap,bs=new WeakMap,uo=new WeakMap;function wm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(_t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Gu.set(t,n)}).catch(()=>{}),uo.set(e,n),e}function Tm(n){if(Fs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Fs.set(n,e)}let Us={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ku.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Im(n){Us=n(Us)}function bm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(As(this),e,...t);return Ku.set(r,e.sort?e.sort():[e]),_t(r)}:Em().includes(n)?function(...e){return n.apply(As(this),e),_t(Gu.get(this))}:function(...e){return _t(n.apply(As(this),e))}}function Am(n){return typeof n=="function"?bm(n):(n instanceof IDBTransaction&&Tm(n),ym(n,vm())?new Proxy(n,Us):n)}function _t(n){if(n instanceof IDBRequest)return wm(n);if(bs.has(n))return bs.get(n);const e=Am(n);return e!==n&&(bs.set(n,e),uo.set(e,n)),e}const As=n=>uo.get(n);function Rm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=_t(a);return r&&a.addEventListener("upgradeneeded",l=>{r(_t(a.result),l.oldVersion,l.newVersion,_t(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Sm=["get","getKey","getAll","getAllKeys","count"],Pm=["put","add","delete","clear"],Rs=new Map;function yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Pm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sm.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Rs.set(e,s),s}Im(n=>({...n,get:(e,t,r)=>yc(e,t)||n.get(e,t,r),has:(e,t)=>!!yc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(km(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function km(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bs="@firebase/app",vc="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new co("@firebase/app"),Nm="@firebase/app-compat",Dm="@firebase/analytics-compat",Vm="@firebase/analytics",Om="@firebase/app-check-compat",xm="@firebase/app-check",Mm="@firebase/auth",Lm="@firebase/auth-compat",Fm="@firebase/database",Um="@firebase/database-compat",Bm="@firebase/functions",jm="@firebase/functions-compat",zm="@firebase/installations",qm="@firebase/installations-compat",$m="@firebase/messaging",Wm="@firebase/messaging-compat",Hm="@firebase/performance",Gm="@firebase/performance-compat",Km="@firebase/remote-config",Qm="@firebase/remote-config-compat",Xm="@firebase/storage",Ym="@firebase/storage-compat",Jm="@firebase/firestore",Zm="@firebase/vertexai-preview",eg="@firebase/firestore-compat",tg="firebase",ng="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]",rg={[Bs]:"fire-core",[Nm]:"fire-core-compat",[Vm]:"fire-analytics",[Dm]:"fire-analytics-compat",[xm]:"fire-app-check",[Om]:"fire-app-check-compat",[Mm]:"fire-auth",[Lm]:"fire-auth-compat",[Fm]:"fire-rtdb",[Um]:"fire-rtdb-compat",[Bm]:"fire-fn",[jm]:"fire-fn-compat",[zm]:"fire-iid",[qm]:"fire-iid-compat",[$m]:"fire-fcm",[Wm]:"fire-fcm-compat",[Hm]:"fire-perf",[Gm]:"fire-perf-compat",[Km]:"fire-rc",[Qm]:"fire-rc-compat",[Xm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Jm]:"fire-fst",[eg]:"fire-fst-compat",[Zm]:"fire-vertex","fire-js":"fire-js",[tg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Map,ig=new Map,zs=new Map;function Ec(n,e){try{n.container.addComponent(e)}catch(t){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){const e=n.name;if(zs.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,n);for(const t of ui.values())Ec(t,n);for(const t of ig.values())Ec(t,n);return!0}function lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new lr("app","Firebase",sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=ng;function Qu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:js,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=Wu()),!t)throw yt.create("no-options");const s=ui.get(i);if(s){if(ci(t,s.options)&&ci(r,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const a=new fm(i);for(const l of zs.values())a.addComponent(l);const c=new og(t,r,a);return ui.set(i,c),c}function Xu(n=js){const e=ui.get(n);if(!e&&n===js&&Wu())return Qu();if(!e)throw yt.create("no-app",{appName:n});return e}function vt(n,e,t){var r;let i=(r=rg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(c.join(" "));return}un(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebase-heartbeat-database",cg=1,er="firebase-heartbeat-store";let Ss=null;function Yu(){return Ss||(Ss=Rm(ag,cg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(er)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function ug(n){try{const t=(await Yu()).transaction(er),r=await t.objectStore(er).get(Ju(n));return await t.done,r}catch(e){if(e instanceof rt)Ft.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(t.message)}}}async function wc(n,e){try{const r=(await Yu()).transaction(er,"readwrite");await r.objectStore(er).put(e,Ju(n)),await r.done}catch(t){if(t instanceof rt)Ft.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(r.message)}}}function Ju(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=1024,hg=30*24*60*60*1e3;class dg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=hg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tc(),{heartbeatsToSend:r,unsentEntries:i}=fg(this._heartbeatsCache.heartbeats),s=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Tc(){return new Date().toISOString().substring(0,10)}function fg(n,e=lg){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ic(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ic(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tm()?nm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ug(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ic(n){return ai(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){un(new Lt("platform-logger",e=>new Cm(e),"PRIVATE")),un(new Lt("heartbeat",e=>new dg(e),"PRIVATE")),vt(Bs,vc,n),vt(Bs,vc,"esm2017"),vt("fire-js","")}mg("");var gg="firebase",_g="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(gg,_g,"app");function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yg=Zu,el=new lr("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new co("@firebase/auth");function vg(n,...e){li.logLevel<=K.WARN&&li.warn(`Auth (${Tn}): ${n}`,...e)}function Jr(n,...e){li.logLevel<=K.ERROR&&li.error(`Auth (${Tn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,...e){throw fo(n,...e)}function xe(n,...e){return fo(n,...e)}function ho(n,e,t){const r=Object.assign(Object.assign({},yg()),{[e]:t});return new lr("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return ho(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(n,"argument-error"),ho(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return el.create(n,...e)}function j(n,e,...t){if(!n)throw fo(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jr(e),new Error(e)}function et(n,e){n||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wg(){return bc()==="http:"||bc()==="https:"}function bc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||Yp()||"connection"in navigator)?navigator.onLine:!0}function Ig(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Qp()||Jp()}get(){return Tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new dr(3e4,6e4);function mo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function In(n,e,t,r,i={}){return nl(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=hr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),tl.fetch()(rl(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function nl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bg),e);try{const i=new Sg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Wr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Wr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Wr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ho(n,p,d);je(n,p)}}catch(i){if(i instanceof rt)throw i;je(n,"network-request-failed",{message:String(i)})}}async function Rg(n,e,t,r,i={}){const s=await In(n,e,t,r,i);return"mfaPendingCredential"in s&&je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function rl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?po(n.config,i):`${n.config.apiScheme}://${i}`}class Sg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),Ag.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=xe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(n,e){return In(n,"POST","/v1/accounts:delete",e)}async function il(n,e){return In(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cg(n,e=!1){const t=De(n),r=await t.getIdToken(e),i=go(r);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qn(Ps(i.auth_time)),issuedAtTime:Qn(Ps(i.iat)),expirationTime:Qn(Ps(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ps(n){return Number(n)*1e3}function go(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=qu(t);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ac(n){const e=go(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&kg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await tr(n,il(t,{idToken:r}));j(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sl(s.providerUserInfo):[],c=Vg(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=l?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new $s(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Dg(n){const e=De(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sl(n){return n.map(e=>{var{providerId:t}=e,r=ur(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(n,e){const t=await nl(n,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=rl(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",tl.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xg(n,e){return In(n,"POST","/v2/accounts:revokeToken",mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Og(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new sn;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $s(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cg(this,e)}reload(){return Dg(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await tr(this,Pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:L,emailVerified:B,isAnonymous:H,providerData:Q,stsTokenManager:v}=t;j(L&&v,e,"internal-error");const m=sn.fromJSON(this.name,v);j(typeof L=="string",e,"internal-error"),ht(g,e.name),ht(E,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof H=="boolean",e,"internal-error"),ht(A,e.name),ht(k,e.name),ht(P,e.name),ht(R,e.name),ht(O,e.name),ht(M,e.name);const _=new Je({uid:L,auth:e,email:E,emailVerified:B,displayName:g,isAnonymous:H,photoURL:k,phoneNumber:A,tenantId:P,stsTokenManager:m,createdAt:O,lastLoginAt:M});return Q&&Array.isArray(Q)&&(_.providerData=Q.map(w=>Object.assign({},w))),R&&(_._redirectEventId=R),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new sn;i.updateFromServerResponse(t);const s=new Je({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new sn;c.updateFromIdToken(r);const l=new Je({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $s(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;function Ze(n){et(n instanceof Function,"Expected a class definition");let e=Rc.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ol.type="NONE";const Sc=ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n,e,t){return`firebase:${n}:${e}:${t}`}class on{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new on(Ze(Sc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Ze(Sc);const a=Zr(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const g=Je._fromJSON(e,p);d!==s&&(c=g),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new on(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new on(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ul(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hl(e))return"Blackberry";if(dl(e))return"Webos";if(_o(e))return"Safari";if((e.includes("chrome/")||cl(e))&&!e.includes("edge/"))return"Chrome";if(ll(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function al(n=me()){return/firefox\//i.test(n)}function _o(n=me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cl(n=me()){return/crios\//i.test(n)}function ul(n=me()){return/iemobile/i.test(n)}function ll(n=me()){return/android/i.test(n)}function hl(n=me()){return/blackberry/i.test(n)}function dl(n=me()){return/webos/i.test(n)}function Pi(n=me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mg(n=me()){var e;return Pi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lg(){return Zp()&&document.documentMode===10}function fl(n=me()){return Pi(n)||ll(n)||dl(n)||hl(n)||/windows phone/i.test(n)||ul(n)}function Fg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,e=[]){let t;switch(n){case"Browser":t=Pc(me());break;case"Worker":t=`${Pc(me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e={}){return In(n,"GET","/v2/passwordPolicy",mo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=6;class zg{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.beforeStateQueue=new Ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=el,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await il(this,{idToken:e}),r=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ig()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Ot(this));const t=e?De(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bg(this),t=new zg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await xg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ze(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ci(n){return De(n)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=am(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $g(n){yo=n}function Wg(n){return yo.loadJS(n)}function Hg(){return yo.gapiScript}function Gg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(n,e){const t=lo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ci(s,e??{}))return i;je(i,"already-initialized")}return t.initialize({options:e})}function Qg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ze);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xg(n,e,t){const r=Ci(n);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ml(e),{host:a,port:c}=Yg(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jg()}function ml(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yg(n){const e=ml(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:kc(a)}}}function kc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,e){return Rg(n,"POST","/v1/accounts:signInWithIdp",mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="http://localhost";class Ut extends gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ur(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ut(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return an(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,an(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,an(e,t)}buildRequest(){const e={requestUri:Zg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends fr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ut._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends fr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends fr{constructor(){super("twitter.com")}static credential(e,t){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Je._fromIdTokenResponse(e,r,i),a=Nc(r);return new ln({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Nc(r);return new ln({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends rt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new di(e,t,r,i)}}function _l(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,s,e,r):s})}async function e_(n,e,t=!1){const r=await tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ln._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const s=await tr(n,_l(r,i,e,n),t);j(s.idToken,r,"internal-error");const a=go(s.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),ln._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&je(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e,t=!1){if(Xe(n.app))return Promise.reject(Ot(n));const r="signIn",i=await _l(n,r,e),s=await ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function r_(n,e,t,r){return De(n).onIdTokenChanged(e,t,r)}function i_(n,e,t){return De(n).beforeAuthStateChanged(e,t)}const fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){const n=me();return _o(n)||Pi(n)}const o_=1e3,a_=10;class vl extends yl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=s_()&&Fg(),this.fallbackToPolling=fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Lg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},o_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vl.type="LOCAL";const c_=vl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends yl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}El.type="SESSION";const wl=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),l=await u_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const d=Eo("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(E.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function h_(n){Le().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function d_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function p_(){return Tl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebaseLocalStorageDb",m_=1,pi="firebaseLocalStorage",bl="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([pi],e?"readwrite":"readonly").objectStore(pi)}function g_(){const n=indexedDB.deleteDatabase(Il);return new pr(n).toPromise()}function Ws(){const n=indexedDB.open(Il,m_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pi,{keyPath:bl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pi)?e(r):(r.close(),await g_(),e(await Ws()))})})}async function Dc(n,e,t){const r=Ni(n,!0).put({[bl]:e,value:t});return new pr(r).toPromise()}async function __(n,e){const t=Ni(n,!1).get(e),r=await new pr(t).toPromise();return r===void 0?null:r.value}function Vc(n,e){const t=Ni(n,!0).delete(e);return new pr(t).toPromise()}const y_=800,v_=3;class Al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ws(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>v_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(p_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await d_(),!this.activeServiceWorker)return;this.sender=new l_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ws();return await Dc(e,fi,"1"),await Vc(e,fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>__(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ni(i,!1).getAll();return new pr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Al.type="LOCAL";const E_=Al;new dr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e){return e?Ze(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,t){return an(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function w_(n){return n_(n.auth,new wo(n),n.bypassAuthState)}function T_(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),t_(t,new wo(n),n.bypassAuthState)}async function I_(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),e_(t,new wo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w_;case"linkViaPopup":case"linkViaRedirect":return I_;case"reauthViaPopup":case"reauthViaRedirect":return T_;default:je(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new dr(2e3,1e4);async function Ow(n,e,t){if(Xe(n.app))return Promise.reject(xe(n,"operation-not-supported-in-this-environment"));const r=Ci(n);Eg(n,e,vo);const i=Rl(r,t);return new Dt(r,"signInViaPopup",e,i).executeNotNull()}class Dt extends Sl{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=Eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b_.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="pendingRedirect",ei=new Map;class R_ extends Sl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const r=await S_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(n,e){const t=k_(e),r=C_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function P_(n,e){ei.set(n._key(),e)}function C_(n){return Ze(n._redirectPersistence)}function k_(n){return Zr(A_,n.config.apiKey,n.name)}async function N_(n,e,t=!1){if(Xe(n.app))return Promise.reject(Ot(n));const r=Ci(n),i=Rl(r,e),a=await new R_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=10*60*1e3;class V_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oc(e))}saveEventToCache(e){this.cachedEventUids.add(Oc(e)),this.lastProcessedEventTime=Date.now()}}function Oc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(n,e={}){return In(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L_=/^https?/;async function F_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await x_(n);for(const t of e)try{if(U_(t))return}catch{}je(n,"unauthorized-domain")}function U_(n){const e=qs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!L_.test(t))return!1;if(M_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new dr(3e4,6e4);function xc(){const n=Le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function j_(n){return new Promise((e,t)=>{var r,i,s;function a(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(xe(n,"network-request-failed"))},timeout:B_.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)a();else{const c=Gg("iframefcb");return Le()[c]=()=>{gapi.load?a():t(xe(n,"network-request-failed"))},Wg(`${Hg()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ti=null,e})}let ti=null;function z_(n){return ti=ti||j_(n),ti}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new dr(5e3,15e3),$_="__/auth/iframe",W_="emulator/auth/iframe",H_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K_(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?po(e,W_):`https://${n.config.authDomain}/${$_}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},i=G_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${hr(r).slice(1)}`}async function Q_(n){const e=await z_(n),t=Le().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:K_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=xe(n,"network-request-failed"),c=Le().setTimeout(()=>{s(a)},q_.get());function l(){Le().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,J_=600,Z_="_blank",ey="http://localhost";class Mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ty(n,e,t,r=Y_,i=J_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},X_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=me().toLowerCase();t&&(c=cl(d)?Z_:t),al(d)&&(e=e||ey,l.scrollbars="yes");const p=Object.entries(l).reduce((E,[A,k])=>`${E}${A}=${k},`,"");if(Mg(d)&&c!=="_self")return ny(e||"",c),new Mc(null);const g=window.open(e||"",c,p);j(g,n,"popup-blocked");try{g.focus()}catch{}return new Mc(g)}function ny(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="__/auth/handler",iy="emulator/auth/handler",sy=encodeURIComponent("fac");async function Lc(n,e,t,r,i,s){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:i};if(e instanceof vo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",om(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof fr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${sy}=${encodeURIComponent(l)}`:"";return`${oy(n)}?${hr(c).slice(1)}${d}`}function oy({config:n}){return n.emulator?po(n,iy):`https://${n.authDomain}/${ry}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class ay{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wl,this._completeRedirectFn=N_,this._overrideRedirectResult=P_}async _openPopup(e,t,r,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Lc(e,t,r,qs(),i);return ty(e,a,Eo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Lc(e,t,r,qs(),i);return h_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Q_(e),r=new V_(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cs,{type:Cs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cs];a!==void 0&&t(!!a),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fl()||_o()||Pi()}}const cy=ay;var Fc="@firebase/auth",Uc="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hy(n){un(new Lt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pl(n)},d=new qg(r,i,s,l);return Qg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new Lt("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(r=>new uy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Fc,Uc,ly(n)),vt(Fc,Uc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=5*60,fy=Hu("authIdTokenMaxAge")||dy;let Bc=null;const py=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fy)return;const i=t==null?void 0:t.token;Bc!==i&&(Bc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function my(n=Xu()){const e=lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kg(n,{popupRedirectResolver:cy,persistence:[E_,c_,wl]}),r=Hu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=py(s.toString());i_(t,a,()=>a(t.currentUser)),r_(t,c=>a(c))}}const i=$u("auth");return i&&Xg(t,`http://${i}`),t}function gy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$g({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=xe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",gy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hy("Browser");var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,Cl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,I,T){for(var y=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)y[Re-2]=arguments[Re];return m.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)w[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],I=v.g[2];var T=v.g[3],y=m+(T^_&(I^T))+w[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=T+(I^m&(_^I))+w[1]+3905402710&4294967295,T=m+(y<<12&4294967295|y>>>20),y=I+(_^T&(m^_))+w[2]+606105819&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(m^I&(T^m))+w[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(T^_&(I^T))+w[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=T+(I^m&(_^I))+w[5]+1200080426&4294967295,T=m+(y<<12&4294967295|y>>>20),y=I+(_^T&(m^_))+w[6]+2821735955&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(m^I&(T^m))+w[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(T^_&(I^T))+w[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=T+(I^m&(_^I))+w[9]+2336552879&4294967295,T=m+(y<<12&4294967295|y>>>20),y=I+(_^T&(m^_))+w[10]+4294925233&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(m^I&(T^m))+w[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(T^_&(I^T))+w[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=T+(I^m&(_^I))+w[13]+4254626195&4294967295,T=m+(y<<12&4294967295|y>>>20),y=I+(_^T&(m^_))+w[14]+2792965006&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(m^I&(T^m))+w[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^T&(_^I))+w[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(m^_))+w[6]+3225465664&4294967295,T=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(T^m))+w[11]+643717713&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^m&(I^T))+w[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^T&(_^I))+w[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(m^_))+w[10]+38016083&4294967295,T=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(T^m))+w[15]+3634488961&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^m&(I^T))+w[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^T&(_^I))+w[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(m^_))+w[14]+3275163606&4294967295,T=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(T^m))+w[3]+4107603335&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^m&(I^T))+w[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^T&(_^I))+w[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(m^_))+w[2]+4243563512&4294967295,T=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(T^m))+w[7]+1735328473&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^m&(I^T))+w[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^T)+w[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=T+(m^_^I)+w[8]+2272392833&4294967295,T=m+(y<<11&4294967295|y>>>21),y=I+(T^m^_)+w[11]+1839030562&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^m)+w[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^T)+w[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=T+(m^_^I)+w[4]+1272893353&4294967295,T=m+(y<<11&4294967295|y>>>21),y=I+(T^m^_)+w[7]+4139469664&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^m)+w[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^T)+w[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=T+(m^_^I)+w[0]+3936430074&4294967295,T=m+(y<<11&4294967295|y>>>21),y=I+(T^m^_)+w[3]+3572445317&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^m)+w[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^T)+w[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=T+(m^_^I)+w[12]+3873151461&4294967295,T=m+(y<<11&4294967295|y>>>21),y=I+(T^m^_)+w[15]+530742520&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^m)+w[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~T))+w[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=T+(_^(m|~I))+w[7]+1126891415&4294967295,T=m+(y<<10&4294967295|y>>>22),y=I+(m^(T|~_))+w[14]+2878612391&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~m))+w[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~T))+w[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=T+(_^(m|~I))+w[3]+2399980690&4294967295,T=m+(y<<10&4294967295|y>>>22),y=I+(m^(T|~_))+w[10]+4293915773&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~m))+w[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~T))+w[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=T+(_^(m|~I))+w[15]+4264355552&4294967295,T=m+(y<<10&4294967295|y>>>22),y=I+(m^(T|~_))+w[6]+2734768916&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~m))+w[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~T))+w[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=T+(_^(m|~I))+w[11]+3174756917&4294967295,T=m+(y<<10&4294967295|y>>>22),y=I+(m^(T|~_))+w[2]+718787259&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~m))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,w=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=_;)i(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<m;)if(w[I++]=v.charCodeAt(T++),I==this.blockSize){i(this,w),I=0;break}}else for(;T<m;)if(w[I++]=v[T++],I==this.blockSize){i(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var w=0;32>w;w+=8)v[_++]=this.g[m]>>>w&255;return v};function s(v,m){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],w=!0,I=v.length-1;0<=I;I--){var T=v[I]|0;w&&T==m||(_[I]=T,w=!1)}this.g=_}var c={};function l(v){return-128<=v&&128>v?s(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return R(d(-v));for(var m=[],_=1,w=0;v>=_;w++)m[w]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return R(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),w=g,I=0;I<v.length;I+=8){var T=Math.min(8,v.length-I),y=parseInt(v.substring(I,I+T),m);8>T?(T=d(Math.pow(m,T)),w=w.j(T).add(d(y))):(w=w.j(_),w=w.add(d(y)))}return w}var g=l(0),E=l(1),A=l(16777216);n=a.prototype,n.m=function(){if(P(this))return-R(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(P(this))return"-"+R(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,w="";;){var I=B(_,m).g;_=O(_,I.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=I,k(_))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function P(v){return v.h==-1}n.l=function(v){return v=O(this,v),P(v)?-1:k(v)?0:1};function R(v){for(var m=v.g.length,_=[],w=0;w<m;w++)_[w]=~v.g[w];return new a(_,~v.h).add(E)}n.abs=function(){return P(this)?R(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],w=0,I=0;I<=m;I++){var T=w+(this.i(I)&65535)+(v.i(I)&65535),y=(T>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);w=y>>>16,T&=65535,y&=65535,_[I]=y<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(v,m){return v.add(R(m))}n.j=function(v){if(k(this)||k(v))return g;if(P(this))return P(v)?R(this).j(R(v)):R(R(this).j(v));if(P(v))return R(this.j(R(v)));if(0>this.l(A)&&0>v.l(A))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],w=0;w<2*m;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<v.g.length;I++){var T=this.i(w)>>>16,y=this.i(w)&65535,Re=v.i(I)>>>16,it=v.i(I)&65535;_[2*w+2*I]+=y*it,M(_,2*w+2*I),_[2*w+2*I+1]+=T*it,M(_,2*w+2*I+1),_[2*w+2*I+1]+=y*Re,M(_,2*w+2*I+1),_[2*w+2*I+2]+=T*Re,M(_,2*w+2*I+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new a(_,0)};function M(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function L(v,m){this.g=v,this.h=m}function B(v,m){if(k(m))throw Error("division by zero");if(k(v))return new L(g,g);if(P(v))return m=B(R(v),m),new L(R(m.g),R(m.h));if(P(m))return m=B(v,R(m)),new L(R(m.g),m.h);if(30<v.g.length){if(P(v)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,w=m;0>=w.l(v);)_=H(_),w=H(w);var I=Q(_,1),T=Q(w,1);for(w=Q(w,2),_=Q(_,2);!k(w);){var y=T.add(w);0>=y.l(v)&&(I=I.add(_),T=y),w=Q(w,1),_=Q(_,1)}return m=O(v,I.j(m)),new L(I,m)}for(I=g;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=d(_),y=T.j(m);P(y)||0<y.l(v);)_-=w,T=d(_),y=T.j(m);k(T)&&(T=E),I=I.add(T),v=O(v,y)}return new L(I,v)}n.A=function(v){return B(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)&v.i(w);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)|v.i(w);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)^v.i(w);return new a(_,this.h^v.h)};function H(v){for(var m=v.g.length+1,_=[],w=0;w<m;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(_,v.h)}function Q(v,m){var _=m>>5;m%=32;for(var w=v.g.length-_,I=[],T=0;T<w;T++)I[T]=0<m?v.i(T+_)>>>m|v.i(T+_+1)<<32-m:v.i(T+_);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,xt=a}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kl,Nl,Hn,Dl,ni,Hs,Vl,Ol,xl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hr=="object"&&Hr];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in h))break e;h=h[b]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,b={next:function(){if(!f&&h<o.length){var S=h++;return{value:u(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function E(o,u,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,E.apply(null,arguments)}function A(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function k(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,b,S){for(var V=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)V[Z-2]=arguments[Z];return u.prototype[b].apply(f,V)}}function P(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function R(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const b=o.length||0,S=f.length||0;o.length=b+S;for(let V=0;V<S;V++)o[b+V]=f[V]}else o.push(f)}}class O{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var H=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Q(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function v(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let h,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(h in f)o[h]=f[h];for(let S=0;S<_.length;S++)h=_[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function T(o){c.setTimeout(()=>{throw o},0)}function y(){var o=We;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Re{constructor(){this.h=this.g=null}add(u,h){const f=it.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var it=new O(()=>new Ht,o=>o.reset());class Ht{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let st,$e=!1,We=new Re,Sn=()=>{const o=c.Promise.resolve(void 0);st=()=>{o.then(At)}};var At=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){T(h)}var u=it;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}$e=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Xh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Pn(o,u){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(H){e:{try{B(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Pn.aa.h.call(this)}}k(Pn,ge);var Yh={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),Jh=0;function Zh(o,u,h,f,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=b,this.key=++Jh,this.da=this.fa=!1}function Tr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ir(o){this.src=o,this.g={},this.h=0}Ir.prototype.add=function(o,u,h,f,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=Gi(o,u,f,b);return-1<V?(u=o[V],h||(u.fa=!1)):(u=new Zh(u,this.src,S,!!f,b),u.fa=h,o.push(u)),u};function Hi(o,u){var h=u.type;if(h in o.g){var f=o.g[h],b=Array.prototype.indexOf.call(f,u,void 0),S;(S=0<=b)&&Array.prototype.splice.call(f,b,1),S&&(Tr(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Gi(o,u,h,f){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==f)return b}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Qi={};function Zo(o,u,h,f,b){if(Array.isArray(u)){for(var S=0;S<u.length;S++)Zo(o,u[S],h,f,b);return null}return h=na(h),o&&o[wr]?o.K(u,h,d(f)?!!f.capture:!!f,b):ed(o,u,h,!1,f,b)}function ed(o,u,h,f,b,S){if(!u)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,Z=Yi(o);if(Z||(o[Ki]=Z=new Ir(o)),h=Z.add(u,h,f,V,S),h.proxy)return h;if(f=td(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Xh||(b=V),b===void 0&&(b=!1),o.addEventListener(u.toString(),f,b);else if(o.attachEvent)o.attachEvent(ta(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function td(){function o(h){return u.call(o.src,o.listener,h)}const u=nd;return o}function ea(o,u,h,f,b){if(Array.isArray(u))for(var S=0;S<u.length;S++)ea(o,u[S],h,f,b);else f=d(f)?!!f.capture:!!f,h=na(h),o&&o[wr]?(o=o.i,u=String(u).toString(),u in o.g&&(S=o.g[u],h=Gi(S,h,f,b),-1<h&&(Tr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[u],o.h--)))):o&&(o=Yi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Gi(u,h,f,b)),(h=-1<o?u[o]:null)&&Xi(h))}function Xi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[wr])Hi(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(ta(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Yi(u))?(Hi(h,o),h.h==0&&(h.src=null,u[Ki]=null)):Tr(o)}}}function ta(o){return o in Qi?Qi[o]:Qi[o]="on"+o}function nd(o,u){if(o.da)o=!0;else{u=new Pn(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&Xi(o),o=h.call(f,u)}return o}function Yi(o){return o=o[Ki],o instanceof Ir?o:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(o){return typeof o=="function"?o:(o[Ji]||(o[Ji]=function(u){return o.handleEvent(u)}),o[Ji])}function _e(){Pe.call(this),this.i=new Ir(this),this.M=this,this.F=null}k(_e,Pe),_e.prototype[wr]=!0,_e.prototype.removeEventListener=function(o,u,h,f){ea(this,o,u,h,f)};function be(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new ge(u,o);else if(u instanceof ge)u.target=u.target||o;else{var b=u;u=new ge(f,o),w(u,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var V=u.g=h[S];b=br(V,f,!0,u)&&b}if(V=u.g=o,b=br(V,f,!0,u)&&b,b=br(V,f,!1,u)&&b,h)for(S=0;S<h.length;S++)V=u.g=h[S],b=br(V,f,!1,u)&&b}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)Tr(h[f]);delete o.g[u],o.h--}}this.F=null},_e.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},_e.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function br(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,S=0;S<u.length;++S){var V=u[S];if(V&&!V.da&&V.capture==h){var Z=V.listener,he=V.ha||V.src;V.fa&&Hi(o.i,V),b=Z.call(he,f)!==!1&&b}}return b&&!f.defaultPrevented}function ra(o,u,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function ia(o){o.g=ra(()=>{o.g=null,o.i&&(o.i=!1,ia(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class rd extends Pe{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ia(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(o){Pe.call(this),this.h=o,this.g={}}k(Cn,Pe);var sa=[];function oa(o){Q(o.g,function(u,h){this.g.hasOwnProperty(h)&&Xi(u)},o),o.g={}}Cn.prototype.N=function(){Cn.aa.N.call(this),oa(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=c.JSON.stringify,id=c.JSON.parse,sd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function es(){}es.prototype.h=null;function aa(o){return o.h||(o.h=o.i())}function ca(){}var kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ts(){ge.call(this,"d")}k(ts,ge);function ns(){ge.call(this,"c")}k(ns,ge);var Rt={},ua=null;function Ar(){return ua=ua||new _e}Rt.La="serverreachability";function la(o){ge.call(this,Rt.La,o)}k(la,ge);function Nn(o){const u=Ar();be(u,new la(u))}Rt.STAT_EVENT="statevent";function ha(o,u){ge.call(this,Rt.STAT_EVENT,o),this.stat=u}k(ha,ge);function Ae(o){const u=Ar();be(u,new ha(u,o))}Rt.Ma="timingevent";function da(o,u){ge.call(this,Rt.Ma,o),this.size=u}k(da,ge);function Dn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function od(o,u,h,f,b,S){o.info(function(){if(o.g)if(S)for(var V="",Z=S.split("&"),he=0;he<Z.length;he++){var Y=Z[he].split("=");if(1<Y.length){var ye=Y[0];Y=Y[1];var ve=ye.split("_");V=2<=ve.length&&ve[1]=="type"?V+(ye+"="+Y+"&"):V+(ye+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+u+`
`+h+`
`+V})}function ad(o,u,h,f,b,S,V){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+u+`
`+h+`
`+S+" "+V})}function Gt(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ud(o,h)+(f?" "+f:"")})}function cd(o,u){o.info(function(){return"TIMEOUT: "+u})}Vn.prototype.info=function(){};function ud(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return Zi(h)}catch{return u}}var Rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rs;function Sr(){}k(Sr,es),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},rs=new Sr;function ot(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new Cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pa}function pa(){this.i=null,this.g="",this.h=!1}var ma={},is={};function ss(o,u,h){o.L=1,o.v=Nr(He(u)),o.m=h,o.P=!0,ga(o,null)}function ga(o,u){o.F=Date.now(),Pr(o),o.A=He(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ka(h.i,"t",f),o.C=0,h=o.j.J,o.h=new pa,o.g=Ka(o.j,h?u:null,!o.m),0<o.O&&(o.M=new rd(E(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(sa[0]=b.toString()),b=sa);for(var S=0;S<b.length;S++){var V=Zo(h,b[S],f||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Nn(),od(o.i,o.u,o.A,o.l,o.R,o.m)}ot.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ge(o)==3?u.j():this.Y(o)},ot.prototype.Y=function(o){try{if(o==this.g)e:{const ve=Ge(this.g);var u=this.g.Ba();const Xt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||La(this.g)))){this.J||ve!=4||u==7||(u==8||0>=Xt?Nn(3):Nn(2)),os(this);var h=this.g.Z();this.X=h;t:if(_a(this)){var f=La(this.g);o="";var b=f.length,S=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){St(this),On(this);var V="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(S&&u==b-1)});f.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,ad(this.i,this.u,this.A,this.l,this.R,ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,he=this.g;if((Z=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Z)){var Y=Z;break t}}Y=null}if(h=Y)Gt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,as(this,h);else{this.o=!1,this.s=3,Ae(12),St(this),On(this);break e}}if(this.P){h=!0;let Oe;for(;!this.J&&this.C<V.length;)if(Oe=ld(this,V),Oe==is){ve==4&&(this.s=4,Ae(14),h=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==ma){this.s=4,Ae(15),Gt(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Gt(this.i,this.l,Oe,null),as(this,Oe);if(_a(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||V.length!=0||this.h.h||(this.s=1,Ae(16),h=!1),this.o=this.o&&h,!h)Gt(this.i,this.l,V,"[Invalid Chunked Response]"),St(this),On(this);else if(0<V.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),fs(ye),ye.M=!0,Ae(11))}}else Gt(this.i,this.l,V,null),as(this,V);ve==4&&St(this),this.o&&!this.J&&(ve==4?$a(this.j,this):(this.o=!1,Pr(this)))}else Sd(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),St(this),On(this)}}}catch{}finally{}};function _a(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ld(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?is:(h=Number(u.substring(h,f)),isNaN(h)?ma:(f+=1,f+h>u.length?is:(u=u.slice(f,f+h),o.C=f+h,u)))}ot.prototype.cancel=function(){this.J=!0,St(this)};function Pr(o){o.S=Date.now()+o.I,ya(o,o.I)}function ya(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Dn(E(o.ba,o),u)}function os(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ot.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cd(this.i,this.A),this.L!=2&&(Nn(),Ae(17)),St(this),this.s=2,On(this)):ya(this,this.S-o)};function On(o){o.j.G==0||o.J||$a(o.j,o)}function St(o){os(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,oa(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function as(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||cs(h.h,o))){if(!o.K&&cs(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Mr(h),Or(h);else break e;ds(h),Ae(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Dn(E(h.Za,h),6e3));if(1>=wa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ct(h,11)}else if((o.K||h.g==o)&&Mr(h),!M(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let Y=b[u];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const ye=Y[3];ye!=null&&(h.la=ye,h.j.info("VER="+h.la));const ve=Y[4];ve!=null&&(h.Aa=ve,h.j.info("SVER="+h.Aa));const Xt=Y[5];Xt!=null&&typeof Xt=="number"&&0<Xt&&(f=1.5*Xt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Oe=o.g;if(Oe){const Fr=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fr){var S=f.h;S.g||Fr.indexOf("spdy")==-1&&Fr.indexOf("quic")==-1&&Fr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(us(S,S.h),S.h=null))}if(f.D){const ps=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;ps&&(f.ya=ps,te(f.I,f.D,ps))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var V=o;if(f.qa=Ga(f,f.J?f.ia:null,f.W),V.K){Ta(f.h,V);var Z=V,he=f.L;he&&(Z.I=he),Z.B&&(os(Z),Pr(Z)),f.g=V}else za(f);0<h.i.length&&xr(h)}else Y[0]!="stop"&&Y[0]!="close"||Ct(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Ct(h,7):hs(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Nn(4)}catch{}}var hd=class{constructor(o,u){this.g=o,this.map=u}};function va(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ea(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wa(o){return o.h?1:o.g?o.g.size:0}function cs(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function us(o,u){o.g?o.g.add(u):o.h=u}function Ta(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}va.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ia(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return P(o.i)}function dd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function fd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function ba(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=fd(o),f=dd(o),b=f.length,S=0;S<b;S++)u.call(void 0,f[S],h&&h[S],o)}var Aa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),b=null;if(0<=f){var S=o[h].substring(0,f);b=o[h].substring(f+1)}else S=o[h];u(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Pt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pt){this.h=o.h,Cr(this,o.j),this.o=o.o,this.g=o.g,kr(this,o.s),this.l=o.l;var u=o.i,h=new Ln;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Ra(this,h),this.m=o.m}else o&&(u=String(o).match(Aa))?(this.h=!1,Cr(this,u[1]||"",!0),this.o=xn(u[2]||""),this.g=xn(u[3]||"",!0),kr(this,u[4]),this.l=xn(u[5]||"",!0),Ra(this,u[6]||"",!0),this.m=xn(u[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}Pt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Mn(u,Sa,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Mn(u,Sa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Mn(h,h.charAt(0)=="/"?_d:gd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Mn(h,vd)),o.join("")};function He(o){return new Pt(o)}function Cr(o,u,h){o.j=h?xn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function kr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ra(o,u,h){u instanceof Ln?(o.i=u,Ed(o.i,o.h)):(h||(u=Mn(u,yd)),o.i=new Ln(u,o.h))}function te(o,u,h){o.i.set(u,h)}function Nr(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Mn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,md),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function md(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sa=/[#\/\?@]/g,gd=/[#\?:]/g,_d=/[#\?]/g,yd=/[#\?@]/g,vd=/#/g;function Ln(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function at(o){o.g||(o.g=new Map,o.h=0,o.i&&pd(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Ln.prototype,n.add=function(o,u){at(this),this.i=null,o=Kt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Pa(o,u){at(o),u=Kt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ca(o,u){return at(o),u=Kt(o,u),o.g.has(u)}n.forEach=function(o,u){at(this),this.g.forEach(function(h,f){h.forEach(function(b){o.call(u,b,f,this)},this)},this)},n.na=function(){at(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const b=o[f];for(let S=0;S<b.length;S++)h.push(u[f])}return h},n.V=function(o){at(this);let u=[];if(typeof o=="string")Ca(this,o)&&(u=u.concat(this.g.get(Kt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return at(this),this.i=null,o=Kt(this,o),Ca(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ka(o,u,h){Pa(o,u),0<h.length&&(o.i=null,o.g.set(Kt(o,u),P(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const S=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var b=S;V[f]!==""&&(b+="="+encodeURIComponent(String(V[f]))),o.push(b)}}return this.i=o.join("&")};function Kt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ed(o,u){u&&!o.j&&(at(o),o.i=null,o.g.forEach(function(h,f){var b=f.toLowerCase();f!=b&&(Pa(this,f),ka(this,b,h))},o)),o.j=u}function wd(o,u){const h=new Vn;if(c.Image){const f=new Image;f.onload=A(ct,h,"TestLoadImage: loaded",!0,u,f),f.onerror=A(ct,h,"TestLoadImage: error",!1,u,f),f.onabort=A(ct,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=A(ct,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Td(o,u){const h=new Vn,f=new AbortController,b=setTimeout(()=>{f.abort(),ct(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?ct(h,"TestPingServer: ok",!0,u):ct(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),ct(h,"TestPingServer: error",!1,u)})}function ct(o,u,h,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(h)}catch{}}function Id(){this.g=new sd}function bd(o,u,h){const f=h||"";try{ba(o,function(b,S){let V=b;d(b)&&(V=Zi(b)),u.push(f+S+"="+encodeURIComponent(V))})}catch(b){throw u.push(f+"type="+encodeURIComponent("_badmap")),b}}function Fn(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Fn,es),Fn.prototype.g=function(){return new Dr(this.l,this.j)},Fn.prototype.i=function(o){return function(){return o}}({});function Dr(o,u){_e.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Dr,_e),n=Dr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Bn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Na(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Na(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Un(this):Bn(this),this.readyState==3&&Na(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Qa=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Bn(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Bn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Da(o){let u="";return Q(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function ls(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Da(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function ie(o){_e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ie,_e);var Ad=/^https?$/i,Rd=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rs.g(),this.v=this.o?aa(this.o):aa(rs),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Va(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)h.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Rd,u,void 0))||f||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of h)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Va(this,S)}};function Va(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Oa(o),Vr(o)}function Oa(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),Vr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vr(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xa(this):this.bb())},n.bb=function(){xa(this)};function xa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)ra(o.Ea,0,o);else if(be(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=V===0){var b=String(o.D).match(Aa)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),f=!Ad.test(b?b.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var S=2<Ge(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Oa(o)}}finally{Vr(o)}}}}function Vr(o,u){if(o.g){Ma(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||be(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ma(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),id(u)}};function La(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sd(o){const u={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(M(o[f]))continue;var h=I(o[f]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[b]||[];u[b]=S,S.push(h)}v(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Fa(o){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,o),this.cb=jn("retryDelaySeedMs",1e4,o),this.Wa=jn("forwardChannelMaxRetries",2,o),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new va(o&&o.concurrentRequestLimit),this.Da=new Id,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fa.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,f){Ae(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ga(this,null,this.W),xr(this)};function hs(o){if(Ua(o),o.G==3){var u=o.U++,h=He(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),zn(o,h),u=new ot(o,o.j,u),u.L=2,u.v=Nr(He(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ka(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Pr(u)}Ha(o)}function Or(o){o.g&&(fs(o),o.g.cancel(),o.g=null)}function Ua(o){Or(o),o.u&&(c.clearTimeout(o.u),o.u=null),Mr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function xr(o){if(!Ea(o.h)&&!o.s){o.s=!0;var u=o.Ga;st||Sn(),$e||(st(),$e=!0),We.add(u,o),o.B=0}}function Pd(o,u){return wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Dn(E(o.Ga,o,u),Wa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new ot(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=ja(this,b,u),h=He(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),zn(this,h),S&&(this.O?u="headers="+encodeURIComponent(String(Da(S)))+"&"+u:this.m&&ls(h,this.m,S)),us(this.h,b),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),b.T=!0,ss(b,h,null)):ss(b,h,u),this.G=2}}else this.G==3&&(o?Ba(this,o):this.i.length==0||Ea(this.h)||Ba(this))};function Ba(o,u){var h;u?h=u.l:h=o.U++;const f=He(o.I);te(f,"SID",o.K),te(f,"RID",h),te(f,"AID",o.T),zn(o,f),o.m&&o.o&&ls(f,o.m,o.o),h=new ot(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ja(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),us(o.h,h),ss(h,f,u)}function zn(o,u){o.H&&Q(o.H,function(h,f){te(u,f,h)}),o.l&&ba({},function(h,f){te(u,f,h)})}function ja(o,u,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const V=["count="+h];S==-1?0<h?(S=b[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let Z=!0;for(let he=0;he<h;he++){let Y=b[he].g;const ye=b[he].map;if(Y-=S,0>Y)S=Math.max(0,b[he].g-100),Z=!1;else try{bd(ye,V,"req"+Y+"_")}catch{f&&f(ye)}}if(Z){f=V.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function za(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;st||Sn(),$e||(st(),$e=!0),We.add(u,o),o.v=0}}function ds(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Dn(E(o.Fa,o),Wa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Dn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Or(this),qa(this))};function fs(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function qa(o){o.g=new ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=He(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),zn(o,u),o.m&&o.o&&ls(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Nr(He(u)),h.m=null,h.P=!0,ga(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Or(this),ds(this),Ae(19))};function Mr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function $a(o,u){var h=null;if(o.g==u){Mr(o),fs(o),o.g=null;var f=2}else if(cs(o.h,u))h=u.D,Ta(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;f=Ar(),be(f,new da(f,h)),xr(o)}else za(o);else if(b=u.s,b==3||b==0&&0<u.X||!(f==1&&Pd(o,u)||f==2&&ds(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Ct(o,5);break;case 4:Ct(o,10);break;case 3:Ct(o,6);break;default:Ct(o,2)}}}function Wa(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Ct(o,u){if(o.j.info("Error code "+u),u==2){var h=E(o.fb,o),f=o.Xa;const b=!f;f=new Pt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cr(f,"https"),Nr(f),b?wd(f.toString(),h):Td(f.toString(),h)}else Ae(2);o.G=0,o.l&&o.l.sa(u),Ha(o),Ua(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Ha(o){if(o.G=0,o.ka=[],o.l){const u=Ia(o.h);(u.length!=0||o.i.length!=0)&&(R(o.ka,u),R(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Ga(o,u,h){var f=h instanceof Pt?He(h):new Pt(h);if(f.g!="")u&&(f.g=u+"."+f.g),kr(f,f.s);else{var b=c.location;f=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var S=new Pt(null);f&&Cr(S,f),u&&(S.g=u),b&&kr(S,b),h&&(S.l=h),f=S}return h=o.D,u=o.ya,h&&u&&te(f,h,u),te(f,"VER",o.la),zn(o,f),f}function Ka(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ie(new Fn({eb:h})):new ie(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qa(){}n=Qa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Lr(){}Lr.prototype.g=function(o,u){return new Ce(o,u)};function Ce(o,u){_e.call(this),this.g=new Fa(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Qt(this)}k(Ce,_e),Ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){hs(this.g)},Ce.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Zi(o),o=h);u.i.push(new hd(u.Ya++,o)),u.G==3&&xr(u)},Ce.prototype.N=function(){this.g.l=null,delete this.j,hs(this.g),delete this.g,Ce.aa.N.call(this)};function Xa(o){ts.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Xa,ts);function Ya(){ns.call(this),this.status=1}k(Ya,ns);function Qt(o){this.g=o}k(Qt,Qa),Qt.prototype.ua=function(){be(this.g,"a")},Qt.prototype.ta=function(o){be(this.g,new Xa(o))},Qt.prototype.sa=function(o){be(this.g,new Ya)},Qt.prototype.ra=function(){be(this.g,"b")},Lr.prototype.createWebChannel=Lr.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,xl=function(){return new Lr},Ol=function(){return Ar()},Vl=Rt,Hs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,ni=Rr,fa.COMPLETE="complete",Dl=fa,ca.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,Hn=ca,Nl=Fn,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,kl=ie}).apply(typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{});const zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new co("@firebase/firestore");function Wn(){return Bt.logLevel}function x(n,...e){if(Bt.logLevel<=K.DEBUG){const t=e.map(To);Bt.debug(`Firestore (${bn}): ${n}`,...t)}}function tt(n,...e){if(Bt.logLevel<=K.ERROR){const t=e.map(To);Bt.error(`Firestore (${bn}): ${n}`,...t)}}function hn(n,...e){if(Bt.logLevel<=K.WARN){const t=e.map(To);Bt.warn(`Firestore (${bn}): ${n}`,...t)}}function To(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const e=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+n;throw tt(e),new Error(e)}function ee(n,e){n||z()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class yy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vy{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Ml(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new we(e)}}class Ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ey(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Ty(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=by(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function dn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ue(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new ue(0,0))}static max(){return new q(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends nr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const Ay=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends nr{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return Ay.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function Ry(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new wt(i,U.empty(),e)}function Sy(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(q.min(),U.empty(),-1)}static max(){return new wt(q.max(),U.empty(),-1)}}function Py(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Cy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Ny(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Io.oe=-1;function Di(n){return n==null}function mi(n){return n===0&&1/n==-1/0}function Dy(n){return typeof n=="number"&&Number.isInteger(n)&&!mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gr(this.root,e,this.comparator,!0)}}class Gr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=s??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new de(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,i,s){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $c(this.data.getIterator())}getIteratorFrom(e){return new $c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class $c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new ke([])}unionWith(e){let t=new pe(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ul("Invalid base64 string: "+s):s}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const Vy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Vy.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ao(n){const e=n.mapValue.fields.__previous_value__;return bo(e)?Ao(e):e}function rr(n){const e=Tt(n.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class ir{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:xy(n)?9007199254740991:10:z()}function ze(n,e){if(n===e)return!0;const t=zt(n);if(t!==zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rr(n).isEqual(rr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Tt(i.timestampValue),c=Tt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return jt(i.bytesValue).isEqual(jt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ae(i.doubleValue),c=ae(s.doubleValue);return a===c?mi(a)===mi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return dn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(qc(a)!==qc(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!ze(a[l],c[l])))return!1;return!0}(n,e);default:return z()}}function sr(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function fn(n,e){if(n===e)return 0;const t=zt(n),r=zt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ae(s.integerValue||s.doubleValue),l=ae(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Wc(n.timestampValue,e.timestampValue);case 4:return Wc(rr(n),rr(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,a){const c=jt(s),l=jt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=J(c[d],l[d]);if(p!==0)return p}return J(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=J(ae(s.latitude),ae(a.latitude));return c!==0?c:J(ae(s.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const c=s.values||[],l=a.values||[];for(let d=0;d<c.length&&d<l.length;++d){const p=fn(c[d],l[d]);if(p)return p}return J(c.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Kr.mapValue&&a===Kr.mapValue)return 0;if(s===Kr.mapValue)return 1;if(a===Kr.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const E=J(l[g],p[g]);if(E!==0)return E;const A=fn(c[l[g]],d[p[g]]);if(A!==0)return A}return J(l.length,p.length)}(n.mapValue,e.mapValue);default:throw z()}}function Wc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Tt(n),r=Tt(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function pn(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Tt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Gs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Gs(t.fields[a])}`;return i+"}"}(n.mapValue):z()}function Ks(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function Hc(n){return!!n&&"nullValue"in n}function Gc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ri(n){return!!n&&"mapValue"in n}function Xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $t(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ri(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(t)}setAll(e){let t=fe.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Xn(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ri(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ri(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){$t(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Se(Xn(this.value))}}function Bl(n){const e=[];return $t(n.fields,(t,r)=>{const i=new fe([t]);if(ri(r)){const s=Bl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,q.min(),q.min(),q.min(),Se.empty(),0)}static newFoundDocument(e,t,r,i){return new Te(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new Te(e,2,t,q.min(),q.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,q.min(),q.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.position=e,this.inclusive=t}}function Kc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=fn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t="asc"){this.field=e,this.dir=t}}function My(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{}class ce extends jl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Fy(e,t,r):t==="array-contains"?new jy(e,r):t==="in"?new zy(e,r):t==="not-in"?new qy(e,r):t==="array-contains-any"?new $y(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Uy(e,r):new By(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fn(t,this.value)):t!==null&&zt(this.value)===zt(t)&&this.matchesComparison(fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends jl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qe(e,t)}matches(e){return zl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zl(n){return n.op==="and"}function ql(n){return Ly(n)&&zl(n)}function Ly(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function Qs(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+pn(n.value);if(ql(n))return n.filters.map(e=>Qs(e)).join(",");{const e=n.filters.map(t=>Qs(t)).join(",");return`${n.op}(${e})`}}function $l(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&ze(r.value,i.value)}(n,e):n instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&$l(a,i.filters[c]),!0):!1}(n,e):void z()}function Wl(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${pn(t.value)}`}(n):n instanceof qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Wl).join(" ,")+"}"}(n):"Filter"}class Fy extends ce{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uy extends ce{constructor(e,t){super(e,"in",t),this.keys=Hl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class By extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Hl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class jy extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&sr(t.arrayValue,this.value)}}class zy extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sr(this.value.arrayValue,t)}}class qy extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!sr(this.value.arrayValue,t)}}class $y extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>sr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function Xc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Wy(n,e,t,r,i,s,a)}function So(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pn(r)).join(",")),e.ue=t}return e.ue}function Po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!My(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$l(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qc(n.startAt,e.startAt)&&Qc(n.endAt,e.endAt)}function Xs(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hy(n,e,t,r,i,s,a,c){return new Vi(n,e,t,r,i,s,a,c)}function Co(n){return new Vi(n)}function Yc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gy(n){return n.collectionGroup!==null}function Yn(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(fe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _i(s,r))}),t.has(fe.keyField().canonicalString())||e.ce.push(new _i(fe.keyField(),r))}return e.ce}function Fe(n){const e=$(n);return e.le||(e.le=Ky(e,Yn(n))),e.le}function Ky(n,e){if(n.limitType==="F")return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _i(i.field,s)});const t=n.endAt?new gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gi(n.startAt.position,n.startAt.inclusive):null;return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ys(n,e,t){return new Vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Oi(n,e){return Po(Fe(n),Fe(e))&&n.limitType===e.limitType}function Gl(n){return`${So(Fe(n))}|lt:${n.limitType}`}function en(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Wl(i)).join(", ")}]`),Di(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pn(i)).join(",")),`Target(${r})`}(Fe(n))}; limitType=${n.limitType})`}function xi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Yn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const d=Kc(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Yn(r),i)||r.endAt&&!function(a,c,l){const d=Kc(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Yn(r),i))}(n,e)}function Qy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kl(n){return(e,t)=>{let r=!1;for(const i of Yn(n)){const s=Xy(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xy(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?fn(l,d):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Fl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new re(U.comparator);function nt(){return Yy}const Ql=new re(U.comparator);function Gn(...n){let e=Ql;for(const t of n)e=e.insert(t.key,t);return e}function Xl(n){let e=Ql;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vt(){return Jn()}function Yl(){return Jn()}function Jn(){return new An(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jy=new re(U.comparator),Zy=new pe(U.comparator);function G(...n){let e=Zy;for(const t of n)e=e.add(t);return e}const ev=new pe(J);function tv(){return ev}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(e)?"-0":e}}function Zl(n){return{integerValue:""+n}}function nv(n,e){return Dy(e)?Zl(e):Jl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this._=void 0}}function rv(n,e,t){return n instanceof yi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bo(s)&&(s=Ao(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof or?th(n,e):n instanceof ar?nh(n,e):function(i,s){const a=eh(i,s),c=Jc(a)+Jc(i.Pe);return Ks(a)&&Ks(i.Pe)?Zl(c):Jl(i.serializer,c)}(n,e)}function iv(n,e,t){return n instanceof or?th(n,e):n instanceof ar?nh(n,e):t}function eh(n,e){return n instanceof vi?function(r){return Ks(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yi extends Mi{}class or extends Mi{constructor(e){super(),this.elements=e}}function th(n,e){const t=rh(e);for(const r of n.elements)t.some(i=>ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class ar extends Mi{constructor(e){super(),this.elements=e}}function nh(n,e){let t=rh(e);for(const r of n.elements)t=t.filter(i=>!ze(i,r));return{arrayValue:{values:t}}}class vi extends Mi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Jc(n){return ae(n.integerValue||n.doubleValue)}function rh(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof or&&i instanceof or||r instanceof ar&&i instanceof ar?dn(r.elements,i.elements,ze):r instanceof vi&&i instanceof vi?ze(r.Pe,i.Pe):r instanceof yi&&i instanceof yi}(n.transform,e.transform)}class ov{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Li{}function ih(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oh(n.key,Ue.none()):new _r(n.key,n.data,Ue.none());{const t=n.data,r=Se.empty();let i=new pe(fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new bt(n.key,r,new ke(i.toArray()),Ue.none())}}function av(n,e,t){n instanceof _r?function(i,s,a){const c=i.value.clone(),l=eu(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof bt?function(i,s,a){if(!ii(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=eu(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(sh(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Zn(n,e,t,r){return n instanceof _r?function(s,a,c,l){if(!ii(s.precondition,a))return c;const d=s.value.clone(),p=tu(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof bt?function(s,a,c,l){if(!ii(s.precondition,a))return c;const d=tu(s.fieldTransforms,l,a),p=a.data;return p.setAll(sh(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return ii(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function cv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=eh(r.transform,i||null);s!=null&&(t===null&&(t=Se.empty()),t.set(r.field,s))}return t||null}function Zc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dn(r,i,(s,a)=>sv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Li{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bt extends Li{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function eu(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,iv(a,c,t[i]))}return r}function tu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,rv(s,a,e))}return r}class oh extends Li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uv extends Li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&av(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yl();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=ih(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&dn(this.mutations,e.mutations,(t,r)=>Zc(t,r))&&dn(this.baseMutations,e.baseMutations,(t,r)=>Zc(t,r))}}class ko{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return Jy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ko(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,X;function fv(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function ah(n){if(n===void 0)return tt("GRPC error has no .code"),D.UNKNOWN;switch(n){case oe.OK:return D.OK;case oe.CANCELLED:return D.CANCELLED;case oe.UNKNOWN:return D.UNKNOWN;case oe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case oe.INTERNAL:return D.INTERNAL;case oe.UNAVAILABLE:return D.UNAVAILABLE;case oe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case oe.NOT_FOUND:return D.NOT_FOUND;case oe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case oe.ABORTED:return D.ABORTED;case oe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case oe.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(X=oe||(oe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new xt([4294967295,4294967295],0);function nu(n){const e=pv().encode(n),t=new Cl;return t.update(e),new Uint8Array(t.digest())}function ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xt([t,r],0),new xt([i,s],0)]}class No{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kn(`Invalid padding: ${t}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(xt.fromNumber(r)));return i.compare(mv)===1&&(i=new xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=nu(e),[r,i]=ru(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new No(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=nu(e),[r,i]=ru(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fi(q.min(),i,new re(J),nt(),G())}}class yr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yr(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class ch{constructor(e,t){this.targetId=e,this.me=t}}class uh{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class iu{constructor(){this.fe=0,this.ge=ou(),this.pe=Ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=G(),t=G(),r=G();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:z()}}),new yr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=ou()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gv{constructor(e){this.Le=e,this.Be=new Map,this.ke=nt(),this.qe=su(),this.Qe=new re(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Xs(s))if(r===0){const a=new U(s.path);this.Ue(t,a,Te.newNoDocument(a,q.min()))}else ee(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=jt(r).toUint8Array()}catch(l){if(l instanceof Ul)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new No(a,i,s)}catch(l){return hn(l instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&Xs(c.target)){const l=new U(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Te.newNoDocument(l,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=G();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Fi(e,t,this.Qe,this.ke,r);return this.ke=nt(),this.qe=su(),this.Qe=new re(J),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new iu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new iu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function su(){return new re(U.comparator)}function ou(){return new re(U.comparator)}const _v={asc:"ASCENDING",desc:"DESCENDING"},yv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vv={and:"AND",or:"OR"};class Ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Js(n,e){return n.useProto3Json||Di(e)?e:{value:e}}function Ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wv(n,e){return Ei(n,e.toTimestamp())}function Be(n){return ee(!!n),q.fromTimestamp(function(t){const r=Tt(t);return new ue(r.seconds,r.nanos)}(n))}function Do(n,e){return Zs(n,e).canonicalString()}function Zs(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hh(n){const e=se.fromString(n);return ee(gh(e)),e}function eo(n,e){return Do(n.databaseId,e.path)}function ks(n,e){const t=hh(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(fh(t))}function dh(n,e){return Do(n.databaseId,e)}function Tv(n){const e=hh(n);return e.length===4?se.emptyPath():fh(e)}function to(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fh(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function au(n,e,t){return{name:eo(n,e),fields:t.value.mapValue.fields}}function Iv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(ee(p===void 0||typeof p=="string"),Ie.fromBase64String(p||"")):(ee(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ie.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?D.UNKNOWN:ah(d.code);return new F(p,d.message||"")}(a);t=new uh(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ks(n,r.document.name),s=Be(r.document.updateTime),a=r.document.createTime?Be(r.document.createTime):q.min(),c=new Se({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new si(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ks(n,r.document),s=r.readTime?Be(r.readTime):q.min(),a=Te.newNoDocument(i,s),c=r.removedTargetIds||[];t=new si([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ks(n,r.document),s=r.removedTargetIds||[];t=new si([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new dv(i,s),c=r.targetId;t=new ch(c,a)}}return t}function bv(n,e){let t;if(e instanceof _r)t={update:au(n,e.key,e.value)};else if(e instanceof oh)t={delete:eo(n,e.key)};else if(e instanceof bt)t={update:au(n,e.key,e.data),updateMask:Vv(e.fieldMask)};else{if(!(e instanceof uv))return z();t={verify:eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof or)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ar)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(n,e.precondition)),t}function Av(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Be(i.updateTime):Be(s);return a.isEqual(q.min())&&(a=Be(s)),new ov(a,i.transformResults||[])}(t,e))):[]}function Rv(n,e){return{documents:[dh(n,e.path)]}}function Sv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dh(n,i);const s=function(d){if(d.length!==0)return mh(qe.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:tn(E.field),direction:kv(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Js(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Pv(n){let e=Tv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const E=ph(g);return E instanceof qe&&ql(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(k){return new _i(nn(k.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,Di(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(g){const E=!!g.before,A=g.values||[];return new gi(A,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,A=g.values||[];return new gi(A,E)}(t.endAt)),Hy(e,i,a,s,c,"F",l,d)}function Cv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ph(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=nn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=nn(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nn(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(nn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qe.create(t.compositeFilter.filters.map(r=>ph(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function kv(n){return _v[n]}function Nv(n){return yv[n]}function Dv(n){return vv[n]}function tn(n){return{fieldPath:n.canonicalString()}}function nn(n){return fe.fromServerFormat(n.fieldPath)}function mh(n){return n instanceof ce?function(t){if(t.op==="=="){if(Gc(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NAN"}};if(Hc(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gc(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NOT_NAN"}};if(Hc(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(t.field),op:Nv(t.op),value:t.value}}}(n):n instanceof qe?function(t){const r=t.getFilters().map(i=>mh(i));return r.length===1?r[0]:{compositeFilter:{op:Dv(t.op),filters:r}}}(n):z()}function Vv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,r,i,s=q.min(),a=q.min(),c=Ie.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.ct=e}}function xv(n){const e=Pv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ys(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this._n=new Lv}addToCollectionParentIndex(e,t){return this._n.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(wt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Lv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new mn(0)}static Ln(){return new mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.changes=new An(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zn(r.mutation,i,ke.empty(),ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=Vt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Gn();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=nt();const a=Jn(),c=function(){return Jn()}();return t.forEach((l,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof bt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Zn(p.mutation,d,p.mutation.getFieldMask(),ue.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new Uv(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Jn();let i=new re((a,c)=>a-c),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||ke.empty();p=c.applyToLocalView(d,p),r.set(l,p);const g=(i.get(c.batchId)||G()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,g=Yl();p.forEach(E=>{if(!s.has(E)){const A=ih(t.get(E),r.get(E));A!==null&&g.set(E,A),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(Vt());let c=-1,l=s;return a.next(d=>N.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{l=l.insert(p,E)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,G())).next(p=>({batchId:c,changes:Xl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=Gn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Gn();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,l=>{const d=function(g,E){return new Vi(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Te.newInvalidDocument(p)))});let c=Gn();return a.forEach((l,d)=>{const p=s.get(l);p!==void 0&&Zn(p.mutation,d,ke.empty(),ue.now()),xi(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return N.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Be(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:xv(i.bundledQuery),readTime:Be(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.overlays=new re(U.comparator),this.hr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vt();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=Vt(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new re((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Vt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Vt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return N.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hv(t,r));let s=this.hr.get(t);s===void 0&&(s=G(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.Pr=new pe(le.Ir),this.Tr=new pe(le.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new le(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new le(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new U(new se([])),r=new le(t,e),i=new le(t,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new U(new se([])),r=new le(t,e),i=new le(t,e+1);let s=G();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new le(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return U.comparator(e.key,t.key)||J(e.pr,t.pr)}static Er(e,t){return J(e.pr,t.pr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new pe(le.Ir)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lv(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.wr=this.wr.add(new le(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const c=this.Sr(a.pr);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(J);return t.forEach(i=>{const s=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],c=>{r=r.add(c.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const a=new le(new U(s),0);let c=new pe(J);return this.wr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.pr)),!0)},a),N.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(t.mutations,i=>{const s=new le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new le(t,0),i=this.wr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.vr=e,this.docs=function(){return new re(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=nt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=nt();const a=t.path,c=new U(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Py(Sy(p),r)<=0||(i.has(p.key)||xi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){z()}Fr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Wv(this)}getSize(e){return N.resolve(this.size)}}class Wv extends Fv{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.persistence=e,this.Mr=new An(t=>So(t),Po),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Vo,this.targetCount=0,this.Lr=mn.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),N.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new mn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.qn(t),N.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t){this.Br={},this.overlays={},this.kr=new Io(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Hv(this),this.indexManager=new Mv,this.remoteDocumentCache=function(i){return new $v(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ov(t),this.$r=new jv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new qv(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const i=new Kv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Kv extends ky{constructor(e){super(),this.currentSequenceNumber=e}}class Oo{constructor(e){this.persistence=e,this.zr=new Vo,this.jr=null}static Hr(e){return new Oo(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),N.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const i=U.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return N.or([()=>N.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=G(),i=G();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return em()?8:Ny(me())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Qv;return this.Ji(e,t,a).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,t,a,c.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Wn()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",en(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(Wn()<=K.DEBUG&&x("QueryEngine","Query:",en(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Wn()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",en(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):N.resolve())}ji(e,t){if(Yc(t))return N.resolve(null);let r=Fe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ys(t,null,"F"),r=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=G(...s);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.Zi(t,c);return this.Xi(t,d,a,l.readTime)?this.ji(e,Ys(t,null,"F")):this.es(e,d,t,l)}))})))}Hi(e,t,r,i){return Yc(t)||i.isEqual(q.min())?N.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(t,s);return this.Xi(t,a,r,i)?N.resolve(null):(Wn()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),en(t)),this.es(e,a,t,Ry(i,-1)).next(c=>c))})}Zi(e,t){let r=new pe(Kl(e));return t.forEach((i,s)=>{xi(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Wn()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",en(t)),this.zi.getDocumentsMatchingQuery(e,t,wt.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new re(J),this.rs=new An(s=>So(s),Po),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bv(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Jv(n,e,t,r){return new Yv(n,e,t,r)}async function _h(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=G();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({us:d,removedBatchIds:a,addedBatchIds:c}))})})}function Zv(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const g=d.batch,E=g.keys();let A=N.resolve();return E.forEach(k=>{A=A.next(()=>p.getEntry(l,k)).next(P=>{const R=d.docVersions.get(k);ee(R!==null),P.version.compareTo(R)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),p.addEntry(P)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=G();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function yh(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function eE(n,e){const t=$(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const c=[];e.targetChanges.forEach((p,g)=>{const E=i.get(g);if(!E)return;c.push(t.Qr.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(s,p.addedDocuments,g)));let A=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Ie.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(g,A),function(P,R,O){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(E,A,p)&&c.push(t.Qr.updateTargetData(s,A))});let l=nt(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(tE(s,a,e.documentUpdates).next(p=>{l=p.cs,d=p.ls})),!r.isEqual(q.min())){const p=t.Qr.getLastRemoteSnapshotVersion(s).next(g=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.ns=i,s))}function tE(n,e,t){let r=G(),i=G();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=nt();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{cs:a,ls:i}})}function nE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rE(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function no(n,e,t){const r=$(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!gr(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function cu(n,e,t){const r=$(n);let i=q.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const g=$(l),E=g.rs.get(p);return E!==void 0?N.resolve(g.ns.get(E)):g.Qr.getTargetData(d,p)}(r,a,Fe(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:G())).next(c=>(iE(r,Qy(e),c),{documents:c,hs:s})))}function iE(n,e,t){let r=n.ss.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class uu{constructor(){this.activeTargetIds=tv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sE{constructor(){this.no=new uu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new uu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr=null;function Ns(){return Qr===null?Qr=function(){return 268435456+Math.round(2147483648*Math.random())}():Qr++,"0x"+Qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class uE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,a){const c=Ns(),l=this.vo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,s,a),this.Mo(t,l,d,i).then(p=>(x("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw hn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}xo(t,r,i,s,a,c){return this.Co(t,r,i,s,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,r){const i=aE[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=Ns();return new Promise((a,c)=>{const l=new kl;l.setWithCredentials(!0),l.listenOnce(Dl.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ni.NO_ERROR:const p=l.getResponseJson();x(Ee,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case ni.TIMEOUT:x(Ee,`RPC '${e}' ${s} timed out`),c(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case ni.HTTP_ERROR:const g=l.getStatus();if(x(Ee,`RPC '${e}' ${s} failed with status:`,g,"response text:",l.getResponseText()),g>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const k=function(R){const O=R.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(A.status);c(new F(k,A.message))}else c(new F(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new F(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x(Ee,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);x(Ee,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Oo(e,t,r){const i=Ns(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xl(),c=Ol(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.xmlHttpFactory=new Nl({})),this.Fo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=s.join("");x(Ee,`Creating RPC '${e}' stream ${i}: ${p}`,l);const g=a.createWebChannel(p,l);let E=!1,A=!1;const k=new cE({lo:R=>{A?x(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(E||(x(Ee,`Opening RPC '${e}' stream ${i} transport.`),g.open(),E=!0),x(Ee,`RPC '${e}' stream ${i} sending:`,R),g.send(R))},ho:()=>g.close()}),P=(R,O,M)=>{R.listen(O,L=>{try{M(L)}catch(B){setTimeout(()=>{throw B},0)}})};return P(g,Hn.EventType.OPEN,()=>{A||(x(Ee,`RPC '${e}' stream ${i} transport opened.`),k.mo())}),P(g,Hn.EventType.CLOSE,()=>{A||(A=!0,x(Ee,`RPC '${e}' stream ${i} transport closed`),k.po())}),P(g,Hn.EventType.ERROR,R=>{A||(A=!0,hn(Ee,`RPC '${e}' stream ${i} transport errored:`,R),k.po(new F(D.UNAVAILABLE,"The operation could not be completed")))}),P(g,Hn.EventType.MESSAGE,R=>{var O;if(!A){const M=R.data[0];ee(!!M);const L=M,B=L.error||((O=L[0])===null||O===void 0?void 0:O.error);if(B){x(Ee,`RPC '${e}' stream ${i} received error:`,B);const H=B.status;let Q=function(_){const w=oe[_];if(w!==void 0)return ah(w)}(H),v=B.message;Q===void 0&&(Q=D.INTERNAL,v="Unknown error status: "+H+" with message "+B.message),A=!0,k.po(new F(Q,v)),g.close()}else x(Ee,`RPC '${e}' stream ${i} received:`,M),k.yo(M)}}),P(c,Vl.STAT_EVENT,R=>{R.stat===Hs.PROXY?x(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Hs.NOPROXY&&x(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Ds(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n){return new Ev(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,r,i,s,a,c,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new vh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lE extends Eh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Iv(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Be(a.readTime):q.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=to(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=Xs(l)?{documents:Rv(s,l)}:{query:Sv(s,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=lh(s,a.resumeToken);const d=Js(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Ei(s,a.snapshotVersion.toTimestamp());const d=Js(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Cv(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=to(this.serializer),t.removeTarget=e,this.i_(t)}}class hE extends Eh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Av(e.writeResults,e.commitTime),r=Be(e.commitTime);return this.listener.A_(r,t)}return ee(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=to(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>bv(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,Zs(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(D.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Zs(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class fE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(tt(t),this.y_=!1):x("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{Wt(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=$(l);d.M_.add(4),await vr(d),d.N_.set("Unknown"),d.M_.delete(4),await Bi(d)}(this))})}),this.N_=new fE(r,i)}}async function Bi(n){if(Wt(n))for(const e of n.x_)await e(!0)}async function vr(n){for(const e of n.x_)await e(!1)}function wh(n,e){const t=$(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Uo(t)?Fo(t):Rn(t).Xo()&&Lo(t,e))}function Mo(n,e){const t=$(n),r=Rn(t);t.F_.delete(e),r.Xo()&&Th(t,e),t.F_.size===0&&(r.Xo()?r.n_():Wt(t)&&t.N_.set("Unknown"))}function Lo(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rn(n).P_(e)}function Th(n,e){n.L_.xe(e),Rn(n).I_(e)}function Fo(n){n.L_=new gv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Rn(n).start(),n.N_.w_()}function Uo(n){return Wt(n)&&!Rn(n).Zo()&&n.F_.size>0}function Wt(n){return $(n).M_.size===0}function Ih(n){n.L_=void 0}async function mE(n){n.N_.set("Online")}async function gE(n){n.F_.forEach((e,t)=>{Lo(n,e)})}async function _E(n,e){Ih(n),Uo(n)?(n.N_.D_(e),Fo(n)):n.N_.set("Unknown")}async function yE(n,e,t){if(n.N_.set("Online"),e instanceof uh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.F_.delete(c),i.L_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wi(n,r)}else if(e instanceof si?n.L_.Ke(e):e instanceof ch?n.L_.He(e):n.L_.We(e),!t.isEqual(q.min()))try{const r=await yh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.L_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.F_.get(d);p&&s.F_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=s.F_.get(l);if(!p)return;s.F_.set(l,p.withResumeToken(Ie.EMPTY_BYTE_STRING,p.snapshotVersion)),Th(s,l);const g=new gt(p.target,l,d,p.sequenceNumber);Lo(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await wi(n,r)}}async function wi(n,e,t){if(!gr(e))throw e;n.M_.add(1),await vr(n),n.N_.set("Offline"),t||(t=()=>yh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Bi(n)})}function bh(n,e){return e().catch(t=>wi(n,t,e))}async function ji(n){const e=$(n),t=It(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;vE(e);)try{const i=await nE(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,EE(e,i)}catch(i){await wi(e,i)}Ah(e)&&Rh(e)}function vE(n){return Wt(n)&&n.v_.length<10}function EE(n,e){n.v_.push(e);const t=It(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Ah(n){return Wt(n)&&!It(n).Zo()&&n.v_.length>0}function Rh(n){It(n).start()}async function wE(n){It(n).V_()}async function TE(n){const e=It(n);for(const t of n.v_)e.d_(t.mutations)}async function IE(n,e,t){const r=n.v_.shift(),i=ko.from(r,e,t);await bh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ji(n)}async function bE(n,e){e&&It(n).E_&&await async function(r,i){if(function(a){return fv(a)&&a!==D.ABORTED}(i.code)){const s=r.v_.shift();It(r).t_(),await bh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ji(r)}}(n,e),Ah(n)&&Rh(n)}async function hu(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Wt(t);t.M_.add(3),await vr(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Bi(t)}async function AE(n,e){const t=$(n);e?(t.M_.delete(2),await Bi(t)):e||(t.M_.add(2),await vr(t),t.N_.set("Unknown"))}function Rn(n){return n.B_||(n.B_=function(t,r,i){const s=$(t);return s.f_(),new lE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:mE.bind(null,n),To:gE.bind(null,n),Ao:_E.bind(null,n),h_:yE.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),Uo(n)?Fo(n):n.N_.set("Unknown")):(await n.B_.stop(),Ih(n))})),n.B_}function It(n){return n.k_||(n.k_=function(t,r,i){const s=$(t);return s.f_(),new hE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:wE.bind(null,n),Ao:bE.bind(null,n),R_:TE.bind(null,n),A_:IE.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await ji(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Bo(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(n,e){if(tt("AsyncQueue",`${e}: ${n}`),gr(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Gn(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.q_=new re(U.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):z():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class gn{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new gn(e,t,cn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class SE{constructor(){this.queries=new An(e=>Gl(e),Oi),this.onlineState="Unknown",this.z_=new Set}}async function PE(n,e){const t=$(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new RE,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=jo(a,`Initialization of query '${en(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&zo(t)}async function CE(n,e){const t=$(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kE(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.U_)c.H_(i)&&(r=!0);a.K_=i}}r&&zo(t)}function NE(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function zo(n){n.z_.forEach(e=>{e.next()})}var ro,fu;(fu=ro||(ro={})).J_="default",fu.Cache="cache";class DE{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ro.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.key=e}}class Ph{constructor(e){this.key=e}}class VE{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=G(),this.mutatedKeys=G(),this.Ia=Kl(e),this.Ta=new cn(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new du,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const E=i.get(p),A=xi(this.query,g)?g:null,k=!!E&&this.mutatedKeys.has(E.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;E&&A?E.data.isEqual(A.data)?k!==P&&(r.track({type:3,doc:A}),R=!0):this.Ra(E,A)||(r.track({type:2,doc:A}),R=!0,(l&&this.Ia(A,l)>0||d&&this.Ia(A,d)<0)&&(c=!0)):!E&&A?(r.track({type:0,doc:A}),R=!0):E&&!A&&(r.track({type:1,doc:E}),R=!0,(l||d)&&(c=!0)),R&&(A?(a=a.add(A),s=P?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((p,g)=>function(A,k){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return P(A)-P(k)}(p.type,g.type)||this.Ia(p.doc,g.doc)),this.Va(r),i=i!=null&&i;const c=t&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,d=l!==this.ha;return this.ha=l,a.length!==0||d?{snapshot:new gn(this.query,e.Ta,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new du,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=G(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Ph(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Sh(r))}),t}pa(e){this.la=e.hs,this.Pa=G();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return gn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class OE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xE{constructor(e){this.key=e,this.wa=!1}}class ME{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new An(c=>Gl(c),Oi),this.Da=new Map,this.Ca=new Set,this.va=new re(U.comparator),this.Fa=new Map,this.Ma=new Vo,this.xa={},this.Oa=new Map,this.Na=mn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function LE(n,e,t=!0){const r=Oh(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Ch(r,e,t,!0),i}async function FE(n,e){const t=Oh(n);await Ch(t,e,!0,!1)}async function Ch(n,e,t,r){const i=await rE(n.localStore,Fe(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return r&&(c=await UE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&wh(n.remoteStore,i),c}async function UE(n,e,t,r,i){n.Ba=(g,E,A)=>async function(P,R,O,M){let L=R.view.da(O);L.Xi&&(L=await cu(P.localStore,R.query,!1).then(({documents:v})=>R.view.da(v,L)));const B=M&&M.targetChanges.get(R.targetId),H=M&&M.targetMismatches.get(R.targetId)!=null,Q=R.view.applyChanges(L,P.isPrimaryClient,B,H);return mu(P,R.targetId,Q.fa),Q.snapshot}(n,g,E,A);const s=await cu(n.localStore,e,!0),a=new VE(e,s.hs),c=a.da(s.documents),l=yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);mu(n,t,d.fa);const p=new OE(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function BE(n,e,t){const r=$(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!Oi(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await no(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Mo(r.remoteStore,i.targetId),io(r,i.targetId)}).catch(mr)):(io(r,i.targetId),await no(r.localStore,i.targetId,!0))}async function jE(n,e){const t=$(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Mo(t.remoteStore,r.targetId))}async function zE(n,e,t){const r=QE(n);try{const i=await function(a,c){const l=$(a),d=ue.now(),p=c.reduce((A,k)=>A.add(k.key),G());let g,E;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=nt(),P=G();return l.os.getEntries(A,p).next(R=>{k=R,k.forEach((O,M)=>{M.isValidDocument()||(P=P.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,k)).next(R=>{g=R;const O=[];for(const M of c){const L=cv(M,g.get(M.key).overlayedDocument);L!=null&&O.push(new bt(M.key,L,Bl(L.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(A,d,O,c)}).next(R=>{E=R;const O=R.applyToLocalDocumentSet(g,P);return l.documentOverlayCache.saveOverlays(A,R.batchId,O)})}).then(()=>({batchId:E.batchId,changes:Xl(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.xa[a.currentUser.toKey()];d||(d=new re(J)),d=d.insert(c,l),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Er(r,i.changes),await ji(r.remoteStore)}catch(i){const s=jo(i,"Failed to persist write");t.reject(s)}}async function kh(n,e){const t=$(n);try{const r=await eE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Fa.get(s);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ee(a.wa):i.removedDocuments.size>0&&(ee(a.wa),a.wa=!1))}),await Er(t,r,e)}catch(r){await mr(r)}}function pu(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,a)=>{const c=a.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=$(a);l.onlineState=c;let d=!1;l.queries.forEach((p,g)=>{for(const E of g.U_)E.j_(c)&&(d=!0)}),d&&zo(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qE(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new re(U.comparator);a=a.insert(s,Te.newNoDocument(s,q.min()));const c=G().add(s),l=new Fi(q.min(),new Map,new re(J),a,c);await kh(r,l),r.va=r.va.remove(s),r.Fa.delete(e),qo(r)}else await no(r.localStore,e,!1).then(()=>io(r,e,t)).catch(mr)}async function $E(n,e){const t=$(n),r=e.batch.batchId;try{const i=await Zv(t.localStore,e);Dh(t,r,null),Nh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Er(t,i)}catch(i){await mr(i)}}async function WE(n,e,t){const r=$(n);try{const i=await function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(ee(g!==null),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Dh(r,e,t),Nh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Er(r,i)}catch(i){await mr(i)}}function Nh(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Dh(n,e,t){const r=$(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function io(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Vh(n,r)})}function Vh(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(Mo(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),qo(n))}function mu(n,e,t){for(const r of t)r instanceof Sh?(n.Ma.addReference(r.key,e),HE(n,r)):r instanceof Ph?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Vh(n,r.key)):z()}function HE(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Ca.add(r),qo(n))}function qo(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new U(se.fromString(e)),r=n.Na.next();n.Fa.set(r,new xE(t)),n.va=n.va.insert(t,r),wh(n.remoteStore,new gt(Fe(Co(t.path)),r,"TargetPurposeLimboResolution",Io.oe))}}async function Er(n,e,t){const r=$(n),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){i.push(d);const g=xo.Ki(l.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(l,d){const p=$(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(d,E=>N.forEach(E.qi,A=>p.persistence.referenceDelegate.addReference(g,E.targetId,A)).next(()=>N.forEach(E.Qi,A=>p.persistence.referenceDelegate.removeReference(g,E.targetId,A)))))}catch(g){if(!gr(g))throw g;x("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const A=p.ns.get(E),k=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(k);p.ns=p.ns.insert(E,P)}}}(r.localStore,s))}async function GE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await _h(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(c=>{c.forEach(l=>{l.reject(new F(D.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Er(t,r.us)}}function KE(n,e){const t=$(n),r=t.Fa.get(e);if(r&&r.wa)return G().add(r.key);{let i=G();const s=t.Da.get(e);if(!s)return i;for(const a of s){const c=t.ba.get(a);i=i.unionWith(c.view.Ea)}return i}}function Oh(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qE.bind(null,e),e.Sa.h_=kE.bind(null,e.eventManager),e.Sa.ka=NE.bind(null,e.eventManager),e}function QE(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$E.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WE.bind(null,e),e}class gu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ui(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jv(this.persistence,new Xv,e.initialUser,this.serializer)}createPersistence(e){return new Gv(Oo.Hr,this.serializer)}createSharedClientState(e){return new sE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GE.bind(null,this.syncEngine),await AE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SE}()}createDatastore(e){const t=Ui(e.databaseInfo.databaseId),r=function(s){return new uE(s)}(e.databaseInfo);return function(s,a,c,l){return new dE(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new pE(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>pu(this.syncEngine,t,0),function(){return lu.D()?new lu:new oE}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,p){const g=new ME(i,s,a,c,l,d);return p&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=$(r);x("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await vr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=Ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=jo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vs(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _h(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ew(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>hu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>hu(e.remoteStore,i)),n._onlineComponents=e}function ZE(n){return n.name==="FirebaseError"?n.code===D.FAILED_PRECONDITION||n.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ew(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!ZE(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await Vs(n,new gu)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Vs(n,new gu);return n._offlineComponents}async function xh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await _u(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await _u(n,new XE))),n._onlineComponents}function tw(n){return xh(n).then(e=>e.syncEngine)}async function nw(n){const e=await xh(n),t=e.eventManager;return t.onListen=LE.bind(null,e.syncEngine),t.onUnlisten=BE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jE.bind(null,e.syncEngine),t}function rw(n,e,t={}){const r=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const p=new YE({next:E=>{a.enqueueAndForget(()=>CE(s,g));const A=E.docs.has(c);!A&&E.fromCache?d.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&E.fromCache&&l&&l.source==="server"?d.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new DE(Co(c.path),p,{includeMetadataChanges:!0,ra:!0});return PE(s,g)}(await nw(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sw(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vu(n){if(!U.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$o(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _y;switch(r.type){case"firstParty":return new wy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=yu.get(t);r&&(x("ComponentProvider","Removing Datastore"),yu.delete(t),r.terminate())}(this),Promise.resolve()}}function ow(n,e,t,r={}){var i;const s=(n=qt(n,Wo))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=we.MOCK_USER;else{c=Kp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new we(d)}n._authCredentials=new yy(new Ml(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ho(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class cr extends Ho{constructor(e,t,r){super(e,t,Co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new U(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function _n(n,e,...t){if(n=De(n),arguments.length===1&&(e=Ll.newId()),iw("doc","path",e),n instanceof Wo){const r=se.fromString(e,...t);return vu(r),new Ne(n,null,new U(r))}{if(!(n instanceof Ne||n instanceof cr))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return vu(r),new Ne(n.firestore,n instanceof cr?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new vh(this,"async_queue_retry"),this.hu=()=>{const t=Ds();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Ds();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Et;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!gr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Bo.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class zi extends Wo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new aw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fh(this),this._firestoreClient.terminate()}}function cw(n,e){const t=typeof n=="object"?n:Xu(),r=typeof n=="string"?n:"(default)",i=lo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hp("firestore");s&&ow(i,...s)}return i}function Lh(n){return n._firestoreClient||Fh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Fh(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,d,p){return new Oy(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Mh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new JE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Ie.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=/^__.*__$/;class lw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class Uh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Qo{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ti(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Bh(this.fu)&&uw.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class hw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ui(e)}Fu(e,t,r,i=!1){return new Qo({fu:e,methodName:t,vu:r,path:fe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jh(n){const e=n._freezeSettings(),t=Ui(n._databaseId);return new hw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dw(n,e,t,r,i,s={}){const a=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);Xo("Data must be an object, but it was:",a,r);const c=zh(r,a);let l,d;if(s.merge)l=new ke(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const E=so(e,g,t);if(!a.contains(E))throw new F(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);$h(p,E)||p.push(E)}l=new ke(p),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new lw(new Se(c),l,d)}class $i extends Go{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $i}}function fw(n,e,t,r){const i=n.Fu(1,e,t);Xo("Data must be an object, but it was:",i,r);const s=[],a=Se.empty();$t(r,(l,d)=>{const p=Yo(e,l,t);d=De(d);const g=i.Su(p);if(d instanceof $i)s.push(p);else{const E=Wi(d,g);E!=null&&(s.push(p),a.set(p,E))}});const c=new ke(s);return new Uh(a,c,i.fieldTransforms)}function pw(n,e,t,r,i,s){const a=n.Fu(1,e,t),c=[so(e,r,t)],l=[i];if(s.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<s.length;E+=2)c.push(so(e,s[E])),l.push(s[E+1]);const d=[],p=Se.empty();for(let E=c.length-1;E>=0;--E)if(!$h(d,c[E])){const A=c[E];let k=l[E];k=De(k);const P=a.Su(A);if(k instanceof $i)d.push(A);else{const R=Wi(k,P);R!=null&&(d.push(A),p.set(A,R))}}const g=new ke(d);return new Uh(p,g,a.fieldTransforms)}function Wi(n,e){if(qh(n=De(n)))return Xo("Unsupported field value:",e,n),zh(n,e);if(n instanceof Go)return function(r,i){if(!Bh(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=Wi(c,i.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ue.fromDate(r);return{timestampValue:Ei(i.serializer,s)}}if(r instanceof ue){const s=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ei(i.serializer,s)}}if(r instanceof Ko)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:lh(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Do(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${$o(r)}`)}(n,e)}function zh(n,e){const t={};return Fl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(n,(r,i)=>{const s=Wi(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function qh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Ko||n instanceof yn||n instanceof Ne||n instanceof Go)}function Xo(n,e,t){if(!qh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=$o(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function so(n,e,t){if((e=De(e))instanceof qi)return e._internalPath;if(typeof e=="string")return Yo(n,e);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const mw=new RegExp("[~\\*/\\[\\]]");function Yo(n,e,t){if(e.search(mw)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qi(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ti(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new F(D.INVALID_ARGUMENT,c+n+l)}function $h(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gw extends Wh{data(){return super.data()}}function Hh(n,e){return typeof e=="string"?Yo(n,e):e instanceof qi?e._internalPath:e._delegate._internalPath}class _w{convertValue(e,t="none"){switch(zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $t(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ko(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const t=Tt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);ee(gh(r));const i=new ir(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gh extends Wh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ew(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ew extends Gh{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n){n=qt(n,Ne);const e=qt(n.firestore,zi);return rw(Lh(e),n._key).then(t=>Tw(e,n,t))}class ww extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function Jo(n,e,t){n=qt(n,Ne);const r=qt(n.firestore,zi),i=yw(n.converter,e);return Kh(r,[dw(jh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ue.none())])}function Ii(n,e,t,...r){n=qt(n,Ne);const i=qt(n.firestore,zi),s=jh(i);let a;return a=typeof(e=De(e))=="string"||e instanceof qi?pw(s,"updateDoc",n._key,e,t,r):fw(s,"updateDoc",n._key,e),Kh(i,[a.toMutation(n._key,Ue.exists(!0))])}function Kh(n,e){return function(r,i){const s=new Et;return r.asyncQueue.enqueueAndForget(async()=>zE(await tw(r),i,s)),s.promise}(Lh(n),e)}function Tw(n,e,t){const r=t.docs.get(e._key),i=new ww(n);return new Gh(n,i,e._key,r,new vw(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){bn=i})(Tn),un(new Lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new zi(new vy(r.getProvider("auth-internal")),new Iy(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),vt(zc,"4.6.4",e),vt(zc,"4.6.4","esm2017")})();const Iw={apiKey:"AIzaSyA5bZkiDci5inrcYjt3dyJ0sVDKKwAjqhA",authDomain:"quitoa-proj.firebaseapp.com",projectId:"quitoa-proj",storageBucket:"quitoa-proj.appspot.com",messagingSenderId:"102326052778",appId:"1:102326052778:web:728a753f15a55e3c05edd3"},Qh=Qu(Iw),Fw=my(Qh),En=cw(Qh),Uw=new Qe,Bw=async n=>{const e=_n(En,"admins",n),t=await vn(e);if(t.exists()){const r=t.data();if(r&&r.isAdmin)return!0}return!1},jw=async n=>{const e=_n(En,"codes",n),t=await vn(e);return t.exists()&&t.data().isActive?{validate:!0,event:t.data().event,id:t.data().id}:{validate:!1,event:"",id:""}},zw=async(n,e)=>{if(n){const s=_n(En,"codes",n);(await vn(s)).exists()&&await Ii(s,{isActive:!1})}const t=Math.floor(1e5+Math.random()*9e5).toString(),r=_n(En,"codes",t);return(await vn(r)).exists()?await Ii(r,{isActive:!0,event:e}):await Jo(r,{isActive:!0,event:e}),t},qw=async n=>{const e=_n(En,"events",n);(await vn(e)).exists()?await Ii(e,{event:n}):await Jo(e,{event:n})},$w=async(n,e)=>{if(!e||!n)return;const t=_n(En,"events",n);(await vn(t)).exists()?await Ii(t,{students:[e]}):await Jo(t,{students:[e]})};export{Ef as B,Nf as D,Lf as F,Ai as P,Fp as R,oo as S,yf as a,vf as b,Sw as c,Cw as d,bi as e,Mt as f,ms as g,Qf as h,Vw as i,kw as j,Dw as k,Nw as l,Gf as m,zw as n,qw as o,Fw as p,Uw as q,Bw as r,Ow as s,Pw as t,oi as u,Dd as v,jw as w,Rw as x,Aw as y,$w as z};
