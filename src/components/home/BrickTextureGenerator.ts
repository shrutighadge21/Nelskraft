import * as THREE from "three";

/**
 * Procedural PBR texture generator for Nelskraft High Alumina Refractory Firebrick.
 * Produces authentic porous ceramic grain, chamotte aggregates, and debossed brand stamp.
 */
export function createRefractoryBrickTextures(): {
  colorMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
} {
  const width = 1024;
  const height = 1024;

  // --- 1. Color Map Canvas ---
  const colorCanvas = document.createElement("canvas");
  colorCanvas.width = width;
  colorCanvas.height = height;
  const ctx = colorCanvas.getContext("2d")!;

  // Base earthy terracotta/buff refractory gradient (authentic Indian fireclay)
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#c67b45");
  grad.addColorStop(0.3, "#d28751");
  grad.addColorStop(0.7, "#bd733d");
  grad.addColorStop(1, "#ad6431");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // High-frequency porous grain and chamotte aggregate flecks
  const numGrains = 45000;
  for (let i = 0; i < numGrains; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const size = Math.random() * 2.2 + 0.5;
    const randType = Math.random();

    if (randType < 0.45) {
      // Dark iron oxide & calcined chamotte flecks
      ctx.fillStyle = `rgba(55, 26, 12, ${Math.random() * 0.28 + 0.1})`;
    } else if (randType < 0.8) {
      // Light alumina silica inclusions
      ctx.fillStyle = `rgba(246, 235, 218, ${Math.random() * 0.38 + 0.15})`;
    } else {
      // Sandy ochre midtones
      ctx.fillStyle = `rgba(175, 98, 48, ${Math.random() * 0.32 + 0.1})`;
    }

    ctx.fillRect(rx, ry, size, size);
  }

  // Soft subtle organic kiln baking marks / cloudiness
  for (let b = 0; b < 14; b++) {
    const bx = Math.random() * width;
    const by = Math.random() * height;
    const brad = Math.random() * 200 + 80;
    const bgrad = ctx.createRadialGradient(bx, by, 0, bx, by, brad);
    bgrad.addColorStop(0, "rgba(80, 40, 15, 0.09)");
    bgrad.addColorStop(1, "rgba(80, 40, 15, 0)");
    ctx.fillStyle = bgrad;
    ctx.beginPath();
    ctx.arc(bx, by, brad, 0, Math.PI * 2);
    ctx.fill();
  }

  // --- Stamped Brand Imprint on Center of Brick (Top Face) ---
  ctx.save();
  ctx.translate(width / 2, height / 2);

  // Outer debossed frame
  ctx.strokeStyle = "rgba(65, 30, 12, 0.55)";
  ctx.lineWidth = 5;
  ctx.strokeRect(-320, -145, 640, 290);

  ctx.strokeStyle = "rgba(245, 225, 200, 0.45)";
  ctx.lineWidth = 2;
  ctx.strokeRect(-315, -140, 630, 280);

  // Brand Name
  ctx.textAlign = "center";
  ctx.font = "900 68px 'Segoe UI', system-ui, -apple-system, sans-serif";
  ctx.fillStyle = "rgba(42, 16, 6, 0.72)";
  ctx.letterSpacing = "8px";
  ctx.fillText("NELSKRAFT", 0, -28);

  // Sub-brand / Grade info
  ctx.font = "bold 26px 'Segoe UI', system-ui, -apple-system, sans-serif";
  ctx.fillStyle = "rgba(52, 22, 8, 0.65)";
  ctx.letterSpacing = "2px";
  ctx.fillText("HIGH ALUMINA  •  GRADE IS-8", 0, 32);

  ctx.font = "bold 21px 'Segoe UI', system-ui, -apple-system, sans-serif";
  ctx.fillStyle = "rgba(65, 30, 12, 0.58)";
  ctx.letterSpacing = "1.5px";
  ctx.fillText("1500°C – 1700°C  |  PUNE, INDIA", 0, 78);

  ctx.restore();

  // --- 2. Bump Map Canvas ---
  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bCtx = bumpCanvas.getContext("2d")!;

  // Neutral gray 50%
  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, width, height);

  // Rough ceramic gritty bump noise
  for (let i = 0; i < 65000; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const v = Math.random() > 0.5 ? 255 : 0;
    const alpha = Math.random() * 0.22 + 0.05;
    bCtx.fillStyle = `rgba(${v}, ${v}, ${v}, ${alpha})`;
    bCtx.fillRect(rx, ry, Math.random() * 2 + 1, Math.random() * 2 + 1);
  }

  // Debossed Stamp in Bump Map (darker = indented recessed into surface)
  bCtx.save();
  bCtx.translate(width / 2, height / 2);

  bCtx.strokeStyle = "#2c2c2c";
  bCtx.lineWidth = 6;
  bCtx.strokeRect(-320, -145, 640, 290);

  bCtx.textAlign = "center";
  bCtx.font = "900 68px 'Segoe UI', system-ui, -apple-system, sans-serif";
  bCtx.fillStyle = "#181818";
  bCtx.letterSpacing = "8px";
  bCtx.fillText("NELSKRAFT", 0, -28);

  bCtx.font = "bold 26px 'Segoe UI', system-ui, -apple-system, sans-serif";
  bCtx.fillStyle = "#282828";
  bCtx.letterSpacing = "2px";
  bCtx.fillText("HIGH ALUMINA  •  GRADE IS-8", 0, 32);

  bCtx.font = "bold 21px 'Segoe UI', system-ui, -apple-system, sans-serif";
  bCtx.fillStyle = "#383838";
  bCtx.letterSpacing = "1.5px";
  bCtx.fillText("1500°C – 1700°C  |  PUNE, INDIA", 0, 78);

  bCtx.restore();

  // --- 3. Roughness Map Canvas ---
  const roughCanvas = document.createElement("canvas");
  roughCanvas.width = width;
  roughCanvas.height = height;
  const rCtx = roughCanvas.getContext("2d")!;

  // High roughness base (matte refractory fireclay ~80% roughness)
  rCtx.fillStyle = "#c8c8c8";
  rCtx.fillRect(0, 0, width, height);

  // Specular micro-flecks (quartz/calcined alumina grains with sheen)
  for (let i = 0; i < 24000; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    rCtx.fillStyle = `rgba(130, 130, 130, ${Math.random() * 0.4 + 0.1})`;
    rCtx.fillRect(rx, ry, 2, 2);
  }

  // Create Three.js textures
  const colorMap = new THREE.CanvasTexture(colorCanvas);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;

  return { colorMap, bumpMap, roughnessMap };
}
