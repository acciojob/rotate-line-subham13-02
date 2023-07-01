//your JS code here. If required.
const line = document.getElementById('line');
let rotationAngle = 0;

function rotateLine() {
  rotationAngle += 1;
  line.style.transform = `rotate(${rotationAngle}deg)`;

  // Call the rotateLine function again after a short delay
  requestAnimationFrame(rotateLine);
}

// Start the rotation animation
rotateLine();
