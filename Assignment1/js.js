$("#fadeOut").click(function(){
    $("#para1").fadeOut(1000);
});
$("#fadeIn").click(function(){
    $("#para1").fadeIn(1000);
});
$("#hide").click(function(){
    $("#para2").hide();
});
$("#show").click(function(){
    $("#para2").show();
});
$("#tog").click(function(){
    $("#para2").toggle();
});
$("#bg-color").click(function(){
    $("#para3").css("background-color","blue");
})
$("#slidedown").click(function(){
    $("#para4").slideDown();
});
$("#slideup").click(function(){
    $("#para4").slideUp();
});
$("section").addClass("main");
$(".main").css("background-color","lightgray");
$("#append").click(function(){
    $("#para5").append("Hello World");
});
$("#txt").text("Hello World!");
$("#txt1").html("<h5>Hello World!</h5>");
$("#default").click(function(){
    $("#form-txt").val("Unknown");
});

