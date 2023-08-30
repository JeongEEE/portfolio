import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import $ from 'jquery';

const background = css`
  z-index: 4;
`

const ComputerCanvas = () => {
  const conf = {
    fov: 45,
    cameraZ: 5,
    el: 'computer'
  };
  let targetHeight = 600;
  let renderer, scene, camera, model, controls;
  let width, height, cx, cy, wWidth, wHeight;

  const init = () => {
    const infoWidth = $( "#computerBox" ).innerWidth();
    const infoHeight = $( "#computerBox" ).innerHeight();
    targetHeight = infoHeight;
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el) });
    renderer.setClearColor( 0x000000, 0 );
    camera = new THREE.PerspectiveCamera(conf.fov, infoWidth / infoHeight, 0.1, 100);
    camera.position.set(0,0,15);
    scene = new THREE.Scene();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.target.set(0, 0, 0);
    controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
    controls.panSpeed = 0.8; // 패닝 속도 입니다. 기본값(Float)은 1입니다.
    controls.maxPolarAngle = Math.PI / 2.1;	// 카메라 하단 각도
    controls.minPolarAngle = Math.PI / 10;	// 카메라 상단 각도

    updateSize();
    window.addEventListener('resize', updateSize, false);

    setupLight();
    loadModel();
    animate();
  }

  const setupLight = () => {
    const color = 0xffffff;
    const intensity = 2.5
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(1, 2, 4);
    scene.add(light);
  }

  const loadModel = () => {
    const loader = new GLTFLoader();
    loader.load('/model/computer.gltf', (gltf) => {
      model = gltf.scene;
      model.name = 'computer';
      model.position.set(2.35, -4, 0);
      model.scale.set(1.5, 1.5, 1.5);
      model.rotation.y = -1.57;

      scene.add(model);
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    controls.update();
  };

  function updateSize() {
    width = window.innerWidth; cx = width / 2;
    height = targetHeight; cy = height / 2;
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

  useEffect(() => {
    init();
  }, []);

  return (
    <div css={background}>
      <canvas id="computer"></canvas>
    </div>
  )
}

export default ComputerCanvas