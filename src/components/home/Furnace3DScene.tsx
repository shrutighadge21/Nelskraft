"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Furnace3DSceneProps {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  onProgress?: (progress: number) => void;
}

/**
 * Creates procedural brick textures with authentic high-alumina terracotta tones,
 * porous ceramic grain, and subtle brick joint courses.
 */
function createRefractoryBrickTexture(): {
  colorMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
} {
  const width = 1024;
  const height = 1024;

  const colorCanvas = document.createElement("canvas");
  colorCanvas.width = width;
  colorCanvas.height = height;
  const ctx = colorCanvas.getContext("2d")!;

  // Base terracotta gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#cb7c43");
  grad.addColorStop(0.5, "#bd6e37");
  grad.addColorStop(1, "#ab5f2d");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Staggered refractory brick courses
  const rows = 16;
  const cols = 8;
  const rowHeight = height / rows;
  const colWidth = width / cols;

  ctx.strokeStyle = "rgba(45, 18, 6, 0.45)";
  ctx.lineWidth = 3;

  for (let r = 0; r <= rows; r++) {
    const y = r * rowHeight;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();

    const xOffset = (r % 2) * (colWidth / 2);
    for (let c = 0; c <= cols + 1; c++) {
      const x = c * colWidth - xOffset;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + rowHeight);
      ctx.stroke();
    }
  }

  // Ceramic chamotte grains & alumina inclusions
  const numGrains = 25000;
  for (let i = 0; i < numGrains; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const size = Math.random() * 2.2 + 0.5;
    const rand = Math.random();
    if (rand < 0.4) {
      ctx.fillStyle = `rgba(50, 22, 10, ${Math.random() * 0.3 + 0.1})`;
    } else if (rand < 0.8) {
      ctx.fillStyle = `rgba(245, 232, 215, ${Math.random() * 0.35 + 0.15})`;
    } else {
      ctx.fillStyle = `rgba(180, 95, 45, ${Math.random() * 0.25 + 0.1})`;
    }
    ctx.fillRect(rx, ry, size, size);
  }

  // --- Bump Map Canvas ---
  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bCtx = bumpCanvas.getContext("2d")!;

  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, width, height);

  // Recessed mortar joints in bump map
  bCtx.strokeStyle = "#353535";
  bCtx.lineWidth = 4;
  for (let r = 0; r <= rows; r++) {
    const y = r * rowHeight;
    bCtx.beginPath();
    bCtx.moveTo(0, y);
    bCtx.lineTo(width, y);
    bCtx.stroke();

    const xOffset = (r % 2) * (colWidth / 2);
    for (let c = 0; c <= cols + 1; c++) {
      const x = c * colWidth - xOffset;
      bCtx.beginPath();
      bCtx.moveTo(x, y);
      bCtx.lineTo(x, y + rowHeight);
      bCtx.stroke();
    }
  }

  for (let i = 0; i < 35000; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const v = Math.random() > 0.5 ? 255 : 0;
    bCtx.fillStyle = `rgba(${v}, ${v}, ${v}, ${Math.random() * 0.18 + 0.04})`;
    bCtx.fillRect(rx, ry, 2, 2);
  }

  const colorMap = new THREE.CanvasTexture(colorCanvas);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(2, 2);

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(2, 2);

  return { colorMap, bumpMap };
}

/**
 * Creates soft radial contact shadow texture for studio floor.
 */
function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, "rgba(20, 24, 30, 0.36)");
  gradient.addColorStop(0.35, "rgba(30, 36, 44, 0.22)");
  gradient.addColorStop(0.65, "rgba(45, 52, 60, 0.08)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Generates an extruded half-cylinder shell with thickness and smooth chamfered edges.
 * Stretches from x = 0 to x = +outerRadius.
 */
function createHalfCylinderGeometry(
  innerRadius: number,
  outerRadius: number,
  height: number,
  bevelThickness = 0.018
): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  // Outer arc (-PI/2 to +PI/2)
  shape.absarc(0, 0, outerRadius, -Math.PI / 2, Math.PI / 2, false);
  // Inner arc (+PI/2 to -PI/2)
  shape.absarc(0, 0, innerRadius, Math.PI / 2, -Math.PI / 2, true);
  shape.closePath();

  const extrudeSettings = {
    depth: height,
    bevelEnabled: true,
    bevelThickness,
    bevelSize: bevelThickness,
    bevelSegments: 2,
    curveSegments: 36,
  };

  const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  // Center along depth (Z axis before rotation)
  geo.translate(0, 0, -height / 2);
  // Rotate so cylinder axis lies along Y
  geo.rotateX(Math.PI / 2);
  return geo;
}

