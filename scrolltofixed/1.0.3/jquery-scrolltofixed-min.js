(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var l=this;l.$el=a(d);l.el=d;l.$el.data("ScrollToFixed",l);var c=false;var F=l.$el;var G;var D;var e;var C=0;var q=0;var j=-1;var f=-1;var t=null;var y;var g;function u(){F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed");f=-1;C=F.offset().top;q=F.offset().left;if(l.options.offsets){q+=(F.offset().left-F.position().left)}if(j==-1){j=q}G=F.css("position");c=true;if(l.options.bottom!=-1){F.trigger("preFixed.ScrollToFixed");w();F.trigger("fixed.ScrollToFixed")}}function n(){var H=l.options.limit;if(!H){return 0}if(typeof(H)==="function"){return H.apply(F)}return H}function p(){return G==="fixed"}function x(){return G==="absolute"}function h(){return !(p()||x())}function w(){if(!p()){t.css({display:F.css("display"),width:F.outerWidth(true),height:F.outerHeight(true),"float":F.css("float")});cssOptions={position:"fixed",top:l.options.bottom==-1?s():"",bottom:l.options.bottom==-1?"":l.options.bottom,"margin-left":"0px"};if(!l.options.dontSetWidth){cssOptions.width=F.width()}F.css(cssOptions);F.addClass(l.options.baseClassName);if(l.options.className){F.addClass(l.options.className)}G="fixed"}}function b(){var I=n();var H=q;if(l.options.removeOffsets){H="";I=I-C}cssOptions={position:"absolute",top:I,left:H,"margin-left":"0px",bottom:""};if(!l.options.dontSetWidth){cssOptions.width=F.width()}F.css(cssOptions);G="absolute"}function k(){if(!h()){f=-1;t.css("display","none");F.css({width:"",position:D,left:"",top:e,"margin-left":""});F.removeClass("scroll-to-fixed-fixed");if(l.options.className){F.removeClass(l.options.className)}G=null}}function v(H){if(H!=f){F.css("left",q-H);f=H}}function s(){var H=l.options.marginTop;if(!H){return 0}if(typeof(H)==="function"){return H.apply(F)}return H}function z(){if(!a.isScrollToFixed(F)){return}var J=c;if(!c){u()}var H=a(window).scrollLeft();var K=a(window).scrollTop();var I=n();if(l.options.minWidth&&a(window).width()<l.options.minWidth){if(!h()||!J){o();F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed")}}else{if(l.options.maxWidth&&a(window).width()>l.options.maxWidth){if(!h()||!J){o();F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed")}}else{if(l.options.bottom==-1){if(I>0&&K>=I-s()){if(!x()||!J){o();F.trigger("preAbsolute.ScrollToFixed");b();F.trigger("unfixed.ScrollToFixed")}}else{if(K>=C-s()){if(!p()||!J){o();F.trigger("preFixed.ScrollToFixed");w();f=-1;F.trigger("fixed.ScrollToFixed")}v(H)}else{if(!h()||!J){o();F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed")}}}}else{if(I>0){if(K+a(window).height()-F.outerHeight(true)>=I-(s()||-m())){if(p()){o();F.trigger("preUnfixed.ScrollToFixed");if(D==="absolute"){b()}else{k()}F.trigger("unfixed.ScrollToFixed")}}else{if(!p()){o();F.trigger("preFixed.ScrollToFixed");w()}v(H);F.trigger("fixed.ScrollToFixed")}}else{v(H)}}}}}function m(){if(!l.options.bottom){return 0}return l.options.bottom}function o(){var H=F.css("position");if(H=="absolute"){F.trigger("postAbsolute.ScrollToFixed")}else{if(H=="fixed"){F.trigger("postFixed.ScrollToFixed")}else{F.trigger("postUnfixed.ScrollToFixed")}}}var B=function(H){if(F.is(":visible")){c=false;z()}};var E=function(H){z()};var A=function(){var I=document.body;if(document.createElement&&I&&I.appendChild&&I.removeChild){var K=document.createElement("div");if(!K.getBoundingClientRect){return null}K.innerHTML="x";K.style.cssText="position:fixed;top:100px;";I.appendChild(K);var L=I.style.height,M=I.scrollTop;I.style.height="3000px";I.scrollTop=500;var H=K.getBoundingClientRect().top;I.style.height=L;var J=(H===100);I.removeChild(K);I.scrollTop=M;return J}return null};var r=function(H){H=H||window.event;if(H.preventDefault){H.preventDefault()}H.returnValue=false};l.init=function(){l.options=a.extend({},a.ScrollToFixed.defaultOptions,i);l.$el.css("z-index",l.options.zIndex);t=a("<div />");G=F.css("position");D=F.css("position");e=F.css("top");if(h()){l.$el.after(t)}a(window).bind("resize.ScrollToFixed",B);a(window).bind("scroll.ScrollToFixed",E);if(l.options.preFixed){F.bind("preFixed.ScrollToFixed",l.options.preFixed)}if(l.options.postFixed){F.bind("postFixed.ScrollToFixed",l.options.postFixed)}if(l.options.preUnfixed){F.bind("preUnfixed.ScrollToFixed",l.options.preUnfixed)}if(l.options.postUnfixed){F.bind("postUnfixed.ScrollToFixed",l.options.postUnfixed)}if(l.options.preAbsolute){F.bind("preAbsolute.ScrollToFixed",l.options.preAbsolute)}if(l.options.postAbsolute){F.bind("postAbsolute.ScrollToFixed",l.options.postAbsolute)}if(l.options.fixed){F.bind("fixed.ScrollToFixed",l.options.fixed)}if(l.options.unfixed){F.bind("unfixed.ScrollToFixed",l.options.unfixed)}if(l.options.spacerClass){t.addClass(l.options.spacerClass)}F.bind("resize.ScrollToFixed",function(){t.height(F.height())});F.bind("scroll.ScrollToFixed",function(){F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed");z()});F.bind("detach.ScrollToFixed",function(H){r(H);F.trigger("preUnfixed.ScrollToFixed");k();F.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",B);a(window).unbind("scroll.ScrollToFixed",E);F.unbind(".ScrollToFixed");t.remove();l.$el.removeData("ScrollToFixed")});B()};l.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);