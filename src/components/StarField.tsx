import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import * as THREE from 'three';

const background = css`
	position: absolute;
	top: 0;
	z-index: -1;
`

const StarField = () => {
  const conf = {
    fov: 45,
    cameraZ: 5,
    el: 'star',
  };
  let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer, star: THREE.Mesh, stars: THREE.Mesh[] = [];
  let width: number, height: number, cx: number, cy: number, wWidth: number, wHeight: number;

  function init(){

    //camera
    // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera = new THREE.PerspectiveCamera(conf.fov);
    camera.position.z = conf.cameraZ;

    //scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x323232);

    //renderer
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el)! });

    updateSize();
    window.addEventListener('resize', updateSize, false);
  }

  function addSphere(){

    // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
    for ( var z= -1000; z < 1000; z+=20 ) {

      // Make a sphere (exactly the same as before).
      var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      var sphere = new THREE.Mesh(geometry, material)

      // This time we give the sphere random x and y positions between -500 and 500
      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;

      // Then set the z position to where it is in the loop (distance of camera)
      sphere.position.z = z;

      // scale it up a bit
      sphere.scale.x = sphere.scale.y = 10;

      //add the sphere to the scene
      scene.add( sphere );

      //finally push it to the stars array
      stars.push(sphere);
    }
  }

  function animateStars() {

    // loop through each star
    for(var i=0; i<stars.length; i++) {

      star = stars[i];

      // and move it forward dependent on the mouseY position.
      star.position.z +=  i/10;

      // if the particle is too close move it to the back
      if(star.position.z>1000) star.position.z-=2000;

    }

  }

  function render() {
    //get the frame
    requestAnimationFrame( render );

    //render the scene
    renderer.render( scene, camera );
    animateStars();
  }

  function updateSize() {
    width = window.innerWidth; cx = width / 2;
    height = 400; cy = height / 2;
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
    addSphere();
    render();
    return () => {
      window.removeEventListener('resize', updateSize, false);
    };
  }, []);

  return (
    <div css={background}>
      <canvas id="star"></canvas>
    </div>
  )
}

export default StarField