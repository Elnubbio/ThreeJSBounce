const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

//

//Container Outline
const containerOutlineGeometry = new THREE.BoxGeometry(7.3, 7.3, 0);
const containerOutlineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const containerOutline = new THREE.Mesh(containerOutlineGeometry, containerOutlineMaterial);
scene.add(containerOutline);
//Container
const containerGeometry = new THREE.BoxGeometry(7, 7, 0);
const containerMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const container = new THREE.Mesh(containerGeometry, containerMaterial);
scene.add(container);

//Square 1
// const square1Geometry = new THREE.BoxGeometry(1, 1, 0);
// const square1Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const square1 = new THREE.Mesh(square1Geometry, square1Material);
// scene.add(square1);

//Square 2
const square2Geometry = new THREE.BoxGeometry(1, 1, 0);
const square2Material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const square2 = new THREE.Mesh(square2Geometry, square2Material);
let square2SpeedMult = 0.05;
let square2Speed = { x: square2SpeedMult, y: square2SpeedMult };
square2.position.x = 1;

scene.add(square2);
let timer = 0;

function animate() {
    requestAnimationFrame(animate);
    square2.position.x += square2Speed.x;
    square2.position.y += square2Speed.y;
    handleContainerCollision();
    drawTrail(square2);
    renderer.render(scene, camera);
}

animate();

function handleContainerCollision() {
    if (square2.position.x > 3 || square2.position.x < -3) {
        square2Speed.x *= -1;
        console.log("Bounced");
    }
    if (square2.position.y > 3 || square2.position.y < -3) {
        square2Speed.y *= -1;
        console.log("Bounced");
    }
}

function drawTrail(object) {
    timer++;
    // console.log(timer);
    if (timer % 12 == 0) {
        console.log(":)");
    }
}
