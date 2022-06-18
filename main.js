// var array = [
//     {
//         name: 'Java',
//         coin: 500
//     },
//     {
//         name: 'hehe',
//         coin: 401
//     },
//     {
//         name: 'Jva',
//         coin: 401
//     }
// ]

// // Filter 
// Array.prototype.filter2 = function (callback) {
//     let output = [];
//     for (var key in this) {
//         if (this.hasOwnProperty(key)) {
//             var result = callback(this[key], key, this)
//             if (result) {
//                 output.push(this[key])
//             }
//     }
//   }
//   return output
// }

// var filterArray =  array.filter2(function(course) {
//     return course.coin >= 400;
// })
// console.log(filterArray)

// // forEach

// Array.prototype.forEach2 = function (callback) {
//     for ( const key in this ) {
//         if (this.hasOwnProperty(key)) {
//             callback(this[key], key, this)
//         }
//     }
// }

// array.forEach2(function(course, index) {
//     console.log(index, course)
// })

// // Some
// Array.prototype.some2 = function (callback) {
//     for (var index in this ) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index],index,this)
//             if (result) { break } 
//         }
//     }
//     return result
// }

// var arraySome = array.some2(function (course) {
//     return course.coin > 500;
// })
// console.log(arraySome)

// console.log(Array.prototype)
// // Every
// Array.prototype.every2 = function (callback) {
//     for (var index in this ) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index],index,this)
//             if (!result) { break } 
//         }
//     }
//     return result
// }

// var arrayEvery = array.every2(function (course) {
//     return course.coin > 200;
// })
// console.log(arrayEvery)



var ulElement = document.querySelector('ul')

console.log(ulElement)
ulElement.onmouseup = function(e) {
    e.preventDefault()  
}
ulElement.onclick = function(e) {
    console.log(e.target.innerText)
}

