//$("p.para1").css("color","red");
//$("p.para1").css({color:"red",background:"#ccc"});
//$("p.para2").addClass("myClass");
//$("p.para2").removeClass("myClass");
//$("#btn1").click(function () {
 //   $("p.para2").toggleClass("myClass");
//});
//$("#myDiv").text("Hello World");
//$("#myDiv").html("<h3>Hello World</h3>");
//alert($("#myDiv").text());
/*
$("ul").append("<li>Append List Item</li>");
$("ul").prepend("<li>Prepend List Item</li>");
$(".para1").appendTo(".para2");
$(".para1").prependTo(".para2");
$("ul").before("<h4>Hello</h4>");
$("ul").after("<h4>World</h4>");
$("ul").empty();
$("ul").detach();
$("a").attr("target","_blank");
alert($("a").attr("href"));
$("a").removeAttr("target");
*/
//$("p").wrap("<h1>");
//$("p").wrapAll("<h1>");
$("#newItem").keyup(function(e){
    var code=e.which;
    if(code==13){
        e.preventDefault();
        $("ul").append("<li>"+e.target.value +"</li>");
    }
})
/*
var myArr=["Brad","Kelly","Nate","Jose"];
$.each(myArr,function (i,val) {
    $("#users").append("<li>"+val+"</li>");
});
*/
var newArr= $("ul#list li").toArray();
$.each(newArr,function (i,val) {
    console.log(val.innerHTML);
});