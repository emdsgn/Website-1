/* ---------TEAM IMAGES---------*/  
    
    jQuery(".team_image_holder").live("mouseenter",function(){jQuery(this).find(".image_holder_hover").stop(true,true).fadeIn("slow")}).live("mouseleave",function(){$(this).find(".image_holder_hover").stop(true,true).fadeOut()});
      
    var previously_clicked  = null;
    jQuery('.og-grid li').click(function(){
      responsive_viewport = jQuery('body').width() ;  
      //alert("has class" + main_width + " -- " +  jQuery(this).index()); 
      if(jQuery(this).hasClass('active')) {
       // alert("has class");
        // if has the class active close the box - works then cliking the same item
           jQuery(this).removeClass("active");         
           jQuery(this).find('.image_holder_active').fadeOut("slow");
           jQuery(".baffer").animate({'margin-bottom':0},200,function(){
            jQuery(".baffer").remove(); 
           });
          jQuery(this).find('.team_text_holder').fadeOut(10);
        
        }
        else {
          // if another box is open close it and then open a new one
          jQuery(".active").removeClass("active");                        
           jQuery('.image_holder_active').not(this).fadeOut("slow");          
           //alert(text_height);
          jQuery('.og-grid li').not(this).find('.team_text_holder').fadeOut(10);
          
           jQuery(".baffer").animate({'margin-bottom':0},200);
           
          jQuery(".baffer").delay(300).remove(); 
                    
          jQuery(this).addClass("active");
          
          
          
            //alert("function working");
          var NewContent="<div class='baffer'></div>";
          // check what box is open to apply the buffer div
          if (responsive_viewport < 300) {
              jQuery(this).after(NewContent);           
          } /* end smallest screen */
          
          /* if is larger than 481px */
          if (responsive_viewport > 300 && responsive_viewport < 740) {
            if ( jQuery(this).index()== 1 || jQuery(this).index()== 3 || jQuery(this).index()== 5){
              
                jQuery(this).delay(300).next().after(NewContent);
            }else{
              //alert("2 clicded");
              jQuery(this).delay(300).after(NewContent);
            }
          } /* end larger than 481px */
          
          /* if is above or equal to 768px */
          if (responsive_viewport >= 740 && responsive_viewport < 1030) {
            if ( jQuery(this).index()== 0 || jQuery(this).index()== 2 || jQuery(this).index()== 3 || jQuery(this).index()== 4 || jQuery(this).index()== 5){
              //alert("1 clicded");
              if ( jQuery(this).index()== 0 || jQuery(this).index()== 5){
                jQuery(this).delay(300).next().after(NewContent);
              }else{
                jQuery(".og-grid li").eq(4).after(NewContent);
              }
            }else{
              //alert("2 clicded");
              jQuery(this).delay(300).after(NewContent);
            }
          }
          
          if (responsive_viewport >= 1030 ) {
            if ( jQuery(this).index()== 0 || jQuery(this).index()== 1 || jQuery(this).index()== 2 ){
              //alert("1 clicded");
              if ( jQuery(this).index()== 0 || jQuery(this).index()== 1){
                jQuery(".og-grid li").eq(2).delay(300).after(NewContent);               
              }else{
                jQuery(this).delay(5000).after(NewContent);
              }
            }else{
              //alert("2 clicded");
              if ( jQuery(this).index()== 3 || jQuery(this).index()== 4 || jQuery(this).index()== 5){
                jQuery(".og-grid li").eq(6).after(NewContent);                
              }else{
                jQuery(this).delay(5000).after(NewContent);
              }
            }
          } 
          
          
          /*close the bio*/
          jQuery('.team_text_holder').not(this).fadeOut("fast");
          
          text_height = jQuery(this).find(".team_text_holder").height();
          jQuery(".baffer").animate({'margin-bottom':text_height+30},400);          
          jQuery(this).find('.image_holder_active').fadeIn("slow");
          jQuery(this).find('.team_text_holder').fadeIn("slow");
          previously_clicked = jQuery(this).index(); 
        
        }
    });
    
    
    function resize_team_secition()
    {
      main_width = jQuery('#inner-content').width() ;     
      new_main_width = jQuery('body').width() ;
      //alert("running - main" + main_width + " - new - " + new_main_width + "- old- " + old_main_width);
      

      if ( (old_main_width < 460 && new_main_width < 460) || (old_main_width > 460 && new_main_width > 460 && old_main_width < 760 && new_main_width < 760) || (old_main_width > 760 && new_main_width > 760 && old_main_width < 1030 && new_main_width < 1030) || (old_main_width > 1030 && new_main_width > 1030)){
        
      }else{        
       if (jQuery('.baffer').length > 0){
          jQuery(".active").find('.image_holder_active').fadeOut(100);
          jQuery(".active").find('.team_text_holder').slideUp(100);         
          jQuery(".active").removeClass("active");
          jQuery(".baffer").animate({'margin-bottom':0},200,function(){
          jQuery(".baffer").remove(); 
          });
        } 
      }
      old_main_width = new_main_width;
    }/*end of function resize */