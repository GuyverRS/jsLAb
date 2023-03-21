// нумерация
let bookNodes = document.querySelectorAll(`.book`);
for(let i = 0; i < bookNodes.length; i++){

    bookNodes[i].innerHTML = i + 1 +  bookNodes[i].innerHTML;
}
// поиск
let formСontrolNode = document.querySelector('.form-control');

formСontrolNode.addEventListener('input', (evt) =>{
    for(let itemNode of document.querySelectorAll(`.book`)) {
        if(!itemNode.innerHTML.includes(evt.target.value)){
            itemNode.classList.add('d-none');
        }
        else itemNode.classList.remove('d-none');
    }
} )

// добавить Элемент
document.querySelector('#Add').onclick = function ()
{
    let bookNodesCount = document.querySelectorAll(`.book`).length+1;// номер новой плашки
        document.querySelector('.list-group').innerHTML +=
        `<li class="book list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            ${bookNodesCount} ${document.querySelector('#text').value}
            </div>
            <span class="badge bg-primary rounded-pill align-self-center"
            >Done</span
         </li>`
}
