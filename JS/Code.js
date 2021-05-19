function goToPage2(){
    document.location.href = 'HTML/After_order.html';
}
function goToPage()
{
    var finish = document.getElementById("inf");
    var start = document.getElementById("ins");
    if(start.value != "" && finish.value != "" && start.value != "Откуда" && finish.value != "Куда" && start.value != "Введите значение" && finish.value != "Введите значение"){
        setTimeout(goToPage2,1000)
    }
    else if(start.value == "" || start.value == "Откуда"){
        start.style.color = "red";
        start.value = "Введите значение";
    }
    else{
        finish.style.color = "red";
        finish.value = "Введите значение";
    }
}
function carPush(str){
    var car = document.getElementById('c1');
    car.style.background = "white";
    var car = document.getElementById('c2');
    car.style.background = "white";
    var car = document.getElementById('c3');
    car.style.background = "white";
    var car = document.getElementById('c4');
    car.style.background = "white";
    var elem = document.getElementById(str);
    elem.style.background = "linear-gradient(180deg, rgba(186,186,186,1) 0%, rgba(216,216,216,1) 35%, rgba(241,240,240,1) 100%)";
}
function delete_text(id){
    var elem = document.getElementById(id);
    if(elem.value == "Откуда" || elem.value == "Куда" || elem.value == "Введите значение" || elem.value == "Введите значение"){
        elem.value = "";
        elem.style.color = "black";
    }
}
function delete_button(id){
    var elem = document.getElementById(id);
    elem.value = "";
    elem.style.color = "black";
}