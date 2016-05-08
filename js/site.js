$(document).ready(function() {
  console.log("ready");

//tab 1
$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
         console.log("tab clicked");
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


$(document).ready(function() {
    $(".tabs-menu2 a").click(function(event) {
         console.log("tab clicked");
        event.preventDefault();
        $(this).parent().addClass("current2");
        $(this).parent().siblings().removeClass("current2");
        var tab = $(this).attr("href");
        $("div#tab-3").not(tab).css("display", "none");
        $(tab).fadeIn();
        var tab = $(this).attr("href");
        $("div#tab-4").not(tab).css("display", "none");
        $(tab).fadeIn();
      
    });
});

}); //end