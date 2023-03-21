// function hello(myCallback){  // High Order Function
//     console.log('Hello...')
//     myCallback()

// } 
// function hi(){
//     console.log('Hii....')
// }  // Callback Function
// hello(hi)

// function x(city, xz){
    
   
//     return function(country){
//         console.log('Hello Fun X', city, country)
//         xz()
//     }
    

// }
// function z(){
//     console.log('Hello Z')
// }
// let y = x('Jaipur', z)
// y('India')



// Problem

// const radius1 = [3, 7, 2, 5, 8]

// const calculateArea = function(radius1){
//     let result = []
//     for(let i = 0; i < radius1.length; i++){
//         result.push(Math.PI * radius1[i] * radius1[i])
//     }
//     return result;

// }

// console.log(calculateArea(radius1))

// const calculateDiameter = function(radius){
//     let result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(2 * radius[i])
//     }
//     return result;

// }
// console.log(calculateDiameter(radius))

// const calculateCircumference = function(radius){
//     let result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(2 * Math.PI * radius[i])
//     }
//     return result;

// }
// console.log(calculateCircumference(radius))


// High Order Function
// const radius = [3, 7, 2, 5, 8]


// HOF
// const calculate = function(radius, logic){
//     let result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(logic(radius[i]))
//     }
//     return result;

// }
// Array.prototype.calculate = function(logic){
//     let result = []
//     for(let i = 0; i < this.length; i++){
//         result.push(logic(this[i]))
//     }
//     return result;

// }
// Array.__proto__.__proto__.calculate = function(logic){
//     let result = []
//     for(let i = 0; i < this.length; i++){
//         result.push(logic(this[i]))
//     }
//     return result;

// }

// const area = function(radius){
//     return  Math.PI * radius * radius 
// }
// const diameter = function(radius){
//     return 2 * radius
// }
// const circumference = function(radius){
//     return 2 * Math.PI * radius
// }




// console.log(calculate(radius, area))
// console.log(calculate(radius, diameter))
// console.log(calculate(radius, circumference))

// const radius2 = [9, 1, 3, 6]

// console.log(radius.map(area))
// console.log(radius.calculate(area))
// console.log(radius2.calculate(circumference))



