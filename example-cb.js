//IO
const getNumber = (cb, size = 10) => {
    let numbers = [];
    let timer = setInterval(()=>{
        if(numbers.length < size) {
            numbers.push(-5 + Math.ceil(Math.random()*10))
            console.log(numbers); //test line
        }else{
            clearInterval(timer)
            cb(numbers)
        }
}, Math.random() * 1500)
}

// processing
const maxNumber = (cb, numbersArray) => {
    let max_numb = numbersArray[0];
    setTimeout(() => {
        for (const numb of numbersArray) {
            numb > max_numb && (max_numb = numb)
        }
        cb(max_numb)
    }, Math.random() * 3000)
}

// render
const renderNumber = (item, cb) => {
    setTimeout(() => {
        cb(`{max number: ${item}}`)
    })
}

//////////////////////////////////
getNumber(  numbersArr =>
    maxNumber(result =>
        renderNumber(result, console.log),
            numbersArr),3)