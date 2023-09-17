function getMouseCoords(e) {
  var e = e || window.event;
}

var followCursor = (function () {
  var cursor = document.getElementById('cursor');
  var easing = 0.15; // Adjust the easing value to control the smoothness

  return {
    init: function () {},
    run: function (e) {
      var e = e || window.event;
      targetX = e.pageX; // Adjust the cursor size
      targetY = e.pageY; // Adjust the cursor size
      getMouseCoords(e);
    },
    updateCursor: function () {
      var dx = targetX - currentX;
      var dy = targetY - currentY;

      currentX += dx * easing;
      currentY += dy * easing;

      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';
    },
  };
})();

window.onload = function () {
  followCursor.init();
  var cursor = document.getElementById('cursor');
  var shopButton = document.getElementById('shop-button')
  if(shopButton) {
    cursor.style.left = shopButton.offsetLeft + 'px';
    cursor.style.top = shopButton.offsetTop + 'px';
  
    targetX = shopButton.offsetLeft;
    targetY = shopButton.offsetTop;
    currentX = shopButton.offsetLeft;
    currentY = shopButton.offsetTop;
  }
  else {
    targetX = 0;
    targetY = 0;
    currentX = 0;
    currentY = 0;
  }


  document.body.onmousemove = function (e) {
    followCursor.run(e);
  };

  function animateCursor() {
    followCursor.updateCursor();
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

};
