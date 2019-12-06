<!DOCTYPE html>
<html>
<body>

<h3>Counter: <output id="output"></output></h3>
<button onclick="start()">Start</button> 
<button onclick="stop()">Stop</button>

<!-- Internet Explorer 9 and earlier versions do not support Web Workers. -->

<script>
var wrkr;
function start() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(wrkr) == "undefined") {
      wrkr = new Worker("demo_workers.js");
    }
    wrkr.onmessage = function(event) {
      document.getElementById("output").innerHTML = event.data;
    };
  } else {
    document.getElementById("output").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}
function stop() { 
  wrkr.terminate();
  wrkr = undefined;
}
</script>

</body>
</html>
