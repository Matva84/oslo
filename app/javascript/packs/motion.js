import { Controller } from "@hotwired/stimulus"
import { animate, inView } from "@motionone/dom"
import { AmbientLight, DirectionalLight, Scene, Group, PerspectiveCamera, WebGLRenderer, TorusKnotGeometry, MeshLambertMaterial, Clock, Mesh } from 'three';
import { OrbitControls } from 'three'//three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three'///addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three'///addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three'///addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three'///addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three'///addons/postprocessing/ShaderPass.js';
import { NoiseShader} from './noise-shader'
import { GLTFLoader } from 'three'///addons/loaders/GLTFLoader.js'

const clock = new Clock();
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 0);
sneakerTag.appendChild( renderer.domElement );

const ambiance = new AmbientLight( 0x404040 ); // soft white light
camera.add( ambiance );

const keyLight = new DirectionalLight(0xffffff, 1.0);
keyLight.position.set(-1, 1, 3);
camera.add(keyLight);

const fillLight = new DirectionalLight(0xffffff, 0.5);
fillLight.position.set(1, 1, 3);
camera.add(fillLight);

const backLight = new DirectionalLight(0xffffff, 1.0);
backLight.position.set(-1, 3, -3);
camera.add(backLight);

scene.add(camera);

//const geometry = new TorusKnotGeometry( 0.75, 0.25, 100, 8);
//const material = new MeshLambertMaterial( { color: 0xff0000 } );
//const shape = new Mesh( geometry, material );

const gltfLoader = new GLTFLoader()

const loadGroup = new Group();
loadGroup.position.y = -10;

const scrollGroup = new Group();
scrollGroup.add(loadGroup);

scene.add( scrollGroup );

gltfLoader.load(
  'sneaker.glb',
  (gltf) => {
    loadGroup.add(gltf.scene)

    animate(
      'header',
      {
        y: [-100, 0],
        opacity: [0, 1],
      },
      { duration: 1, delay: 2.5 },
    )

    animate(
      'section.new-drop',
      {
        y: [-100, 0],
        opacity: [0, 1],
      },
      { duration: 1, delay: 2 },
    )

    animate(
      (t) => {
        loadGroup.position.y = -10 + 10 * t
      },
      { duration: 2, delay: 1 },
    )

    //animate(
    //  'div.loader',
    //  {
    //    y: '-100%',
    //  },
    //  { duration: 3, delay: 1 },
    //)
  },
  (error) => {
    console.error(error)
  },
)

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.update();

camera.position.z = 2;

const composer = new EffectComposer( renderer );
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );
const outputPass = new OutputPass();
composer.addPass( outputPass );

const noisePass = new ShaderPass( NoiseShader );
noisePass.uniforms.time.value = clock.getElapsedTime();
noisePass.uniforms.effect.value = currentEffect;
noisePass.uniforms.aspectRatio.value =window.innerWidth / window.innerHeight;
composer.addPass( noisePass );

const render = () => {
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  controls.update();
  scrollGroup.rotation.set(0,window.scrollY * 0.002,0);
  requestAnimationFrame( render );
  currentEffect += (aimEffect - currentEffect) * 0.01;
  noisePass.uniforms.time.value = clock.getElapsedTime();
  noisePass.uniforms.effect.value = currentEffect;
	composer.render();
}

const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  noisePass.uniforms.aspectRatio.value =window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

const scroll = () => {
  clearTimeout(timeoutEffect);
  aimEffect = 1;
  timeoutEffect = setTimeout(() => {
    aimEffect = 0;
  }, 300);
}

render();
window.addEventListener('resize', resize);
window.addEventListener('scroll', scroll);
