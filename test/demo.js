document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#bff000',
    lineColor: '#bff000',
    directionX : 'left',
    directionY : 'up',
    density : 10000,
    particleRadius: 5,
    lineWidth : .5,
    proximity : 100,
    parallax : true
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
