//first api   
    var txtSearch = $("#txt-Search");
    var btnSearch = $("#btn-Search");
    var result = $("#result");

    btnSearch.click(function(e){
        e.preventDefault();
        result.empty();
        let searchFood = txtSearch.val()
        if(searchFood != ''){
            getData(searchFood);
        }else {
            alert("Plese type a name of food!")
        }
    })
    function getData(search){
        let myRequest =new XMLHttpRequest();
        myRequest.open("GET","https://foodish-api.herokuapp.com/api/images/"+search);
        myRequest.responseType="json";
        myRequest.onreadystatechange=function(){
            if (myRequest.readyState === 4) {
                var userData= myRequest.response;
                printData(userData);
            }
        };
        myRequest.send();
    }
    function printData(data) {
            var imageResult=document.createElement("img");
            imageResult.setAttribute("src",data.image);
            imageResult.setAttribute("class","pictures");
            result.append(imageResult); 
    }
//second api 
var btnRandom = $("#btn-Random"); 

    btnRandom.click(function(e){
        result.empty();
        e.preventDefault();
        getDataR();
    })
    function getDataR(){
        let myRequestR =new XMLHttpRequest();
        myRequestR.open("GET","https://foodish-api.herokuapp.com/api" );
        myRequestR.responseType="json";
        myRequestR.onreadystatechange=function(){
            if (myRequestR.readyState === 4) {
                var userDataR= myRequestR.response;
                printDataR(userDataR);
            }
        };
        myRequestR.send();
    }
    function printDataR(data) {
        var imageResultR=document.createElement("img");
        imageResultR.setAttribute("src",data.image);
        imageResultR.setAttribute("class","picturesRandom");
        result.append(imageResultR); 
}