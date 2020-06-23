setInterval(function () {
  var currentDate = new Date();
  document.getElementById('onclock').innerHTML = currentDate.toLocaleTimeString();
}, 1000);
