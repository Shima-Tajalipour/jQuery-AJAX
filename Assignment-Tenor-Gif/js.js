    var txtSearch = $("#txt-Search");
    var btnSearch = $("#btn-Search");
    var result = $("#result");
    btnSearch.click(function(){
        var txt=txtSearch.val();
        getData(txt);
    })
    function getData(name){
        let myRequest =new XMLHttpRequest();
        myRequest.open("GET","https://g.tenor.com/v1/search?key=4LW63LS2Q7PK&q=" + name);
        myRequest.responseType="json";
        myRequest.onreadystatechange=function(){
            if (myRequest.readyState === 4) {
                var userData= myRequest.response;
                for (let i=0; i< 8; i++){
                    printData(userData.results[i]);
                    }
            }
        };
        myRequest.send();
    }
    function printData(data) {
            var imageResult=document.createElement("img");
            imageResult.setAttribute("src",data.media[0].gif.url);
            result.append(imageResult); 
    }