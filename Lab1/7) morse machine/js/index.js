let buttonMinusNode=document.querySelector(`#buttonMinus`)

let buttonStarNode=document.querySelector(`#buttonStar`)

let buttonSpaceNode=document.querySelector(`#buttonSpace`)

let buttonCleanNode=document.querySelector(`#buttonClean`)
 
let encryptedMessageNode=document.querySelector(`#encryptedMessage`)

let decryptedMessageNode=document.querySelector(`#decryptedMessage`)

let buttonDecryptedMessageNode=document.querySelector(`#buttonDecryptedMessage`)

// алфавит Морзе
const MORSE_CODE = {  
    "*-":"А",
    "-***":"Б",
    "*--":"В",
    "--*":"Г",
    "*":"Е",
    "***-":"Ж",
    "--**":"З",
    "**":"И",
    "*---":"Й",
    "-*-":"К",
    "*-**":"Л",
    "--":"М",
    "---":"О",
    "*--*":"П",
    "*-*":"Р",
    "***":"С",
    "-":"Т",
    "**-":"У",
    "**-*":"Ф",
    "****":"Х",
    "-*-*":"Ц",
    "---*":"Ч",
    "----":"Ш",
    "--*-":"Щ",
    "-**-":"Ь,Ъ",
    "-*--":"Ы",
    "**-**":"Э",
    "**--":"Ю",
    "*-*-":"Я", //
    "*----":"1",
    "**---":"2",
    "***--":"3",
    "****-":"4",
    "*****":"5",
    "-****":"6",
    "--***":"7",
    "---**":"8",
    "----*":"9",
    "-----":"0",
    "******":".",
    "*-*-*-":",",
    "-*-*-*":";",
    "---***":":",
    "**--**":"?",
    "--**--":"!",
    "-****-":"-",
    "*-**-*":"<<",
    "-*--*-":"(",
    "-**-*":"/"  
};



// добавляем "*" в поле с зашифрованным сообщением
buttonStarNode.addEventListener(`click`, function(){

    encryptedMessageNode.innerHTML+=`*`
})

// добавляем " "(пробел) в поле с зашифрованным сообщением для раздения символов
buttonSpaceNode.addEventListener('click', function()
{
    encryptedMessageNode.innerHTML+=` `
})

// добавляем "-" в поле с зашифрованным сообщением
buttonMinusNode.addEventListener(`click`, function(){

    encryptedMessageNode.innerHTML+=`-`
})

// очищаем поле ввода сообщениЯ
buttonCleanNode.addEventListener(`click`, function()
{
    encryptedMessageNode.innerHTML=``
    decryptedMessageNode.innerHTML=``
})

// декодируем закодированне сообщение
buttonDecryptedMessageNode.addEventListener(`click`, function()
{
    decryptedMessageNode.innerHTML=decodeMorse(encryptedMessageNode.innerHTML)
})

// функция декодирования закодированного сообщения
decodeMorse = function( morseCode ) {

    return morseCode
             .split('   ') // get word code, 3 spaces apart
             .map(word => word
                           .split(' ') // получаем код символа
                           .map(symbol => MORSE_CODE[symbol]) // декодируем символ
                           .join('') // объединение символов в слово
              )
              .join(' ') // добавляем пробел между словами
              .trim()
}

console.log(decodeMorse(`*--* *-* ** *-- * - *-*-*- -- ** *-* --*--`))