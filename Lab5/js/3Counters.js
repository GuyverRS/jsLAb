let countersNode = document.querySelectorAll(`[name="counter"]`);
let colors = ["red", "yellow", "blue"]

let ValueCounters = [0, 0, 0]

//добовляем обработчик событый
for (let i = 0; i < countersNode.length; i++) {
    countersNode[i].onclick = function () {
        ValueCounters[i] += 1;
        countersNode[i].innerHTML = `<p>` + ValueCounters[i] + `</p>`;
    }
}

// покрасим кнопки
for (let i = 0; i < countersNode.length; i++) {
    countersNode[i].style.backgroundColor = colors[i]
}

// кнопак сброса
let resetButtonNode = document.querySelector(`#reset`);

resetButtonNode.onclick = function () {
    for (let i = 0; i < countersNode.length; i++) {

        ValueCounters[i] = 0;
        countersNode[i].innerHTML = `<p>` + ValueCounters[i] + `</p>`;

    }
}
