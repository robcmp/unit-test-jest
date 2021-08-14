// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (a) => {
    return  a * oneEuroIs.JPY;
}

const fromEuroToDollar  = (a) => {
    return a * oneEuroIs.USD;
}

const fromYanToPound  = (a) => {
    return a * oneEuroIs.GBP;
}

console.log(fromEuroToDollar(1),fromDollarToYen(5),fromYanToPound(2))
module.exports={sum,fromDollarToYen,fromEuroToDollar,fromYanToPound};