function myFunction() {

  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

//request state change event
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText).message);
      let sourceObj = JSON.parse(this.responseText);
      document.getElementById('image').src = sourceObj.message;

    }
    else{
      // request error
          console.log("HTTP error", xhr.readyState,xhr.status, xhr.statusText);
    }
  };



  // 2. Configure it: GET-request for the URL /article/.../load
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');



  // 3. Send the request over the network
  xhr.send();
}
