let a = document.getElementById("title");

function change (elem, text){
    elem.innerHTML = text;
}

setTimeout(function(){
    change(a,"hello")
}, 5000);