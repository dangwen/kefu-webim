window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,i=Number(arguments[1])||0;for(i=0>i?Math.ceil(i):Math.floor(i),0>i&&(i+=t);t>i;i++)if(i in this&&this[i]===e)return i;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var i,o;if(null===this)throw new TypeError("this is null or not defined");var n=Object(this),s=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(i=t),o=0;s>o;){var a;o in n&&(a=n[o],e.call(i,a,o,n)),o++}}),function(e){"use strict";e.console||(e.console={});for(var t,i,o=e.console,n=function(){},s=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");t=s.pop();)o[t]||(o[t]={});for(;i=a.pop();)o[i]||(o[i]=n)}("undefined"==typeof window?this:window),function(){function e(e){var t=Object.prototype.toString.call(e);return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)}function t(e,t){o(e,t)||(e.className+=" "+t)}function i(e,t){o(e,t)&&(e.className=(" "+e.className+" ").replace(new RegExp(" "+t+" ","g")," ").trim())}function o(e,t){return!!~(" "+e.className+" ").indexOf(" "+t+" ")}function n(t,i){if("function"==typeof i){var o,n,s,a=e(t)?t:[t],r=[];for(o=2,n=arguments.length;n>o;++o)r.push(arguments[o]);for(o=0,n=a.length;n>o;++o)(s=a[o])&&(1===s.nodeType||9===s.nodeType||11===s.nodeType)&&i.apply(null,[s].concat(r))}}function s(e,t,i,o){e.addEventListener?e.addEventListener(t,i,o):e.attachEvent?(e["_"+t]=function(){i.apply(e,arguments)},e.attachEvent("on"+t,e["_"+t])):e["on"+t]=i}function a(e,t,i){var o="_"+t,n="on"+t;e.removeEventListener&&i?e.removeEventListener(t,i):e.detachEvent?(e.detachEvent(n,e[o]),delete e[o]):e[n]=null}window.easemobim=window.easemobim||{};var r=/mobile/i.test(navigator.userAgent);easemobim.utils={isTop:window.top===window.self,isNodeList:e,formatDate:function(e,t){var i=e?new Date(e):new Date,o=t||"M月d日 hh:mm",n={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds()};/(y+)/.test(o)&&(o=o.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in n)new RegExp("("+s+")").test(o)&&(o=o.replace(RegExp.$1,1===RegExp.$1.length?n[s]:("00"+n[s]).substr((""+n[s]).length)));return o},filesizeFormat:function(e){var t,i,o=["B","KB","MB","GB","TB","PB","EB","ZB"];return e>0?(t=Math.floor(Math.log(e)/Math.log(1024)),i=(e/Math.pow(1024,t)).toFixed(2)+" "+o[t]):i=0===e?"0 B":"",i},uuid:function(){for(var e=[],t="0123456789abcdef",i=0;36>i;i++)e[i]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},convertFalse:function(e){return e="undefined"==typeof e?"":e,"false"===e?!1:e},$Remove:function(e){e&&(e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e))},live:function(e,t,i,o){var n=this,s=o||document;n.on(s,t,function(t){var o,n,a=t||window.event,r=a.target||a.srcElement,c=s.querySelectorAll(e);for(o=0,n=c.length;n>o;++o)c[o]===r&&i.call(r,a)})},on:function(e,t,i,o){t.split(" ").forEach(function(t){t&&n(e,s,t,i,o)})},off:function(e,t,i){t.split(" ").forEach(function(t){t&&n(e,a,t,i)})},one:function(e,t,i,o){if(e&&t){var n=function(){i.apply(this,arguments),a(e,t,n)};s(e,t,n,o)}},trigger:function(e,t){if(document.createEvent){var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!1),e.dispatchEvent(i)}else e.fireEvent("on"+t)},extend:function(e,t){for(var i in t)if(t.hasOwnProperty(i)){var o=Object.prototype.toString.call(t[i]);"[object Array]"===o?(e[i]=[],this.extend(e[i],t[i])):"[object Object]"===o?(e[i]={},this.extend(e[i],t[i])):e[i]=t[i]}return e},addClass:function(e,i){return n(e,t,i),e},removeClass:function(e,t){return n(e,i,t),e},hasClass:function(e,t){return e?o(e,t):!1},toggleClass:function(e,n,s){if(e&&n){var a="undefined"==typeof s?!o(e,n):s;a?t(e,n):i(e,n)}},getDataByPath:function(e,t){function i(){var e=o.shift();return"string"!=typeof e?n:"object"==typeof n&&null!==n?(n=n[e],i()):void 0}var o=t.split("."),n=e;return i()},query:function(e){var t=new RegExp("[?&]"+e+"=([^&]*)(?=&|$)"),i=t.exec(location.search);return i?i[1]:""},isAndroid:/android/i.test(navigator.useragent),isIOS:/(iPad|iPhone|iPod)/i.test(navigator.userAgent),isMobile:r,click:r&&"ontouchstart"in window?"touchstart":"click",isMin:function(){return"hidden"===document.visibilityState||document.hidden},setStore:function(e,t){try{localStorage.setItem(e,t)}catch(i){}},getStore:function(e){try{return localStorage.getItem(e)}catch(t){}},clearStore:function(e){try{localStorage.removeItem(e)}catch(t){}},clearAllStore:function(){try{localStorage.clear()}catch(e){}},set:function(e,t,i){var o=new Date,n=o.getTime()+24*(i||30)*3600*1e3;o.setTime(n),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";path=/;expires="+o.toGMTString()},get:function(e){var t=document.cookie.match("(^|;) ?"+encodeURIComponent(e)+"=([^;]*)(;|$)");return t?decodeURIComponent(t[2]):""},getAvatarsFullPath:function(e,t){if(e){e=e.replace(/^(https?:)?\/\/?/,"");var i=~e.indexOf("img-cn"),o=~e.indexOf("ossimages");return i&&!o?t+"/ossimages/"+e:"//"+e}},getConfig:function(e){for(var t,i={},o=document.scripts,n=0,s=o.length;s>n;n++)if(~o[n].src.indexOf("easemob.js")){t=o[n].src;break}if(!t)return{json:i,domain:""};for(var a,r=t.indexOf("?"),c=~t.indexOf("//")?t.indexOf("//"):0,f=t.slice(c,t.indexOf("/",c+2)),d=t.slice(r+1).split("&"),l=0,h=d.length;h>l;l++)a=d[l].split("="),i[a[0]]=a.length>1?decodeURIComponent(a[1]):"";return{json:i,domain:f}},updateAttribute:function(e,t,i){var o=e||location.protocol+i+"/im.html?tenantId=";for(var n in t)t.hasOwnProperty(n)&&"undefined"!=typeof t[n]&&(~o.indexOf(n+"=")?o=o.replace(new RegExp(n+"=[^&#?]*","gim"),n+"="+(""!==t[n]?t[n]:"")):o+="&"+n+"="+(""!==t[n]?t[n]:""));return o},copy:function(e){return this.extend({},e)},code:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t={encode:function(t){var i,o,n,s,a,r,c,f="",d=0;do i=t.charCodeAt(d++),o=t.charCodeAt(d++),n=t.charCodeAt(d++),s=i>>2,a=(3&i)<<4|o>>4,r=(15&o)<<2|n>>6,c=63&n,isNaN(o)?r=c=64:isNaN(n)&&(c=64),f=f+e.charAt(s)+e.charAt(a)+e.charAt(r)+e.charAt(c);while(d<t.length);return f},decode:function(t){var i,o,n,s,a,r,c,f="",d=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");do s=e.indexOf(t.charAt(d++)),a=e.indexOf(t.charAt(d++)),r=e.indexOf(t.charAt(d++)),c=e.indexOf(t.charAt(d++)),i=s<<2|a>>4,o=(15&a)<<4|r>>2,n=(3&r)<<6|c,f+=String.fromCharCode(i),64!=r&&(f+=String.fromCharCode(o)),64!=c&&(f+=String.fromCharCode(n));while(d<t.length);return f}};return t}()}}(),function(){easemobim._const={agentStatusText:{Idle:"(离线)",Online:"(空闲)",Busy:"(忙碌)",Leave:"(离开)",Hidden:"(隐身)",Offline:"(离线)",Logout:"(离线)",Other:""},agentStatusClassName:{Idle:"online",Online:"online",Busy:"busy",Leave:"leave",Hidden:"hidden",Offline:"offline",Logout:"offline",Other:"hide"},eventMessageText:{TRANSFERING:"会话转接中，请稍候",TRANSFER:"会话已被转接至其他客服",LINKED:"会话已被客服接起",CLOSED:"会话已结束",NOTE:"当前暂无客服在线，请您留下联系方式，稍后我们将主动联系您",CREATE:"会话创建成功"},themeMap:{"天空之城":"theme-1","丛林物语":"theme-2","红瓦洋房":"theme-3","鲜美橙汁":"theme-4","青草田间":"theme-5","湖光山色":"theme-6","冷峻山峰":"theme-7","月色池塘":"theme-8","天籁湖光":"theme-9","商务风格":"theme-10"},IM:{WEBIM_CONNCTION_OPEN_ERROR:1,WEBIM_CONNCTION_AUTH_ERROR:2,WEBIM_CONNCTION_AJAX_ERROR:17,WEBIM_CONNCTION_CALLBACK_INNER_ERROR:31},EVENTS:{NOTIFY:"notify",RECOVERY:"recoveryTitle",SHOW:"showChat",CLOSE:"closeChat",CACHEUSER:"setUser",DRAGREADY:"dragReady",DRAGEND:"dragEnd",SLIDE:"titleSlide",ONMESSAGE:"onMessage",ONSESSIONCLOSED:"onSessionClosed",EXT:"ext",TEXTMSG:"textmsg",ONREADY:"onready",SET_ITEM:"setItem",UPDATE_URL:"updateURL",REQUIRE_URL:"requireURL",INIT_CONFIG:"initConfig"},UPLOAD_FILESIZE_LIMIT:10485760,FIRST_CHANNEL_MESSAGE_TIMEOUT:1e4,SECOND_MESSAGE_CHANNEL_MAX_RETRY_COUNT:1,FIRST_CHANNEL_CONNECTION_TIMEOUT:2e4,HEART_BEAT_INTERVAL:6e4,SECOND_CHANNEL_MESSAGE_RECEIVE_INTERVAL:6e4,MESSAGE_PREDICT_MAX_LENGTH:100,MAX_TEXT_MESSAGE_LENGTH:1500,GET_HISTORY_MESSAGE_COUNT_EACH_TIME:10,AGENT_INPUT_STATE_INTERVAL:1e3,for_block_only:null}}(),window.easemobim=window.easemobim||{},window.easemobIM=window.easemobIM||{},easemobIM.Transfer=easemobim.Transfer=function(){"use strict";var e=function(e,t,i){if("string"==typeof e.data){var o,n,s=JSON.parse(e.data),a=!1;if(i&&i.length)for(o=0,n=i.length;n>o;o++)s.key===i[o]&&(a=!0,"function"==typeof t&&t(s));else"function"==typeof t&&t(s);if(!a&&i)for(o=0,n=i.length;n>o;o++)if("data"===i[o]){"function"==typeof t&&t(s);break}}},t=function(e,i){return this instanceof t?(this.key=i,this.iframe=document.getElementById(e),void(this.origin=location.protocol+"//"+location.host)):new t(e)};return t.prototype.send=function(e,t){return e.origin=this.origin,e.key=this.key,t&&(e.to=t),e=JSON.stringify(e),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,"*"),this},t.prototype.listen=function(t,i){var o=this;return window.addEventListener?window.addEventListener("message",function(n){e.call(o,n,t,i)},!1):window.attachEvent&&window.attachEvent("onmessage",function(n){e.call(o,n,t,i)}),this},t}(),easemobim.notify=function(){var e=0;easemobim.notify=function(t,i,o){if(0===e&&(e=setTimeout(function(){e=0},3e3),window.Notification))if("granted"===Notification.permission){var n=new Notification(i||"",{icon:t||"",body:o||""});n.onclick=function(){"function"==typeof window.focus&&window.focus(),this.close(),"object"==typeof easemobim.titleSlide&&easemobim.titleSlide.stop()},setTimeout(function(){n.close()},3e3)}else Notification.requestPermission()}},easemobim.titleSlide=function(){var e,t="新消息提醒",i=0,o=document.title,n=(o+t).split("");easemobim.titleSlide={stop:function(){clearInterval(i),i=0,document.title=o},start:function(){i||(i=setInterval(function(){e=n.shift(),document.title=e+Array.prototype.join.call(n,""),n.push(e)},360))}}},function(e,t){"use strict";function i(e){var t=this,i=window.event||e,n=document.documentElement.clientWidth,s=document.documentElement.clientHeight,c=n-i.clientX-t.rect.width+r.x,f=s-i.clientY-t.rect.height+r.y;i.clientX-r.x<=0?c=n-t.rect.width:i.clientX+t.rect.width-r.x>=n&&(c=0),i.clientY-r.y<=0?f=s-t.rect.height:i.clientY+t.rect.height-r.y>=s&&(f=0),t.shadow.style.left="auto",t.shadow.style.top="auto",t.shadow.style.right=c+"px",t.shadow.style.bottom=f+"px",t.position={x:c,y:f},clearTimeout(a),a=setTimeout(function(){o.call(t)},500)}function o(){var t=this,i=t.iframe,o=t.shadow;e.off(document,"mousemove",t.moveEv),i.style.left="auto",i.style.top="auto",i.style.right=t.position.x+"px",i.style.bottom=t.position.y+"px",i.style.display="block",o.style.left="auto",o.style.top="auto",o.style.right=t.position.x+"px",o.style.bottom=t.position.y+"px",o.style.display="none"}function n(){var t=this;e.on(window,"resize",function(){if(t.rect&&t.rect.width){var e=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=Number(t.iframe.style.right.slice(0,-2)),n=Number(t.iframe.style.bottom.slice(0,-2));e<t.rect.width?(t.iframe.style.left="auto",t.iframe.style.right=0,t.shadow.style.left="auto",t.shadow.style.right=0):e-o<t.rect.width?(t.iframe.style.right=e-t.rect.width+"px",t.iframe.style.left=0,t.shadow.style.right=e-t.rect.width+"px",t.shadow.style.left=0):(t.iframe.style.left="auto",t.shadow.style.left="auto"),i<t.rect.height?(t.iframe.style.top="auto",t.iframe.style.bottom=0):i-n<t.rect.height?(t.iframe.style.bottom=i-t.rect.height+"px",t.iframe.style.top=0):t.iframe.style.top="auto"}})}function s(){var s=this;s.config.dragenable&&(n.call(s),e.on(s.shadow,"mouseup",function(){o.call(s)})),s.message=new easemobim.Transfer(s.iframe.id,"easemob"),s.iframe.style.display="block",s.config.hasReceiveCallback="function"==typeof s.config.onmessage,s.onsessionclosedSt=0,s.onreadySt=0,s.config.parentId=s.iframe.id,s.message.send({event:t.EVENTS.INIT_CONFIG,data:s.config}).listen(function(n){if(n.to===s.iframe.id)switch(n.event){case t.EVENTS.ONREADY:"function"==typeof s.config.onready&&(clearTimeout(s.onreadySt),s.onreadySt=setTimeout(function(){s.config.onready()},500));break;case t.EVENTS.SHOW:s.open();break;case t.EVENTS.CLOSE:s.close();break;case t.EVENTS.NOTIFY:easemobim.notify(n.data.avatar,n.data.title,n.data.brief);break;case t.EVENTS.SLIDE:easemobim.titleSlide.start();break;case t.EVENTS.RECOVERY:easemobim.titleSlide.stop();break;case t.EVENTS.ONMESSAGE:"function"==typeof s.config.onmessage&&s.config.onmessage(n.data);break;case t.EVENTS.ONSESSIONCLOSED:"function"==typeof s.config.onsessionclosed&&(clearTimeout(s.onsessionclosedSt),s.onsessionclosedSt=setTimeout(function(){s.config.onsessionclosed()},500));break;case t.EVENTS.CACHEUSER:n.data.username&&e.set((s.config.to||"")+s.config.tenantId+(s.config.emgroup||""),n.data.username);break;case t.EVENTS.DRAGREADY:r.x=isNaN(Number(n.data.x))?0:Number(n.data.x),r.y=isNaN(Number(n.data.y))?0:Number(n.data.y),s.shadow.style.display="block",s.iframe.style.display="none",s.moveEv||(s.moveEv=function(e){i.call(s,e)}),e.on(document,"mousemove",s.moveEv);break;case t.EVENTS.DRAGEND:o.call(s);break;case t.EVENTS.SET_ITEM:e.setStore(n.data.key,n.data.value);break;case t.EVENTS.REQUIRE_URL:s.message.send({event:t.EVENTS.UPDATE_URL,data:location.href})}},["main"]),s.ready instanceof Function&&s.ready()}var a=0,r={x:0,y:0},c=function(t,i){if(!(this instanceof c))return new c(t,i);if(i&&c.iframe)return c.iframe.config=e.copy(t),c.iframe;this.url="",this.iframe=/MSIE (6|7|8)/.test(navigator.userAgent)?document.createElement('<iframe name="'+(new Date).getTime()+'">'):document.createElement("iframe"),this.iframe.id="EasemobIframe"+(new Date).getTime(),this.iframe.name=(new Date).getTime(),this.iframe.style.cssText="width: 0;height: 0;border: none; position: fixed;",this.shadow=document.createElement("div"),this.config=e.copy(t),this.show=!1,e.isMobile||(document.body.appendChild(this.shadow),document.body.appendChild(this.iframe));var o=this;return o.iframe.readyState?o.iframe.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&s.call(o)}:o.iframe.onload=function(){s.call(o)},c.iframe=this,this};c.prototype.set=function(t,i){this.config=e.copy(t||this.config);var o={tenantId:this.config.tenantId,hide:this.config.hide,sat:this.config.satisfaction,wechatAuth:this.config.wechatAuth,hideKeyboard:this.config.hideKeyboard,eventCollector:this.config.eventCollector,resources:this.config.resources,offDutyWord:this.config.offDutyWord};if(this.config.agentName&&(o.agentName=this.config.agentName),this.config.emgroup&&(o.emgroup=this.config.emgroup),this.config.to&&(o.to=this.config.to),this.config.xmppServer&&(o.xmppServer=this.config.xmppServer),this.config.restServer&&(o.restServer=this.config.restServer),this.config.offDutyType&&(o.offDutyType=this.config.offDutyType),this.config.language&&(o.language=this.config.language),this.config.appid&&(o.appid=this.config.appid),this.config.grUserId&&(o.grUserId=this.config.grUserId),this.config.liveVideoInvite&&(o.liveVideoInvite=this.config.liveVideoInvite),this.config.isSmart&&(o.isSmart=this.config.isSmart),this.config.appKey&&(o.appKey=encodeURIComponent(this.config.appKey)),this.config.user&&this.config.user.username&&(o.user=this.config.user.username),"undefined"!=typeof this.config.hideStatus&&""!==this.config.hideStatus&&(o.hideStatus=this.config.hideStatus),"undefined"!=typeof this.config.ticket&&""!==this.config.ticket&&(o.ticket=this.config.ticket),t.h5Origin?this.url=easemobim.utils.updateAttribute(null,o,t.path.replace(t.domain,t.h5Origin)):this.url=easemobim.utils.updateAttribute(this.url,o,t.path),this.config.user.username||(this.config.isUsernameFromCookie=!0,this.config.user.username=e.get((this.config.to||"")+this.config.tenantId+(this.config.emgroup||""))),this.config.guestId=e.getStore("guestId"),this.position={x:this.config.dialogPosition.x.slice(0,-2),y:this.config.dialogPosition.y.slice(0,-2)},this.rect={width:+this.config.dialogWidth.slice(0,-2),height:+this.config.dialogHeight.slice(0,-2)},this.iframe.frameBorder=0,this.iframe.allowTransparency="true",this.iframe.style.cssText=["z-index:16777269;","overflow:hidden;","position:fixed;","bottom:10px;","right:-5px;","border:none;","width:"+this.config.dialogWidth+";","height:0;","display:none;","transition:all .01s;"].join(""),this.shadow.style.cssText=["display:none;","cursor:move;","z-index:16777270;","position:fixed;","bottom:"+this.config.dialogPosition.y+";","right:"+this.config.dialogPosition.x+";","border:none;","width:"+this.config.dialogWidth+";","height:"+this.config.dialogHeight+";","border-radius:4px;","box-shadow: 0 4px 8px rgba(0,0,0,.2);","border-radius: 4px;"].join(""),this.shadow.style.background="url("+location.protocol+this.config.staticPath+"/img/drag.png) no-repeat",this.shadow.style.backgroundSize="100% 100%",this.config.hide?(this.iframe.style.height="0",this.iframe.style.width="0"):(this.iframe.style.height="37px",this.iframe.style.width="104px"),e.isMobile){this.iframe.style.cssText+="left:0;bottom:0",this.iframe.style.width="100%",this.iframe.style.right="0";var n={};n.domain=this.config.domain,n.path=this.config.path,n.staticPath=this.config.staticPath,this.config.user&&(n.user=this.config.user),e.setStore("emconfig"+this.config.tenantId,e.code.encode(JSON.stringify(n)))}return this.iframe.src=this.url,this.ready=i,this},c.prototype.open=function(){var i=this.iframe;if(!this.show)return this.show=!0,e.isMobile?(i.style.width="100%",i.style.height="100%",i.style.right="0",i.style.bottom="0",i.style.borderRadius="0",i.style.cssText+="box-shadow: none;"):(i.style.width=this.config.dialogWidth,i.style.height=this.config.dialogHeight,i.style.visibility="visible",i.style.right=this.position.x+"px",i.style.bottom=this.position.y+"px",i.style.cssText+="box-shadow: 0 4px 8px rgba(0,0,0,.2);border-radius: 4px;border: 1px solid #ccc\\9;"),i.style.visibility="visible",this.message&&this.message.send({event:t.EVENTS.SHOW}),this},c.prototype.close=function(){var e=this.iframe;if(this.show!==!1)return this.show=!1,clearTimeout(a),e.style.boxShadow="none",e.style.borderRadius="4px;",e.style.left="auto",e.style.top="auto",e.style.right="-5px",e.style.bottom="10px",e.style.border="none",this.config.hide?(e.style.visibility="hidden",e.style.width="1px",e.style.height="1px"):(e.style.height="37px",e.style.width="104px"),this.message&&this.message.send({event:t.EVENTS.CLOSE}),this},c.prototype.send=function(e){this.message.send({event:t.EVENTS.EXT,data:e})},c.prototype.sendText=function(e){this.message.send({event:t.EVENTS.TEXTMSG,data:e})},easemobim.Iframe=c}(easemobim.utils,easemobim._const),function(e,t){"use strict";function i(){a=o.copy(s),o.extend(a,easemobim.config),c=o.copy(a);var e=""!==o.convertFalse(c.hide)?c.hide:r.json.hide,t=""!==o.convertFalse(c.resources)?c.resources:r.json.resources,i=""!==o.convertFalse(c.satisfaction)?c.satisfaction:r.json.sat;c.tenantId=c.tenantId||r.json.tenantId,c.hide=o.convertFalse(e),c.resources=o.convertFalse(t),c.satisfaction=o.convertFalse(i),c.domain=c.domain||r.domain,c.path=c.path||r.domain+"/webim",c.staticPath=c.staticPath||r.domain+"/webim/static"}var o=easemobim.utils;easemobim.config=easemobim.config||{},easemobim.version="benz.43.15.25",easemobim.tenants={};var n,s={tenantId:"",to:"",agentName:"",appKey:"",domain:"",path:"",ticket:!1,hideKeyboard:!0,staticPath:"",buttonText:"联系客服",dialogWidth:"360px",dialogHeight:"550px",dragenable:!0,minimum:!0,soundReminder:!0,dialogPosition:{x:"10px",y:"10px"},user:{username:"",password:"",token:""}},a=o.copy(s),r=o.getConfig(),c={};if(easemobim.titleSlide(),easemobim.notify(),i(),easemobim.config.grUserId=o.get("gr_user_id"),e.easemobIM=function(e){easemobim.bind({emgroup:e})},e.easemobIMS=function(e,t){easemobim.bind({tenantId:e,emgroup:t})},easemobim.bind=function(t){t=t||{},t.emgroup=t.emgroup||easemobim.config.emgroup||"";var s=t.tenantId+t.emgroup;for(var a in easemobim.tenants)easemobim.tenants.hasOwnProperty(a)&&easemobim.tenants[a].close();if(i(),o.extend(c,t),!c.tenantId)return void console.warn("未指定tenantId!");if(n=easemobim.Iframe(c),easemobim.tenants[s]=n,n.set(c,o.isMobile?null:n.open),o.isMobile){var r=(c.tenantId||"")+(c.emgroup||"");c.extMsg&&o.setStore(r+"ext",JSON.stringify(c.extMsg)),c.visitor&&o.setStore(r+"visitor",JSON.stringify(c.visitor));for(var f=e.event.srcElement||e.event.target,d=5;f&&"A"!==f.nodeName&&d--;)f=f.parentNode;if(!f||"A"!==f.nodeName)return;f.setAttribute("href",n.url),easemobim.config.h5Origin&&(i(),o.extend(c,t),f.setAttribute("href",n.url+"&ext="+easemobim.utils.code.encode(encodeURIComponent(JSON.stringify({ext:c.extMsg,visitor:c.visitor})))))}},easemobim.sendExt=function(e){n.send({ext:e})},easemobim.sendText=function(e){n&&n.sendText(e)},(!c.hide||c.autoConnect||c.eventCollector)&&c.tenantId){var f=a.tenantId+(a.emgroup||"");n=easemobim.tenants[f]||easemobim.Iframe(c),easemobim.tenants[f]=n,n.set(c,n.close),easemobim.config.eventCollector=!1}"object"==typeof module&&"object"==typeof module.exports?module.exports=easemobim:"function"==typeof define&&(define.amd||define.cmd)&&define([],function(){return easemobim})}(window,void 0);