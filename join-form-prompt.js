"use strict";!function(n){var t="#promptUsernameModal",e=t+" .btn-success",i=t+' [name="email"]',o=t+' [name="password"]';void 0===window.EdgeCms&&(window.EdgeCms={}),EdgeCms.JoinFormUsernamePrompt={joinForm:!1,joinEvent:!1,joinIsAlternateBiller:!1,csrf:null,construct:function(){this.csrf=n('#promptUsernameModal [name="csrf-token"]').val(),this.attachEvents()},attachEvents:function(){n(e).on("click ontouchend",this.continueJoinProcessing.bind(this)),n('#promptUsernameModal [data-dismiss="modal"]').on("click ontouchend",this.closeDialog.bind(this)),n(".additional-payment-options a").on("click ontouchend",this.promptForAlternateBillingUsernameAndPassword.bind(this)),n(i).keyup(this.submitOnEnterKey.bind(this)),n(o).keyup(this.submitOnEnterKey.bind(this))},submitOnEnterKey:function(t){13===t.keyCode&&n(e).click()},validateFields:function(t,e){var s=n(i).val(),a=n(o).val(),r=function(t){n("#promptUsernameModal div.modal-body p").html("<strong>"+t+"</strong>").addClass("text-danger"),"function"==typeof e&&e()};if(0==/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(s))return r("Please type a valid email, which will be your username."),!1;if(1==/\|/i.test(a))return r("Please ensure your password does not contain a pipe '|' character."),!1;if(a.length<7)return r("Please ensure your password is at least seven characters long."),!1;if(a.length>50)return r("Please ensure your password is at less than fifty characters long."),!1;for(var l=["password","1234567","sunshine","qwerty","iloveyou","admin","welcome"],m=0;m<l.length;m++)if(0!=new RegExp(".*"+l[m]+".*","i").test(a))return r("Please do not use the word '"+l[m]+"' in your password."),!1;return this.checkIfUsernameIsTaken(t,function(){r("This e-mail is already in use. Please use another, or <a href='/login'>login</a> with your account.")}),!0},checkIfUsernameIsTaken:function(t,e){var o={email:n(i).val(),"csrf-token":this.csrf};n.post("/join/verifyEmail",o,function(n){if(n=jQuery.parseJSON(n),EdgeCms.JoinFormUsernamePrompt.csrf=n.csrf,n.hasOwnProperty("inUse"))var i=n.inUse;"function"==typeof t&&0==i&&t(),"function"==typeof e&&1==i&&e()})},continueJoinProcessing:function(){n(e).html("Loading...");var t=this.joinIsAlternateBiller?this.submitAlternateBilling:this.submitJoinForm;this.validateFields(t.bind(this),function(){n(e).html("Continue")})},promptForAlternateBillingUsernameAndPassword:function(e){e.preventDefault(),this.joinIsAlternateBiller=!0,this.joinEvent=e,n(t).modal({backdrop:"static"})},submitJoinForm:function(){this.loadUserPassIntoJoinForm(),"function"==typeof this.joinEvent.target.submit&&this.joinEvent.target.submit(),"function"==typeof this.joinForm.submitForm&&this.joinForm.submitForm()},submitAlternateBilling:function(){var t=n(this.joinEvent.target).attr("href");t=t+"&username="+n(i).val()+"&email="+n(i).val()+"&pass="+n(o).val(),window.location.href=t},loadUserPassIntoJoinForm:function(){var t=n(this.joinEvent.target).find("input[name=email]"),e=n(this.joinEvent.target).find("input[name=pass]");0==t.length&&(t=n(this.joinEvent.target).parents("form").find("input[name=email]"),e=n(this.joinEvent.target).parents("form").find("input[name=pass]"));var s=n(i).val(),a=n(o).val();t.val(s),e.val(a)},promptForUsernameAndPassword:function(e,o){e.preventDefault(),this.joinIsAlternateBiller=!1,this.joinEvent=e,this.joinForm=o,n(t).modal({backdrop:"static"}),n(i).focus()},closeDialog:function(){"function"==typeof this.joinForm.clearForm&&this.joinForm.clearForm()}},EdgeCms.JoinFormUsernamePrompt.construct()}(jQuery);