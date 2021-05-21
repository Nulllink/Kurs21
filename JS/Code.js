function order_onload(){
    var string = decodeURIComponent(location.search.substr(1)).split('&');
    string = string[1];
    string = string.split('$');
    document.getElementById("start").innerHTML = "Машина приедет к " + string[0];
    document.getElementById("finish").innerHTML = "Конечная точка маршрута: " + string[1];
    document.getElementById("price").innerHTML = "Стоимость поездки: " + string[2];
    document.getElementById("type").innerHTML = "Белый " + string[3] + " , номер К123РТ";
}
function goToPage2(){
    var finish = document.getElementById("inf");
    var start = document.getElementById("ins");
    var car;
    var car1 = document.getElementById("c1");
    var car2 = document.getElementById("c2");
    var car3 = document.getElementById("c3");
    var car4 = document.getElementById("c4");
    if(car1.style.background == "white"){
        if(car2.style.background == "white"){
            if(car3.style.background == "white"){
                if(car4.style.background == "white"){
                    car = car1;
                }
                else{car = car4;}
            }
            else{car = car3;}
        }
        else{car = car2;}
    }
    else{car = car1;}
    var arr = Array.from(document.getElementById(car.id).children);
    var type;
    if(arr[1].textContent == "Эконом"){
        type = "Volkswagen Polo";
    }
    else if(arr[1].textContent == "Комфорт"){
        type = "Ford Galaxy";
    }
    else if(arr[1].textContent == "Комфорт+"){
        type = "Toyota Camry";
    }
    else if(arr[1].textContent == "Бизнес"){
        type = "Mercedes-Benz E-class";
    }
    // window.open('HTML/After_order.html?&'+start.value + '$' + finish.value + '$' + arr[2].textContent);
    document.location = 'HTML/After_order.html?&'+start.value + '$' + finish.value + '$' + arr[2].textContent + '$' + type;
    // document.location.href = 'HTML/After_order.html';
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