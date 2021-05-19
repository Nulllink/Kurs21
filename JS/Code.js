function goToPage2(){
    document.location.href = 'HTML/After_order.html';
}
function goToPage()
{
    var elem = document.getElementById("inf");
    if(elem.value != ""){
        setTimeout(goToPage2,1000)
    }
    else{
        elem.style.color = "red";
        elem.value = "Введите значение";
    }
}
function carPush(str){
    var car = document.getElementById('c1');
    car.style.backgroundColor = "white";
    var car = document.getElementById('c2');
    car.style.backgroundColor = "white";
    var car = document.getElementById('c3');
    car.style.backgroundColor = "white";
    var car = document.getElementById('c4');
    car.style.backgroundColor = "white";
    var elem = document.getElementById(str);
    elem.style.backgroundColor = "orange";
}