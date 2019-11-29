function myFunction(){

fetch(
    'https://dog.ceo/api/breeds/image/random',
    { method: 'GET' }
  )
  .then( response => response.json() )
  .then( json => {
    document.getElementById('image').src=json.message;
console.log(json);
  } )
  .catch( error => console.error('error:', error) );
  
}


