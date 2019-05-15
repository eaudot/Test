// console.log('Hello world')
// alert("Bienvenue")
//
var form = document.getElementById('form');
form.addEventListener('submit',function(e){
    alert('Formulaire envoyé')
});
form.addEventListener('reset', function(e){
    alert('Le formulaire a été réinitialisé')
});
var list = document.getElementById('list');

list.addEventListener('change',function()){
    alert(list.options[list.selectedIndex].innerHTML)
});