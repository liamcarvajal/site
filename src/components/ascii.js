import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import './style.css'
/* import * as THREE from 'three' */
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'


//Create a clock for rotation
const clock = new THREE.Clock()

// Creates empty mesh container
const myMesh = new THREE.Mesh();

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0, 0, 0);

//Lights
const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(100, 100, 400);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, .5);
pointLight2.position.set(-500, 100, -400);
scene.add(pointLight2);

// Parameters
const stlLoader = new STLLoader()

//Material
const material = new THREE.MeshStandardMaterial()
material.flatShading = true
material.side = THREE.DoubleSide;

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000)

// Renderer
const renderer = new THREE.WebGLRenderer()

let effect;

let characters = ' .:-+*=%@#'
const effectSize = { amount: .205 }
// let backgroundColor = 'black'
let ASCIIColor = 'white'

function createEffect() {
    effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
    effect.setSize(sizes.width, sizes.height);
    effect.domElement.style.color = ASCIIColor;
    // effect.domElement.style.backgroundColor = backgroundColor;
    effect.domElement.id = "ascii";
}

createEffect()

document.body.appendChild(effect.domElement)

document.getElementById("ascii").style.whiteSpace = "prewrap"

stlLoader.load(
    './src/assets/caesar.stl',
    function (geometry) {

        myMesh.material = material;
        myMesh.geometry = geometry;

        var tempGeometry = new THREE.Mesh(geometry, material)
        myMesh.position.copy = (tempGeometry.position)

        geometry.computeVertexNormals();
        myMesh.geometry.center()

        myMesh.rotation.x = -90 * Math.PI / 180;

        myMesh.geometry.computeBoundingBox();
        var bbox = myMesh.geometry.boundingBox;

        myMesh.position.x = 107
        myMesh.position.y = ((bbox.max.z - bbox.min.z) / 5 + 10)
        //do +10 at the end of the above line

        camera.position.x = ((bbox.max.x * 4));
        camera.position.y = ((bbox.max.y));
        camera.position.z = ((bbox.max.z * 3));

        scene.add(myMesh);


        function tick() {
            const elapsedTime = clock.getElapsedTime()
            myMesh.rotation.z = (elapsedTime) / 3
            render()
            window.requestAnimationFrame(tick)
        }

        function render() {
            effect.render(scene, camera);
        }

        tick()
    }
)

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
}
