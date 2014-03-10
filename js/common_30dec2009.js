/* START TOOLTIP */
/*
 * 	Easy Tooltip 1.0 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4380/easy-tooltip--jquery-plugin
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
(function($) {

	$.fn.easyTooltip = function(options){
	  
		// default configuration properties
		var defaults = {	
			xOffset: 10,		
			yOffset: 25,
			tooltipId: "easyTooltip",
			clickRemove: false,
			content: "",
			useElement: ""
		}; 
			
		var options = $.extend(defaults, options);  
		var content;
				
		this.each(function() {  				
			var title = $(this).attr("title");				
			$(this).hover(function(e){											 							   
				content = (options.content != "") ? options.content : title;
				content = (options.useElement != "") ? $("#" + options.useElement).html() : content;
				$(this).attr("title","");									  				
				if (content != "" && content != undefined){			
					$("body").append("<div id='"+ options.tooltipId +"'>"+ content +"</div>");		
					$("#" + options.tooltipId)
						.css("position","absolute")
						.css("top",(e.pageY - options.yOffset) + "px")
						.css("left",(e.pageX + options.xOffset) + "px")						
						.css("display","none")
						.fadeIn("fast")
				}
			},
			function(){	
				$("#" + options.tooltipId).remove();
				$(this).attr("title",title);
			});	
			$(this).mousemove(function(e){
				$("#" + options.tooltipId)
					.css("top",(e.pageY - options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px")					
			});	
			if(options.clickRemove){
				$(this).mousedown(function(e){
					$("#" + options.tooltipId).remove();
					$(this).attr("title",title);
				});				
			}
		});
	  
	};

})(jQuery);
/* END TOOLTIP */



