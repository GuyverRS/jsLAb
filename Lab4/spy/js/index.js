// весь шпион целиком
let spy = document.getElementById(`spy`);
// сюда выводи координаты мышки
let resultClick = document.getElementById(`result-click`);



spy.style.top = '0px';
spy.style.left = '0px';

//1
document.onmousemove= function (evt) 
{
    resultClick.innerHTML = 'Координаты мыши: ' + 'clientX-' + evt.clientX + 'clientY-' + evt.clientY + 'x-' + evt.x + 'y-' + evt.y;//1
   
}

//3
document.onkeydown = function (evt){

    document.getElementById('result-type').innerHTML = 'key: ' + evt.key;//3
    
    //moveArrow//4
    switch (evt.key){
        case 'ArrowUp':
            spy.style.top = String(-200 + parseInt(spy.style.top.replaceAll('px', ''))) + 'px';

            break
        case 'ArrowDown':
            spy.style.top = String(200 + parseInt(spy.style.top.replaceAll('px', ''))) + 'px';
            break
        case 'ArrowRight':
            spy.style.left = String(200 + parseInt(spy.style.left.replaceAll('px', ''))) + 'px';
            break
        case 'ArrowLeft':
            spy.style.left = String(-200 + parseInt(spy.style.left.replaceAll('px', ''))) + 'px';
            break
    }

}




//2
document.onclick = function (evt) {
    console.log('move');
    spy.style.top = evt.clientY + 'px';
    spy.style.left = evt.clientX + 'px';

}
