//IO
const pGetNumber = (size = 10) => {
    return new Promise(resolve => {
        let numbers = [];
        let timer = setInterval(()=>{
            if(numbers.length < size) {
                numbers.push(-5 + Math.ceil(Math.random()*10))
                console.log(numbers.length); //test line
            }else{
                clearInterval(timer)
                resolve(numbers)
            }
        }, Math.random() * 1000)
    } )
}
// processing
const pMaxNumber = (numbersArray) => {
    return new Promise(resolve => {
        let max_numb = numbersArray[0];
        setTimeout(() => {
            for (const numb of numbersArray) {
                numb > max_numb && (max_numb = numb)
            }
            resolve(max_numb)
        }, Math.random() * 1000)
    })
    
}
//rendering
const pRenderNumber = (item) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`{max number: ${item}}`)
        }, Math.random() * 1000)
    })
}

//////////////////////////////////////////////
async function execute() {
    let numbersArr = await pGetNumber(6)
    let max_numb = await pMaxNumber(numbersArr)
    let result = await pRenderNumber(max_numb)
    console.log(result);
}

execute() //RUN