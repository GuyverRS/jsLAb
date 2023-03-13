let itemsSwitchNode=document.querySelectorAll(`[name="itemSwitch"]`)

let colors=["red","yellow","blue"]

// обработчик нажатия

for(let i=0;i<itemsSwitchNode.length;i++)
{
    itemsSwitchNode[i].onclick=function()
    {
        if(itemsSwitchNode[i].classList.contains(`switchesOn`))
        {
            itemsSwitchNode[i].classList.remove(`switchesOn`);
            itemsSwitchNode[i].classList.add(`switchesOff`);
        }
        else{
            itemsSwitchNode[i].classList.remove(`switchesOff`);
            itemsSwitchNode[i].classList.add(`switchesOn`);
        }
    }
}

// покрасим свичи
for(let i=0;i<itemsSwitchNode.length;i++)
{
    itemsSwitchNode[i].style.backgroundColor=colors[i]
}
