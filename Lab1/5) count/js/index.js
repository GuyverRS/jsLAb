let buttonPlusNode=document.querySelector(`#plus`)

let buttonMinusNode=document.querySelector(`#minus`)

let amountCountNode=document.querySelector(`#amount`)

let count=0
amountCountNode.innerHTML=  count

buttonPlusNode.addEventListener(`click`, function(){

    count+=1

    amountCountNode.innerHTML=  count
})


buttonMinusNode.addEventListener(`click`, function(){

    if(count-1>=0)
    {
        count-=1
        amountCountNode.innerHTML=  count
    }
})