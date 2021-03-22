$("img").click(function(){
    console.log("alt-pic is",$(this).attr('alt-pic'));
    $(this).attr("src",$(this).attr('alt-pic'));
});