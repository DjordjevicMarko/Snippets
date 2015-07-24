
javascript:(function(){
  var box = document.createElement('div');
  var winWidth = window.innerWidth;
  box.style.position = 'absolute';
  box.style.bottom = '10px';
  box.style.right = '10px';
  box.innerHTML = winWidth + 'px';
  document.body.appendChild(box);
  window.addEventListener('resize', function () {
    box.innerHTML = window.innerWidth + 'px';
  }, false);
})();