export default function Furnace3DScene({
  triggerRef,
  onProgress,
}: Furnace3DSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const triggerEl = triggerRef.current;
    if (!mount || !triggerEl) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      34,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    // Initial clear three-quarter camera framing
    const isMobileInitial = window.innerWidth < 1024;
    camera.position.set(0, isMobileInitial ? 0.6 : 0.8, isMobileInitial ? 8.2 : 6.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    mount.appendChild(renderer.domElement);

    // --- Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.7);
    keyLight.position.set(6, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe8f2fc, 1.3);
    fillLight.position.set(-6, 4, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(0, -4, -3);
    scene.add(rimLight);

    const cursorLight = new THREE.PointLight(0xffffff, 0.9, 12);
    cursorLight.position.set(2, 2, 4);
    scene.add(cursorLight);

    // --- Materials ---
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x222933,
      metalness: 0.82,
      roughness: 0.35,
    });

    const flangeMat = new THREE.MeshStandardMaterial({
      color: 0x36404d,
      metalness: 0.88,
      roughness: 0.28,
    });

    const insulationMat = new THREE.MeshStandardMaterial({
      color: 0xeee7dc,
      metalness: 0.04,
      roughness: 0.92,
    });

    const { colorMap, bumpMap } = createRefractoryBrickTexture();
    const refractoryMat = new THREE.MeshStandardMaterial({
      map: colorMap,
      bumpMap: bumpMap,
      bumpScale: 0.035,
      roughness: 0.82,
      metalness: 0.04,
    });

    const coreRefractoryMat = new THREE.MeshStandardMaterial({
      map: colorMap,
      bumpMap: bumpMap,
      bumpScale: 0.025,
      color: 0xb5632d,
      roughness: 0.78,
      metalness: 0.05,
    });

    const brandAccentMat = new THREE.MeshStandardMaterial({
      color: 0x54a937, // Nelskraft brand green
      metalness: 0.45,
      roughness: 0.35,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xa8d5e5,
      metalness: 0.1,
      roughness: 0.15,
      transparent: true,
      opacity: 0.65,
    });

    // --- Geometries & Assembly Construction ---
    const assemblyGroup = new THREE.Group();
    // Default 3/4 isometric perspective angle
    assemblyGroup.rotation.set(0.26, -0.55, 0.04);
    scene.add(assemblyGroup);

    // Dimensions
    const shellInnerR = 1.05;
    const shellOuterR = 1.15;
    const shellHeight = 2.1;

    const insulInnerR = 0.88;
    const insulOuterR = 1.03;
    const insulHeight = 2.05;

    const refrInnerR = 0.54;
    const refrOuterR = 0.86;
    const refrHeight = 2.0;

    // Helper: Build half shell casing with bolting flanges, rib, and lifting lug
    function buildShellHalf(isRight: boolean): THREE.Group {
      const group = new THREE.Group();

      // Main curved half shell
      const shellGeo = createHalfCylinderGeometry(
        shellInnerR,
        shellOuterR,
        shellHeight
      );
      const shellMesh = new THREE.Mesh(shellGeo, steelMat);
      shellMesh.castShadow = true;
      shellMesh.receiveShadow = true;
      group.add(shellMesh);

      // Flange bars along both split seams
      const flangeBarGeo = new THREE.BoxGeometry(0.12, shellHeight, 0.06);
      const flange1 = new THREE.Mesh(flangeBarGeo, flangeMat);
      flange1.position.set(0.06, 0, -(shellOuterR - 0.03));
      group.add(flange1);

      const flange2 = new THREE.Mesh(flangeBarGeo, flangeMat);
      flange2.position.set(0.06, 0, shellOuterR - 0.03);
      group.add(flange2);

      // Flange bolts
      const boltGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.05, 6);
      const boltCount = 6;
      for (let i = 0; i < boltCount; i++) {
        const by = -shellHeight / 2 + (shellHeight / (boltCount - 1)) * i;
        const b1 = new THREE.Mesh(boltGeo, flangeMat);
        b1.rotation.x = Math.PI / 2;
        b1.position.set(0.06, by, -(shellOuterR + 0.005));
        group.add(b1);

        const b2 = new THREE.Mesh(boltGeo, flangeMat);
        b2.rotation.x = Math.PI / 2;
        b2.position.set(0.06, by, shellOuterR + 0.005);
        group.add(b2);
      }

      // Circumferential reinforcement stiffener rib
      const ribGeo = createHalfCylinderGeometry(
        shellOuterR,
        shellOuterR + 0.05,
        0.08,
        0.008
      );
      const rib = new THREE.Mesh(ribGeo, flangeMat);
      group.add(rib);

      // Lifting eye lug on top (Brand green accent)
      const lugGeo = new THREE.BoxGeometry(0.08, 0.16, 0.18);
      const lug = new THREE.Mesh(lugGeo, brandAccentMat);
      lug.position.set(shellOuterR * 0.7, shellHeight / 2 + 0.08, 0);
      group.add(lug);

      // Inspection pyrometer viewport port on the right half
      if (isRight) {
        const portCollarGeo = new THREE.CylinderGeometry(
          0.16,
          0.16,
          0.24,
          24
        );
        portCollarGeo.rotateZ(Math.PI / 2);
        const portCollar = new THREE.Mesh(portCollarGeo, flangeMat);
        portCollar.position.set(shellOuterR + 0.1, 0.15, 0);
        group.add(portCollar);

        const glassGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.02, 24);
        glassGeo.rotateZ(Math.PI / 2);
        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.set(shellOuterR + 0.21, 0.15, 0);
        group.add(glass);
      }

      return group;
    }

    // 1. Outer Steel Shells
    const shellRight = buildShellHalf(true);
    assemblyGroup.add(shellRight);

    const shellLeft = buildShellHalf(false);
    shellLeft.rotation.y = Math.PI;
    assemblyGroup.add(shellLeft);

    // 2. Thermal Insulation Barrier Halves
    const insulGeo = createHalfCylinderGeometry(
      insulInnerR,
      insulOuterR,
      insulHeight,
      0.012
    );

    const insulationRight = new THREE.Mesh(insulGeo, insulationMat);
    insulationRight.castShadow = true;
    insulationRight.receiveShadow = true;
    assemblyGroup.add(insulationRight);

    const insulationLeft = new THREE.Mesh(insulGeo, insulationMat);
    insulationLeft.rotation.y = Math.PI;
    insulationLeft.castShadow = true;
    insulationLeft.receiveShadow = true;
    assemblyGroup.add(insulationLeft);

    // 3. Dense High-Alumina Refractory Brick Lining Halves (Signature Product)
    const refrGeo = createHalfCylinderGeometry(
      refrInnerR,
      refrOuterR,
      refrHeight,
      0.025
    );

    const refractoryLiningRight = new THREE.Mesh(refrGeo, refractoryMat);
    refractoryLiningRight.castShadow = true;
    refractoryLiningRight.receiveShadow = true;
    assemblyGroup.add(refractoryLiningRight);

    const refractoryLiningLeft = new THREE.Mesh(refrGeo, refractoryMat);
    refractoryLiningLeft.rotation.y = Math.PI;
    refractoryLiningLeft.castShadow = true;
    refractoryLiningLeft.receiveShadow = true;
    assemblyGroup.add(refractoryLiningLeft);

    // 4. Central Inner Refractory Crucible / Combustion Hearth Core
    const coreGroup = new THREE.Group();

    const coreCylinderGeo = new THREE.CylinderGeometry(
      refrInnerR - 0.02,
      refrInnerR - 0.02,
      refrHeight * 0.85,
      36,
      1,
      true
    );
    const coreMesh = new THREE.Mesh(coreCylinderGeo, coreRefractoryMat);
    coreMesh.castShadow = true;
    coreGroup.add(coreMesh);

    // Inner chamber floor
    const coreFloorGeo = new THREE.CylinderGeometry(
      refrInnerR - 0.03,
      refrInnerR - 0.03,
      0.15,
      36
    );
    const coreFloor = new THREE.Mesh(coreFloorGeo, coreRefractoryMat);
    coreFloor.position.y = -refrHeight * 0.35;
    coreGroup.add(coreFloor);

    assemblyGroup.add(coreGroup);

    // 5. Top Refractory Burner Crown (Conical throat cap)
    const crownShape = new THREE.Shape();
    crownShape.moveTo(0.35, 0);
    crownShape.lineTo(refrOuterR, 0);
    crownShape.lineTo(refrOuterR, 0.2);
    crownShape.lineTo(0.5, 0.45);
    crownShape.lineTo(0.35, 0.45);
    crownShape.closePath();

    const crownGeo = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.35, 0),
        new THREE.Vector2(refrOuterR, 0),
        new THREE.Vector2(refrOuterR, 0.2),
        new THREE.Vector2(0.5, 0.42),
        new THREE.Vector2(0.35, 0.42),
      ],
      40
    );
    const refractoryCrown = new THREE.Mesh(crownGeo, refractoryMat);
    refractoryCrown.position.y = refrHeight / 2;
    refractoryCrown.castShadow = true;
    assemblyGroup.add(refractoryCrown);

    // 6. Top Steel Exhaust Flue Cap / Collar
    const lidGroup = new THREE.Group();
    lidGroup.position.y = shellHeight / 2 + 0.12;

    const lidPlateGeo = new THREE.CylinderGeometry(
      shellOuterR + 0.08,
      shellOuterR + 0.08,
      0.08,
      40
    );
    const lidPlate = new THREE.Mesh(lidPlateGeo, flangeMat);
    lidPlate.castShadow = true;
    lidGroup.add(lidPlate);

    const fluePipeGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.5, 32);
    const fluePipe = new THREE.Mesh(fluePipeGeo, steelMat);
    fluePipe.position.y = 0.25;
    fluePipe.castShadow = true;
    lidGroup.add(fluePipe);

    const flueFlangeGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.06, 32);
    const flueFlange = new THREE.Mesh(flueFlangeGeo, flangeMat);
    flueFlange.position.y = 0.5;
    lidGroup.add(flueFlange);

    assemblyGroup.add(lidGroup);

    // 7. Bottom Refractory Hearth Disk
    const floorPlateGeo = new THREE.CylinderGeometry(
      refrOuterR,
      refrOuterR,
      0.22,
      40
    );
    const refractoryFloor = new THREE.Mesh(floorPlateGeo, refractoryMat);
    refractoryFloor.position.y = -refrHeight / 2 - 0.11;
    refractoryFloor.castShadow = true;
    assemblyGroup.add(refractoryFloor);

    // 8. Bottom Structural Steel Saddle Foundation Stand
    const baseGroup = new THREE.Group();
    baseGroup.position.y = -shellHeight / 2 - 0.22;

    const basePlateGeo = new THREE.CylinderGeometry(
      shellOuterR + 0.08,
      shellOuterR + 0.08,
      0.08,
      40
    );
    const basePlate = new THREE.Mesh(basePlateGeo, flangeMat);
    basePlate.castShadow = true;
    baseGroup.add(basePlate);

    // Twin heavy foundation feet
    const footGeo = new THREE.BoxGeometry(0.3, 0.4, 2.2);
    const foot1 = new THREE.Mesh(footGeo, steelMat);
    foot1.position.set(-0.65, -0.24, 0);
    foot1.castShadow = true;
    baseGroup.add(foot1);

    const foot2 = new THREE.Mesh(footGeo, steelMat);
    foot2.position.set(0.65, -0.24, 0);
    foot2.castShadow = true;
    baseGroup.add(foot2);

    assemblyGroup.add(baseGroup);

    // 9. Floor Contact Shadow
    const shadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(6.5, 4.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -2.15, 0);
    scene.add(shadowPlane);

    // --- GSAP ScrollTrigger Exploded-View Timeline ---
    // Connects scroll directly to 3D object separation & reassembly
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "top top",
        end: "+=150%",
        scrub: 1.0, // Buttery responsive scrub
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (onProgress) {
            onProgress(self.progress);
          }
        },
      },
    });

    // Stage A (Assembled: 0) -> Stage B (Separating) -> Stage C (Fully Exploded: 1)
    // 1. Outer steel shell halves move widest outward along X
    tl.to(
      shellLeft.position,
      { x: -2.75, z: -0.15, ease: "power1.inOut" },
      0
    )
      .to(
        shellLeft.rotation,
        { y: Math.PI - 0.08, ease: "power1.inOut" },
        0
      )
      .to(
        shellRight.position,
        { x: 2.75, z: -0.15, ease: "power1.inOut" },
        0
      )
      .to(
        shellRight.rotation,
        { y: 0.08, ease: "power1.inOut" },
        0
      )
      // 2. Thermal insulation barrier moves out to intermediate tier
      .to(
        insulationLeft.position,
        { x: -1.75, z: 0.08, ease: "power1.inOut" },
        0
      )
      .to(
        insulationRight.position,
        { x: 1.75, z: 0.08, ease: "power1.inOut" },
        0
      )
      // 3. Dense refractory brick lining separates cleanly around the core
      .to(
        refractoryLiningLeft.position,
        { x: -0.92, y: 0.15, z: 0.35, ease: "power1.inOut" },
        0
      )
      .to(
        refractoryLiningRight.position,
        { x: 0.92, y: 0.15, z: 0.35, ease: "power1.inOut" },
        0
      )
      // 4. Vertical components separate along Y
      .to(
        refractoryCrown.position,
        { y: 1.95, ease: "power1.inOut" },
        0
      )
      .to(
        lidGroup.position,
        { y: 2.85, ease: "power1.inOut" },
        0
      )
      .to(
        refractoryFloor.position,
        { y: -1.75, ease: "power1.inOut" },
        0
      )
      .to(
        baseGroup.position,
        { y: -2.35, ease: "power1.inOut" },
        0
      )
      // 5. Central refractory crucible steps slightly forward into focal center
      .to(
        coreGroup.position,
        { z: 0.28, y: 0.05, ease: "power1.inOut" },
        0
      )
      // 6. Overall assembly turns subtly to reveal internal components
      .to(
        assemblyGroup.rotation,
        { x: 0.3, y: -0.15, ease: "power1.inOut" },
        0
      )
      // 7. Camera dollies slightly back to keep the expanded assembly framed
      .to(
        camera.position,
        {
          y: isMobileInitial ? 1.0 : 1.25,
          z: isMobileInitial ? 9.2 : 7.8,
          ease: "power1.inOut",
        },
        0
      )
      // 8. Ground shadow expands with the wider assembly footprint
      .to(
        shadowPlane.scale,
        { x: 1.75, y: 1.25, ease: "power1.inOut" },
        0
      )
      .to(
        shadowMat,
        { opacity: 0.32, ease: "power1.inOut" },
        0
      );

    // --- Interactive Pointer Parallax ---
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointer.targetX = px;
      pointer.targetY = py;

      cursorLight.position.x = px * 3 + 1;
      cursorLight.position.y = py * 2 + 1;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // --- Handle Resize ---
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      const isMobile = w < 1024;
      const baseScale = w < 640 ? 0.65 : w < 1024 ? 0.82 : 1.0;
      assemblyGroup.scale.set(baseScale, baseScale, baseScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // --- Render Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Pointer smoothing
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      // Subtle breathing float on root position
      const idleFloatY = Math.sin(elapsedTime * 1.3) * 0.025;
      assemblyGroup.position.y = idleFloatY;

      // Subtle mouse tilt added on top of GSAP scroll rotation
      const mouseTiltX = pointer.y * 0.08;
      const mouseTiltY = pointer.x * 0.12;
      assemblyGroup.rotation.z = mouseTiltY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      // Kill GSAP ScrollTrigger instance
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      renderer.dispose();
      colorMap.dispose();
      bumpMap.dispose();
      shadowTexture.dispose();
      steelMat.dispose();
      flangeMat.dispose();
      insulationMat.dispose();
      refractoryMat.dispose();
      coreRefractoryMat.dispose();
      brandAccentMat.dispose();
      glassMat.dispose();
      shadowMat.dispose();
      shadowGeo.dispose();
    };
  }, [triggerRef, onProgress]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-label="Interactive 3D Refractory Furnace Exploded View Assembly"
    />
  );
}
