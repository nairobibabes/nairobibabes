!function(e){var t="meta[name=viewport]",i="user_viewport_setting",s="mobile",n=s;"undefined"==typeof EdgeCms&&(EdgeCms={}),EdgeCms.ViewportUserSettings={construct:function(){this.getViewportSetting(),this.applyViewportSetting()},applyViewportSetting:function(){"mobile"==n?e(t).attr("content","width=device-width, initial-scale=1, user-scalable=1, minimum-scale=0.5, maximum-scale=5  user-scalable=yes"):e(t).attr("content","width=device-width, initial-scale=0.5, user-scalable=1, minimum-scale=0.1, maximum-scale=0.5  user-scalable=yes")},getViewportSetting:function(){void 0===(n=e.cookie(i))&&(n=s,e.cookie(i,n,{expires:30,path:"/"}))}},e(e.proxy(EdgeCms.ViewportUserSettings.construct,EdgeCms.ViewportUserSettings))}(jQuery);