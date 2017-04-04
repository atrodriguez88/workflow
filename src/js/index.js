var hello = require('./js.js'); 
hello('Juan');
//la variable str no es valida en este contexto
var $ = require('jquery'); 
$(function(){
    $("#demo").click(function(){        
        $("#demo").addClass("bg-black");
        alert("Hola mundo");
    });
});



