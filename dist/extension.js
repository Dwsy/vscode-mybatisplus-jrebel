"use strict";var Ar=Object.create;var me=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Yr=Object.getOwnPropertyNames;var Vr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Gr=(e,t)=>{for(var r in t)me(e,r,{get:t[r],enumerable:!0})},ze=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Yr(t))!zr.call(e,i)&&i!==r&&me(e,i,{get:()=>t[i],enumerable:!(n=Ur(t,i))||n.enumerable});return e};var pe=(e,t,r)=>(r=e!=null?Ar(Vr(e)):{},ze(t||!e||!e.__esModule?me(r,"default",{value:e,enumerable:!0}):r,e)),Kr=e=>ze(me({},"__esModule",{value:!0}),e);var q=m(Oe=>{"use strict";Oe.fromCallback=function(e){return Object.defineProperty(function(...t){if(typeof t[t.length-1]=="function")e.apply(this,t);else return new Promise((r,n)=>{t.push((i,o)=>i!=null?n(i):r(o)),e.apply(this,t)})},"name",{value:e.name})};Oe.fromPromise=function(e){return Object.defineProperty(function(...t){let r=t[t.length-1];if(typeof r!="function")return e.apply(this,t);t.pop(),e.apply(this,t).then(n=>r(null,n),r)},"name",{value:e.name})}});var Ke=m((yo,Ge)=>{var G=require("constants"),Qr=process.cwd,he=null,Hr=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return he||(he=Qr.call(process)),he};try{process.cwd()}catch{}typeof process.chdir=="function"&&(De=process.chdir,process.chdir=function(e){he=null,De.call(process,e)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,De));var De;Ge.exports=Xr;function Xr(e){G.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&t(e),e.lutimes||r(e),e.chown=o(e.chown),e.fchown=o(e.fchown),e.lchown=o(e.lchown),e.chmod=n(e.chmod),e.fchmod=n(e.fchmod),e.lchmod=n(e.lchmod),e.chownSync=c(e.chownSync),e.fchownSync=c(e.fchownSync),e.lchownSync=c(e.lchownSync),e.chmodSync=i(e.chmodSync),e.fchmodSync=i(e.fchmodSync),e.lchmodSync=i(e.lchmodSync),e.stat=u(e.stat),e.fstat=u(e.fstat),e.lstat=u(e.lstat),e.statSync=b(e.statSync),e.fstatSync=b(e.fstatSync),e.lstatSync=b(e.lstatSync),e.chmod&&!e.lchmod&&(e.lchmod=function(s,y,f){f&&process.nextTick(f)},e.lchmodSync=function(){}),e.chown&&!e.lchown&&(e.lchown=function(s,y,f,a){a&&process.nextTick(a)},e.lchownSync=function(){}),Hr==="win32"&&(e.rename=typeof e.rename!="function"?e.rename:function(s){function y(f,a,d){var g=Date.now(),w=0;s(f,a,function x(W){if(W&&(W.code==="EACCES"||W.code==="EPERM"||W.code==="EBUSY")&&Date.now()-g<6e4){setTimeout(function(){e.stat(a,function(I,oe){I&&I.code==="ENOENT"?s(f,a,x):d(W)})},w),w<100&&(w+=10);return}d&&d(W)})}return Object.setPrototypeOf&&Object.setPrototypeOf(y,s),y}(e.rename)),e.read=typeof e.read!="function"?e.read:function(s){function y(f,a,d,g,w,x){var W;if(x&&typeof x=="function"){var I=0;W=function(oe,Ye,Ve){if(oe&&oe.code==="EAGAIN"&&I<10)return I++,s.call(e,f,a,d,g,w,W);x.apply(this,arguments)}}return s.call(e,f,a,d,g,w,W)}return Object.setPrototypeOf&&Object.setPrototypeOf(y,s),y}(e.read),e.readSync=typeof e.readSync!="function"?e.readSync:function(s){return function(y,f,a,d,g){for(var w=0;;)try{return s.call(e,y,f,a,d,g)}catch(x){if(x.code==="EAGAIN"&&w<10){w++;continue}throw x}}}(e.readSync);function t(s){s.lchmod=function(y,f,a){s.open(y,G.O_WRONLY|G.O_SYMLINK,f,function(d,g){if(d){a&&a(d);return}s.fchmod(g,f,function(w){s.close(g,function(x){a&&a(w||x)})})})},s.lchmodSync=function(y,f){var a=s.openSync(y,G.O_WRONLY|G.O_SYMLINK,f),d=!0,g;try{g=s.fchmodSync(a,f),d=!1}finally{if(d)try{s.closeSync(a)}catch{}else s.closeSync(a)}return g}}function r(s){G.hasOwnProperty("O_SYMLINK")&&s.futimes?(s.lutimes=function(y,f,a,d){s.open(y,G.O_SYMLINK,function(g,w){if(g){d&&d(g);return}s.futimes(w,f,a,function(x){s.close(w,function(W){d&&d(x||W)})})})},s.lutimesSync=function(y,f,a){var d=s.openSync(y,G.O_SYMLINK),g,w=!0;try{g=s.futimesSync(d,f,a),w=!1}finally{if(w)try{s.closeSync(d)}catch{}else s.closeSync(d)}return g}):s.futimes&&(s.lutimes=function(y,f,a,d){d&&process.nextTick(d)},s.lutimesSync=function(){})}function n(s){return s&&function(y,f,a){return s.call(e,y,f,function(d){T(d)&&(d=null),a&&a.apply(this,arguments)})}}function i(s){return s&&function(y,f){try{return s.call(e,y,f)}catch(a){if(!T(a))throw a}}}function o(s){return s&&function(y,f,a,d){return s.call(e,y,f,a,function(g){T(g)&&(g=null),d&&d.apply(this,arguments)})}}function c(s){return s&&function(y,f,a){try{return s.call(e,y,f,a)}catch(d){if(!T(d))throw d}}}function u(s){return s&&function(y,f,a){typeof f=="function"&&(a=f,f=null);function d(g,w){w&&(w.uid<0&&(w.uid+=4294967296),w.gid<0&&(w.gid+=4294967296)),a&&a.apply(this,arguments)}return f?s.call(e,y,f,d):s.call(e,y,d)}}function b(s){return s&&function(y,f){var a=f?s.call(e,y,f):s.call(e,y);return a&&(a.uid<0&&(a.uid+=4294967296),a.gid<0&&(a.gid+=4294967296)),a}}function T(s){if(!s||s.code==="ENOSYS")return!0;var y=!process.getuid||process.getuid()!==0;return!!(y&&(s.code==="EINVAL"||s.code==="EPERM"))}}});var Xe=m((mo,He)=>{var Qe=require("stream").Stream;He.exports=Zr;function Zr(e){return{ReadStream:t,WriteStream:r};function t(n,i){if(!(this instanceof t))return new t(n,i);Qe.call(this);var o=this;this.path=n,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=64*1024,i=i||{};for(var c=Object.keys(i),u=0,b=c.length;u<b;u++){var T=c[u];this[T]=i[T]}if(this.encoding&&this.setEncoding(this.encoding),this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=1/0;else if(typeof this.end!="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){o._read()});return}e.open(this.path,this.flags,this.mode,function(s,y){if(s){o.emit("error",s),o.readable=!1;return}o.fd=y,o.emit("open",y),o._read()})}function r(n,i){if(!(this instanceof r))return new r(n,i);Qe.call(this),this.path=n,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,i=i||{};for(var o=Object.keys(i),c=0,u=o.length;c<u;c++){var b=o[c];this[b]=i[b]}if(this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],this.fd===null&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}});var et=m((po,Ze)=>{"use strict";Ze.exports=tn;var en=Object.getPrototypeOf||function(e){return e.__proto__};function tn(e){if(e===null||typeof e!="object")return e;if(e instanceof Object)var t={__proto__:en(e)};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}});var te=m((ho,Le)=>{var E=require("fs"),rn=Ke(),nn=Xe(),on=et(),we=require("util"),L,ge;typeof Symbol=="function"&&typeof Symbol.for=="function"?(L=Symbol.for("graceful-fs.queue"),ge=Symbol.for("graceful-fs.previous")):(L="___graceful-fs.queue",ge="___graceful-fs.previous");function cn(){}function nt(e,t){Object.defineProperty(e,L,{get:function(){return t}})}var X=cn;we.debuglog?X=we.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(X=function(){var e=we.format.apply(we,arguments);e="GFS4: "+e.split(/\n/).join(`
GFS4: `),console.error(e)});E[L]||(tt=global[L]||[],nt(E,tt),E.close=function(e){function t(r,n){return e.call(E,r,function(i){i||rt(),typeof n=="function"&&n.apply(this,arguments)})}return Object.defineProperty(t,ge,{value:e}),t}(E.close),E.closeSync=function(e){function t(r){e.apply(E,arguments),rt()}return Object.defineProperty(t,ge,{value:e}),t}(E.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){X(E[L]),require("assert").equal(E[L].length,0)}));var tt;global[L]||nt(global,E[L]);Le.exports=Ce(on(E));process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!E.__patched&&(Le.exports=Ce(E),E.__patched=!0);function Ce(e){rn(e),e.gracefulify=Ce,e.createReadStream=Ye,e.createWriteStream=Ve;var t=e.readFile;e.readFile=r;function r(l,h,p){return typeof h=="function"&&(p=h,h=null),D(l,h,p);function D(C,F,k,P){return t(C,F,function(S){S&&(S.code==="EMFILE"||S.code==="ENFILE")?ee([D,[C,F,k],S,P||Date.now(),Date.now()]):typeof k=="function"&&k.apply(this,arguments)})}}var n=e.writeFile;e.writeFile=i;function i(l,h,p,D){return typeof p=="function"&&(D=p,p=null),C(l,h,p,D);function C(F,k,P,S,N){return n(F,k,P,function(v){v&&(v.code==="EMFILE"||v.code==="ENFILE")?ee([C,[F,k,P,S],v,N||Date.now(),Date.now()]):typeof S=="function"&&S.apply(this,arguments)})}}var o=e.appendFile;o&&(e.appendFile=c);function c(l,h,p,D){return typeof p=="function"&&(D=p,p=null),C(l,h,p,D);function C(F,k,P,S,N){return o(F,k,P,function(v){v&&(v.code==="EMFILE"||v.code==="ENFILE")?ee([C,[F,k,P,S],v,N||Date.now(),Date.now()]):typeof S=="function"&&S.apply(this,arguments)})}}var u=e.copyFile;u&&(e.copyFile=b);function b(l,h,p,D){return typeof p=="function"&&(D=p,p=0),C(l,h,p,D);function C(F,k,P,S,N){return u(F,k,P,function(v){v&&(v.code==="EMFILE"||v.code==="ENFILE")?ee([C,[F,k,P,S],v,N||Date.now(),Date.now()]):typeof S=="function"&&S.apply(this,arguments)})}}var T=e.readdir;e.readdir=y;var s=/^v[0-5]\./;function y(l,h,p){typeof h=="function"&&(p=h,h=null);var D=s.test(process.version)?function(k,P,S,N){return T(k,C(k,P,S,N))}:function(k,P,S,N){return T(k,P,C(k,P,S,N))};return D(l,h,p);function C(F,k,P,S){return function(N,v){N&&(N.code==="EMFILE"||N.code==="ENFILE")?ee([D,[F,k,P],N,S||Date.now(),Date.now()]):(v&&v.sort&&v.sort(),typeof P=="function"&&P.call(this,N,v))}}}if(process.version.substr(0,4)==="v0.8"){var f=nn(e);x=f.ReadStream,I=f.WriteStream}var a=e.ReadStream;a&&(x.prototype=Object.create(a.prototype),x.prototype.open=W);var d=e.WriteStream;d&&(I.prototype=Object.create(d.prototype),I.prototype.open=oe),Object.defineProperty(e,"ReadStream",{get:function(){return x},set:function(l){x=l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"WriteStream",{get:function(){return I},set:function(l){I=l},enumerable:!0,configurable:!0});var g=x;Object.defineProperty(e,"FileReadStream",{get:function(){return g},set:function(l){g=l},enumerable:!0,configurable:!0});var w=I;Object.defineProperty(e,"FileWriteStream",{get:function(){return w},set:function(l){w=l},enumerable:!0,configurable:!0});function x(l,h){return this instanceof x?(a.apply(this,arguments),this):x.apply(Object.create(x.prototype),arguments)}function W(){var l=this;qe(l.path,l.flags,l.mode,function(h,p){h?(l.autoClose&&l.destroy(),l.emit("error",h)):(l.fd=p,l.emit("open",p),l.read())})}function I(l,h){return this instanceof I?(d.apply(this,arguments),this):I.apply(Object.create(I.prototype),arguments)}function oe(){var l=this;qe(l.path,l.flags,l.mode,function(h,p){h?(l.destroy(),l.emit("error",h)):(l.fd=p,l.emit("open",p))})}function Ye(l,h){return new e.ReadStream(l,h)}function Ve(l,h){return new e.WriteStream(l,h)}var Br=e.open;e.open=qe;function qe(l,h,p,D){return typeof p=="function"&&(D=p,p=null),C(l,h,p,D);function C(F,k,P,S,N){return Br(F,k,P,function(v,uo){v&&(v.code==="EMFILE"||v.code==="ENFILE")?ee([C,[F,k,P,S],v,N||Date.now(),Date.now()]):typeof S=="function"&&S.apply(this,arguments)})}}return e}function ee(e){X("ENQUEUE",e[0].name,e[1]),E[L].push(e),Ne()}var Se;function rt(){for(var e=Date.now(),t=0;t<E[L].length;++t)E[L][t].length>2&&(E[L][t][3]=e,E[L][t][4]=e);Ne()}function Ne(){if(clearTimeout(Se),Se=void 0,E[L].length!==0){var e=E[L].shift(),t=e[0],r=e[1],n=e[2],i=e[3],o=e[4];if(i===void 0)X("RETRY",t.name,r),t.apply(null,r);else if(Date.now()-i>=6e4){X("TIMEOUT",t.name,r);var c=r.pop();typeof c=="function"&&c.call(null,n)}else{var u=Date.now()-o,b=Math.max(o-i,1),T=Math.min(b*1.2,100);u>=T?(X("RETRY",t.name,r),t.apply(null,r.concat([i]))):E[L].push(e)}Se===void 0&&(Se=setTimeout(Ne,0))}}});var M=m(Y=>{"use strict";var it=q().fromCallback,R=te(),sn=["access","appendFile","chmod","chown","close","copyFile","cp","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","glob","lchmod","lchown","lutimes","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","statfs","symlink","truncate","unlink","utimes","writeFile"].filter(e=>typeof R[e]=="function");Object.assign(Y,R);sn.forEach(e=>{Y[e]=it(R[e])});Y.exists=function(e,t){return typeof t=="function"?R.exists(e,t):new Promise(r=>R.exists(e,r))};Y.read=function(e,t,r,n,i,o){return typeof o=="function"?R.read(e,t,r,n,i,o):new Promise((c,u)=>{R.read(e,t,r,n,i,(b,T,s)=>{if(b)return u(b);c({bytesRead:T,buffer:s})})})};Y.write=function(e,t,...r){return typeof r[r.length-1]=="function"?R.write(e,t,...r):new Promise((n,i)=>{R.write(e,t,...r,(o,c,u)=>{if(o)return i(o);n({bytesWritten:c,buffer:u})})})};Y.readv=function(e,t,...r){return typeof r[r.length-1]=="function"?R.readv(e,t,...r):new Promise((n,i)=>{R.readv(e,t,...r,(o,c,u)=>{if(o)return i(o);n({bytesRead:c,buffers:u})})})};Y.writev=function(e,t,...r){return typeof r[r.length-1]=="function"?R.writev(e,t,...r):new Promise((n,i)=>{R.writev(e,t,...r,(o,c,u)=>{if(o)return i(o);n({bytesWritten:c,buffers:u})})})};typeof R.realpath.native=="function"?Y.realpath.native=it(R.realpath.native):process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")});var ct=m((So,ot)=>{"use strict";var an=require("path");ot.exports.checkPath=function(t){if(process.platform==="win32"&&/[<>:"|?*]/.test(t.replace(an.parse(t).root,""))){let n=new Error(`Path contains invalid characters: ${t}`);throw n.code="EINVAL",n}}});var lt=m((go,Te)=>{"use strict";var st=M(),{checkPath:at}=ct(),ut=e=>{let t={mode:511};return typeof e=="number"?e:{...t,...e}.mode};Te.exports.makeDir=async(e,t)=>(at(e),st.mkdir(e,{mode:ut(t),recursive:!0}));Te.exports.makeDirSync=(e,t)=>(at(e),st.mkdirSync(e,{mode:ut(t),recursive:!0}))});var A=m((vo,ft)=>{"use strict";var un=q().fromPromise,{makeDir:ln,makeDirSync:$e}=lt(),je=un(ln);ft.exports={mkdirs:je,mkdirsSync:$e,mkdirp:je,mkdirpSync:$e,ensureDir:je,ensureDirSync:$e}});var K=m((bo,yt)=>{"use strict";var fn=q().fromPromise,dt=M();function dn(e){return dt.access(e).then(()=>!0).catch(()=>!1)}yt.exports={pathExists:fn(dn),pathExistsSync:dt.existsSync}});var Ie=m((xo,mt)=>{"use strict";var re=M(),yn=q().fromPromise;async function mn(e,t,r){let n=await re.open(e,"r+"),i=null;try{await re.futimes(n,t,r)}finally{try{await re.close(n)}catch(o){i=o}}if(i)throw i}function pn(e,t,r){let n=re.openSync(e,"r+");return re.futimesSync(n,t,r),re.closeSync(n)}mt.exports={utimesMillis:yn(mn),utimesMillisSync:pn}});var Z=m((ko,St)=>{"use strict";var ne=M(),O=require("path"),pt=q().fromPromise;function hn(e,t,r){let n=r.dereference?i=>ne.stat(i,{bigint:!0}):i=>ne.lstat(i,{bigint:!0});return Promise.all([n(e),n(t).catch(i=>{if(i.code==="ENOENT")return null;throw i})]).then(([i,o])=>({srcStat:i,destStat:o}))}function wn(e,t,r){let n,i=r.dereference?c=>ne.statSync(c,{bigint:!0}):c=>ne.lstatSync(c,{bigint:!0}),o=i(e);try{n=i(t)}catch(c){if(c.code==="ENOENT")return{srcStat:o,destStat:null};throw c}return{srcStat:o,destStat:n}}async function Sn(e,t,r,n){let{srcStat:i,destStat:o}=await hn(e,t,n);if(o){if(ce(i,o)){let c=O.basename(e),u=O.basename(t);if(r==="move"&&c!==u&&c.toLowerCase()===u.toLowerCase())return{srcStat:i,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(i.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!i.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(i.isDirectory()&&Re(e,t))throw new Error(ve(e,t,r));return{srcStat:i,destStat:o}}function gn(e,t,r,n){let{srcStat:i,destStat:o}=wn(e,t,n);if(o){if(ce(i,o)){let c=O.basename(e),u=O.basename(t);if(r==="move"&&c!==u&&c.toLowerCase()===u.toLowerCase())return{srcStat:i,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(i.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!i.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(i.isDirectory()&&Re(e,t))throw new Error(ve(e,t,r));return{srcStat:i,destStat:o}}async function ht(e,t,r,n){let i=O.resolve(O.dirname(e)),o=O.resolve(O.dirname(r));if(o===i||o===O.parse(o).root)return;let c;try{c=await ne.stat(o,{bigint:!0})}catch(u){if(u.code==="ENOENT")return;throw u}if(ce(t,c))throw new Error(ve(e,r,n));return ht(e,t,o,n)}function wt(e,t,r,n){let i=O.resolve(O.dirname(e)),o=O.resolve(O.dirname(r));if(o===i||o===O.parse(o).root)return;let c;try{c=ne.statSync(o,{bigint:!0})}catch(u){if(u.code==="ENOENT")return;throw u}if(ce(t,c))throw new Error(ve(e,r,n));return wt(e,t,o,n)}function ce(e,t){return t.ino&&t.dev&&t.ino===e.ino&&t.dev===e.dev}function Re(e,t){let r=O.resolve(e).split(O.sep).filter(i=>i),n=O.resolve(t).split(O.sep).filter(i=>i);return r.every((i,o)=>n[o]===i)}function ve(e,t,r){return`Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`}St.exports={checkPaths:pt(Sn),checkPathsSync:gn,checkParentPaths:pt(ht),checkParentPathsSync:wt,isSrcSubdir:Re,areIdentical:ce}});var kt=m((Eo,xt)=>{"use strict";var $=M(),se=require("path"),{mkdirs:vn}=A(),{pathExists:bn}=K(),{utimesMillis:xn}=Ie(),ae=Z();async function kn(e,t,r={}){typeof r=="function"&&(r={filter:r}),r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0001");let{srcStat:n,destStat:i}=await ae.checkPaths(e,t,"copy",r);if(await ae.checkParentPaths(e,n,t,"copy"),!await vt(e,t,r))return;let c=se.dirname(t);await bn(c)||await vn(c),await bt(i,e,t,r)}async function vt(e,t,r){return r.filter?r.filter(e,t):!0}async function bt(e,t,r,n){let o=await(n.dereference?$.stat:$.lstat)(t);if(o.isDirectory())return qn(o,e,t,r,n);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return En(o,e,t,r,n);if(o.isSymbolicLink())return On(e,t,r,n);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}async function En(e,t,r,n,i){if(!t)return gt(e,r,n,i);if(i.overwrite)return await $.unlink(n),gt(e,r,n,i);if(i.errorOnExist)throw new Error(`'${n}' already exists`)}async function gt(e,t,r,n){if(await $.copyFile(t,r),n.preserveTimestamps){Pn(e.mode)&&await Fn(r,e.mode);let i=await $.stat(t);await xn(r,i.atime,i.mtime)}return $.chmod(r,e.mode)}function Pn(e){return(e&128)===0}function Fn(e,t){return $.chmod(e,t|128)}async function qn(e,t,r,n,i){t||await $.mkdir(n);let o=[];for await(let c of await $.opendir(r)){let u=se.join(r,c.name),b=se.join(n,c.name);o.push(vt(u,b,i).then(T=>{if(T)return ae.checkPaths(u,b,"copy",i).then(({destStat:s})=>bt(s,u,b,i))}))}await Promise.all(o),t||await $.chmod(n,e.mode)}async function On(e,t,r,n){let i=await $.readlink(t);if(n.dereference&&(i=se.resolve(process.cwd(),i)),!e)return $.symlink(i,r);let o=null;try{o=await $.readlink(r)}catch(c){if(c.code==="EINVAL"||c.code==="UNKNOWN")return $.symlink(i,r);throw c}if(n.dereference&&(o=se.resolve(process.cwd(),o)),ae.isSrcSubdir(i,o))throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);if(ae.isSrcSubdir(o,i))throw new Error(`Cannot overwrite '${o}' with '${i}'.`);return await $.unlink(r),$.symlink(i,r)}xt.exports=kn});var Ot=m((Po,qt)=>{"use strict";var _=te(),ue=require("path"),Dn=A().mkdirsSync,Cn=Ie().utimesMillisSync,le=Z();function Nn(e,t,r){typeof r=="function"&&(r={filter:r}),r=r||{},r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0002");let{srcStat:n,destStat:i}=le.checkPathsSync(e,t,"copy",r);if(le.checkParentPathsSync(e,n,t,"copy"),r.filter&&!r.filter(e,t))return;let o=ue.dirname(t);return _.existsSync(o)||Dn(o),Et(i,e,t,r)}function Et(e,t,r,n){let o=(n.dereference?_.statSync:_.lstatSync)(t);if(o.isDirectory())return Mn(o,e,t,r,n);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Ln(o,e,t,r,n);if(o.isSymbolicLink())return Wn(e,t,r,n);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}function Ln(e,t,r,n,i){return t?Tn(e,r,n,i):Pt(e,r,n,i)}function Tn(e,t,r,n){if(n.overwrite)return _.unlinkSync(r),Pt(e,t,r,n);if(n.errorOnExist)throw new Error(`'${r}' already exists`)}function Pt(e,t,r,n){return _.copyFileSync(t,r),n.preserveTimestamps&&$n(e.mode,t,r),Me(r,e.mode)}function $n(e,t,r){return jn(e)&&In(r,e),Rn(t,r)}function jn(e){return(e&128)===0}function In(e,t){return Me(e,t|128)}function Me(e,t){return _.chmodSync(e,t)}function Rn(e,t){let r=_.statSync(e);return Cn(t,r.atime,r.mtime)}function Mn(e,t,r,n,i){return t?Ft(r,n,i):_n(e.mode,r,n,i)}function _n(e,t,r,n){return _.mkdirSync(r),Ft(t,r,n),Me(r,e)}function Ft(e,t,r){let n=_.opendirSync(e);try{let i;for(;(i=n.readSync())!==null;)Jn(i.name,e,t,r)}finally{n.closeSync()}}function Jn(e,t,r,n){let i=ue.join(t,e),o=ue.join(r,e);if(n.filter&&!n.filter(i,o))return;let{destStat:c}=le.checkPathsSync(i,o,"copy",n);return Et(c,i,o,n)}function Wn(e,t,r,n){let i=_.readlinkSync(t);if(n.dereference&&(i=ue.resolve(process.cwd(),i)),e){let o;try{o=_.readlinkSync(r)}catch(c){if(c.code==="EINVAL"||c.code==="UNKNOWN")return _.symlinkSync(i,r);throw c}if(n.dereference&&(o=ue.resolve(process.cwd(),o)),le.isSrcSubdir(i,o))throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);if(le.isSrcSubdir(o,i))throw new Error(`Cannot overwrite '${o}' with '${i}'.`);return Bn(i,r)}else return _.symlinkSync(i,r)}function Bn(e,t){return _.unlinkSync(t),_.symlinkSync(e,t)}qt.exports=Nn});var be=m((Fo,Dt)=>{"use strict";var An=q().fromPromise;Dt.exports={copy:An(kt()),copySync:Ot()}});var fe=m((qo,Nt)=>{"use strict";var Ct=te(),Un=q().fromCallback;function Yn(e,t){Ct.rm(e,{recursive:!0,force:!0},t)}function Vn(e){Ct.rmSync(e,{recursive:!0,force:!0})}Nt.exports={remove:Un(Yn),removeSync:Vn}});var _t=m((Oo,Mt)=>{"use strict";var zn=q().fromPromise,$t=M(),jt=require("path"),It=A(),Rt=fe(),Lt=zn(async function(t){let r;try{r=await $t.readdir(t)}catch{return It.mkdirs(t)}return Promise.all(r.map(n=>Rt.remove(jt.join(t,n))))});function Tt(e){let t;try{t=$t.readdirSync(e)}catch{return It.mkdirsSync(e)}t.forEach(r=>{r=jt.join(e,r),Rt.removeSync(r)})}Mt.exports={emptyDirSync:Tt,emptydirSync:Tt,emptyDir:Lt,emptydir:Lt}});var At=m((Do,Bt)=>{"use strict";var Gn=q().fromPromise,Jt=require("path"),V=M(),Wt=A();async function Kn(e){let t;try{t=await V.stat(e)}catch{}if(t&&t.isFile())return;let r=Jt.dirname(e),n=null;try{n=await V.stat(r)}catch(i){if(i.code==="ENOENT"){await Wt.mkdirs(r),await V.writeFile(e,"");return}else throw i}n.isDirectory()?await V.writeFile(e,""):await V.readdir(r)}function Qn(e){let t;try{t=V.statSync(e)}catch{}if(t&&t.isFile())return;let r=Jt.dirname(e);try{V.statSync(r).isDirectory()||V.readdirSync(r)}catch(n){if(n&&n.code==="ENOENT")Wt.mkdirsSync(r);else throw n}V.writeFileSync(e,"")}Bt.exports={createFile:Gn(Kn),createFileSync:Qn}});var Gt=m((Co,zt)=>{"use strict";var Hn=q().fromPromise,Ut=require("path"),Q=M(),Yt=A(),{pathExists:Xn}=K(),{areIdentical:Vt}=Z();async function Zn(e,t){let r;try{r=await Q.lstat(t)}catch{}let n;try{n=await Q.lstat(e)}catch(c){throw c.message=c.message.replace("lstat","ensureLink"),c}if(r&&Vt(n,r))return;let i=Ut.dirname(t);await Xn(i)||await Yt.mkdirs(i),await Q.link(e,t)}function ei(e,t){let r;try{r=Q.lstatSync(t)}catch{}try{let o=Q.lstatSync(e);if(r&&Vt(o,r))return}catch(o){throw o.message=o.message.replace("lstat","ensureLink"),o}let n=Ut.dirname(t);return Q.existsSync(n)||Yt.mkdirsSync(n),Q.linkSync(e,t)}zt.exports={createLink:Hn(Zn),createLinkSync:ei}});var Qt=m((No,Kt)=>{"use strict";var H=require("path"),de=M(),{pathExists:ti}=K(),ri=q().fromPromise;async function ni(e,t){if(H.isAbsolute(e)){try{await de.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:e}}let r=H.dirname(t),n=H.join(r,e);if(await ti(n))return{toCwd:n,toDst:e};try{await de.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:H.relative(r,e)}}function ii(e,t){if(H.isAbsolute(e)){if(!de.existsSync(e))throw new Error("absolute srcpath does not exist");return{toCwd:e,toDst:e}}let r=H.dirname(t),n=H.join(r,e);if(de.existsSync(n))return{toCwd:n,toDst:e};if(!de.existsSync(e))throw new Error("relative srcpath does not exist");return{toCwd:e,toDst:H.relative(r,e)}}Kt.exports={symlinkPaths:ri(ni),symlinkPathsSync:ii}});var Zt=m((Lo,Xt)=>{"use strict";var Ht=M(),oi=q().fromPromise;async function ci(e,t){if(t)return t;let r;try{r=await Ht.lstat(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}function si(e,t){if(t)return t;let r;try{r=Ht.lstatSync(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}Xt.exports={symlinkType:oi(ci),symlinkTypeSync:si}});var nr=m((To,rr)=>{"use strict";var ai=q().fromPromise,er=require("path"),U=M(),{mkdirs:ui,mkdirsSync:li}=A(),{symlinkPaths:fi,symlinkPathsSync:di}=Qt(),{symlinkType:yi,symlinkTypeSync:mi}=Zt(),{pathExists:pi}=K(),{areIdentical:tr}=Z();async function hi(e,t,r){let n;try{n=await U.lstat(t)}catch{}if(n&&n.isSymbolicLink()){let[u,b]=await Promise.all([U.stat(e),U.stat(t)]);if(tr(u,b))return}let i=await fi(e,t);e=i.toDst;let o=await yi(i.toCwd,r),c=er.dirname(t);return await pi(c)||await ui(c),U.symlink(e,t,o)}function wi(e,t,r){let n;try{n=U.lstatSync(t)}catch{}if(n&&n.isSymbolicLink()){let u=U.statSync(e),b=U.statSync(t);if(tr(u,b))return}let i=di(e,t);e=i.toDst,r=mi(i.toCwd,r);let o=er.dirname(t);return U.existsSync(o)||li(o),U.symlinkSync(e,t,r)}rr.exports={createSymlink:ai(hi),createSymlinkSync:wi}});var fr=m(($o,lr)=>{"use strict";var{createFile:ir,createFileSync:or}=At(),{createLink:cr,createLinkSync:sr}=Gt(),{createSymlink:ar,createSymlinkSync:ur}=nr();lr.exports={createFile:ir,createFileSync:or,ensureFile:ir,ensureFileSync:or,createLink:cr,createLinkSync:sr,ensureLink:cr,ensureLinkSync:sr,createSymlink:ar,createSymlinkSync:ur,ensureSymlink:ar,ensureSymlinkSync:ur}});var xe=m((jo,dr)=>{function Si(e,{EOL:t=`
`,finalEOL:r=!0,replacer:n=null,spaces:i}={}){let o=r?t:"";return JSON.stringify(e,n,i).replace(/\n/g,t)+o}function gi(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e.replace(/^\uFEFF/,"")}dr.exports={stringify:Si,stripBom:gi}});var hr=m((Io,pr)=>{var ie;try{ie=te()}catch{ie=require("fs")}var ke=q(),{stringify:yr,stripBom:mr}=xe();async function vi(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ie,n="throws"in t?t.throws:!0,i=await ke.fromCallback(r.readFile)(e,t);i=mr(i);let o;try{o=JSON.parse(i,t?t.reviver:null)}catch(c){if(n)throw c.message=`${e}: ${c.message}`,c;return null}return o}var bi=ke.fromPromise(vi);function xi(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ie,n="throws"in t?t.throws:!0;try{let i=r.readFileSync(e,t);return i=mr(i),JSON.parse(i,t.reviver)}catch(i){if(n)throw i.message=`${e}: ${i.message}`,i;return null}}async function ki(e,t,r={}){let n=r.fs||ie,i=yr(t,r);await ke.fromCallback(n.writeFile)(e,i,r)}var Ei=ke.fromPromise(ki);function Pi(e,t,r={}){let n=r.fs||ie,i=yr(t,r);return n.writeFileSync(e,i,r)}var Fi={readFile:bi,readFileSync:xi,writeFile:Ei,writeFileSync:Pi};pr.exports=Fi});var Sr=m((Ro,wr)=>{"use strict";var Ee=hr();wr.exports={readJson:Ee.readFile,readJsonSync:Ee.readFileSync,writeJson:Ee.writeFile,writeJsonSync:Ee.writeFileSync}});var Pe=m((Mo,br)=>{"use strict";var qi=q().fromPromise,_e=M(),gr=require("path"),vr=A(),Oi=K().pathExists;async function Di(e,t,r="utf-8"){let n=gr.dirname(e);return await Oi(n)||await vr.mkdirs(n),_e.writeFile(e,t,r)}function Ci(e,...t){let r=gr.dirname(e);_e.existsSync(r)||vr.mkdirsSync(r),_e.writeFileSync(e,...t)}br.exports={outputFile:qi(Di),outputFileSync:Ci}});var kr=m((_o,xr)=>{"use strict";var{stringify:Ni}=xe(),{outputFile:Li}=Pe();async function Ti(e,t,r={}){let n=Ni(t,r);await Li(e,n,r)}xr.exports=Ti});var Pr=m((Jo,Er)=>{"use strict";var{stringify:$i}=xe(),{outputFileSync:ji}=Pe();function Ii(e,t,r){let n=$i(t,r);ji(e,n,r)}Er.exports=Ii});var qr=m((Wo,Fr)=>{"use strict";var Ri=q().fromPromise,J=Sr();J.outputJson=Ri(kr());J.outputJsonSync=Pr();J.outputJSON=J.outputJson;J.outputJSONSync=J.outputJsonSync;J.writeJSON=J.writeJson;J.writeJSONSync=J.writeJsonSync;J.readJSON=J.readJson;J.readJSONSync=J.readJsonSync;Fr.exports=J});var Lr=m((Bo,Nr)=>{"use strict";var Mi=M(),Or=require("path"),{copy:_i}=be(),{remove:Cr}=fe(),{mkdirp:Ji}=A(),{pathExists:Wi}=K(),Dr=Z();async function Bi(e,t,r={}){let n=r.overwrite||r.clobber||!1,{srcStat:i,isChangingCase:o=!1}=await Dr.checkPaths(e,t,"move",r);await Dr.checkParentPaths(e,i,t,"move");let c=Or.dirname(t);return Or.parse(c).root!==c&&await Ji(c),Ai(e,t,n,o)}async function Ai(e,t,r,n){if(!n){if(r)await Cr(t);else if(await Wi(t))throw new Error("dest already exists.")}try{await Mi.rename(e,t)}catch(i){if(i.code!=="EXDEV")throw i;await Ui(e,t,r)}}async function Ui(e,t,r){return await _i(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),Cr(e)}Nr.exports=Bi});var Rr=m((Ao,Ir)=>{"use strict";var $r=te(),We=require("path"),Yi=be().copySync,jr=fe().removeSync,Vi=A().mkdirpSync,Tr=Z();function zi(e,t,r){r=r||{};let n=r.overwrite||r.clobber||!1,{srcStat:i,isChangingCase:o=!1}=Tr.checkPathsSync(e,t,"move",r);return Tr.checkParentPathsSync(e,i,t,"move"),Gi(t)||Vi(We.dirname(t)),Ki(e,t,n,o)}function Gi(e){let t=We.dirname(e);return We.parse(t).root===t}function Ki(e,t,r,n){if(n)return Je(e,t,r);if(r)return jr(t),Je(e,t,r);if($r.existsSync(t))throw new Error("dest already exists.");return Je(e,t,r)}function Je(e,t,r){try{$r.renameSync(e,t)}catch(n){if(n.code!=="EXDEV")throw n;return Qi(e,t,r)}}function Qi(e,t,r){return Yi(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),jr(e)}Ir.exports=zi});var _r=m((Uo,Mr)=>{"use strict";var Hi=q().fromPromise;Mr.exports={move:Hi(Lr()),moveSync:Rr()}});var Wr=m((Yo,Jr)=>{"use strict";Jr.exports={...M(),...be(),..._t(),...fr(),...qr(),...A(),..._r(),...Pe(),...K(),...fe()}});var ao={};Gr(ao,{activate:()=>co,deactivate:()=>so});module.exports=Kr(ao);var B=pe(require("vscode")),j=pe(Wr()),ye=pe(require("path")),z=pe(require("os"));function Be(e=!0,t){return`
    <!DOCTYPE html>
    <html lang="zh-CN" data-theme="vscode">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyBatis-Plus \u70ED\u52A0\u8F7D\u914D\u7F6E</title>
        <style>
            body {
                font-family: "\u5FAE\u8F6F\u96C5\u9ED1", "Microsoft YaHei", sans-serif;
                padding: 20px;
                line-height: 1.6;
                background: #20232a;
                color: #e3e6eb;
                min-height: 100vh;
            }
            h1 {
                color: #3ea6ff;
                font-size: 2em;
                margin-bottom: 12px;
                font-weight: 600;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
            }
            .step {
                margin-bottom: 20px;
                padding: 18px 20px;
                background: #23272e;
                border-radius: 10px;
                border-left: 4px solid #3ea6ff;
            }
            .btn {
                background: #3ea6ff;
                color: #fff;
                border: none;
                padding: 8px 18px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 15px;
                margin-top: 10px;
                margin-right: 10px;
                font-weight: 500;
                transition: background 0.2s;
            }
            .btn:hover {
                background: #1976d2;
            }
            .btn-disable {
                background: #444c56;
                color: #bbb;
            }
            .btn-disable:hover {
                background: #33383f;
            }
            .alert {
                padding: 10px 14px;
                background: #282c34;
                color: #ffe082;
                border-radius: 6px;
                margin: 14px 0;
                border-left: 3px solid #ffe082;
                font-size: 1em;
            }
            .success {
                background: #233524;
                color: #b9f6ca;
                padding: 10px 14px;
                border-radius: 6px;
                margin-bottom: 14px;
                border-left: 3px solid #69f0ae;
                font-size: 1em;
            }
            .code-block {
                background: #23272e;
                color: #b2ebf2;
                padding: 10px 12px;
                border-radius: 6px;
                font-family: Consolas, monospace;
                margin: 10px 0;
                overflow-x: auto;
                font-size: 1em;
            }
            code {
                background: #23272e;
                color: #b2ebf2;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: Consolas, monospace;
            }
            .switch {
                position: relative;
                display: inline-block;
                width: 46px;
                height: 24px;
                margin-right: 10px;
            }
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #444c56;
                transition: .3s;
                border-radius: 24px;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background: #fff;
                transition: .3s;
                border-radius: 50%;
            }
            input:checked + .slider {
                background: #3ea6ff;
            }
            input:checked + .slider:before {
                transform: translateX(22px);
            }
            .toggle-container {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
            }
            @media (max-width: 600px) {
                .container { padding: 0; }
                .step { padding: 10px 4px; }
                .btn { padding: 7px 8px; font-size: 13px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>MyBatis-Plus \u70ED\u52A0\u8F7D\u914D\u7F6E</h1>
            <p>\u6B22\u8FCE\u4F7F\u7528 MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u6B64\u63D2\u4EF6\u57FA\u4E8E JRebel \u5B9E\u73B0\u5BF9 SQL \u6620\u5C04\u7684\u70ED\u52A0\u8F7D\u529F\u80FD\u3002</p>
            
            <div class="step">
                <h2>\u529F\u80FD\u4ECB\u7ECD</h2>
                <p>\u901A\u8FC7\u96C6\u6210 JRebel\uFF0C\u672C\u63D2\u4EF6\u53EF\u81EA\u52A8\u68C0\u6D4B\u5E76\u70ED\u52A0\u8F7D\u4FEE\u6539\u540E\u7684 SQL \u6620\u5C04\u6587\u4EF6\uFF0C\u65E0\u9700\u91CD\u542F\u670D\u52A1\u5373\u53EF\u5E94\u7528\u66F4\u6539\uFF0C\u5927\u5927\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002</p>
            </div>
            
            <div class="step">
                <h2>\u7CFB\u7EDF\u68C0\u6D4B</h2>
                <p>\u5F53\u524D\u7CFB\u7EDF: <strong>${t.platform()==="win32"?"Windows":"Mac/Linux"}</strong></p>
            </div>
            
            <div class="step">
                <h2>\u914D\u7F6E\u8BF4\u660E</h2>
                <p>\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\uFF0C\u63D2\u4EF6\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p>
                <ol>
                    <li>\u68C0\u67E5 JRebel \u662F\u5426\u5DF2\u5B89\u88C5</li>
                    <li>\u5C06 MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6 jar \u590D\u5236\u5230 JRebel \u63D2\u4EF6\u76EE\u5F55</li>
                    <li>\u5907\u4EFD\u5E76\u66F4\u65B0 JRebel \u914D\u7F6E\u6587\u4EF6</li>
                </ol>
                
                <div class="alert">
                    \u6CE8\u610F: \u4FEE\u6539\u524D\u4F1A\u81EA\u52A8\u5907\u4EFD\u60A8\u7684 jrebel.properties \u6587\u4EF6\uFF0C\u5907\u4EFD\u6587\u4EF6\u540D\u5E26\u6709\u65F6\u95F4\u6233\u3002
                </div>
            </div>
            
            <div class="step">
                <h2>\u63D2\u4EF6\u72B6\u6001</h2>
                <div class="toggle-container">
                    <label class="switch">
                        <input type="checkbox" id="pluginToggle" ${e?"checked":""}>
                        <span class="slider"></span>
                    </label>
                    <span id="toggleStatus">${e?"\u63D2\u4EF6\u5DF2\u542F\u7528":"\u63D2\u4EF6\u5DF2\u7981\u7528"}</span>
                </div>
                <button class="btn" id="setupBtn">\u5E94\u7528\u8BBE\u7F6E</button>
                <button class="btn btn-disable" id="disableBtn">\u7981\u7528\u63D2\u4EF6</button>
            </div>
            
            <div class="step">
                <h2>\u5982\u4F55\u9A8C\u8BC1\u63D2\u4EF6\u662F\u5426\u6210\u529F\u52A0\u8F7D</h2>
                <p>\u5F53\u60A8\u4F7F\u7528 JRebel \u542F\u52A8\u5E94\u7528\u540E\uFF0C\u68C0\u67E5 JRebel \u65E5\u5FD7\uFF0C\u5982\u679C\u770B\u5230\u7C7B\u4F3C\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u8BF4\u660E\u63D2\u4EF6\u5DF2\u6210\u529F\u52A0\u8F7D\uFF1A</p>
                <div class="code-block">
                    2025-05-21 09:13:23 JRebel: Ready config JRebel MybatisPlus plugin(1.0.7)...<br>
                    2025-05-21 09:13:23 JRebel: Add CBP for mybatis-plus core classes...
                </div>
                <p class="success">
                    <strong>\u2705 \u6210\u529F\uFF1A</strong> \u770B\u5230\u4E0A\u8FF0\u65E5\u5FD7\u8868\u793A\u63D2\u4EF6\u5DF2\u6210\u529F\u52A0\u8F7D\uFF0C\u73B0\u5728\u60A8\u53EF\u4EE5\u4FEE\u6539 SQL \u6620\u5C04\u6587\u4EF6\uFF0C\u65E0\u9700\u91CD\u542F\u5E94\u7528\u5373\u53EF\u751F\u6548!
                </p>
            </div>
            
            <script>
                const vscode = acquireVsCodeApi();
                const pluginToggle = document.getElementById('pluginToggle');
                const toggleStatus = document.getElementById('toggleStatus');
                
                // \u8BBE\u7F6E\u5F00\u5173\u72B6\u6001\u66F4\u65B0
                pluginToggle.addEventListener('change', function() {
                    if(this.checked) {
                        toggleStatus.textContent = "\u63D2\u4EF6\u5DF2\u542F\u7528";
                    } else {
                        toggleStatus.textContent = "\u63D2\u4EF6\u5DF2\u7981\u7528";
                    }
                });
                
                // \u5E94\u7528\u6309\u94AE
                document.getElementById('setupBtn').addEventListener('click', () => {
                    vscode.postMessage({
                        command: 'setup',
                        enabled: pluginToggle.checked
                    });
                });
                
                // \u7981\u7528\u63D2\u4EF6\u6309\u94AE
                document.getElementById('disableBtn').addEventListener('click', () => {
                    pluginToggle.checked = false;
                    toggleStatus.textContent = "\u63D2\u4EF6\u5DF2\u7981\u7528";
                    vscode.postMessage({
                        command: 'setup',
                        enabled: false
                    });
                });
            </script>
        </div>
    </body>
    </html>
    `}var Fe=()=>{let e=z.homedir();return ye.join(e,".jrebel","jrebel.properties")},Xi=()=>{let e=z.homedir();return ye.join(e,".jrebel","plugins")},Zi=e=>ye.join(e.extensionPath,"jr-mybatisplus-1.0.7.jar"),Ue=()=>{let e=z.homedir();return ye.join(e,".jrebel","plugins","jr-mybatisplus-1.0.7.jar")};async function eo(){let e=Fe();return await j.pathExists(e)}async function to(){let e=Fe();if(await j.pathExists(e)){let t=`${e}.backup.${new Date().getTime()}`;await j.copy(e,t),console.log(`\u5907\u4EFD\u914D\u7F6E\u6587\u4EF6\u5230: ${t}`)}}async function Ae(){let e=Fe();if(!await j.pathExists(e))return!1;let t=await j.readFile(e,"utf8"),r=Ue();return z.platform()==="win32"&&(r=r.replace(/\\/g,"\\\\")),t.split(`
`).some(n=>n.startsWith("rebel.plugins=")&&n.includes(r))}async function ro(e=!0){let t=Fe(),r="";await j.pathExists(t)&&(r=await j.readFile(t,"utf8"));let n=Ue();z.platform()==="win32"&&(n=n.replace(/\\/g,"\\\\"));let i=r.split(`
`),o=-1;for(let c=0;c<i.length;c++)if(i[c].startsWith("rebel.plugins=")){o=c;break}if(e)if(o>=0){let c=i[o];c.includes(n)||(i[o]=`${c},${n}`)}else i.push(`rebel.plugins=${n}`);else if(o>=0){let c=i[o];if(c.includes(n))if(c===`rebel.plugins=${n}`)i.splice(o,1);else{let u=c.replace(`,${n}`,"").replace(`${n},`,"").replace(`${n}`,"");i[o]=u}}await j.writeFile(t,i.join(`
`))}async function no(e){let t=Zi(e),r=Ue(),n=Xi();await j.pathExists(n)||await j.mkdirp(n),await j.copy(t,r,{overwrite:!0})}function io(e){let t=B.window.createWebviewPanel("mybatisplusWelcome","Vscode Mybatisplus JRebel Plugin \u914D\u7F6E",B.ViewColumn.One,{enableScripts:!0});Ae().then(r=>{t.webview.html=Be(r,z)}),t.webview.onDidReceiveMessage(async r=>{if(r.command==="setup"){let n=r.enabled!==void 0?r.enabled:!0;await oo(e,n);let i=await Ae();t.webview.html=Be(i,z)}},void 0,e.subscriptions)}async function oo(e,t=!0){try{if(!await eo()){B.window.showErrorMessage("\u672A\u68C0\u6D4B\u5230 JRebel \u5B89\u88C5\uFF0C\u8BF7\u5148\u5B89\u88C5 JRebel \u540E\u518D\u914D\u7F6E\u6B64\u63D2\u4EF6\u3002");return}await no(e),await to();let n=await Ae();if(t&&n){B.window.showInformationMessage("MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\u5DF2\u542F\u7528\uFF08\u65E0\u9700\u91CD\u590D\u914D\u7F6E\uFF09\uFF01");return}if(!t&&!n){B.window.showInformationMessage("MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\u5DF2\u7981\u7528\uFF01");return}await ro(t),t?B.window.showInformationMessage("MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\u5DF2\u542F\u7528\uFF01\u67E5\u770BJRebel\u65E5\u5FD7\u786E\u8BA4\u6210\u529F\u52A0\u8F7D\u3002"):B.window.showInformationMessage("MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\u5DF2\u7981\u7528\uFF01")}catch(r){B.window.showErrorMessage(`\u64CD\u4F5C\u5931\u8D25: ${r instanceof Error?r.message:String(r)}`)}}function co(e){console.log("MyBatis-Plus \u70ED\u52A0\u8F7D\u63D2\u4EF6\u5DF2\u6FC0\u6D3B");let t=B.commands.registerCommand("mybatisplusJRebel.config",()=>{io(e)});e.subscriptions.push(t)}function so(){}0&&(module.exports={activate,deactivate});
