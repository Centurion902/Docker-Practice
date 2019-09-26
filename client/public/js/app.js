

console.log("Im alive!")

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/../html')).listen(3000, function(){
    console.log('Server running on 3000...');
});


// const form = document.querySelector('form')
// const analyze = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')

// messageOne.textContent = ''

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const text = search.value
//     messageOne.textContent = 'Loading...'
//     fetch(text).then((response) => {
//         response.json().then((data) => {
//             if(data.error){
//                 messageOne.textContent = ''
//             }else{
//                 messageOne.textContent = data.instructions
//             }
//         })
//     })
// })