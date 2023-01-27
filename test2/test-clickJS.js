t = document.getElementsByTagName('p');
for(var i=0 ; i<t.length ; ++i){
    t[i].addEventListener('click',onClick,false);
}
function onClick(ev){
    //var id = document.querySelector('p').getAttribute('value');
    document.write('hello ');
    //document.write(s);
    document.write(this.getAttribute('value'));
    var w=window.open("test-click.html");
    //w.document.writeln(this.getAttribute('value'));
}

//var s=document.querySelector('p').addEventListener('click',onClick);
//console.log(s);
//var s=document.getElementsByTagName('p').getAttribute("class");


// function doFirst(){
//     articles = document.getElementsByTagName('p');
//     for (var i = 0; i < articles.length; i++) {
//         articles[i].addEventListener('click',redirect(articles[i]),false);
//     }
//     }
    
// function redirect(e){
//     alert(e.id);
//     }
// window.addEventListener('load',doFirst,false);

// articles = document.getElementsByTagName('p');
// for (var i = 0; i < articles.length; i++) {
//     articles[i].addEventListener('click',redirect,false);
// }
// function redirect(ev){
//     alert(ev.target.id);
// }