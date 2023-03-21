let imageNode=document.querySelector(`#image`);

let formRangeNode=document.querySelector(`.form-range`);

formRangeNode.addEventListener(`input`, (evt)=>{
    console.log(evt.target.value);
    imageNode.src = `assets/${Number(evt.target.value)+1}.png`;
});
