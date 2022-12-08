var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n,r,i,s,o={};function a(e,t){return function(){return e.apply(t,arguments)}}n=o,r="default",i=function(){return M},s=function(e){return M=e},Object.defineProperty(n,r,{get:i,set:s,enumerable:!0,configurable:!0});const{toString:c}=Object.prototype,{getPrototypeOf:u}=Object,l=(h=Object.create(null),e=>{const t=c.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const d=e=>(e=e.toLowerCase(),t=>l(t)===e),f=e=>t=>typeof t===e,{isArray:p}=Array,m=f("undefined");const g=d("ArrayBuffer");const v=f("string"),y=f("function"),b=f("number"),w=e=>null!==e&&"object"==typeof e,_=e=>{if("object"!==l(e))return!1;const t=u(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=d("Date"),I=d("File"),T=d("Blob"),S=d("FileList"),k=d("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),p(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const R="undefined"==typeof self?void 0===e?void 0:e:self,C=e=>!m(e)&&e!==R;const P=(N="undefined"!=typeof Uint8Array&&u(Uint8Array),e=>N&&e instanceof N);var N;const L=d("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),D=d("RegExp"),U=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)};var M={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||c.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:v,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:_,isUndefined:m,isDate:E,isFile:I,isBlob:T,isRegExp:D,isFunction:y,isStream:e=>w(e)&&y(e.pipe),isURLSearchParams:k,isTypedArray:P,isFileList:S,forEach:O,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,i)=>{const s=t&&A(n,i)||i;_(n[s])&&_(r)?n[s]=e(n[s],r):_(r)?n[s]=e({},r):p(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(O(t,((t,r)=>{n&&y(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&u(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:d,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:L,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return p(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:A,global:R,isContextDefined:C,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=p(e)?[]:{};return O(e,((e,t)=>{const s=n(e,r+1);!m(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)}};function B(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}o.default.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const j=B.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{F[e]={value:e}})),Object.defineProperties(B,F),Object.defineProperty(j,"isAxiosError",{value:!0}),B.from=(e,t,n,r,i,s)=>{const a=Object.create(j);return o.default.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),B.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,s&&Object.assign(a,s),a};var V,$,q,z=B,H=t("object"==typeof self?self.FormData:window.FormData);$=function(e){var t,n,r=ee(e),i=r[0],s=r[1],o=new Y(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)t=G[e.charCodeAt(n)]<<18|G[e.charCodeAt(n+1)]<<12|G[e.charCodeAt(n+2)]<<6|G[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=G[e.charCodeAt(n)]<<2|G[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=G[e.charCodeAt(n)]<<10|G[e.charCodeAt(n+1)]<<4|G[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},q=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(te(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(J[t>>2]+J[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(J[t>>10]+J[t>>4&63]+J[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var W,K,J=[],G=[],Y="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,Z=X.length;Q<Z;++Q)J[Q]=X[Q],G[X.charCodeAt(Q)]=Q;function ee(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function te(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(J[(i=r)>>18&63]+J[i>>12&63]+J[i>>6&63]+J[63&i]);return s.join("")}G["-".charCodeAt(0)]=62,G["_".charCodeAt(0)]=63,W=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},K=function(e,t,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*m};const ne="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;V=ie;function re(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ie.prototype),t}function ie(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ae(e)}return se(e,t,n)}function se(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ie.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|he(e,t);let r=re(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ze(e,Uint8Array)){const t=new Uint8Array(e);return ue(t.buffer,t.byteOffset,t.byteLength)}return ce(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ze(e,ArrayBuffer)||e&&ze(e.buffer,ArrayBuffer))return ue(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(ze(e,SharedArrayBuffer)||e&&ze(e.buffer,SharedArrayBuffer)))return ue(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return ie.from(r,t,n);const i=function(e){if(ie.isBuffer(e)){const t=0|le(e.length),n=re(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||He(e.length)?re(0):ce(e);if("Buffer"===e.type&&Array.isArray(e.data))return ce(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ie.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function oe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ae(e){return oe(e),re(e<0?0:0|le(e))}function ce(e){const t=e.length<0?0:0|le(e.length),n=re(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function ue(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,ie.prototype),r}function le(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function he(e,t){if(ie.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ze(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ve(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $e(e).length;default:if(i)return r?-1:Ve(e).length;t=(""+t).toLowerCase(),i=!0}}function de(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Se(this,t,n);case"utf8":case"utf-8":return Ee(this,t,n);case"ascii":return Ie(this,t,n);case"latin1":case"binary":return Te(this,t,n);case"base64":return _e(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function fe(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function pe(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),He(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=ie.from(t,r)),ie.isBuffer(t))return 0===t.length?-1:me(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):me(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function me(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return-1}function ge(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(He(r))return o;e[n+o]=r}return o}function ve(e,t,n,r){return qe(Ve(t,e.length-n),e,n,r)}function ye(e,t,n,r){return qe(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function be(e,t,n,r){return qe($e(t),e,n,r)}function we(e,t,n,r){return qe(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function _e(e,t,n){return 0===t&&n===e.length?q(e):q(e.slice(t,n))}function Ee(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}ie.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ie.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ie.prototype,"parent",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.buffer}}),Object.defineProperty(ie.prototype,"offset",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.byteOffset}}),ie.poolSize=8192,ie.from=function(e,t,n){return se(e,t,n)},Object.setPrototypeOf(ie.prototype,Uint8Array.prototype),Object.setPrototypeOf(ie,Uint8Array),ie.alloc=function(e,t,n){return function(e,t,n){return oe(e),e<=0?re(e):void 0!==t?"string"==typeof n?re(e).fill(t,n):re(e).fill(t):re(e)}(e,t,n)},ie.allocUnsafe=function(e){return ae(e)},ie.allocUnsafeSlow=function(e){return ae(e)},ie.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ie.prototype},ie.compare=function(e,t){if(ze(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),ze(t,Uint8Array)&&(t=ie.from(t,t.offset,t.byteLength)),!ie.isBuffer(e)||!ie.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},ie.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ie.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ie.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=ie.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(ze(t,Uint8Array))i+t.length>r.length?(ie.isBuffer(t)||(t=ie.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!ie.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},ie.byteLength=he,ie.prototype._isBuffer=!0,ie.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)fe(this,t,t+1);return this},ie.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)fe(this,t,t+3),fe(this,t+1,t+2);return this},ie.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)fe(this,t,t+7),fe(this,t+1,t+6),fe(this,t+2,t+5),fe(this,t+3,t+4);return this},ie.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ee(this,0,e):de.apply(this,arguments)},ie.prototype.toLocaleString=ie.prototype.toString,ie.prototype.equals=function(e){if(!ie.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ie.compare(this,e)},ie.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ne&&(ie.prototype[ne]=ie.prototype.inspect),ie.prototype.compare=function(e,t,n,r,i){if(ze(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),!ie.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==u[e]){s=c[e],o=u[e];break}return s<o?-1:o<s?1:0},ie.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ie.prototype.indexOf=function(e,t,n){return pe(this,e,t,n,!0)},ie.prototype.lastIndexOf=function(e,t,n){return pe(this,e,t,n,!1)},ie.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return ge(this,e,t,n);case"utf8":case"utf-8":return ve(this,e,t,n);case"ascii":case"latin1":case"binary":return ye(this,e,t,n);case"base64":return be(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},ie.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ie(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Te(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function Se(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=We[e[r]];return i}function ke(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function Oe(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Ae(e,t,n,r,i,s){if(!ie.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Re(e,t,n,r,i){Me(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Ce(e,t,n,r,i){Me(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Pe(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ne(e,t,n,r,i){return t=+t,n>>>=0,i||Pe(e,0,n,4),K(e,t,n,r,23,4),n+4}function Le(e,t,n,r,i){return t=+t,n>>>=0,i||Pe(e,0,n,8),K(e,t,n,r,52,8),n+8}ie.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,ie.prototype),r},ie.prototype.readUintLE=ie.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},ie.prototype.readUintBE=ie.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},ie.prototype.readUint8=ie.prototype.readUInt8=function(e,t){return e>>>=0,t||Oe(e,1,this.length),this[e]},ie.prototype.readUint16LE=ie.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Oe(e,2,this.length),this[e]|this[e+1]<<8},ie.prototype.readUint16BE=ie.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Oe(e,2,this.length),this[e]<<8|this[e+1]},ie.prototype.readUint32LE=ie.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ie.prototype.readUint32BE=ie.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ie.prototype.readBigUInt64LE=Ke((function(e){Be(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),ie.prototype.readBigUInt64BE=Ke((function(e){Be(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),ie.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},ie.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},ie.prototype.readInt8=function(e,t){return e>>>=0,t||Oe(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ie.prototype.readInt16LE=function(e,t){e>>>=0,t||Oe(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt16BE=function(e,t){e>>>=0,t||Oe(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt32LE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ie.prototype.readInt32BE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ie.prototype.readBigInt64LE=Ke((function(e){Be(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ie.prototype.readBigInt64BE=Ke((function(e){Be(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ie.prototype.readFloatLE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),W(this,e,!0,23,4)},ie.prototype.readFloatBE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),W(this,e,!1,23,4)},ie.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Oe(e,8,this.length),W(this,e,!0,52,8)},ie.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Oe(e,8,this.length),W(this,e,!1,52,8)},ie.prototype.writeUintLE=ie.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ae(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},ie.prototype.writeUintBE=ie.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ae(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},ie.prototype.writeUint8=ie.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,1,255,0),this[t]=255&e,t+1},ie.prototype.writeUint16LE=ie.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeUint16BE=ie.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeUint32LE=ie.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ie.prototype.writeUint32BE=ie.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigUInt64LE=Ke((function(e,t=0){return Re(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeBigUInt64BE=Ke((function(e,t=0){return Ce(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ae(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ie.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ae(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ie.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ie.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ie.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigInt64LE=Ke((function(e,t=0){return Re(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeBigInt64BE=Ke((function(e,t=0){return Ce(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeFloatLE=function(e,t,n){return Ne(this,e,t,!0,n)},ie.prototype.writeFloatBE=function(e,t,n){return Ne(this,e,t,!1,n)},ie.prototype.writeDoubleLE=function(e,t,n){return Le(this,e,t,!0,n)},ie.prototype.writeDoubleBE=function(e,t,n){return Le(this,e,t,!1,n)},ie.prototype.copy=function(e,t,n,r){if(!ie.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},ie.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!ie.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=ie.isBuffer(e)?e:ie.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const xe={};function De(e,t,n){xe[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Ue(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Me(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new xe.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Be(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||je(t,e.length-(n+1))}(r,i,s)}function Be(e,t){if("number"!=typeof e)throw new xe.ERR_INVALID_ARG_TYPE(t,"number",e)}function je(e,t,n){if(Math.floor(e)!==e)throw Be(e,n),new xe.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new xe.ERR_BUFFER_OUT_OF_BOUNDS;throw new xe.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}De("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),De("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),De("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Ue(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Ue(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const Fe=/[^+/0-9A-Za-z-_]/g;function Ve(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function $e(e){return $(function(e){if((e=(e=e.split("=")[0]).trim().replace(Fe,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function qe(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function ze(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function He(e){return e!=e}const We=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Ke(e){return"undefined"==typeof BigInt?Je:e}function Je(){throw new Error("BigInt not supported")}var Ge=V;function Ye(e){return o.default.isPlainObject(e)||o.default.isArray(e)}function Xe(e){return o.default.endsWith(e,"[]")?e.slice(0,-2):e}function Qe(e,t,n){return e?e.concat(t).map((function(e,t){return e=Xe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ze=o.default.toFlatObject(o.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var et=function(e,t,n){if(!o.default.isObject(e))throw new TypeError("target must be an object");t=t||new(H||FormData);const r=(n=o.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!o.default.isUndefined(t[e])}))).metaTokens,i=n.visitor||h,s=n.dots,a=n.indexes,c=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((u=t)&&o.default.isFunction(u.append)&&"FormData"===u[Symbol.toStringTag]&&u[Symbol.iterator]);var u;if(!o.default.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(o.default.isDate(e))return e.toISOString();if(!c&&o.default.isBlob(e))throw new z("Blob is not supported. Use a Buffer instead.");return o.default.isArrayBuffer(e)||o.default.isTypedArray(e)?c&&"function"==typeof Blob?new Blob([e]):Ge.from(e):e}function h(e,n,i){let c=e;if(e&&!i&&"object"==typeof e)if(o.default.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(o.default.isArray(e)&&function(e){return o.default.isArray(e)&&!e.some(Ye)}(e)||o.default.isFileList(e)||o.default.endsWith(n,"[]")&&(c=o.default.toArray(e)))return n=Xe(n),c.forEach((function(e,r){!o.default.isUndefined(e)&&null!==e&&t.append(!0===a?Qe([n],r,s):null===a?n:n+"[]",l(e))})),!1;return!!Ye(e)||(t.append(Qe(i,n,s),l(e)),!1)}const d=[],f=Object.assign(Ze,{defaultVisitor:h,convertValue:l,isVisitable:Ye});if(!o.default.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!o.default.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),o.default.forEach(n,(function(n,s){!0===(!(o.default.isUndefined(n)||null===n)&&i.call(t,n,o.default.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),d.pop()}}(e),t};function tt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function nt(e,t){this._pairs=[],e&&et(e,this,t)}const rt=nt.prototype;rt.append=function(e,t){this._pairs.push([e,t])},rt.toString=function(e){const t=e?function(t){return e.call(this,t,tt)}:tt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var it=nt;function st(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,n){if(!t)return e;const r=n&&n.encode||st,i=n&&n.serialize;let s;if(s=i?i(t,n):o.default.isURLSearchParams(t)?t.toString():new it(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var at=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){o.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ut="undefined"!=typeof URLSearchParams?URLSearchParams:it,lt=FormData;const ht=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),dt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var ft={isBrowser:!0,classes:{URLSearchParams:ut,FormData:lt,Blob:Blob},isStandardBrowserEnv:ht,isStandardBrowserWebWorkerEnv:dt,protocols:["http","https","file","blob","url","data"]};function pt(e,t){return et(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ft.isNode&&o.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var mt=function(e){function t(e,n,r,i){let s=e[i++];const a=Number.isFinite(+s),c=i>=e.length;if(s=!s&&o.default.isArray(r)?r.length:s,c)return o.default.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!a;r[s]&&o.default.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&o.default.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!a}if(o.default.isFormData(e)&&o.default.isFunction(e.entries)){const n={};return o.default.forEachEntry(e,((e,r)=>{t(function(e){return o.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const gt={"Content-Type":void 0};const vt={transitional:ct,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=o.default.isObject(e);i&&o.default.isHTMLForm(e)&&(e=new FormData(e));if(o.default.isFormData(e))return r&&r?JSON.stringify(mt(e)):e;if(o.default.isArrayBuffer(e)||o.default.isBuffer(e)||o.default.isStream(e)||o.default.isFile(e)||o.default.isBlob(e))return e;if(o.default.isArrayBufferView(e))return e.buffer;if(o.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return pt(e,this.formSerializer).toString();if((s=o.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return et(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(o.default.isString(e))try{return(t||JSON.parse)(e),o.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||vt.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&o.default.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw z.from(e,z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.default.forEach(["delete","get","head"],(function(e){vt.headers[e]={}})),o.default.forEach(["post","put","patch"],(function(e){vt.headers[e]=o.default.merge(gt)}));var yt=vt;const bt=o.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var wt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&bt[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const _t=Symbol("internals");function Et(e){return e&&String(e).trim().toLowerCase()}function It(e){return!1===e||null==e?e:o.default.isArray(e)?e.map(It):String(e)}function Tt(e,t,n,r){return o.default.isFunction(r)?r.call(this,t,n):o.default.isString(t)?o.default.isString(r)?-1!==t.indexOf(r):o.default.isRegExp(r)?r.test(t):void 0:void 0}let St=Symbol.iterator,kt=Symbol.toStringTag;class Ot{set(e,t,n){const r=this;function i(e,t,n){const i=Et(t);if(!i)throw new Error("header name must be a non-empty string");const s=o.default.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=It(e))}const s=(e,t)=>o.default.forEach(e,((e,n)=>i(e,n,t)));return o.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):o.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(wt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=Et(e)){const n=o.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(o.default.isFunction(t))return t.call(this,e,n);if(o.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Et(e)){const n=o.default.findKey(this,e);return!(!n||t&&!Tt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Et(e)){const i=o.default.findKey(n,e);!i||t&&!Tt(0,n[i],i,t)||(delete n[i],r=!0)}}return o.default.isArray(e)?e.forEach(i):i(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return o.default.forEach(this,((r,i)=>{const s=o.default.findKey(n,i);if(s)return t[s]=It(r),void delete t[i];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();a!==i&&delete t[i],t[a]=It(r),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return o.default.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&o.default.isArray(n)?n.join(", "):n)})),t}[St](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[kt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[_t]=this[_t]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Et(e);t[r]||(!function(e,t){const n=o.default.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return o.default.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}Ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),o.default.freezeMethods(Ot.prototype),o.default.freezeMethods(Ot);var At=Ot;function Rt(e,t){const n=this||yt,r=t||n,i=At.from(r.headers);let s=r.data;return o.default.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Ct(e){return!(!e||!e.__CANCEL__)}function Pt(e,t,n){z.call(this,null==e?"canceled":e,z.ERR_CANCELED,t,n),this.name="CanceledError"}o.default.inherits(Pt,z,{__CANCEL__:!0});var Nt=Pt;function Lt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var xt=ft.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const a=[];a.push(e+"="+encodeURIComponent(t)),o.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.default.isString(r)&&a.push("path="+r),o.default.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Dt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ut(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Dt(e,t):t}var Mt=ft.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=o.default.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Bt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var jt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function Ft(e,t){let n=0;const r=jt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const Vt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=At.from(e.headers).normalize(),s=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}o.default.isFormData(r)&&(ft.isStandardBrowserEnv||ft.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const l=Ut(e.baseURL,e.url);function h(){if(!u)return;const r=At.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());Lt((function(e){t(e),c()}),(function(e){n(e),c()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),ot(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(n(new z("Request aborted",z.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ct;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new z(t,r.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,u)),u=null},ft.isStandardBrowserEnv){const t=(e.withCredentials||Mt(l))&&e.xsrfCookieName&&xt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in u&&o.default.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),o.default.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",Ft(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Ft(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=t=>{u&&(n(!t||t.type?new Nt(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const d=Bt(l);d&&-1===ft.protocols.indexOf(d)?n(new z("Unsupported protocol "+d+":",z.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};o.default.forEach(Vt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var $t={getAdapter:e=>{e=o.default.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=o.default.isString(n)?Vt[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(o.default.hasOwnProp(Vt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!o.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Vt};function qt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Nt(null,e)}function zt(e){qt(e),e.headers=At.from(e.headers),e.data=Rt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return $t.getAdapter(e.adapter||yt.adapter)(e).then((function(t){return qt(e),t.data=Rt.call(e,e.transformResponse,t),t.headers=At.from(t.headers),t}),(function(t){return Ct(t)||(qt(e),t&&t.response&&(t.response.data=Rt.call(e,e.transformResponse,t.response),t.response.headers=At.from(t.response.headers))),Promise.reject(t)}))}const Ht=e=>e instanceof At?e.toJSON():e;function Wt(e,t){t=t||{};const n={};function r(e,t,n){return o.default.isPlainObject(e)&&o.default.isPlainObject(t)?o.default.merge.call({caseless:n},e,t):o.default.isPlainObject(t)?o.default.merge({},t):o.default.isArray(t)?t.slice():t}function i(e,t,n){return o.default.isUndefined(t)?o.default.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!o.default.isUndefined(t))return r(void 0,t)}function a(e,t){return o.default.isUndefined(t)?o.default.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function c(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(e,t)=>i(Ht(e),Ht(t),!0)};return o.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=u[r]||i,a=s(e[r],t[r],r);o.default.isUndefined(a)&&s!==c||(n[r]=a)})),n}const Kt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Kt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Jt={};Kt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new z(r(i," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!Jt[i]&&(Jt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Gt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Kt};const Yt=Gt.validators;class Xt{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Wt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Gt.assertOptions(n,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),void 0!==r&&Gt.assertOptions(r,{encode:Yt.function,serialize:Yt.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&o.default.merge(i.common,i[t.method]),s&&o.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=At.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(c=c&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const u=[];let l;this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)}));let h,d=0;if(!c){const e=[zt.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,u),h=e.length,l=Promise.resolve(t);d<h;)l=l.then(e[d++],e[d++]);return l}h=a.length;let f=t;for(d=0;d<h;){const e=a[d++],t=a[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=zt.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,h=u.length;d<h;)l=l.then(u[d++],u[d++]);return l}getUri(e){return ot(Ut((e=Wt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new at,response:new at}}}o.default.forEach(["delete","get","head","options"],(function(e){Xt.prototype[e]=function(t,n){return this.request(Wt(n||{},{method:e,url:t,data:(n||{}).data}))}})),o.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Wt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Xt.prototype[e]=t(),Xt.prototype[e+"Form"]=t(!0)}));var Qt=Xt;class Zt{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Zt((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Nt(e,r,i),t(n.reason))}))}}var en=Zt;const tn=function e(t){const n=new Qt(t),r=a(Qt.prototype.request,n);return o.default.extend(r,Qt.prototype,n,{allOwnKeys:!0}),o.default.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Wt(t,n))},r}(yt);tn.Axios=Qt,tn.CanceledError=Nt,tn.CancelToken=en,tn.isCancel=Ct,tn.VERSION="1.2.1",tn.toFormData=et,tn.AxiosError=z,tn.Cancel=tn.CanceledError,tn.all=function(e){return Promise.all(e)},tn.spread=function(e){return function(t){return e.apply(null,t)}},tn.isAxiosError=function(e){return o.default.isObject(e)&&!0===e.isAxiosError},tn.mergeConfig=Wt,tn.AxiosHeaders=At,tn.formToJSON=e=>mt(o.default.isHTMLForm(e)?new FormData(e):e),tn.default=tn;var nn=tn;const{Axios:rn,AxiosError:sn,CanceledError:on,isCancel:an,CancelToken:cn,VERSION:un,all:ln,Cancel:hn,isAxiosError:dn,spread:fn,toFormData:pn,AxiosHeaders:mn,formToJSON:gn,mergeConfig:vn}=nn,yn=document.querySelector(".gallery__list");let bn=[];function wn(e){e.forEach((e=>{const t=function(e){return`\n <li class="gallery__item thumb" data-id="">\n <img width="280px" height="402px" src= 'https://image.tmdb.org/t/p/w500${e.poster_path}' />\n <p>'${e.title}'</p>\n <p>'${En(e.genre_ids)}'</p>|<p>'${e.release_date}'</p>\n  </li>\n   `}(e);yn.insertAdjacentHTML("beforeend",t)}))}async function _n(){const e=await nn.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"102d4305e0abdbf0fd48836d5abb1978"}}),{genres:t}=e.data;bn=t,console.log(bn)}function En([...e]){const t=[];return e.map((e=>bn.find((n=>{n.id===e&&t.push(n.name)})))),t.join(", ")}_n();const In={searchForm:document.querySelector(".form-search"),searchInput:document.querySelector(".form-search__input"),searchButton:document.querySelector(".form-search__submit")};let Tn="";_n(),In.searchForm&&In.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),Tn=e.target[0].value.trim(),""===Tn)return;!async function(e){const t=await async function(e){let t=await nn.get(`https://api.themoviedb.org/3/search/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&query=${Tn}&page=${e}`);const n=t.data,r=t.status,i=n.results;return 200===r&&i.length>=0?n:0}(e);await function(e){if(0!==e){const t=e.results.map((e=>`\n            <li class="" data-id="">\n                <img width="280px" height="402px" src= 'https://image.tmdb.org/t/p/w500${e.poster_path}' />\n                <p>'${e.title}'</p>\n                <p>'${En(e.genre_ids)}'</p>|<p>'${e.release_date}'</p>\n            </li>\n              `)).join("");return console.log(t),t}console.log("bad")}(t)}(1)}));let Sn=18;const kn={filterList:document.querySelector(".filter-list")};!async function(){!function(e){localStorage.setItem("genres",JSON.stringify(e))}((await nn.get("https://api.themoviedb.org/3/genre/movie/list?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US")).data.genres)}(),kn.filterList.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.textContent;Sn=function(e){const t=localStorage.getItem("genres");return JSON.parse(t).find((t=>t.name===e)).id}(t),async function(e){let t=await nn.get(`https://api.themoviedb.org/3/discover/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${e}`);const n=t.data,r=t.status,i=n.results;200===r&&i.length>0&&console.log(n)}(Sn)})),console.log("Hello, World!");const On=document.querySelector(".totop"),An=document.querySelector(".totop__svg-path"),Rn=An.getTotalLength();An.style.strokeDasharray=`${Rn} ${Rn}`,An.style.transition="stroke-dashoffset 20ms";const Cn=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",(()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=Rn-Cn()*Rn/e;An.style.strokeDashoffset=t})(),Cn()>100?On.classList.add("totop--active"):On.classList.remove("totop--active")})),On.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var Pn,Nn,Ln,xn=Pn={};function Dn(){throw new Error("setTimeout has not been defined")}function Un(){throw new Error("clearTimeout has not been defined")}function Mn(e){if(Nn===setTimeout)return setTimeout(e,0);if((Nn===Dn||!Nn)&&setTimeout)return Nn=setTimeout,setTimeout(e,0);try{return Nn(e,0)}catch(t){try{return Nn.call(null,e,0)}catch(t){return Nn.call(this,e,0)}}}!function(){try{Nn="function"==typeof setTimeout?setTimeout:Dn}catch(e){Nn=Dn}try{Ln="function"==typeof clearTimeout?clearTimeout:Un}catch(e){Ln=Un}}();var Bn,jn=[],Fn=!1,Vn=-1;function $n(){Fn&&Bn&&(Fn=!1,Bn.length?jn=Bn.concat(jn):Vn=-1,jn.length&&qn())}function qn(){if(!Fn){var e=Mn($n);Fn=!0;for(var t=jn.length;t;){for(Bn=jn,jn=[];++Vn<t;)Bn&&Bn[Vn].run();Vn=-1,t=jn.length}Bn=null,Fn=!1,function(e){if(Ln===clearTimeout)return clearTimeout(e);if((Ln===Un||!Ln)&&clearTimeout)return Ln=clearTimeout,clearTimeout(e);try{Ln(e)}catch(t){try{return Ln.call(null,e)}catch(t){return Ln.call(this,e)}}}(e)}}function zn(e,t){this.fun=e,this.array=t}function Hn(){}xn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];jn.push(new zn(e,t)),1!==jn.length||Fn||Mn(qn)},zn.prototype.run=function(){this.fun.apply(null,this.array)},xn.title="browser",xn.browser=!0,xn.env={},xn.argv=[],xn.version="",xn.versions={},xn.on=Hn,xn.addListener=Hn,xn.once=Hn,xn.off=Hn,xn.removeListener=Hn,xn.removeAllListeners=Hn,xn.emit=Hn,xn.prependListener=Hn,xn.prependOnceListener=Hn,xn.listeners=function(e){return[]},xn.binding=function(e){throw new Error("process.binding is not supported")},xn.cwd=function(){return"/"},xn.chdir=function(e){throw new Error("process.chdir is not supported")},xn.umask=function(){return 0};
/**
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
 */
const Wn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Jn=function(e){return function(e){const t=Wn(e);return Kn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Gn=function(e){try{return Kn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function Yn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Xn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Qn(){const e=Yn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
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
 */
const Zn=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,er=()=>{try{return Zn()||(()=>{if(void 0===Pn||void 0===Pn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Gn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},tr=e=>{var t,n;return null===(n=null===(t=er())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},nr=e=>{const t=tr(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rr=e=>{var t;return null===(t=er())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class ir{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */function sr(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Jn(JSON.stringify({alg:"none",type:"JWT"})),Jn(JSON.stringify(s)),""].join(".")}
/**
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
 */class or extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(cr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new or(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const cr=/\{\$([^}]+)}/g;
/**
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
 */function ur(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function lr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(hr(n)&&hr(s)){if(!lr(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function hr(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function dr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function pr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function mr(e,t){const n=new gr(e,t);return n.subscribe.bind(n)}class gr{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=vr),void 0===r.error&&(r.error=vr),void 0===r.complete&&(r.complete=vr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function vr(){}
/**
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
 */
/**
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
 */
function yr(e){return e&&e._delegate?e._delegate:e}class br{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class wr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ir;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class _r{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
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
 */const Er=[];var Ir,Tr;(Tr=Ir||(Ir={}))[Tr.DEBUG=0]="DEBUG",Tr[Tr.VERBOSE=1]="VERBOSE",Tr[Tr.INFO=2]="INFO",Tr[Tr.WARN=3]="WARN",Tr[Tr.ERROR=4]="ERROR",Tr[Tr.SILENT=5]="SILENT";const Sr={debug:Ir.DEBUG,verbose:Ir.VERBOSE,info:Ir.INFO,warn:Ir.WARN,error:Ir.ERROR,silent:Ir.SILENT},kr=Ir.INFO,Or={[Ir.DEBUG]:"log",[Ir.VERBOSE]:"log",[Ir.INFO]:"info",[Ir.WARN]:"warn",[Ir.ERROR]:"error"},Ar=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Or[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Rr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ir))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ir.DEBUG,...e),this._logHandler(this,Ir.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ir.VERBOSE,...e),this._logHandler(this,Ir.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ir.INFO,...e),this._logHandler(this,Ir.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ir.WARN,...e),this._logHandler(this,Ir.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ir.ERROR,...e),this._logHandler(this,Ir.ERROR,...e)}constructor(e){this.name=e,this._logLevel=kr,this._logHandler=Ar,this._userLogHandler=null,Er.push(this)}}let Cr,Pr;const Nr=new WeakMap,Lr=new WeakMap,xr=new WeakMap,Dr=new WeakMap,Ur=new WeakMap;let Mr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Lr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||xr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Br(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Pr||(Pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Vr(this),t),Fr(Nr.get(this))}:function(...t){return Fr(e.apply(Vr(this),t))}:function(t,...n){const r=e.call(Vr(this),t,...n);return xr.set(r,t.sort?t.sort():[t]),Fr(r)}}function jr(e){return"function"==typeof e?Br(e):(e instanceof IDBTransaction&&function(e){if(Lr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Lr.set(e,t)}(e),t=e,(Cr||(Cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Mr):e);var t}function Fr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Fr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Nr.set(t,e)})).catch((()=>{})),Ur.set(t,e),t}(e);if(Dr.has(e))return Dr.get(e);const t=jr(e);return t!==e&&(Dr.set(e,t),Ur.set(t,e)),t}const Vr=e=>Ur.get(e);function $r(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Fr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Fr(o.result),e.oldVersion,e.newVersion,Fr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const qr=["get","getKey","getAll","getAllKeys","count"],zr=["put","add","delete","clear"],Hr=new Map;function Wr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Hr.get(t))return Hr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=zr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!qr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Hr.set(t,s),s}Mr=(e=>({...e,get:(t,n,r)=>Wr(t,n)||e.get(t,n,r),has:(t,n)=>!!Wr(t,n)||e.has(t,n)}))(Mr);
/**
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
 */
class Kr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Jr=new Rr("@firebase/app"),Gr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Yr=new Map,Xr=new Map;function Qr(e,t){try{e.container.addComponent(t)}catch(n){Jr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zr(e){const t=e.name;if(Xr.has(t))return Jr.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,e);for(const t of Yr.values())Qr(t,e);return!0}function ei(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const ti=new ar("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class ni{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new br("app",(()=>this),"PUBLIC"))}}
/**
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
 */function ri(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ti.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=er())||void 0===s?void 0:s.config),!n)throw ti.create("no-options");const o=Yr.get(i);if(o){if(lr(n,o.options)&&lr(r,o.config))return o;throw ti.create("duplicate-app",{appName:i})}const a=new _r(i);for(const e of Xr.values())a.addComponent(e);const c=new ni(n,r,a);return Yr.set(i,c),c}function ii(e="[DEFAULT]"){const t=Yr.get(e);if(!t&&"[DEFAULT]"===e)return ri();if(!t)throw ti.create("no-app",{appName:e});return t}function si(e,t,n){var r;let i=null!==(r=Gr[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Jr.warn(e.join(" "))}Zr(new br(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let oi=null;function ai(){return oi||(oi=$r("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ti.create("idb-open",{originalErrorMessage:e.message})}))),oi}async function ci(e,t){var n;try{const n=(await ai()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,ui(e)),n.done}catch(e){if(e instanceof or)Jr.warn(e.message);else{const t=ti.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Jr.warn(t.message)}}}function ui(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class li{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=hi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=hi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),fi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Jn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new di(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function hi(){return(new Date).toISOString().substring(0,10)}class di{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await ai()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ui(e))}catch(e){if(e instanceof or)Jr.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Jr.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ci(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ci(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function fi(e){return Jn(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var pi;pi="",Zr(new br("platform-logger",(e=>new Kr(e)),"PRIVATE")),Zr(new br("heartbeat",(e=>new li(e)),"PRIVATE")),si("@firebase/app","0.8.4",pi),si("@firebase/app","0.8.4","esm2017"),si("fire-js","");
/**
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
 */
si("firebase","9.14.0","app");
/**
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
 */
class mi{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}mi.UNAUTHENTICATED=new mi(null),mi.GOOGLE_CREDENTIALS=new mi("google-credentials-uid"),mi.FIRST_PARTY=new mi("first-party-uid"),mi.MOCK_USER=new mi("mock-user");
/**
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
 */
let gi="9.14.0";
/**
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
 */const vi=new Rr("@firebase/firestore");function yi(e,...t){if(vi.logLevel<=Ir.DEBUG){const n=t.map(_i);vi.debug(`Firestore (${gi}): ${e}`,...n)}}function bi(e,...t){if(vi.logLevel<=Ir.ERROR){const n=t.map(_i);vi.error(`Firestore (${gi}): ${e}`,...n)}}function wi(e,...t){if(vi.logLevel<=Ir.WARN){const n=t.map(_i);vi.warn(`Firestore (${gi}): ${e}`,...n)}}function _i(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function Ei(e="Unexpected state"){const t=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: `+e;throw bi(t),new Error(t)}function Ii(e,t){e||Ei()}function Ti(e,t){return e}
/**
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
 */class Si extends or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */
/**
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
 */
class ki{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(mi.UNAUTHENTICATED)))}shutdown(){}}class Ai{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Ri{getToken(){return this.auth?this.auth.getToken().then((e=>e?(Ii("string"==typeof e.accessToken),new ki(e.accessToken,new mi(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}}class Ci{l(){return this.u?this.u():(Ii(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}constructor(e,t,n,r){this.t=e,this.i=t,this.o=n,this.u=r,this.type="FirstParty",this.user=mi.FIRST_PARTY,this.h=new Map}}class Pi{getToken(){return Promise.resolve(new Ci(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable((()=>t(mi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n,r){this.t=e,this.i=t,this.o=n,this.u=r}}class Ni{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Li{getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(Ii("string"==typeof e.token),new Ni(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}constructor(e){this.m=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}}
/**
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
 */class xi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Di{static empty(){return new Di("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}class Ui{get length(){return this.len}isEqual(e){return 0===Ui.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Ei(),void 0===n?n=e.length-t:n>e.length-t&&Ei(),this.segments=e,this.offset=t,this.len=n}}class Mi extends Ui{construct(e,t,n){return new Mi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Si("invalid-argument",`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Mi(t)}static emptyPath(){return new Mi([])}}const Bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ji extends Ui{construct(e,t,n){return new ji(e,t,n)}static isValidIdentifier(e){return Bi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ji.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ji(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Si("invalid-argument",`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Si("invalid-argument","Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Si("invalid-argument","Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Si("invalid-argument","Unterminated ` in path: "+e);return new ji(t)}static emptyPath(){return new ji([])}}
/**
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
 */class Fi{static fromPath(e){return new Fi(Mi.fromString(e))}static fromName(e){return new Fi(Mi.fromString(e).popFirst(5))}static empty(){return new Fi(Mi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Mi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Mi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fi(new Mi(e.slice()))}constructor(e){this.path=e}}
/**
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
 */function Vi(e,t,n){if(!n)throw new Si("invalid-argument",`Function ${e}() cannot be called with an empty ${t}.`)}function $i(e){if(!Fi.isDocumentKey(e))throw new Si("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qi(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ei()}function zi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Si("invalid-argument","Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qi(e);throw new Si("invalid-argument",`Expected type '${t.name}', but it was: ${n}`)}}return e}function Hi(e){return 0===e&&1/e==-1/0}
/**
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
 */const Wi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */var Ki,Ji;function Gi(e){if(void 0===e)return bi("RPC_ERROR","HTTP error has no status"),"unknown";switch(e){case 200:return"ok";case 400:return"failed-precondition";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"unknown";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded";default:return e>=200&&e<300?"ok":e>=400&&e<500?"failed-precondition":e>=500&&e<600?"internal":"unknown"}}
/**
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
 */(Ji=Ki||(Ki={}))[Ji.OK=0]="OK",Ji[Ji.CANCELLED=1]="CANCELLED",Ji[Ji.UNKNOWN=2]="UNKNOWN",Ji[Ji.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ji[Ji.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ji[Ji.NOT_FOUND=5]="NOT_FOUND",Ji[Ji.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ji[Ji.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ji[Ji.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ji[Ji.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ji[Ji.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ji[Ji.ABORTED=10]="ABORTED",Ji[Ji.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ji[Ji.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ji[Ji.INTERNAL=13]="INTERNAL",Ji[Ji.UNAVAILABLE=14]="UNAVAILABLE",Ji[Ji.DATA_LOSS=15]="DATA_LOSS";class Yi extends class{get v(){return!1}I(e,t,n,r,i){const s=this.T(e,t);yi("RestConnection","Sending: ",s,n);const o={};return this.A(o,r,i),this.R(e,s,o,n).then((e=>(yi("RestConnection","Received: ",e),e)),(t=>{throw wi("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}P(e,t,n,r,i,s){return this.I(e,t,n,r,i)}A(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+gi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}T(e,t){const n=Wi[e];return`${this.p}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{N(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,n,r){var i;const s=JSON.stringify(r);let o;try{o=await this.V(t,{method:"POST",headers:n,body:s})}catch(e){throw new Si(Gi(e.status),"Request failed with error: "+e.statusText)}if(!o.ok){let e=await o.json();Array.isArray(e)&&(e=e[0]);const t=null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message;throw new Si(Gi(o.status),`Request failed with error: ${null!=t?t:o.statusText}`)}return o.json()}constructor(e,t){super(e),this.V=t}}
/**
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
 */
/**
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
 */function Xi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
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
 */class Qi{static $(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Xi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Zi(e,t){return e<t?-1:e>t?1:0}function es(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class ts{static now(){return ts.fromMillis(Date.now())}static fromDate(e){return ts.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ts(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Zi(this.nanoseconds,e.nanoseconds):Zi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Si("invalid-argument","Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Si("invalid-argument","Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Si("invalid-argument","Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Si("invalid-argument","Timestamp seconds out of range: "+e)}}
/**
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
 */
/**
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
 */
function ns(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
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
 */class is{insert(e,t){return new is(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,os.BLACK,null,null))}remove(e){return new is(this.comparator,this.root.remove(e,this.comparator).copy(null,null,os.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ss(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||os.EMPTY}}class ss{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class os{copy(e,t,n,r,i){return new os(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return os.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return os.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,os.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,os.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ei();if(this.right.isRed())throw Ei();const e=this.left.check();if(e!==this.right.check())throw Ei();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:os.RED,this.left=null!=r?r:os.EMPTY,this.right=null!=i?i:os.EMPTY,this.size=this.left.size+1+this.right.size}}os.EMPTY=null,os.RED=!0,os.BLACK=!1,os.EMPTY=new class{get key(){throw Ei()}get value(){throw Ei()}get color(){throw Ei()}get left(){throw Ei()}get right(){throw Ei()}copy(e,t,n,r,i){return this}insert(e,t,n){return new os(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
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
 */
class as{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cs(this.data.getIterator())}getIteratorFrom(e){return new cs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof as))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new as(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new is(this.comparator)}}class cs{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
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
 */class us{static empty(){return new us([])}unionWith(e){let t=new as(ji.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new us(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(ji.comparator)}}let ls=Symbol.iterator;
/**
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
 */
/**
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
 */class hs{static fromBase64String(e){const t=atob(e);return new hs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new hs(t)}[ls](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}hs.EMPTY_BYTE_STRING=new hs("");const ds=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(e){if(Ii(!!e),"string"==typeof e){let t=0;const n=ds.exec(e);if(Ii(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ps(e.seconds),nanos:ps(e.nanos)}}function ps(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ms(e){return"string"==typeof e?hs.fromBase64String(e):hs.fromUint8Array(e)}
/**
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
 */function gs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function vs(e){const t=fs(e.mapValue.fields.__local_write_time__.timestampValue);return new ts(t.seconds,t.nanos)}
/**
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
 */function ys(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gs(e)?4:"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:Ei()}function bs(e,t){if(e===t)return!0;const n=ys(e);if(n!==ys(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vs(e).isEqual(vs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=fs(e.timestampValue),r=fs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ms(e.bytesValue).isEqual(ms(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ps(e.geoPointValue.latitude)===ps(t.geoPointValue.latitude)&&ps(e.geoPointValue.longitude)===ps(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ps(e.integerValue)===ps(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ps(e.doubleValue),r=ps(t.doubleValue);return n===r?Hi(n)===Hi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return es(e.arrayValue.values||[],t.arrayValue.values||[],bs);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ns(n)!==ns(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!bs(n[e],r[e])))return!1;return!0}(e,t);default:return Ei()}}function ws(e){return!!e&&"mapValue"in e}function _s(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_s(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_s(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Es{static empty(){return new Es({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=ji.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_s(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){rs(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Es(_s(this.value))}constructor(e){this.value=e}}
/**
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
 */
/**
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
 */
class Is{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}
/**
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
 */
function Ts(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(t)?"-0":t}}(e,t);var n}
/**
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
 */class Ss{constructor(){this._=void 0}}class ks extends Ss{}class Os extends Ss{constructor(e){super(),this.elements=e}}class As extends Ss{constructor(e){super(),this.elements=e}}class Rs extends Ss{constructor(e,t){super(),this.L=e,this.M=t}}
/**
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
 */class Cs{static none(){return new Cs}static exists(e){return new Cs(void 0,e)}static updateTime(e){return new Cs(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}class Ps{}class Ns extends Ps{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ls extends Ps{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class xs extends Ps{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ds extends Ps{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Us{constructor(e,t){this.databaseId=e,this.C=t}}function Ms(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bs(e,t){return e.C?t.toBase64():t.toUint8Array()}function js(e,t){return Ms(e,t.toTimestamp())}function Fs(e,t){return(n=e,new Mi(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Vs(e,t){return Fs(e.databaseId,t.path)}function $s(e){return new Mi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qs(e,t,n){return{name:Vs(e,t),fields:n.value.mapValue.fields}}function zs(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
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
 */
function Hs(e){return new Us(e,!0)}
/**
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
 */
/**
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
 */
class Ws extends class{}{et(){if(this.tt)throw new Si("failed-precondition","The client has already been terminated.")}I(e,t,n){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.I(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Si("unknown",e.toString())}))}P(e,t,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.P(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Si("unknown",e.toString())}))}terminate(){this.tt=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.L=r,this.tt=!1}}async function Ks(e,t){const n=Ti(e),r=$s(n.L)+"/documents",i={writes:t.map((e=>function(e,t){let n;if(t instanceof Ns)n={update:qs(e,t.key,t.value)};else if(t instanceof xs)n={delete:Vs(e,t.key)};else if(t instanceof Ls)n={update:qs(e,t.key,t.data),updateMask:zs(t.fieldMask)};else{if(!(t instanceof Ds))return Ei();n={verify:Vs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ks)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Os)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof As)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Rs)return{fieldPath:t.field.canonicalString(),increment:n.M};throw Ei()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:js(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ei()}(e,t.precondition)),n}(n.L,e)))};await n.I("Commit",r,i)}
/**
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
 */
const Js=new Map;function Gs(e){if(e._terminated)throw new Si("failed-precondition","The client has already been terminated.");if(!Js.has(e)){yi("ComponentProvider","Initializing Datastore");const o=(n=e._databaseId,r=e.app.options.appId||"",i=e._persistenceKey,s=e._freezeSettings(),t=new xi(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new Yi(t,fetch.bind(null))),a=Hs(e._databaseId),c=function(e,t,n,r){return new Ws(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,o,a);Js.set(e,c)}var t,n,r,i,s;
/**
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
 */
return Js.get(e)}class Ys{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Si("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Si("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Si("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}}
/**
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
 */class Xs{get app(){if(!this._app)throw new Si("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Si("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ys(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Oi;switch(e.type){case"gapi":const t=e.client;return new Pi(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Si("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Js.get(e);t&&(yi("ComponentProvider","Removing Datastore"),Js.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ys({}),this._settingsFrozen=!1}}
/**
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
 */
class Qs{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new eo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qs(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Zs{withConverter(e){return new Zs(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class eo extends Zs{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qs(this.firestore,null,new Fi(e))}withConverter(e){return new eo(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,new Is(n)),this._path=n,this.type="collection"}}function to(e,t,...n){if(e=yr(e),1===arguments.length&&(t=Qi.$()),Vi("doc","path",t),e instanceof Xs){const r=Mi.fromString(t,...n);return $i(r),new Qs(e,null,new Fi(r))}{if(!(e instanceof Qs||e instanceof eo))throw new Si("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mi.fromString(t,...n));return $i(r),new Qs(e.firestore,e instanceof eo?e.converter:null,new Fi(r))}}
/**
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
 */
class no{static fromBase64String(e){try{return new no(hs.fromBase64String(e))}catch(e){throw new Si("invalid-argument","Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new no(hs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
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
 */class ro{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Si("invalid-argument","Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ji(e)}}
/**
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
 */
class io{constructor(e){this._methodName=e}}
/**
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
 */class so{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Zi(this._lat,e._lat)||Zi(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Si("invalid-argument","Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Si("invalid-argument","Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
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
 */const oo=/^__.*__$/;class ao{toMutation(e,t){return null!==this.fieldMask?new Ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function co(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ei()}}class uo{get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new uo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.ut(e),r}ct(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.nt(),r}at(e){return this.st({path:void 0,ot:!0})}ht(e){return _o(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(0===e.length)throw this.ht("Document fields must not be empty");if(co(this.rt)&&oo.test(e))throw this.ht('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.L=n,this.ignoreUndefinedProperties=r,void 0===i&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class lo{dt(e,t,n,r=!1){return new uo({rt:e,methodName:t,ft:n,path:ji.emptyPath(),ot:!1,lt:r},this.databaseId,this.L,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.L=n||Hs(e)}}function ho(e){const t=e._freezeSettings(),n=Hs(e._databaseId);return new lo(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fo(e,t,n,r,i,s={}){const o=e.dt(s.merge||s.mergeFields?2:0,t,n,i);vo("Data must be an object, but it was:",o,r);const a=mo(r,o);let c,u;if(s.merge)c=new us(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=yo(t,r,n);if(!o.contains(i))throw new Si("invalid-argument",`Field '${i}' is specified in your field mask but missing from your input data.`);Eo(e,i)||e.push(i)}c=new us(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ao(new Es(a),c,u)}function po(e,t){if(go(e=yr(e)))return vo("Unsupported field value:",t,e),mo(e,t);if(e instanceof io)return function(e,t){if(!co(t.rt))throw t.ht(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ht(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ot&&4!==t.rt)throw t.ht("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=po(i,t.at(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=yr(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ts(t.L,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ts.fromDate(e);return{timestampValue:Ms(t.L,n)}}if(e instanceof ts){const n=new ts(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ms(t.L,n)}}if(e instanceof so)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof no)return{bytesValue:Bs(t.L,e._byteString)};if(e instanceof Qs){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ht(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Fs(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ht(`Unsupported field value: ${qi(e)}`)}(e,t)}function mo(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rs(e,((e,r)=>{const i=po(r,t.it(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function go(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ts||e instanceof so||e instanceof no||e instanceof Qs||e instanceof io)}function vo(e,t,n){if(!go(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=qi(n);throw"an object"===r?t.ht(e+" a custom object"):t.ht(e+" "+r)}var r}function yo(e,t,n){if((t=yr(t))instanceof ro)return t._internalPath;if("string"==typeof t)return wo(e,t);throw _o("Field path arguments must be of type string or ",e,!1,void 0,n)}const bo=new RegExp("[~\\*/\\[\\]]");function wo(e,t,n){if(t.search(bo)>=0)throw _o(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ro(...t.split("."))._internalPath}catch(r){throw _o(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _o(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Si("invalid-argument",a+e+c)}function Eo(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */
/**
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
 */
/**
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
 */
function Io(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function To(e,t,n){const r=Io((e=zi(e,Qs)).converter,t,n),i=fo(ho(e.firestore),"setDoc",e._key,r,null!==e.converter,n);return Ks(Gs(e.firestore),[i.toMutation(e._key,Cs.none())])}gi="9.14.0_lite",Zr(new br("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Xs(new Ri(e.getProvider("auth-internal")),new Li(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Si("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new Di(e.options.projectId,t)}(r,t),r);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),si("firestore-lite","3.7.3",""),si("firestore-lite","3.7.3","esm2017");function So(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ko(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oo=ko,Ao=new ar("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ro=new Rr("@firebase/auth");function Co(e,...t){Ro.logLevel<=Ir.ERROR&&Ro.error(`Auth (9.14.0): ${e}`,...t)}
/**
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
 */function Po(e,...t){throw xo(e,...t)}function No(e,...t){return xo(e,...t)}function Lo(e,t,n){const r=Object.assign(Object.assign({},Oo()),{[t]:n});return new ar("auth","Firebase",r).create(t,{appName:e.name})}function xo(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ao.create(e,...t)}function Do(e,t,...n){if(!e)throw xo(t,...n)}function Uo(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Co(t),new Error(t)}function Mo(e,t){e||Uo(t)}
/**
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
 */const Bo=new Map;function jo(e){Mo(e instanceof Function,"Expected a class definition");let t=Bo.get(e);return t?(Mo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bo.set(e,t),t)}
/**
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
 */
/**
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
 */
function Fo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Vo(){return"http:"===$o()||"https:"===$o()}function $o(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function qo(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Vo()||Xn()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class zo{get(){return qo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Mo(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
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
 */function Ho(e,t){Mo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class Wo{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Uo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Uo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Uo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Ko={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Jo=new zo(3e4,6e4);
/**
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
 */function Go(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Yo(e,t,n,r,i={}){return Xo(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=dr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Wo.fetch()(Zo(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Xo(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ko),t);try{const t=new ea(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ta(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ta(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ta(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ta(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Lo(e,a,o);Po(e,a)}}catch(t){if(t instanceof or)throw t;Po(e,"network-request-failed")}}async function Qo(e,t,n,r,i={}){const s=await Yo(e,t,n,r,i);return"mfaPendingCredential"in s&&Po(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Zo(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ho(e.config,i):`${e.config.apiScheme}://${i}`}class ea{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(No(this.auth,"network-request-failed"))),Jo.get())}))}}function ta(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=No(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function na(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function ra(e){return 1e3*Number(e)}function ia(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const e=Gn(r);return e?JSON.parse(e):(Co("Failed to decode base64 JWT payload"),null)}catch(e){return Co("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
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
 */
async function sa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof or&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class oa{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
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
 */class aa{_initializeTime(){this.lastSignInTime=na(this.lastLoginAt),this.creationTime=na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
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
 */async function ca(e){var t;const n=e.auth,r=await e.getIdToken(),i=await sa(e,async function(e,t){return Yo(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Do(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=So(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aa(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}
/**
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
 */
class ua{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Do(e.idToken,"internal-error"),Do(void 0!==e.idToken,"internal-error"),Do(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ia(e);return Do(t,"internal-error"),Do(void 0!==t.exp,"internal-error"),Do(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Do(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(e,t){const n=await Xo(e,{},(async()=>{const n=dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Zo(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Wo.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ua;return n&&(Do("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Do("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Do("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return Uo("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
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
 */function la(e,t){Do("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ha{async getIdToken(e){const t=await sa(this,this.stsTokenManager.getToken(this.auth,e));return Do(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=yr(e),r=await n.getIdToken(t),i=ia(r);Do(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:na(ra(i.auth_time)),issuedAtTime:na(ra(i.iat)),expirationTime:na(ra(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=yr(e);await ca(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Do(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ha(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Do(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sa(this,async function(e,t){return Yo(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=t;Do(y&&E,e,"internal-error");const I=ua.fromJSON(this.name,E);Do("string"==typeof y,e,"internal-error"),la(l,e.name),la(h,e.name),Do("boolean"==typeof b,e,"internal-error"),Do("boolean"==typeof w,e,"internal-error"),la(d,e.name),la(f,e.name),la(p,e.name),la(m,e.name),la(g,e.name),la(v,e.name);const T=new ha({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ua;r.updateFromServerResponse(t);const i=new ha({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ca(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=So(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new aa(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
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
 */class da{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}da.type="NONE";const fa=da;
/**
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
 */function pa(e,t,n){return`firebase:${e}:${t}:${n}`}class ma{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ha._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ma(jo(fa),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||jo(fa);const s=pa(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=ha._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ma(i,e,n)):new ma(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pa(this.userKey,r.apiKey,i),this.fullPersistenceKey=pa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
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
 */function ga(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wa(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(va(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ea(t))return"Blackberry";if(Ia(t))return"Webos";if(ya(t))return"Safari";if((t.includes("chrome/")||ba(t))&&!t.includes("edge/"))return"Chrome";if(_a(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function va(e=Yn()){return/firefox\//i.test(e)}function ya(e=Yn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ba(e=Yn()){return/crios\//i.test(e)}function wa(e=Yn()){return/iemobile/i.test(e)}function _a(e=Yn()){return/android/i.test(e)}function Ea(e=Yn()){return/blackberry/i.test(e)}function Ia(e=Yn()){return/webos/i.test(e)}function Ta(e=Yn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Sa(){return Qn()&&10===document.documentMode}function ka(e=Yn()){return Ta(e)||_a(e)||Ia(e)||Ea(e)||/windows phone/i.test(e)||wa(e)}
/**
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
 */
function Oa(e,t=[]){let n;switch(e){case"Browser":n=ga(Yn());break;case"Worker":n=`${ga(Yn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.14.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class Aa{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
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
 */class Ra{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jo(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ma.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Do(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ca(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?yr(e):null;return t&&Do(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Do(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(jo(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jo(e)||this._popupRedirectResolver;Do(t,this,"argument-error"),this.redirectPersistenceManager=await ma.create(this,[jo(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Do(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Do(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.beforeStateQueue=new Aa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ao,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Ca(e){return yr(e)}class Pa{get next(){return Do(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=mr((e=>this.observer=e))}}function Na(e,t,n){const r=Ca(e);Do(r._canInitEmulator,r,"emulator-config-failed"),Do(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=La(t),{host:o,port:a}=function(e){const t=La(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:xa(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xa(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function La(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Da{toJSON(){return Uo("not implemented")}_getIdTokenResponse(e){return Uo("not implemented")}_linkToIdToken(e,t){return Uo("not implemented")}_getReauthenticationResolver(e){return Uo("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
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
 */async function Ua(e,t){return Yo(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class Ma extends Da{static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ma(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return Qo(e,"POST","/v1/accounts:signInWithPassword",Go(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return Qo(e,"POST","/v1/accounts:signInWithEmailLink",Go(e,t))}(e,{email:this._email,oobCode:this._password});default:Po(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ua(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Qo(e,"POST","/v1/accounts:signInWithEmailLink",Go(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Po(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
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
 */async function Ba(e,t){return Qo(e,"POST","/v1/accounts:signInWithIdp",Go(e,t))}
/**
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
 */class ja extends Da{static _fromParams(e){const t=new ja(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Po("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=So(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ja(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ba(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ba(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ba(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
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
 */const Fa={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Va extends Da{static _fromVerification(e,t){return new Va({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Va({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Qo(e,"POST","/v1/accounts:signInWithPhoneNumber",Go(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Qo(e,"POST","/v1/accounts:signInWithPhoneNumber",Go(e,t));if(n.temporaryProof)throw ta(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Qo(e,"POST","/v1/accounts:signInWithPhoneNumber",Go(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Fa)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Va({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
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
 */class $a{static parseLink(e){const t=function(e){const t=fr(pr(e)).link,n=t?fr(pr(t)).deep_link_id:null,r=fr(pr(e)).deep_link_id;return(r?fr(pr(r)).link:null)||r||n||t||e}(e);try{return new $a(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=fr(pr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Do(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
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
 */
class qa{static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$a.parseLink(t);return Do(n,"argument-error"),Ma._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=qa.PROVIDER_ID}}qa.PROVIDER_ID="password",qa.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class za{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Ha extends za{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
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
 */
class Wa extends Ha{static credential(e){return ja._fromParams({providerId:Wa.PROVIDER_ID,signInMethod:Wa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wa.credentialFromTaggedObject(e)}static credentialFromError(e){return Wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wa.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Wa.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wa.PROVIDER_ID="facebook.com";
/**
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
 */
class Ka extends Ha{static credential(e,t){return ja._fromParams({providerId:Ka.PROVIDER_ID,signInMethod:Ka.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ka.credentialFromTaggedObject(e)}static credentialFromError(e){return Ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ka.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ka.GOOGLE_SIGN_IN_METHOD="google.com",Ka.PROVIDER_ID="google.com";
/**
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
 */
class Ja extends Ha{static credential(e){return ja._fromParams({providerId:Ja.PROVIDER_ID,signInMethod:Ja.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ja.credentialFromTaggedObject(e)}static credentialFromError(e){return Ja.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ja.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ja.GITHUB_SIGN_IN_METHOD="github.com",Ja.PROVIDER_ID="github.com";
/**
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
 */
class Ga extends Ha{static credential(e,t){return ja._fromParams({providerId:Ga.PROVIDER_ID,signInMethod:Ga.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ga.credentialFromTaggedObject(e)}static credentialFromError(e){return Ga.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ga.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
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
 */
async function Ya(e,t){return Qo(e,"POST","/v1/accounts:signUp",Go(e,t))}
/**
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
 */Ga.TWITTER_SIGN_IN_METHOD="twitter.com",Ga.PROVIDER_ID="twitter.com";class Xa{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ha._fromIdTokenResponse(e,n,r),s=Qa(n);return new Xa({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Qa(n);return new Xa({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Qa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Za extends or{static _fromErrorAndOperation(e,t,n,r){return new Za(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function ec(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Za._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function tc(e,t,n=!1){const r=await sa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xa._forOperation(e,"link",r)}
/**
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
 */
async function nc(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await sa(e,ec(i,s,t,e),n);Do(r.idToken,i,"internal-error");const o=ia(r.idToken);Do(o,i,"internal-error");const{sub:a}=o;return Do(e.uid===a,i,"user-mismatch"),Xa._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Po(i,"user-mismatch"),e}}
/**
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
 */async function rc(e,t,n=!1){const r="signIn",i=await ec(e,r,t),s=await Xa._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ic(e,t){return rc(Ca(e),t)}async function sc(e,t,n){const r=Ca(e),i=await Ya(r,{returnSecureToken:!0,email:t,password:n}),s=await Xa._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
/**
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
 */
async function oc(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=yr(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await sa(r,
/**
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
 */
async function(e,t){return Yo(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;
/**
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
 */
class ac{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
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
 */class cc extends ac{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Sa()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Yn();return ya(e)||Ta(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ka(),this._shouldAllowMigration=!0}}cc.type="LOCAL";const uc=cc;
/**
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
 */class lc extends ac{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}lc.type="SESSION";const hc=lc;
/**
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
 */
/**
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
 */
class dc{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new dc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
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
 */
function fc(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */dc.receivers=[];class pc{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=fc("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
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
 */function mc(){return window}
/**
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
 */
function gc(){return void 0!==mc().WorkerGlobalScope&&"function"==typeof mc().importScripts}class vc{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function yc(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function bc(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new vc(e).toPromise()}(),t(await bc()))}))}))}async function wc(e,t,n){const r=yc(e,!0).put({fbase_key:t,value:n});return new vc(r).toPromise()}function _c(e,t){const n=yc(e,!0).delete(t);return new vc(n).toPromise()}class Ec{async _openDb(){return this.db||(this.db=await bc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(gc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new pc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await wc(e,"__sak","1"),await _c(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wc(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=yc(e,!1).get(t),r=await new vc(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_c(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=yc(e,!1).getAll();return new vc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ec.type="LOCAL";const Ic=Ec;
/**
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
 */function Tc(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
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
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=No("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Sc(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Sc("rcb"),new zo(3e4,6e4);async function kc(e,t,n){var r;const i=await n.verify();try{let s;if(Do("string"==typeof i,e,"argument-error"),Do("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Do("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return Yo(e,"POST","/v2/accounts/mfaEnrollment:start",Go(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Do("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Do(n,e,"missing-multi-factor-info");const o=await function(e,t){return Yo(e,"POST","/v2/accounts/mfaSignIn:start",Go(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Yo(e,"POST","/v1/accounts:sendVerificationCode",Go(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class Oc{verifyPhoneNumber(e,t){return kc(this.auth,e,yr(t))}static credential(e,t){return Va._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Oc.credentialFromTaggedObject(t)}static credentialFromError(e){return Oc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Va._fromTokenResponse(t,n):null}constructor(e){this.providerId=Oc.PROVIDER_ID,this.auth=Ca(e)}}
/**
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
 */
function Ac(e,t){return t?jo(t):(Do(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Oc.PROVIDER_ID="phone",Oc.PHONE_SIGN_IN_METHOD="phone";class Rc extends Da{_getIdTokenResponse(e){return Ba(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ba(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ba(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Cc(e){return rc(e.auth,new Rc(e),e.bypassAuthState)}function Pc(e){const{auth:t,user:n}=e;return Do(n,t,"internal-error"),nc(n,new Rc(e),e.bypassAuthState)}async function Nc(e){const{auth:t,user:n}=e;return Do(n,t,"internal-error"),tc(n,new Rc(e),e.bypassAuthState)}
/**
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
 */class Lc{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cc;case"linkViaPopup":case"linkViaRedirect":return Nc;case"reauthViaPopup":case"reauthViaRedirect":return Pc;default:Po(this.auth,"internal-error")}}resolve(e){Mo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
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
 */const xc=new zo(2e3,1e4);class Dc extends Lc{async executeNotNull(){const e=await this.execute();return Do(e,this.auth,"internal-error"),e}async onExecution(){Mo(1===this.filter.length,"Popup operations only handle one event");const e=fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(No(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(No(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(No(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,xc.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Dc.currentPopupAction&&Dc.currentPopupAction.cancel(),Dc.currentPopupAction=this}}Dc.currentPopupAction=null;
/**
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
 */
const Uc=new Map;class Mc extends Lc{async execute(){let e=Uc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Fc(t),r=jc(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Uc.set(this.auth._key(),e)}return this.bypassAuthState||Uc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Bc(e,t){Uc.set(e._key(),t)}function jc(e){return jo(e._redirectPersistence)}function Fc(e){return pa("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function Vc(e,t,n=!1){const r=Ca(e),i=Ac(r,t),s=new Mc(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class $c{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zc(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(No(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function qc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function zc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Hc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wc=/^https?/;async function Kc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Yo(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Jc(e))return}catch(e){}Po(e,"unauthorized-domain")}function Jc(e){const t=Fo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Wc.test(n))return!1;if(Hc.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const Gc=new zo(3e4,6e4);function Yc(){const e=mc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Xc=null;function Qc(e){return Xc=Xc||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Yc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yc(),n(No(e,"network-request-failed"))},timeout:Gc.get()})}if(null===(i=null===(r=mc().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=mc().gapi)||void 0===s?void 0:s.load)){const t=Sc("iframefcb");return mc()[t]=()=>{gapi.load?o():n(No(e,"network-request-failed"))},Tc(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Xc=null,e}))}(e),Xc}
/**
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
 */const Zc=new zo(5e3,15e3),eu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nu(e){const t=e.config;Do(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ho(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.14.0"},i=tu.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${dr(r).slice(1)}`}
/**
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
 */
const ru={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iu{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function su(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ru),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Yn().toLowerCase();n&&(a=ba(u)?"_blank":n),va(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Yn()){var t;return Ta(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new iu(null);const h=window.open(t||"",a,l);Do(h,e,"popup-blocked");try{h.focus()}catch(e){}return new iu(h)}function ou(e,t,n,r,i,s){Do(e.config.authDomain,e,"auth-domain-config-required"),Do(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.14.0",eventId:i};if(t instanceof za){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ur(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ha){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ho(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${dr(a).slice(1)}`}const au=class{async _openPopup(e,t,n,r){var i;Mo(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return su(e,ou(e,t,n,Fo(),r),fc())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ou(e,t,n,Fo(),r),mc().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Mo(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Qc(e),n=mc().gapi;return Do(n,e,"internal-error"),t.open({where:document.body,url:nu(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eu,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=No(e,"network-request-failed"),s=mc().setTimeout((()=>{r(i)}),Zc.get());function o(){mc().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new $c(e);return t.register("authEvent",(t=>{Do(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Po(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ka()||ya()||Ta()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hc,this._completeRedirectFn=Vc,this._overrideRedirectResult=Bc}};
/**
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
 */
class cu{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Do(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
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
 */
/**
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
 */
const uu=rr("authIdTokenMaxAge")||300;let lu=null;var hu;hu="Browser",Zr(new br("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Do(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Do(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:hu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oa(hu)},o=new Ra(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jo);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Zr(new br("auth-internal",(e=>{const t=Ca(e.getProvider("auth").getImmediate());return new cu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),si("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hu)),si("@firebase/auth","0.20.11","esm2017");const du=document.querySelector("[data-signUp-modal]"),fu=document.querySelector("[data-signUp-modal-open]"),pu=document.querySelector("[data-signUp-modal-close]");function mu(){du.classList.add("visually-hidden"),xu.textContent=""}fu.addEventListener("click",(function(){du.classList.remove("visually-hidden"),bu()})),pu.addEventListener("click",mu);const gu=document.querySelector("[data-signIn-modal]"),vu=document.querySelector("[data-signIn-modal-open]"),yu=document.querySelector("[data-signIn-modal-close]");function bu(){gu.classList.add("visually-hidden"),Du.textContent=""}vu.addEventListener("click",(function(){gu.classList.remove("visually-hidden"),mu()})),yu.addEventListener("click",bu);const wu=document.querySelector(".nav-list-logged-out"),_u=document.querySelector(".nav-list-logged-in"),Eu=ri({apiKey:"AIzaSyBcfxQYKzPS-PPfylqlwMHtDaShDcUDiEg",authDomain:"testmoviebase.firebaseapp.com",projectId:"testmoviebase",storageBucket:"testmoviebase.appspot.com",messagingSenderId:"1008932581270",appId:"1:1008932581270:web:6d27972f39650ac22cf7b7"}),Iu=function(e,t){const n="string"==typeof e?e:t||"(default)",r=ei("object"==typeof e?e:ii(),"firestore/lite").getImmediate({identifier:n});if(!r._initialized){const e=nr("firestore");e&&function(e,t,n,r={}){var i;const s=(e=zi(e,Xs))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&wi("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=mi.MOCK_USER;else{t=sr(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Si("invalid-argument","mockUserToken must contain 'sub' or 'user_id' field!");n=new mi(s)}e._authCredentials=new Ai(new ki(t,n))}}(r,...e)}return r}(Eu),Tu=function(e=ii()){const t=ei(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ei(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(lr(n.getOptions(),null!=t?t:{}))return e;Po(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:au,persistence:[Ic,uc,hc]}),r=rr("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>uu)return;const r=null==t?void 0:t.token;lu!==r&&(lu=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){yr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){yr(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=tr("auth");return s&&Na(n,`http://${s}`),n}(Eu),Su=document.querySelector("#signUp"),ku=document.querySelector("#signIn"),Ou=document.querySelector("#signOut");console.log(ku);const Au=document.querySelector("#displayName"),Ru=document.querySelector("#email"),Cu=document.querySelector("#password"),Pu=document.querySelector(".curr"),Nu=document.querySelector("#sign-in-email"),Lu=document.querySelector("#sign-in-password"),xu=document.querySelector(".sign-up-warning"),Du=document.querySelector(".sign-in-warning");let Uu;Su.addEventListener("click",(function(){sc(Tu,Ru.value,Cu.value).then((e=>{e.user;console.log(Pu),async function(){const e=to(Iu,"Watched",Uu.email);await To(e,{}).then((()=>{console.log("Successful operation!")})).catch((e=>{alert("Unsuccessful operation, error:"+e)}))}(),async function(){const e=to(Iu,"Queue",Uu.email);await To(e,{}).then((()=>{console.log("Successful operation!")})).catch((e=>{alert("Unsuccessful operation, error:"+e)}))}(),oc(Tu.currentUser,{displayName:Au.value}),Pu.textContent=`Welcome, ${Au.value}!`})).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n),"auth/weak-password"===e.code?xu.textContent="Password should be at least 6 characters!":"auth/email-already-in-use"===e.code?xu.textContent="This email is already in use! Choose another one or Log In with this email!":"auth/invalid-email"===e.code&&(xu.textContent="Please, use correct and existing email!")}))})),ku.addEventListener("click",(function(){(e=Tu,t=Nu.value,n=Lu.value,ic(yr(e),qa.credential(t,n))).then((e=>{console.log(e);e.user;console.log(e.user.email)})).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n),"auth/too-many-requests"===e.code?Du.textContent="Access to this account has been temporarily disabled due to many failed login attempts!":"auth/wrong-password"===e.code?Du.textContent="Your password is invalid!":"auth/user-not-found"===e.code?Du.textContent="No user with such email!":"auth/invalid-email"===e.code&&(Du.textContent="You should write Your email in the email field!")}));var e,t,n;
/**
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
 */})),Ou.addEventListener("click",(function(){(e=Tu,yr(e).signOut()).then((()=>{})).catch((e=>{}));var e})),Tu.onAuthStateChanged((e=>{e?(Uu=e,console.log(Uu),Pu.textContent=`Welcome, ${Uu.displayName}!`,mu(),bu(),_u.classList.remove("visually-hidden"),wu.classList.add("visually-hidden")):(Uu=e,console.log(Uu),Pu.textContent="",wu.classList.remove("visually-hidden"),_u.classList.add("visually-hidden"))}));class Mu{async getPopularMovies(){try{const e=await nn.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=102d4305e0abdbf0fd48836d5abb1978&page=${this._page}`);return console.log(e),e}catch(e){console.error(e)}}incrementPage(){this._page+=1}resetPage(){this._page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}set page(e){this._page=e}get page(){return this._page}constructor(){this.searchQuery="",this.movieId="",this._page=1}}var Bu,ju={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,Bu=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=s({},u,t),this._currentPage=0,this._view=new a(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){r(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(l),u(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,u(e,(function(e,t){r.on(t,e,n)})))},h.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void u(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},h.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(e,t){var n=this,r=c(t),i=n._matchHandler(t);e=e.split(l),u(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(u(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);u(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?u(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),u(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),u(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},h.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),c=n(25),u=n(0),l=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=u({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||c(t,this._firstItemClassName),n!==i||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,c=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,c)<0&&c.push(e)})),o(e,c))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=w(e,n))&&(o=_(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=w(e,n),o=s(r)?"@index":"@key",c={},u="";return i(r,(function(e,r){c[o]=r,c["@this"]=e,a(n,c),u+=_(t.slice(),n)})),u},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=w(e.slice(0,i),n),c={};return c[s]=o,_(t,a(n,c))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function y(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:f.test(e)?r=e.replace(p,""):u.test(e)?r=y((n=e.split(l))[0],t)[y(n[1],t)]:h.test(e)?r=y((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(r=parseFloat(e)),r}function b(e,t,n){for(var r,i,s,a,c=g[e],u=1,l=2,h=t[l];u&&o(h);)0===h.indexOf(e)?u+=1:0===h.indexOf("/"+e)&&(u-=1,r=l),h=t[l+=2];if(u)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function w(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(y(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function _(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],g[r]?(i=b(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=w(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return _(v(e,c),t)}},function(e,t,n){var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},ju=Bu();const Fu=new Mu,Vu=document.querySelector(".gallery__list");const $u=new Mu;document.querySelector(".gallery__list").innerHTML="",$u.resetPage(),$u.getPopularMovies().then((e=>{(function(e){const n=document.getElementById("tui-pagination-container");let r={totalItems:e,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(t(ju))(n,r).on("afterMove",(function(e){Vu.innerHTML="",Fu.page=e.page,Fu.getPopularMovies().then((e=>{wn(e.data.results)}))}))})(e.data.total_results),wn(e.data.results)}));const qu=document.querySelector(".footer-btn"),zu=document.querySelector(".footer-backdrop"),Hu=document.querySelector(".footer-modal__close");function Wu(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",Ku)}function Ku(e){console.log(e),"Escape"===e.code&&Wu()}qu.addEventListener("click",(function(){document.body.classList.add("show-modal"),window.addEventListener("keydown",Ku)})),Hu.addEventListener("click",Wu),zu.addEventListener("click",(function(e){e.currentTarget===e.target&&Wu()}));const Ju=[{id:1,name:"Inna",surname:"Isko",img:"/Inna.08c966ae.jpg",films:[{1:"gbgbgbg"},{2:"gbgbgbg"},{3:"gbgbgbg"},{1:"gbgbgbg"},{1:"gbgbgbg"}]},{id:2,name:"Bohdan",surname:"Nadebernyy",img:"/Bogdan.54258284.jpg",work:"header / Scrum",films:["","","","",""]},{id:3,name:"Oksana",surname:"Mashtaler",img:"/Oksana.84ef82e6.jpg",wokr:"pagination / language",films:[{name:"Avatar",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg"},{name:"Interstellar",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wUmyEjrLqYpJYjVMD2YR7IffFeE.jpg"},{name:"With Pulp Fiction",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7FaHjGa4RvKJZHzY7c9UgTTH9KN.jpg"}],actors:[{name:"Helena Bonham Carter",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/DDeITcCpnBd0CkAIRPhggy9bt5.jpg"},{name:"Johnny Depp",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"},{name:"Matthew McConaughey",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rDYQP0X5XlDwxOeZdLYMbsIV7F1.jpg"}]},{id:4,name:"Maks",surname:"Budiukin",img:"/Maks.661c2508.jpg",wokr:"firebase",films:[{name:"Avatar",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg"},{name:"The night Watch",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dq1wUZFLFJ32iJOD9HkkA2CE91R.jpg"},{name:"Fight Club",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66RvLrRJTm4J8l3uHXWF09AICol.jpg"}],actors:[{name:"Helena Bonham Carter",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/DDeITcCpnBd0CkAIRPhggy9bt5.jpg"},{name:"Jackie Chan",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg"},{name:"David Tennant",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zM76EBPZkdkSHyESyIUa47aP87R.jpg"}]},{id:5,name:"Olena",surname:"Pastushenko",img:"/Olena.4b435dbf.jpg",work:"gallery",films:["","","","",""]},{id:6,name:"Yurii",surname:"....",img:"/Yurik.ccd2c66b.jpg",work:"",films:[{name:"About time",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xWk8ukJ6dhRvlrboG3qgNWNtLJ1.jpg"},{name:"Stoker",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5Ez7xx8M2XjI8lxmwyGvRdkhq0E.jpg"},{name:"Youth",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Qwf7MHzQlVdMQPiE82fCN7Ip1C.jpg"}],actors:[{name:"Jennifer Lawrence",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f7cyXplSWuYFX1e7JxcNMiRfbaH.jpg"},{name:"Brad Pitt",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg"},{name:"Timothée Chalamet",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fWcf1b3CEybhnE53xLpeAEl6WYJ.jpg"}]},{id:7,name:"Anastasiia",surname:"Boroday",img:"/Anastasya.cae8ad5a.jpg",work:"modal card",films:[{name:"Tag",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4GTpZgK5ijNGzJSB6tXjz8Xz7t2.jpg"},{name:"Me Before You",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30xQ7FYFBrIXK5Y63jq1ilMD1Xk.jpg"},{name:"Exam",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AmRno53BHVBV2v9de4137Cdf7Py.jpg"}],actors:[{name:"Emilia Isobel Euphemia Rose Clarke",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zM76EBPZkdkSHyESyIUa47aP87R.jpg"},{name:"Johnny Depp",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"},{name:"Katherine Heigl",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yuU0Mgsc6qHe4mPulIA7h7cOYEr.jpg"}]},{id:8,name:"Ruslan",surname:"Samigulin",img:"/Ruslan.033fe336.jpg",work:"render card",films:[{name:"The Great Gatsby",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWJ7cIEF8hYSjFlpkdS64s8lHb2.jpg"},{name:"The Equalizer",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hc1tXFITduL2nm5CqORSmlwAOlI.jpg"},{name:"Pirates of the Caribbean",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"}],actors:[{name:"Leonardo Wilhelm DiCaprio",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"},{name:"Denzel Washington",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/AHUnhGbnWnjin4M2sNdZYAei9h.jpg"},{name:"Johnny Depp",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"}]},{id:9,name:"Yevhen",surname:"Altunin",img:"/Zhenya.88ea98e6.jpg",films:["","","","",""]},{id:10,name:"Vladislav",surname:"Lisovyi",img:"/Vlad.a47781ee.jpg",work:"filter by genre",films:["","","","",""]},{id:11,name:"Anton",surname:"Kovsh",img:"/Anton.fe432208.jpg",films:["","","","",""]},{id:12,name:"Vlad",surname:"Bodnar",img:"/src/images/team/VladBodnar.jpg",films:[{name:"Matrix",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6nd3J3eCozReal6In5Dy18xDdmA.jpg"},{name:"Avatar",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg"},{name:"Wanted",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j0YQlXsfcYm5WQJS7i1XZWI5amk.jpg"}],actors:[{name:"Milla Jovovich",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/usWnHCzbADijULREZYSJ0qfM00y.jpg"},{name:"Jason Statham",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"},{name:"Angelina Jolie",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/k3W1XXddDOH2zibPkNotIh5amHo.jpg"}]},{id:13,name:"Serhii",surname:"Kaminskyi",img:"/Serhii.f93cdbe1.jpg",work:"footer / Team Lead",films:[{name:"Pirates of the Caribbean",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"},{name:"The Pursuit of Happyness",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lL0USBLkbymo7U3PwOlbV8ymPsI.jpg"},{name:"Hacksaw Ridge",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zpAhD2QUyCz5bifjZUGVTabplMo.jpg"}],actors:[{name:"Johnny Depp",imgUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7x6Fm7w2KQNyLw5DM1dTD7aoqTM.jpg"},{name:"Will Smith",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rqqhzESgnlxREv7Q8ZtjqBZtSry.jpg"},{name:"Tom Cruise",imgUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg"}]}],Gu=(document.querySelector("footer"),document.querySelector(".footer-team__list"));const Yu=document.querySelector(".modal-team");Gu.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;const t=Number(e.target.id);Yu.innerHTML="",Ju.map((e=>{if(e.id===t){const t=function(e){return`\n   <div class="modal-team__container">\n   <div class="modal-team__img">\n<img src="${e.img}" alt="${e.name}">\n</div>\n\n<div class="modal-team__cont--top">\n\n<div>\n<p class="modal__films--top">Top-5 Films:</p>\n    <ul class="top-films__list">\n        \n    </ul>\n</div>\n\n<div>\n<p class="modal__actor--top">Top-5 Actors:</p>\n    <ul class="top-actor__list">\n        <li><img href="${e.actors}"></li>\n    </ul>\n</div>\n\n</div>\n</div>\n<div class="modal-team__name">\n    <h3 class="footer-item__title">${e.name} ${e.surname}</h3>\n    <p class="footer-item__work">${e.work}</p>\n</div>\n    `}(e);Yu.insertAdjacentHTML("afterbegin",t);const n=document.querySelector(".top-films__list");console.log(e.films[0].name),e.films.map((e=>{console.log(e);const t=function(e){return`\n<li class="top-films__item">\n<img class="top-films__img" src="${e.imgUrl}" alt="${e.name}">\n</li>`}(e);console.log(t),n.insertAdjacentHTML("afterbegin",t)}))}}))}));const Xu=document.querySelector(".footer-team__list"),Qu=document.querySelector(".backdrop-team"),Zu=document.querySelector(".modal-team__btn");Xu.addEventListener("click",(function(e){if(!e.target.closest("li"))return;document.body.classList.add("show-modal-team")})),Zu.addEventListener("click",(function(){document.body.classList.remove("show-modal-team")})),Qu.addEventListener("click",(function(e){e.target===e.currentTarget&&document.body.classList.remove("show-modal-team")}));var el={};el=function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var c=void 0;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[o]={exports:{}};t[o][0].call(l.exports,(function(e){return i(t[o][1][e]||e)}),l,l.exports,e,t,n,r)}return n[o].exports}for(var s=void 0,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=i(s,"IMG"),a=i(s,"VIDEO"),c=i(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);const tl=e=>document.querySelector(e);let nl="",rl="";async function il(){let e="";const t=nn.get(`https://api.themoviedb.org/3/movie/${nl}/videos?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US`);await t.then((t=>{e=t.data.results[0].key,console.log(e)}));el.create(`\n    <iframe class="trailerPlayer" src="https://www.youtube.com/embed/${e}" width="500" height="300" frameborder="0"></iframe>\n`).show()}tl(".gallery__list").addEventListener("click",(async function(e){tl(".backdrop").classList.toggle("is-hidden"),nl=await e.target.parentElement.dataset.id;const t=await nn.get(`https://api.themoviedb.org/3/movie/${nl}?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&append_to_response=credits`);rl=t.data;const n=function({poster_path:e,original_title:t,vote_average:n,vote_count:r,popularity:i,genres:s,overview:o}){const a=s.map((e=>e.name));return` \n<div class="modal-container">\n    <img\n      class="modal__img"\n      src="https://image.tmdb.org/t/p/w500${e}"\n      alt="Cover of the film ${t}"\n    />\n    <div class="modal-container-columns">\n      <p class="modal__name">${t}</p>\n      <div class="modal-conteiner-ul">\n        <ul class="modal__list-theme">\n          <li class="modal__item">\n            <p class="modal__item-text">Vote / Votes</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-text">Popularity</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-text">Original Title</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-text">Genre</p>\n          </li>\n        </ul>\n        <ul class="modal__list-value">\n          <li class="modal__item">\n            <p class="modal__item-value slash">\n              <span class="modal__hightlight selected">${n}</span\n              >/<span class="modal__hightlight not-selected"\n                >${r}</span\n              >\n            </p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-value">${i}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-value">${t}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item-value">${a}</p>\n          </li>\n        </ul>\n      </div>\n      <p class="modal__about">About</p>\n      <p class="modal__description">${o}</p>\n      <ul class="modal__btn-list">\n        <li class="modal__btn-item">\n          <button type="button" class="modal__btn watched">\n            add to Watched\n          </button>\n        </li>\n        <li class="modal__btn-item">\n          <button type="button" class="modal__btn queue">add to queue</button>\n        </li>\n      </ul>\n          <button class="btn-play">Play</button>\n    </div>\n  </div>\n\n  `}(t.data);tl(".modal").insertAdjacentHTML("beforeend",n),await tl(".btn-play").addEventListener("click",il)}));const sl={openFeedbackModalBtn:document.querySelector('[data-action="open-feedback-modal"]'),closeFeedbackModalBtn:document.querySelector('[data-action="close-feedback-modal"]'),feedbackBackdrop:document.querySelector(".js-feedback-backdrop"),feedbackForm:document.querySelector(".feedback-form"),formFieldName:document.querySelector(".feedback-form__input--name"),formFieldEmail:document.querySelector(".feedback-form__input--email"),formFieldMessage:document.querySelector(".feedback-form__input--textarea-message"),feedbackFormSubmitBtn:document.querySelector(".feedback-form__submit-button")},ol={};function al(){sl.feedbackBackdrop.classList.add("is-hidden"),sl.closeFeedbackModalBtn.removeEventListener("click",al),document.removeEventListener("keyup",ul),sl.feedbackBackdrop.removeEventListener("click",cl),sl.feedbackForm.removeEventListener("submit",ll),sl.feedbackForm.removeEventListener("input",hl)}function cl(e){e.currentTarget===e.target&&al()}function ul(e){"Escape"===e.code&&al()}function ll(e){al(),localStorage.removeItem("feedback-form-state"),console.log(ol)}function hl(e){if(""===e.target.value.trim())return void e.currentTarget.reset();ol[e.target.name]=e.target.value;const t=JSON.stringify(ol);localStorage.setItem("feedback-form-state",t)}sl.openFeedbackModalBtn.addEventListener("click",(function(){sl.feedbackBackdrop.classList.remove("is-hidden"),sl.closeFeedbackModalBtn.addEventListener("click",al),document.addEventListener("keyup",ul),sl.feedbackBackdrop.addEventListener("click",cl),sl.feedbackForm.addEventListener("submit",ll),sl.feedbackForm.addEventListener("input",hl)})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(sl.formFieldName.value=t.userName,sl.formFieldEmail.value=t.userEmail,sl.formFieldMessage.value=t.userMessage)}();
//# sourceMappingURL=index.702e55f8.js.map
