let labelUserNameNode= document.querySelector(`#username`);
let userNameContainerNode= document.querySelector(`.username-container`);
// выводим имя под автар
labelUserNameNode.addEventListener(`input`, (evt) => 
{
        console.log(evt.target.value);
        userNameContainerNode.innerHTML = evt.target.value;
})


let frameSelectNode=document.querySelector(`#frame-select`);
let frameNode=document.querySelector(`.frame`);
//тип рамки
frameSelectNode.addEventListener(`input`,(evt)=>{

    console.log(evt.target.value);
    frameNode.classList = `frame frame-${evt.target.value}`

})


let framePickerSelectNode=document.querySelector(`#frame-picker`);
// цвет фона
framePickerSelectNode.addEventListener(`input`, (evt) => {
    console.log(evt.target.value);
    frameNode.style.backgroundColor = evt.target.value;
})



let tshirtPickerNode=document.querySelector(`#tshirt-picker`);
let tshirtColorNode=document.querySelector(`.tshirt-color`);

// цвет футболки
tshirtPickerNode.addEventListener('input', (evt) => 
{
        console.log(evt.target.value);
        tshirtColorNode.style.fill = evt.target.value;
})


let hairRangeNode=document.querySelector(`#hair-range`);
let hairNode=document.querySelector(`.hair`);

// тип пречески
hairRangeNode.addEventListener('input', (evt) => 
{
    console.log(evt.target.value);
    hairNode.src = `assets/hair-${evt.target.value}.svg`;
});

let hatCheckNode=document.querySelector(`#hat-check`);
let hatRangeNode=document.querySelector(`#hat-range`);
let hatNode=document.querySelector(`.hat`);
// тип шляпы
hatCheckNode.addEventListener('input', (evt) => {
        if (evt.target.checked) {
            hatRangeNode.disabled = false

            hatNode.classList.remove(`hidden`)

                hatRangeNode.addEventListener('input', (evt) => {
                    hatNode.src = `assets/hat-${evt.target.value}.svg`
                })

        } else {
            hatRangeNode.disabled = true
            hatNode.classList.add(`hidden`)
        }
    });


let glassesCheckkNode=document.querySelector(`#glasses-check`);
let glassesRangegeNode=document.querySelector(`#glasses-range`);
let glassesNode=document.querySelector(`.glasses`);

// тип очков
glassesCheckkNode.addEventListener('input', (evt) => 
{
console.log(evt.target.checked);
    if (evt.target.checked) {
        glassesRangegeNode.disabled = false

        glassesNode.classList.remove(`hidden`)

        glassesRangegeNode.addEventListener('input', (evt) => {
            glassesNode.src = `assets/glasses-${evt.target.value}.svg`
            })

    } else {
        glassesRangegeNode.disabled = true
        glassesNode.classList.add(`hidden`)
    }
});


// тип Серёжек

let earingsCheckkNode=document.querySelector(`#earings-check`);
let earingsRangegeNode=document.querySelector(`#earings-range`);
let earingsNode=document.querySelector(`.earings`);

// тип очков
earingsCheckkNode.addEventListener('input', (evt) => 
{
console.log(evt.target.checked);
    if (evt.target.checked) {
        earingsRangegeNode.disabled = false

        earingsNode.classList.remove(`hidden`)

        earingsRangegeNode.addEventListener('input', (evt) => {
            earingsNode.src = `assets/earings-${evt.target.value}.svg`
            })

    } else {
        earingsRangegeNode.disabled = true
        earingsNode.classList.add(`hidden`)
    }
});

    
