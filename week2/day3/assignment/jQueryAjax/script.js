document.querySelector('button').addEventListener('click',showImage);
function showImage(){
  $.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    dataType:'json',
    success:function(data){
      var element=document.createElement('img');
      element.src= data.message;
      element.style.height="250px";
      element.style.width="250px";
      document.querySelector('body').appendChild(element);
    },
    statusCode:{
      404:function(){
        alert("page not found");
      }
    }
})
}
