/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

/**
 * Infinite scrolling tumblr
 * @author cody sherman codysherman(dot)com
 */

var tumblrAutoPager={url:"http://proto.jp/",ver:"0.1.7",rF:true,gP:{},pp:null,ppId:"",LN:location.hostname,init:function(){if($("autopagerize_icon")||navigator.userAgent.indexOf('iPhone')!=-1)return;var tAP=tumblrAutoPager;var p=1;var lh=location.href;var lhp=lh.lastIndexOf("/page/");var lht=lh.lastIndexOf("/tagged/");if(lhp!=-1){p=parseInt(lh.slice(lhp+6));tAP.LN=lh.slice(7,lhp);}else if(lht!=-1){tAP.LN=lh.slice(7);if(tAP.LN.slice(tAP.LN.length-1)=="/")tAP.LN=tAP.LN.slice(0,tAP.LN.length-1);}else if("http://"+tAP.LN+"/"!=lh){return;};var gPFncs=[];gPFncs[0]=function(aE){var r=[];for(var i=0,l=aE.length;i<l;i++){if(aE[i].className=="autopagerize_page_element"){r=gCE(aE[i]);break;}}
return r;};gPFncs[1]=function(aE){var r=[];for(var i=0,l=aE.length;i<l;i++){var arr=aE[i].className?aE[i].className.split(" "):null;if(arr){for(var j=0;j<arr.length;j++){arr[j]=="post"?r.push(aE[i]):null;}}}
return r;};gPFncs[2]=function(aE){var r=[];var tmpId=tAP.ppId?[tAP.ppId]:["posts","main","container","content","apDiv2","wrapper","projects"];for(var i=0,l=aE.length;i<l;i++){for(var j=0;j<tmpId.length;j++){if(aE[i].id==tmpId[j]){r=gCE(aE[i]);tAP.ppId=aE[i].id;break;}}}
return r;};for(var i=0;i<gPFncs.length;i++){var getElems=gPFncs[i](document.body.getElementsByTagName('*'));if(getElems.length){tAP.gP=gPFncs[i];tAP.pp=getElems[0].parentNode;break;}}
function gCE(pElem){var r=[];for(var i=0,l=pElem.childNodes.length;i<l;i++){r.push(pElem.childNodes.item(i))}
return r;}
if(!tAP.pp){return;}
sendRequest.README={license:'Public Domain',url:'http://jsgt.org/lib/ajax/ref.htm',version:0.516,author:'Toshiro Takahashi'};function chkAjaBrowser(){var A,B=navigator.userAgent;this.bw={safari:((A=B.split('AppleWebKit/')[1])?A.split('(')[0].split('.')[0]:0)>=124,konqueror:((A=B.split('Konqueror/')[1])?A.split(';')[0]:0)>=3.3,mozes:((A=B.split('Gecko/')[1])?A.split(' ')[0]:0)>=20011128,opera:(!!window.opera)&&((typeof XMLHttpRequest)=='function'),msie:(!!window.ActiveXObject)?(!!createHttpRequest()):false};return(this.bw.safari||this.bw.konqueror||this.bw.mozes||this.bw.opera||this.bw.msie)}
function createHttpRequest(){if(window.XMLHttpRequest){return new XMLHttpRequest()}else{if(window.ActiveXObject){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(B){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(A){return null}}}else{return null}}};function sendRequest(E,R,C,D,F,G,S,A){var Q=C.toUpperCase()=='GET',H=createHttpRequest();if(H==null){return null}
if((G)?G:false){D+=((D.indexOf('?')==-1)?'?':'&')+'t='+(new Date()).getTime()}
var P=new chkAjaBrowser(),L=P.bw.opera,I=P.bw.safari,N=P.bw.konqueror,M=P.bw.mozes;if(typeof E=='object'){var J=E.onload;var O=E.onbeforsetheader}else{var J=E;var O=null}
if(L||I||M){H.onload=function(){J(H);H.abort()}}else{H.onreadystatechange=function(){if(H.readyState==4){J(H);H.abort()}}}
R=K(R,D);if(Q){D+=((D.indexOf('?')==-1)?'?':(R=='')?'':'&')+R}
H.open(C,D,F,S,A);if(!!O){O(H)}
B(H);H.send(R);function B(T){if(!L||typeof T.setRequestHeader=='function'){T.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')}
return T}
function K(X,V){var Z=[];if(typeof X=='object'){for(var W in X){Y(W,X[W])}}else{if(typeof X=='string'){if(X==''){return''}
if(X.charAt(0)=='&'){X=X.substring(1,X.length)}
var T=X.split('&');for(var W=0;W<T.length;W++){var U=T[W].split('=');Y(U[0],U[1])}}}
function Y(b,a){Z.push(encodeURIComponent(b)+'='+encodeURIComponent(a))}
return Z.join('&')}
return H}
function addNextPage(oj){if(oj.status==404){tAP.remainFlg=false;return;}
var d=document.createElement("div");d.innerHTML=oj.responseText;var posts=tAP.gP(d.getElementsByTagName("*"));if(posts.length<2){tAP.rF=false;return;}
d=document.createElement("div");d.className="tumblrAutoPager_page_info";tAP.pp.appendChild(d);for(var i=0;i<posts.length;i++){tAP.pp.appendChild(posts[i]);}
var footer=$("footer");footer?footer.parentNode.appendChild(footer):null;tAP.rF=true;}
watch_scroll();function watch_scroll(){var d=document.compatMode=="BackCompat"?document.body:document.documentElement;var r=d.scrollHeight-d.clientHeight-(d.scrollTop||document.body.scrollTop);if(r<d.clientHeight*2&&tAP.rF){tAP.rF=false;p++;sendRequest(addNextPage,"","GET","http://"+tAP.LN+"/page/"+p,true);}
setTimeout(arguments.callee,200);};function $(id){return document.getElementById(id)};},switchAutoPage:function(){this.rF=!this.rF;var aE=document.getElementsByTagName('*');for(var i=0,l=aE.length;i<l;i++){if(aE[i].className=="tAP_switch"){aE[i].firstChild.nodeValue=this.rF?"AutoPage[OFF]":"AutoPage[ON]";}}}};window.addEventListener?window.addEventListener('load',tumblrAutoPager.init,false):window.attachEvent?window.attachEvent("onload",tumblrAutoPager.init):window.onload=tumblrAutoPager.init;


/**
 * Custom theme code
 * @author erin marchak hello(at)emarchak(dot)com
 */

jQuery(document).ready(function($) {

  // Optimization: Store the references outside the event handler:
  var window = $('html');
  var links = $('.menu li');

  function checkWidth() {
    var windowSize = window.width();
    if (windowSize > 700) {
      //if the window is greater than 700px prepare left side icons
      $(links).each(function(){
        var link = $(this).find('a'); // reduce the number of calls to find
        var linkWidth = link.width();
        var iconWidth = link.find('i').width();

        var linkStyle = new Array();
        linkStyle['display'] = 'block';
        linkStyle['width'] = linkWidth;
        linkStyle['left'] = iconWidth - linkWidth;

        link.css(linkStyle);
      });
    }
  }


  // Execute checks on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

   // hoverIntent for left
    links.hoverIntent(
      function(){
        $(this).find('a').animate({left : 0}, 500);
      },
      function(){
        var link = $(this).find('a'); // reduce the number of calls to find

        var linkWidth = link.width();
        var iconWidth = link.find('i').width();

        var leftPos = iconWidth - linkWidth;

        link.animate({left : leftPos}, 500);
      }
    );

  //watch for select changes
  $('nav select').change( function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
        document.location.href = url; // redirect
      }
      return false;
  });

});
