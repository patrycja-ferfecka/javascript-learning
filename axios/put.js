const axios = require('axios')

axios.put('https://jsonplaceholder.typicode.com/posts/65', {
  title: 'piesek',
  body: 'lubie pieski'
})
.then(function(response) {
  console.log("Zedytowano post: (put)", response.data)
})
.catch(function(error) {
  console.log("Nie mozna edytować postu: (put)", error.message)
})
