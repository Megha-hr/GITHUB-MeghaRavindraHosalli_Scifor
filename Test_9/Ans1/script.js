function sendrequest(){
    //create a xml object
let xml=new XMLHttpRequest();

// http get  request to get data from api 
xml.open("get","https://dummyjson.com/quotes/?limit=2",true);

//call function after getting response from api 
 xml.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){

        //update the url
     
        document.getElementById("respond").innerHTML=JSON.parse(this.responseText);

    }
}
xml.send();
}