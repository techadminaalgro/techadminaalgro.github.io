var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){$.fn.wavify=function(options){var settings=$.extend({container:options.container?options.container:'body',height:200,amplitude:100,speed:.15,bones:3,color:'rgba(255,255,255, 0.20)'},options);var wave=this,width=$(settings.container).width(),height=$(settings.container).height(),points=[],lastUpdate,totalTime=0;TweenLite.set(wave,{attr:{fill:settings.color}});function drawPoints(factor){var points=[];for(var i=0;i<=settings.bones;i++){var x=i/settings.bones*width;var sinSeed=(factor+(i+i%settings.bones))*settings.speed*100;var sinHeight=Math.sin(sinSeed/100)*settings.amplitude;var yPos=Math.sin(sinSeed/100)*sinHeight+settings.height;points.push({x:x,y:yPos})}
    return points}
    function drawPath(points){var SVGString='M '+points[0].x+' '+points[0].y;var cp0={x:(points[1].x-points[0].x)/2,y:(points[1].y-points[0].y)+points[0].y+(points[1].y-points[0].y)};SVGString+=' C '+cp0.x+' '+cp0.y+' '+cp0.x+' '+cp0.y+' '+points[1].x+' '+points[1].y;var prevCp=cp0;var inverted=-1;for(var i=1;i<points.length-1;i++){var cpLength=Math.sqrt(prevCp.x*prevCp.x+prevCp.y*prevCp.y);var cp1={x:(points[i].x-prevCp.x)+points[i].x,y:(points[i].y-prevCp.y)+points[i].y};SVGString+=' C '+cp1.x+' '+cp1.y+' '+cp1.x+' '+cp1.y+' '+points[i+1].x+' '+points[i+1].y;prevCp=cp1;inverted=-inverted}
        SVGString+=' L '+width+' '+height;SVGString+=' L 0 '+height+' Z';return SVGString}
    function draw(){var now=window.Date.now();if(lastUpdate){var elapsed=(now-lastUpdate)/1000;lastUpdate=now;totalTime+=elapsed;var factor=totalTime*Math.PI;TweenMax.to(wave,settings.speed,{attr:{d:drawPath(drawPoints(factor))},ease:Power1.easeInOut})}else{lastUpdate=now}
        requestAnimationFrame(draw)}
    function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){timeout=null;if(!immediate)func.apply(context,args)},wait);if(immediate&&!timeout)func.apply(context,args)}}
    var redraw=debounce(function(){wave.attr('d','');points=[];totalTime=0;width=$(settings.container).width();height=$(settings.container).height();lastUpdate=!1;setTimeout(function(){draw()},50)},250);$(window).on('resize',redraw);return draw()}}(jQuery))

}
/*
     FILE ARCHIVED ON 10:35:35 Nov 30, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:05:41 Sep 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.632
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.009
  cdx.remote: 22.109
  LoadShardBlock: 70.94 (3)
  PetaboxLoader3.datanode: 88.0 (6)
  PetaboxLoader3.resolve: 85.983 (3)
  load_resource: 115.171 (2)
  loaddict: 21.859
*/