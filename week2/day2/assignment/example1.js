//get method:

fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { method: 'GET' }
  )
  .then( response => {
    console.log("Response status is "+response.status);
    return response.json()

  })
  .then( json => console.log(json))
  .catch( error => console.error('error:', error) );
  

//delete method:

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then( response => {
    console.log("Response status is "+response.status);
    return response.json()

  })
  .then( json => console.log(json))
  .catch( error => console.error('error:', error) );
  

  //post method:

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then( response => {
    console.log("Response status is "+response.status);
    return response.json()

  })
  .then( json => console.log(json))
  .catch( error => console.error('error:', error) );
