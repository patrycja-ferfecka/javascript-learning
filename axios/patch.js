const axios = require('axios')

axios.patch('https://jsonplaceholder.typicode.com/posts/65', {
  title: 'nowy, fajny title'
})
.then(function(response) {
  console.log("Zedytowano post: (patch)", response.data)
})
.catch(function(error) {
  console.log("Nie mozna edytować postu: (patch)", error.message)
})
