const fetch = require('node-fetch');

let promise = fetch("http://localhost:8080/lunchtime/menu/findall")

promise.then(res => {
    console.log(res.json().then(data => {
        console.log(data)
    },err => {
        console.log(err)
    }))
})