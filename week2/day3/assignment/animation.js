<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script> 
$(document).ready(function(){
  $("button").click(function(){
    var p = $("p");  
     p.animate({fontSize: '20px',fontWeight: 'bold'}, "slow");
     });
});
</script> 
  </head>
  <body>
    <h1>Animation example</h1>
    <br>
   <button>Start Animation</button>
<br>
<p style="font-size:15px;font-style:italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
 </body>
</html>
