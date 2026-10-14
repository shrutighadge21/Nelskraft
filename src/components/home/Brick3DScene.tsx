"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createRefractoryBrickTextures } from "./BrickTextureGenerator";

interface Brick3DSceneProps {
  scrollProgress: number; // 0 to 1 driven by GSAP ScrollTrigger
  interactiveHover?: boolean;
}

/**
 * Creates a soft radial contact shadow texture for a pure studio floor.
 */
function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, "rgba(25, 30, 36, 0.32)");
  gradient.addColorStop(0.3, "rgba(35, 40, 48, 0.22)");
  gradient.addColorStop(0.6, "rgba(50, 55, 65, 0.08)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function Brick3DScene({
  scrollProgress = 0,
  interactiveHover = true,
}: Brick3DSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        console.warn("WebGL not supported, falling back.");
        return;
      }
    } catch {
      return;
    }

    // --- Scene Setup (Pure Clean Studio) ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      36,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    mount.appendChild(renderer.domElement);

    // --- Clean Studio Lighting (Optimized for White Background) ---
    // 1. Studio Ambient Fill Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // 2. Main Key Directional Light (Warm industrial studio illumination)
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.6);
    keyLight.position.set(5.5, 7.5, 5.0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // 3. Soft Cool Fill Light (Softens contrast on left chamfers)
    const fillLight = new THREE.DirectionalLight(0xe8f2fc, 1.2);
    fillLight.position.set(-5, 4, 3);
    scene.add(fillLight);

    // 4. Clean Edge Rim Light (Highlights chamfer bevel definition)
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.3);
    rimLight.position.set(0, -4, -3);
    scene.add(rimLight);

    // 5. Interactive Cursor Spotlight (sweeps sheen over the brick)
    const cursorLight = new THREE.PointLight(0xffffff, 0.9, 12);
    cursorLight.position.set(2, 2, 4);
    scene.add(cursorLight);

    // --- Geometry: Chamfered Refractory Brick ---
    // Standard firebrick dimensional ratio (approx 230 × 115 × 75 mm)
    const brickLength = 2.4;
    const brickWidth = 1.2;
    const brickHeight = 0.75;
    const chamferRadius = 0.045;

    const shape = new THREE.Shape();
    const x = -brickLength / 2;
    const y = -brickWidth / 2;
    const w = brickLength;
    const h = brickWidth;

    shape.moveTo(x + chamferRadius, y);
    shape.lineTo(x + w - chamferRadius, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + chamferRadius);
    shape.lineTo(x + w, y + h - chamferRadius);
    shape.quadraticCurveTo(x + w, y + h, x + w - chamferRadius, y + h);
    shape.lineTo(x + chamferRadius, y + h);
    shape.quadraticCurveTo(x, y + h, x, y + h - chamferRadius);
    shape.lineTo(x, y + chamferRadius);
    shape.quadraticCurveTo(x, y, x + chamferRadius, y);

    const extrudeSettings = {
      steps: 1,
      depth: brickHeight - chamferRadius * 2,
      bevelEnabled: true,
      bevelThickness: chamferRadius,
      bevelSize: chamferRadius,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const brickGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    brickGeometry.center();
    brickGeometry.computeBoundingBox();

    // Normalize UV coordinates for front cap so the debossed stamp is centered
    if (brickGeometry.boundingBox) {
      const min = brickGeometry.boundingBox.min;
      const max = brickGeometry.boundingBox.max;
      const uv = brickGeometry.attributes.uv;
      const normal = brickGeometry.attributes.normal;

      for (let i = 0; i < uv.count; i++) {
        const nz = normal ? normal.getZ(i) : 0;
        // Front cap (+Z facing) receives centered [0, 1] UVs
        if (nz > 0.5) {
          const u = (uv.getX(i) - min.x) / (max.x - min.x);
          const v = (uv.getY(i) - min.y) / (max.y - min.y);
          uv.setXY(i, u, v);
        } else if (nz < -0.5) {
          // Back cap
          const u = (uv.getX(i) - min.x) / (max.x - min.x);
          const v = (uv.getY(i) - min.y) / (max.y - min.y);
          uv.setXY(i, u, v);
        } else {
          // Side bevels and walls tile seamlessly
          uv.setXY(i, uv.getX(i) * 1.5, uv.getY(i) * 1.5);
        }
      }
      uv.needsUpdate = true;
    }

    // PBR Refractory Fireclay Textures
    const { colorMap, bumpMap, roughnessMap } = createRefractoryBrickTextures();

    const brickMaterial = new THREE.MeshStandardMaterial({
      map: colorMap,
      bumpMap: bumpMap,
      bumpScale: 0.035,
      roughnessMap: roughnessMap,
      roughness: 0.8,
      metalness: 0.02,
    });

    const brickMesh = new THREE.Mesh(brickGeometry, brickMaterial);
    brickMesh.castShadow = true;
    brickMesh.receiveShadow = true;

    // Root Group for 3D Transformations
    const brickGroup = new THREE.Group();
    brickGroup.add(brickMesh);

    // Initial position: shifted to right side on desktop
    const isDesktop = window.innerWidth >= 1024;
    brickGroup.position.set(isDesktop ? 1.35 : 0, 0.05, 0);
    brickGroup.rotation.set(0.35, -0.6, 0.08);
    scene.add(brickGroup);

    // --- Studio Contact Floor Shadow ---
    const shadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(5.5, 3.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(isDesktop ? 1.35 : 0, -1.65, 0);
    scene.add(shadowPlane);

    // --- Mouse Pointer Interactivity ---
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      if (!interactiveHover) return;
      const rect = mount.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointer.targetX = px;
      pointer.targetY = py;

      // Update cursor light target
      cursorLight.position.x = px * 3 + 1;
      cursorLight.position.y = py * 2 + 1;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // --- Handle Window Resize ---
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Adjust scale and position based on viewport
      const scale = w < 640 ? 0.7 : w < 1024 ? 0.88 : 1.0;
      brickMesh.scale.set(scale, scale, scale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // --- High-Performance Animation Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;
      const progress = scrollProgressRef.current; // 0 to 1

      // Smooth pointer interpolation (damping)
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      // Subtle breathing float when resting
      const floatY = Math.sin(elapsedTime * 1.4) * 0.035;
      const floatRot = Math.cos(elapsedTime * 0.9) * 0.015;

      // --- Multi-Stage Scroll Trajectory ---
      // Start (Hero view): Position right, hero isometric angle
      // Middle (Product Inspection): Centered slightly, tilted forward to reveal debossed face stamp & bevels
      // End (Transition): Sinks downward gracefully toward product categories
      const isMobile = window.innerWidth < 1024;
      const targetBaseX = isMobile ? 0 : 1.35 - progress * 0.75;
      const targetBaseY = 0.05 + floatY - progress * 1.3;
      const targetBaseZ = progress * 0.7;

      // Target Rotations
      // Progress 0: rx = 0.35, ry = -0.6, rz = 0.08
      // Progress 0.5: rx = 0.82 (shows debossed brand stamp), ry = 0.22, rz = -0.12
      // Progress 1.0: rx = 1.15, ry = 1.15, rz = -0.18
      const targetRotX =
        0.35 + progress * 0.8 + floatRot + pointer.y * 0.25;
      const targetRotY =
        -0.6 + progress * 1.75 + pointer.x * 0.35;
      const targetRotZ =
        0.08 - progress * 0.26;

      // Smooth lerp for buttery organic 3D movement
      brickGroup.position.x += (targetBaseX - brickGroup.position.x) * 0.08;
      brickGroup.position.y += (targetBaseY - brickGroup.position.y) * 0.08;
      brickGroup.position.z += (targetBaseZ - brickGroup.position.z) * 0.08;

      brickGroup.rotation.x += (targetRotX - brickGroup.rotation.x) * 0.08;
      brickGroup.rotation.y += (targetRotY - brickGroup.rotation.y) * 0.08;
      brickGroup.rotation.z += (targetRotZ - brickGroup.rotation.z) * 0.08;

      // Contact shadow follows brick in X and scales with distance
      shadowPlane.position.x = brickGroup.position.x;
      const shadowScale = Math.max(0.65, 1 - Math.abs(brickGroup.position.y) * 0.2);
      shadowPlane.scale.set(shadowScale, shadowScale, shadowScale);
      shadowMat.opacity = Math.max(0.35, 0.75 - Math.abs(brickGroup.position.y) * 0.25);

      // Render Scene
      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      brickGeometry.dispose();
      brickMaterial.dispose();
      colorMap.dispose();
      bumpMap.dispose();
      roughnessMap.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTexture.dispose();
      renderer.dispose();
    };
  }, [interactiveHover]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-label="Interactive 3D Refractory Firebrick Product Visualization"
    />
  );
}
