/*! MTW-CANVAS-DISKS: MAIN.JS
 * 
 * Author: sitdisch
 * Source: https://github.com/mythemeway
 * License: MIT
 * Copyright: © 2022 sitdisch
 *
 * FRAGMENT SHADER IS BASED ON:
 * 
 * Shadertoy: CoordSys - intersection
 * 
 * Original Author: Inigo Quilez
 * Source: https://www.shadertoy.com/view/lsfGDB
 * License: MIT
 * Copyright: © 2013 Inigo Quilez
 * Changes: made
 */

"use strict";

import { WebGLRenderer, OrthographicCamera, Scene, PlaneGeometry, ShaderMaterial, Mesh } from 'three';
import { fragmentShader as fs, renaming } from './shaders.glslx';

(() => {
  const canvas = document.getElementById(MTW_CANVAS_ID);
  
  canvas.style.backgroundColor="black";
  
  const renderer = new WebGLRenderer({canvas});
  
  const camera = new OrthographicCamera(
    -1, // left
     1, // right
     1, // top
    -1, // bottom
    -1, // near,
     1, // far
  );
  
  const scene = new Scene();
  
  const geometry = new PlaneGeometry(2, 2);

  const uniforms = {
    [renaming.iTime]: { value: 0 },
    [renaming.iResolution]:  { value: [] },
  };
  
  const fragmentShader = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n"+fs;
  
  const material = new ShaderMaterial({
    fragmentShader,
    uniforms,
  });
  
  scene.add(new Mesh(geometry, material));
  
  const randomStart = Math.floor(Math.random() * 100);
  
  function animate() {
    uniforms[renaming.iTime].value = randomStart + performance.now() / 4500;
    uniforms[renaming.iResolution].value = [canvas.clientWidth, canvas.clientHeight, 1];
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.render(scene, camera);
    setTimeout(() => requestAnimationFrame(animate), 100);
  };
  
  requestAnimationFrame(animate);
})();
