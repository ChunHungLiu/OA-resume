/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */
 !function(i){"function"==typeof define&&define.amd?define(["jquery"],i):i(jQuery)}(function(i){var t=0,n=0,r={d4Count:10},e={init:function(t){i.extend(r,t),o.apply(this),s.apply(this)}},s=function(){var t=i(this).find(".silders"),r=t.find(".silder"),e=r.first(),s=parseFloat(e.css("width"))+parseFloat(e.css("margin-left"))+parseFloat(e.css("margin-right")),o=i(this).find(".silders_container"),a=i(this).find(".arrow-left"),c=i(this).find(".arrow-right");a.click(function(){n=Math.ceil(o.scrollLeft()/s),n=--n<0?0:n,f(o,s*n,300)}),c.click(function(){n=Math.floor(o.scrollLeft()/s),n=++n<0?0:n,f(o,s*n,300)})},o=function(){var t=i(this).find(".silders"),e=t.find(".silder"),s=e.first(),o=e.length>r.d4Count?r.d4Count:e.length,f=parseFloat(s.css("width"))+parseFloat(s.css("margin-left"))+parseFloat(s.css("margin-right"));n=0,t.css({width:o*f+"px"})},f=function(i,n,r){var e=i.scrollLeft(),s=n-e,o=0,f=20;clearTimeout(t);var c=function(){o+=f;var n=a(o,e,s,r);i.scrollLeft(n),r>o&&(t=setTimeout(c,f))};c()},a=function(i,t,n,r){return i/=r/2,1>i?n/2*i*i+t:(i--,-n/2*(i*(i-2)-1)+t)};i.fn.sliderPreview=function(i){var t=e.init;if(!t)throw new Error("Unknown function name '"+action+"' for timeago");return this.each(function(){t.call(this,i)}),this}});