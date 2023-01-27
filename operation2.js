// var coursePage=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <div id="title" title="result"></div>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     Course:<div id="course"></div>
//     Provider:<div id="provider"></div>
//     description:<div id="description"></div>
// </body>
// </html>`;

data=JSON.parse(database);

function onClick(ev){
    var indexStr = this.getAttribute('index');
    var index = parseInt(indexStr);
    var s=data[index].course+"  "+data[index].provider+"   "+data[index].description+" ";

    document.open();
    document.write(coursePage);
    document.getElementById('course').innerHTML=data[index].course;
    document.getElementById('provider').innerHTML=data[index].provider;
    document.getElementById('last-edited').innerHTML=data[index].lastupdated;
    document.getElementById('description').innerHTML=data[index].description;
    document.getElementById('rating').innerHTML=data[index].rating;
    document.getElementById('last-updated').innerHTML=data[index].lastupdated;
    document.getElementById('language').innerHTML=data[index].language;
    document.getElementById('caption').innerHTML=data[index].caption;
    document.getElementById('price').innerHTML=data[index].price;
    document.getElementById('course-overview').innerHTML=data[index].courseoverview;
    document.close();
}

t=document.getElementsByClassName('result');
console.log(t.length);
for(var i=0 ; i<t.length ; ++i){
    t[i].addEventListener('click',onClick,false);
}
