//ajax function
function  ajaxfun(){
    // create xhr object
    var xml= new XMLHttpRequest();
    //the function with 3 parameter
    xml.open("GET",'https://dummyjson.com/recipes/?limit=2',true);

    //the function called when an xhr transaction completed
    xml.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            document.getElementById("Ajaxid").innerHTML= "AJAX Response";
            document.getElementById("response").innerHTML=this.responseText;
        }
    }

    //the function that sends the request
    xml.send();
}

//fetch api function
function fetchApi(){
    //using fetch function call the api
    fetch('https://dummyjson.com/quotes/?limit=2')
    .then((res)=>{
        //get response
        return res.json();
    }).then((data)=>{
        //update response from API to html file
        document.getElementById("fetchid").innerHTML="Fetch API DATA"
        document.getElementById("result").innerHTML=JSON.stringify(data, null, 2)
    })
   
}
