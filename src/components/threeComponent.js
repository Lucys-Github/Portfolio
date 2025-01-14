import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Create camera (field of view, aspect ratio, near and far clipping planes)
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    // Create renderer and set transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create cube geometry
    const geometry = new THREE.BoxGeometry();

    // Material for the cube (green color)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create lines for the edges of the cube (black color)
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }); // Black color for lines
    const line = new THREE.LineSegments(edges, lineMaterial);
    scene.add(line);


    // Position camera
    camera.position.z = 3;

    // Animation function to rotate cube and lines
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      // Check if mountRef is still valid
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100px', // smaller canvas width
        height: '100px', // smaller canvas height
        margin: '0 auto',
        backgroundColor: 'transparent', // ensure background is transparent
      }}
    ></div>
  );
};

export default RotatingCube;
