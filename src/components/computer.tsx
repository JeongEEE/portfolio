import React, { useState, useEffect } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const ComputerCanvas = () => {
  const conf = { fov: 45, cameraZ: 5, el: 'computer' };
  let targetHeight = window.innerHeight;
  let renderer: THREE.WebGLRenderer | null = null;
  let scene: THREE.Scene | null = null;
  let camera: THREE.PerspectiveCamera | null = null;
  let model: THREE.Object3D | null = null;
  let controls: OrbitControls | null = null;
  let width: number, height: number, cx: number, cy: number, wWidth: number, wHeight: number;
  let clock = new THREE.Clock();
  const [modelLoading, setModelLoading] = useState(true)

  // 화면 너비에 따라 카메라 Z 거리 반환 (값이 작을수록 크게 보임)
  const getCameraZ = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 30;      // PC
    if (w >= 768) return 40;       // 태블릿
    return 60;                    // 모바일 (기존과 동일)
  };

  const getCameraY = () => {
    const w = window.innerWidth;
    if (w >= 1024) return -10;      // PC
    if (w >= 768) return -15;       // 태블릿
    return -22;                    // 모바일 (기존과 동일)
  }

  const init = () => {
    const infoWidth = window.innerWidth;
    const infoHeight = window.innerHeight;
    targetHeight = infoHeight;
    const canvas = document.getElementById(conf.el) as HTMLCanvasElement;
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor( 0x000000, 0 );
    camera = new THREE.PerspectiveCamera(conf.fov, infoWidth / infoHeight, 0.1, 100);
    camera.position.set(0, 3.5, getCameraZ());
    scene = new THREE.Scene();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.target.set(0, 0, 0);

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
    scene!.add(light);
  }

  const loadModel = () => {
    setModelLoading(true);
    const loader = new GLTFLoader();
    loader.load('/model/computer.gltf', (gltf) => {
      model = gltf.scene;
      model.name = 'computer';
      model.position.set(2.35, getCameraY(), 0);
      model.scale.set(1.5, 1.5, 1.5);
      model.rotation.y = -1.57;

      scene!.add(model);
      setModelLoading(false);
    },function (xhr) {
      // inside the onProgress callback (Optional)
      let progress = (xhr.loaded / xhr.total) * 100;
    }, function (error) {
      setModelLoading(false);
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    // 좌우 자동 흔들림: 사인파 기반으로 카메라 X 위치를 천천히 이동
    const elapsed = clock.getElapsedTime();
    const swingAmplitude = 1.2;   // 좌우 최대 이동 폭 (단위: 3D 좌표)
    const swingSpeed = 0.4;       // 초당 사이클 속도 (낮을수록 느림)
    if (camera) {
      camera.position.x = Math.sin(elapsed * swingSpeed) * swingAmplitude;
      controls!.update();
    }

    renderer!.render(scene!, camera!);
  };

  function updateSize() {
    width = window.innerWidth; cx = width / 2;
    height = window.innerHeight; cy = height / 2;
    targetHeight = height;
    if (renderer && camera) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // 화면 크기 변경 시 카메라 Z도 재조정
      camera.position.z = getCameraZ();
      const wsize = getRendererSize();
      wWidth = wsize[0];
      wHeight = wsize[1];
    }
  }

  function getRendererSize() {
    const cam = new THREE.PerspectiveCamera(camera!.fov, camera!.aspect);
    const vFOV = cam.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    const width = height * cam.aspect;
    return [width, height];
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas id="computer"></canvas>
      {modelLoading
        ? <div className="absolute bottom-[10vh] left-[49vw] z-[5]">
            <div className="w-8 h-8 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
          </div>
        : null
      }
    </div>
  )
}

export default ComputerCanvas
