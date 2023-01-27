var key;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

if(document.getElementById("title").getAttribute('title') === "index"){
    
    function getKey(){
        key=document.forms["search-box"]["key"].value;
        key=key.trim().toLowerCase();
        document.write(serpPage);
        var x="";
        var results=``;
        if(key != ""){
            var data=JSON.parse(database);
            var len = Object.keys(data).length;
            for(let i=0 ; i<len ; ++i){
                x=data[i].course;
                x=x.toLowerCase();
                if(x.includes(key) || key.includes(x)){
                    results+="<p class='result' value='sam' index='"+i+"' > <b>"+capitalizeFirstLetter(data[i].course)+"/"+capitalizeFirstLetter(data[i].provider)+"</b></p>";
                    results+='\n';
                }
            }

            if(results != ``){ 
                document.getElementById('results').innerHTML=results;
            }else{
                document.getElementById('results').innerHTML="Sorry!! no resuls found";
            }
        }else{
            document.getElementById('results').innerHTML="enter valid search key!!";
        }
    }
}

if(document.getElementById("title").getAttribute('title') === "serp"){
    data=JSON.parse(database);
    t=document.getElementsByClassName('result');
    for(var i=0 ; i<t.length ; ++i){
        t[i].addEventListener('click',onClick,false);
    }
    
    function onClick(indexx){
        data=JSON.parse(database);
        var indexStr = indexx;
        var index = parseInt(indexStr);
        var s=data[index].course+"  "+data[index].provider+"   "+data[index].description;
        document.write(s);
    }
}

// if(document.getElementById("title").title === "course"){

// }