$(document).ready(function(){

	function logoHover()
	{
		$("#logo a").focus(function(e){
			$("#logo a img").addClass("logohover");
		}).blur(function(e){
			$("#logo a img").removeClass("logohover");
		});
	}
	logoHover();
	
	function skipNavs()
	{
		$("#skippies a").addClass("hidden");
		$("#skippies a").focus(function(e)
		{
			$(this).attr("class","visible");
		}).blur(function(e)
			{
				$(this).attr("class","hidden");
			});
	}
	skipNavs();
	
	function searchDefaultText()
	{
		$("input#txtSearch").attr("value","Search with Google");
		$("input#s").attr("value","Search blog/news entries");
		$("input#txtSearch, input#s").focus(function(e){
			$("input#txtSearch, input#s").attr("value","");
			});
	}
	searchDefaultText();
	
	function suppressHelperText()
	{
		$("div.helper:first").parent().prepend("<div id=\"helper-text-suppressed-hint\" title=\"There is some help available for this page that you previously chose to hide. Click here to show it again temporarily ... \"><a href=\"#\">About this page ...</a></div>");
		$("div.helper:first").slideUp("fast");
		$(".help-tip-link").hide();
		$("#helper-text-suppressed-hint a").click(function(){
			showHiddenHelpText();
			return false;
		});
	}
	function showHiddenHelpText()
	{
		$("div.helper").addClass("pagehelp_loaded");
		$("div.helper:first").slideDown("fast");
		$("#helper-text-suppressed-hint").fadeOut("medium");
	}
	function flashHighlight(el,no)
	{
		no=parseInt(no);
		for (i=0;i<no;i++)
		{
			el.fadeTo("slow",0.8).fadeTo("slow",1);	
		}
	}
	function showLabelsFor()
	{
		var forAttrib;
		$("label[for]").mouseover(function(){
			$(this).addClass("labelHighlight");
			$(this).css("cursor","pointer");
			forAttrib = $(this).attr("for");
			$("*[id=" + forAttrib+ "]").addClass("labelHighlight");
		}).mouseout(function(){
			$(this).removeClass("labelHighlight");
			forAttrib = $(this).attr("for");
			$("*[id=" + forAttrib+ "]").removeClass("labelHighlight");
		});
	}

	function selectGeneratedCode()
	{
		$(".generated-code, .generated-markup, textarea.raw").focus(function(e){
			this.select();
		});
	}
	selectGeneratedCode();
	
	function bookBadgeFocus()
	{
		$("div#bookbadges div a").focus(function(e){
			$(this).parent().css("border","1px solid white");
		}).blur(function(e){
			$(this).parent().css("border","1px solid gray");
		});
	}
	bookBadgeFocus();
	
	$("#jsToolWarning").hide();
	showLabelsFor();
	
	function setUpNavBehaviour()
	{
		$("#primarynavigation ul li ul").addClass("subNavBackground");
		$("#primarynavigation ul li ul").hide();
		$("#primarynavigation>ul>li>a").mouseover(function(e){
//			hideMainNavSubItems();
			$(this).addClass("hover");
		}).focus(function(e){
//			hideMainNavSubItems();
			$(this).addClass("hover");
		});
		$("#primarynavigation>ul>li>ul>li>a").mouseover(function(e){
			$(this).parent().parent().prev().addClass("hover");
		}).focus(function(e){
			$(this).parent().parent().prev().addClass("hover");
		});
		$("#primarynavigation>ul>li>ul>li>a").mouseout(function(e){
			$(this).parent().parent().prev().removeClass("hover");
		}).blur(function(e){
			$(this).parent().parent().prev().removeClass("hover");
		});
		$("#primarynavigation>ul>li>a").mouseout(function(e){
			$(this).removeClass("hover");
		}).blur(function(e){
			$(this).removeClass("hover");
		});
		$("a[id=skip-content]").focus(function(e){
			//for when you've tabbed off navigation to next item on page
//			hideMainNavSubItems();
		});
		$("#primarynavigation>ul>li:has(ul) a").focus(function(e){
			$(this).next().slideDown('fast');
		});
		$("body").click(function(e){
//			hideMainNavSubItems();
		})
		$("a[id^=skip-]").focus(function(e){
			this.style.border="none";
			this.style.textDecoration="none";
		});
		var url = location.href;
		if (url.indexOf("/news/")!=-1) 				{$("li#nav-news>a").addClass("current")};
		if (url.indexOf("/tools-and-wizards/")!=-1) {$("li#nav-tools>a").addClass("current")};
		if (url.indexOf("/screencasts/")!=-1) 		{$("li#nav-screencasts>a").addClass("current")};
		if (url.indexOf("/wiki/")!=-1) 				{$("li#nav-wiki>a").addClass("current")};
		if (url.indexOf("/features/")!=-1) 			{$("li#nav-features>a").addClass("current")};
		
	}
	setUpNavBehaviour();
	
	function hideArchivedContent()
	{
		$(".archived-content *").hide();
		$(".archived-content").prepend("<p><a href='#'>Show additional archived content (which may no longer be up-to-date).</a></p>");
		$(".archived-content p a").click(function(e){
			$(".archived-content *").show();
			flashHighlight($(".archived-content *"),"2");
			$(".archived-content>p").slideUp('fast');
			$(".archived-content").removeClass("archived-content");
			return false;
		});
	}
	hideArchivedContent();
	
	function externalLinks()
	{
		$("#maincontent a[href^='http://']").filter(":not('a.hideHelperLink')").each(function(){
			var thisLinkInternal = false;
			if ((this.href.indexOf("http://2008.accessify/")==0)||(this.href.indexOf("http://acc/")==0)||(this.href.indexOf("http://dev.accessify.com/")==0)||(this.href.indexOf("http://accessify.com/")==0)||(this.href.indexOf("http://www.accessify.com/")==0))
				{
				thisLinkInternal=true;
				}
			if (!thisLinkInternal)
				{
				$(this).addClass("external").attr("title","This link will open in a new window (destination:" + this.href + ")").attr("target","_blank");
				}
		});
		$("#maincontent .commentby a").each(function(){
			$(this).removeClass("external");
			var link = $(this).attr("href");
			$(this).parent().parent().addClass("commentbox");
			$(this).parent().parent().click(function(){
				location.href = link;
			});
		});
	}
	externalLinks();
	
	function addCurves()
	{
	$("#categories_list li ul li a, #footer-nav a, .buttonstrip, #archive_footer, textarea, div.meta, #blog_search, #commentlist li, .commentby, .commentby img, .comment_datetime, div.post_date, #archive_footer h3 a").css("-moz-border-radius","0.2em").css("-webkit-border-radius","0.4em");
	}
	addCurves();
	
	function blogTidyUps()
	{
	$("#blog_search form").hide();
	$("#archives_list").hide();
	$("#categories_list li ul").hide();
	$("#blog_search a").click(function(){
		$("#blog_search form").slideToggle('fast');
		return false;
	}).focus(function(){
		$(this).addClass("focussed");
	}).blur(function(){
		$(this).removeClass("focussed");
	});
	$("#categories_list_trigger").click(function(){
		$("#categories_list li ul").slideToggle('fast');
		return false;
	});
	$("#archives_list_trigger").click(function(){
		$("#archives_list").slideToggle('fast');
		return false;
	});
	}
	blogTidyUps();
	
	function wikiTidyUps()
	{
		$("a.idx_dir, a.wikilink1").each(function(){
			$(this).html($(this).html().replace(/-/g," "));
		});
	}
	wikiTidyUps();

	function addAriaAttributes()
	{
		//landmark roles
		$("#searcharea form, #blog_search").attr("role","search");
		$(".storycontent, #commentlist li").attr("role","article");
		$("#logo").attr("role","banner");
		$("#skippies, #primarynavigation, #categories_list, #archive_footer").attr("role","navigation");
		$("#about-site-links").attr("role","contentinfo");
		//required fields
		//$("#author, #url").attr("aria-required","true");
	}
	addAriaAttributes();

	$(".showtooltip").easyTooltip();
	
});


function writeCookie(name, value, hours)
{
  var expire = "";
  if(hours != null)
  {
    expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  var strCookie = name + "=" + escape(value) + expire + "; path=/";
//  alert(strCookie);
  document.cookie = strCookie;
}
function readCookie(name)
{
  var cookieValue = "";
  var search = name + "=";
  if(document.cookie.length > 0)
  { 
    offset = document.cookie.indexOf(search);
    if (offset != -1)
    { 
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = unescape(document.cookie.substring(offset, end))
    }
  }
  return cookieValue;
}

