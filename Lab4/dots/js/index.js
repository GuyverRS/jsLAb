// добавляй новые точки внутрь контейнера
let container = document.getElementById(`container`);

// шаблон для точек
// оказывается, CSS можно задавать ещё и вот так!
let id = 0;
let x, y;

color = 'red';

/* 
  let template = `
  <div
  class="dot"
  style="top: ${y}px; left: ${x}px; background-color: ${color}">
  ${id}
  </div>`; 
*/

//1
// document.onclick=function(evt)
// {
//    x = evt.clientX;
//    y = evt.clientY;
//   container.innerHTML += `
//   <div
//     class="dot"
//     style="top: ${y}px; left: ${x}px;">
//     ${id}
//   </div>`
//   id++;
// }
//!~1


let draw = false;
document.onclick = function () {
  draw = !draw;
  //console.log(draw);
}


document.onkeydown = function (evt) {
  switch (evt.key) {
    case '1':
      color = 'red';
      break;
    case '2':
      color = 'yellow';
      break;
    case '3':
      color = 'blue';
      break;
    case '4':
      color = 'green';
      break;
    case '5':
      color = 'Aqua';
      break;
  }
}





document.onmousemove = function (evt) {
  x = evt.clientX;
  y = evt.clientY;
  if (draw) {
    container.innerHTML += `<div
        class="dot"
        style="top: ${y}px; left: ${x}px; background-color: ${color}">
        ${id}
    </div>`;
    id++;
  }

}





