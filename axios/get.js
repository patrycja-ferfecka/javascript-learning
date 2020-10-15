const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
  console.log('Pobrano posty:', response.data.length)
})
.catch(function(error) {
  console.log("Nie mozna pobrać postów:", error.message)
})