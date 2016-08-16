var names=[];
var enteredName;
writeInArr();
enteredName=prompt('Для входа введите свое имя:','');
findInArr();
showMessage();
function writeInArr() {
for (var i = 0; i<5; i++) {
  names[i]=prompt('Введите имя:','');
}
}
function findInArr() {
   for (var i = 0; i < names.length; i++) {
    names[i];
    if(names[i] === enteredName){
    marker=true;//глобальная переменная :(
    break;
  }
 }
}
function showMessage() {
  if (window.marker === true){
  alert(enteredName+',вы успешно вошли!');
}
   else {
   alert('Неверно введено имя пользователя!!!');
 }
  }
