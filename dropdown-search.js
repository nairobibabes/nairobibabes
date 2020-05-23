"use strict";!function(e){"undefined"==typeof EdgeCms&&(window.EdgeCms={}),EdgeCms.SearchDropdown={$container:null,$loadingIcon:null,$searchButton:null,$searchInput:null,$searchResults:null,performSearchTimeout:null,construct:function(){this.attachObjects(),this.attachEvents()},attachObjects:function(){this.$container=e("#navSearchDropdown"),this.$searchInput=e("#navSearchDropdownInput"),this.$searchButton=e("#navSearchIcon"),this.$searchResults=e("#navSearchResults"),this.$loadingIcon=this.$container.find(".icon-refresh")},attachEvents:function(){this.$searchInput.on("keyup click ontouchend",this.onInput.bind(this))},onInput:function(e){var t=this.$searchInput.val();t.length<3||(this.$searchButton.hide(),this.$loadingIcon.show(),null!==this.performSearchTimeout&&clearTimeout(this.performSearchTimeout),this.performSearchTimeout=setTimeout(this.performSearch.bind(this,t),500))},performSearch:function(t){null!==this.performSearchTimeout&&(clearTimeout(this.performSearchTimeout),this.performSearchTimeout=null),"string"!=typeof t||t.length<3||e.getJSON("/search/quickSearch/"+t,this.searchResponse.bind(this))},searchResponse:function(e){this.$searchResults.empty(),this.$searchButton.show(),this.$loadingIcon.hide();var t=this;e.forEach(function(e){t.addResultGroup(e)}),this.$searchResults.show()},addResultGroup:function(t){var s=e("<div>",{class:"result-group"}),n=e("<div>",{class:"results-group-header"}),r=e("<a>",{href:"/search/video",text:"Try Advanced Search…"}),a=e("<div>",{class:"results-group-subheader"});if(n.html(t.groupTitle),t.moreLink.length>0){var i=e("<a>",{class:"btn btn-xs btn-primary",href:t.moreLink,text:"More…"});n.append(i)}s.append(n),a.append(r),s.append(a);var h=this;t.items.forEach(function(e){h.addResultItem(e,s,t.groupTitle.toLowerCase())}),this.$searchResults.append(s)},addResultItem:function(t,s,n){var r=e("<a>",{class:"result-item "+n,href:t.link}),a=e("<img>",{src:t.thumbnail}),i=e("<div>",{class:"result-description"}),h=e("<span>",{class:"title",text:t.title});if(r.append(a),i.append(h),t.featuring.length>0){var o="featuring: "+t.featuring.join(", "),c=e("<span>",{text:o,class:"featuring"});i.append(c)}r.append(i),s.append(r)}},EdgeCms.SearchDropdown.construct()}(jQuery);