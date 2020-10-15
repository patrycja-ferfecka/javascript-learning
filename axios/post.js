const axios = require('axios')

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'pies',
  body: 'lubie pieski'
})
.then(function(response) {
  console.log("Utworzono post:", response.data)
})
.catch(function(error) {
  console.log("Nie mozna utworzyć postu:", error.message)
})