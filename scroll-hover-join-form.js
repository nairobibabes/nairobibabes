"use strict";!function(o){var n=".hover-join",e=".hover-join .join-option",i=".hover-join h4",t="killedJoinFormOnScroll";"undefined"==typeof EdgeCms&&(EdgeCms={}),EdgeCms.HoverJoinForm={shouldShow:!0,construct:function(){this.attachEvents(),this.shouldShow="yes"!=o.cookie(t)},attachEvents:function(){o(e).on("click ontouchend",this.promptForUsernameAndPassword.bind(this)),o(".hover-join .close-btn").on("click ontouchend",this.closeForm.bind(this)),o(window).scroll(this.displayForm.bind(this))},promptForUsernameAndPassword:function(n){"Loading your selection..."!=o(i).html()&&o(i).slideUp(300,function(){o(i).html("Loading your selection..."),o(i).slideDown(300)}),o(e).each(function(e,i){i!=n.currentTarget?o(i).fadeTo(300,.3):(o(i).find('input[type="radio"]').prop("checked",!0),o(i).fadeTo(0,1))}),EdgeCms.JoinFormUsernamePrompt.promptForUsernameAndPassword(n,this)},submitForm:function(n){o(".hover-join-form").submit()},closeForm:function(e){o(n).fadeOut(),o.cookie(t,"yes",{expires:7,path:"/"}),e.preventDefault()},clearForm:function(){o(n).fadeOut()},displayForm:function(){this.shouldShow&&o(window).scrollTop()>1500&&o(window).width()>779&&(o(n).fadeIn(),this.shouldShow=!1)}},EdgeCms.HoverJoinForm.construct()}(jQuery);