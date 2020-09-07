let centerX = window.innerWidth / 2, 
    centerY = window.innerHeight / 2,
    radius = Math.min(189, Math.min(centerX, centerY) - 76),
    xmouse = centerX, ymouse = centerY, 
    requestId, diffX, diffY, r;

document.querySelector('body').addEventListener('mousemove', e => {
  diffX = e.pageX - centerX;
  diffY = e.pageY - centerY;

  r = Math.sqrt(diffX ** 2 + diffY ** 2);

  if (r > radius) {
    diffX = diffX / r * radius;
    diffY = diffY / r * radius;
  }

  xmouse = centerX + diffX;
  ymouse = centerY + diffY;
});

const ball = document.getElementById('ball');

const followMouse = () => {
  requestId = requestAnimationFrame(followMouse);

  ball.style.left = `${xmouse}px`;
  ball.style.top = `${ymouse}px`;
}

window.addEventListener('resize', () => {
  centerX = window.innerWidth / 2, 
  centerY = window.innerHeight / 2,
  radius = Math.min(189, Math.min(centerX, centerY) - 76);
});