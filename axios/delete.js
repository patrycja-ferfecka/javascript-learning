const axios = require('axios')

axios.delete('https://jsonplaceholder.typicode.com/posts/99')
.then(function(response) {
  console.log("Usunięto post:", response.data)
})
.catch(function(error) {
  console.log("Nie udało się usunąć:", error.message)
})