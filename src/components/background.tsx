import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';
import $ from 'jquery';

const background = css`
	position: absolute;
	top: 0;
	z-index: 1;
`

const Background = () => {
  const conf = {
    fov: 75,
    cameraZ: 75,
    xyCoef: 50,
    zCoef: 15,
    lightIntensity: 0.9,
    ambientColor: 0x000000,
    light1Color: 0x0E09DC,
    light2Color: 0x1CD1E1,
    light3Color: 0x18C02C,
    light4Color: 0xee3bcf,
    el: 'background',
  };

  let targetHeight: number = 500;
  let renderer: THREE.WebGLRenderer, 
      scene: THREE.Scene, 
      camera: THREE.PerspectiveCamera, 
      cameraCtrl: any, 
      gArray: Float32Array;
  let width: number, height: number, cx: number, cy: number, wWidth: number, wHeight: number;
  let light1: THREE.PointLight, light2: THREE.PointLight, light3: THREE.PointLight, light4: THREE.PointLight;

  let plane: any;
  const simplex = new SimplexNoise();

  const mouse = new THREE.Vector2();
  const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const mousePosition = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();

  useEffect(() => {
    init();
  }, []);

  function init() {
    targetHeight = $( "#about" ).innerHeight()!;
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el)!, antialias: true, alpha: true });
    camera = new THREE.PerspectiveCamera(conf.fov);
    camera.position.z = conf.cameraZ;

    updateSize();
    window.addEventListener('resize', updateSize, false);

    document.addEventListener('mousemove', e => {
      const v = new THREE.Vector3();
      camera.getWorldDirection(v);
      v.normalize();
      mousePlane.normal = v;
      mouse.x = (e.clientX / width) * 2 - 1;
      mouse.y = - (e.clientY / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(mousePlane, mousePosition);
    });

    initScene();
    animate();
  }

  function initScene() {
    scene = new THREE.Scene();
    initLights();

    let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    // let mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    // let mat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.8 });
    let geo = new THREE.PlaneGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
    plane = new THREE.Mesh(geo, mat);
    scene.add(plane);

    plane.rotation.x = -Math.PI / 2 - 0.2;
    plane.position.y = -25;
    camera.position.z = 60;
  }

  function initLights() {
    const r = 30;
    const y = 10;
    const lightDistance = 500;

    // light = new THREE.AmbientLight(conf.ambientColor);
    // scene.add(light);

    light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
    light1.position.set(0, y, r);
    scene.add(light1);
    light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
    light2.position.set(0, -y, -r);
    scene.add(light2);
    light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
    light3.position.set(r, y, 0);
    scene.add(light3);
    light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
    light4.position.set(-r, y, 0);
    scene.add(light4);
  }

  function animate() {
    requestAnimationFrame(animate);

    animatePlane();
    animateLights();

    renderer.render(scene, camera);
  };

  function animatePlane() {
    gArray = plane.geometry.attributes.position.array;
    const time = Date.now() * 0.0002;
    for (let i = 0; i < gArray.length; i += 3) {
      gArray[i + 2] = simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) * conf.zCoef;
    }
    plane.geometry.attributes.position.needsUpdate = true;
    // plane.geometry.computeBoundingSphere();
  }

  function animateLights() {
    const time = Date.now() * 0.001;
    const d = 50;
    light1.position.x = Math.sin(time * 0.1) * d;
    light1.position.z = Math.cos(time * 0.2) * d;
    light2.position.x = Math.cos(time * 0.3) * d;
    light2.position.z = Math.sin(time * 0.4) * d;
    light3.position.x = Math.sin(time * 0.5) * d;
    light3.position.z = Math.sin(time * 0.6) * d;
    light4.position.x = Math.sin(time * 0.7) * d;
    light4.position.z = Math.cos(time * 0.8) * d;
  }

  function updateSize() {
    width = window.innerWidth; 
    cx = width / 2;
    height = targetHeight; 
    cy = height / 2;
    if (renderer && camera) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const wsize = getRendererSize();
      wWidth = wsize[0];
      wHeight = wsize[1];
    }
  }

  function getRendererSize() {
    const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
    const vFOV = cam.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    const width = height * cam.aspect;
    return [width, height];
  }

  return (
    <div css={background}>
      <canvas id="background"></canvas>
    </div>
  )
}

export default Background

