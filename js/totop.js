(function($) {
    
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    var upperLimit = 1000; 
        
    // Our scroll link element
    var scrollElem = $('#totop');
    
    // Scroll to top speed
    var scrollSpeed = 500;
    
    // Show and hide the scroll to top link based on scroll position    
    scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(document).scrollTop();        
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
        }else{        
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){ 
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false; 
    });

    $('a[href="https://www.xftsoft.com/"]').attr('target', '_blank');
    $('a[href="https://xftsoft.com/"]').attr('target', '_blank');
    $('a[href="https://www.kuxuanzhan.com/"]').attr('target', '_blank');
    $('a[href="https://dewangrong.com/"]').attr('target', '_blank');
    $('#asidepart').css({'zIndex': 999999});

    $.ajax({
        url:"/jsonp.html",
        dataType :'JSONP',
        jsonpCallback:"localhandler",
        contentType: "application/json;charset=utf-8",
        success: function (res) {
            $(".ourWxhao").text(res.Wechat).css({"color":'#333'});
            $(".ourQqhao").text(res.QQ).css({"color":'#333'});
        }
    });
})(jQuery);