function fetchData(){
    fetch('https://dummyjson.com/quotes/?limit=2')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        document.getElementById("response").innerHTML=JSON.stringify(data, null, 2)
    })
}