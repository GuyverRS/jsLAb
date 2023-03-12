

let xq = 0;
let yq = 0;
let count = 1;
let step=100

let colors=["red","yellow","blue","green"]

document.getElementById('player').style.backgroundColor=colors[0]

document.onkeydown=function(evt)
{

    switch (evt.key)
    {

        case 'ArrowRight':
            if(xq<250) {
                xq += step;
                count++;
            }
            break;
        case 'ArrowLeft':
            if(xq>0) {
                xq -= step;
                count--;
            }

    }

    document.getElementById('player').style.left = xq + 'px';
    document.getElementById('player').style.backgroundColor=colors[count-1];

    document.getElementById('player').innerHTML = count;


}