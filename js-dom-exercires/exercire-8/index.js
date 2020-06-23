window.onload = function () {
  var currentHour = new Date().getHours();
  var currentMinute = new Date().getMinutes();

  document.title = `${currentHour}:${currentMinute}`;
};
