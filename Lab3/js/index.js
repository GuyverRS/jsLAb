// выберем элементы с атрибутом name="place"
let buttonPlaceNode = document.querySelectorAll(`[name="place"]`);


let divRoomNode=document.querySelector(`#room`);

// итоговая ст оисть 
let result = 0;

// стоимость места в поределенном ряду
let arrPrice = [600, 500, 400];

let valueOccupiedPlace = `bg-dark`;
let valueFreedPlace = `bg-success`;
let valueBookedPlace = `bg-primary`;

// кол-во место в ряду
const countPlaceInRow = 4;

//let totalCostNode=document.querySelector(`#totalCost`);

let formBookingNode = document.querySelector(`#formBooking`);

let formPaymentNode = document.querySelector(`#formPayment`);

//let buttoncontinuePurchase=document.querySelector(`#continuePurchase`);

let inputNumberPhoneNode = document.querySelector(`#numberPhone`);


let inputEmailNode = document.querySelector(`#email`);


let buttonBookingNode = document.querySelector(`#booking`);


let totalCostFinalNode = document.querySelector(`#totalCostFinal`);



buttonBookingNode.onclick = function () {
    let resultError = false;
    if (!isNumberPhoneValid(inputNumberPhoneNode.value)) {
        console.log(1);
        resultError = true;
    }
    if (!isEmailValid(inputEmailNode.value)) {
        console.log(2);
        resultError = true;
    }

    if (!resultError) {
        alert("reserved seats for the amount of"+ result+"$");
    }
}

let buttonBuyNode = document.querySelector(`#buy`);

let inputNumberCardNode=document.querySelector(`#inputNumberCard`);

let inputNamedNode=document.querySelector(`#inputName`);

let inputCVC2dNode=document.querySelector(`#inputCVC2`);

buttonBuyNode.onclick = function () {
    let resultError = false;
    if (!isNumberPhoneValid(inputNumberPhoneNode.value)) {
        console.log(1);
        resultError = true;
    }
    if (!isEmailValid(inputEmailNode.value)) {
        console.log(2);
        resultError = true;
    }

    if(!inputNumberCardNode.value)
    {
        resultError = true;
        console.log(3);
    }

    if(!inputNamedNode.value)
    {
        resultError = true;
        console.log(4);
    }

    if(!inputCVC2dNode.value)
    {
        resultError = true;
        console.log(5);
    }

    if (!resultError) {
        alert("tickets purchased for "+ result+"$");
    }
}


function isNumberPhoneValid(value) {
    const numberPhoneReg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    //console.log( numberPhoneReg.test(value));
    return numberPhoneReg.test(value)
}


function isEmailValid(value) {
    const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    //console.log(emailReg.test(value));
    return emailReg.test(value)
}


//
let selectDateNode = document.querySelector(`[name="date"]`);

let divFilmNode = document.querySelector(`#film`);
let selectFilmNode = document.querySelector(`[name="film"]`);

let divTimeNode = document.querySelector(`#time`);
let selectTimeNode = document.querySelector(`[name="time"]`);


//
selectDateNode.onclick= function ()
{
    if(selectDateNode.value)
    {
        divFilmNode.classList.remove('displayNone')
        divFilmNode.classList.add('displayBlock')
    }
    else
    {
        divFilmNode.classList.add('displayNone')
        divTimeNode .classList.add('displayNone')
    } 
}
//
selectFilmNode.onclick= function ()
{
    if(selectFilmNode.value)
    {
        divTimeNode.classList.remove('displayNone')
        divTimeNode.classList.add('displayBlock')
    }
    else
    {
        divTimeNode.classList.remove('displayBlock')
        divTimeNode.classList.add('displayNone')
    } 
}

selectTimeNode.onclick=function()
{   
    if(selectTimeNode.value)
    {
        divRoomNode.classList.remove(`displayNone`)
        divRoomNode.classList.add(`displayBlock`)
        Clean();
        LoadPlaces(selectDateNode.value, selectFilmNode.value,selectTimeNode.value)
    }

}

let arr=[]

function LoadPlaces(idData, idFilm, idTime)
{
    //result=0;
    CreateOccupiedPlace();
    for (let i = 0; i < buttonPlaceNode.length; i++) 
    {
        if(arr[idData-1][idFilm-1][idTime-1].includes(i))
        {
            buttonPlaceNode[i].classList.add(valueOccupiedPlace)
        }
        else
        {
            buttonPlaceNode[i].classList.remove(valueOccupiedPlace)
            addPlaceFunction(i)
        }
    }
}

function addPlaceFunction(idPalce)
{
    buttonPlaceNode[idPalce].onclick = function () 
    {
     // оределям номер ряда
     let idRow = parseInt(idPalce / countPlaceInRow);
     // обрабатываем нажтие на кнопку
     if (buttonPlaceNode[idPalce].classList.toggle(valueFreedPlace)) {
         result += arrPrice[idRow];
     }
     if (buttonPlaceNode[idPalce].classList.toggle(valueBookedPlace)) {
         result -= arrPrice[idRow];
     }
     // выводим результат
     totalCostFinalNode.innerHTML = result;
    }
}


function CreateOccupiedPlace()
{

    for(let i=0;i<3;i++)
    {
        arr[i]=new Array();
        for(let j=0;j<3;j++)
        {
            arr[i][j]=new Array();
            for(let z=0;z<3;z++)
            {
                arr[i][j][z]=new Array();
            }
        }
    }

    arr[0][0][0]=[1,2,3];
    arr[0][0][1]=[2,3,4];
    arr[0][0][2]=[1,2,3];

    arr[0][1][0]=[2,4,6];
    arr[0][1][1]=[3,5,6];
    arr[0][1][2]=[1,7,8]; 
}

function Clean()
{
    result=0;
    totalCostFinalNode.innerHTML=result;
    for (let i = 0; i < buttonPlaceNode.length; i++) 
    {
        buttonPlaceNode[i].classList.remove(valueOccupiedPlace)
        buttonPlaceNode[i].classList.remove(valueFreedPlace)
        buttonPlaceNode[i].classList.remove(valueBookedPlace)
        buttonPlaceNode[i].classList.add(valueBookedPlace)
    }
}
