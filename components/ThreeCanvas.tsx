"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const requestIDRef = useRef<number | null>(null);  // To store the requestAnimationFrame ID
  const targetXRotation = useRef<number>(0);  // Target X rotation for model reset

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = sceneRef.current || new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup for orthographic view
    const aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
    const frustumSize = 10;  // Define the size of the frustum
    const camera = cameraRef.current || new THREE.OrthographicCamera(
      -frustumSize * aspect, 
      frustumSize * aspect, 
      frustumSize, 
      -frustumSize, 
      0.1, 
      1000
    );
    camera.position.set(5, 1, 0); // Position the camera
    camera.lookAt(0, 0, 0); // Look at the center
    cameraRef.current = camera;

    // Renderer setup
    const renderer = rendererRef.current || new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Load model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      "/models/green_isometric_house.glb",
      (gltf) => {
        // Remove the previous model from the scene if it exists
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }
        
        // Set new model
        modelRef.current = gltf.scene;
        modelRef.current.scale.set(1, 1, 1);  // Scale the model
        modelRef.current.position.set(0, -5, 0); // Center the model in the scene
        scene.add(modelRef.current);  // Add model to scene
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // OrbitControls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = true;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = 0;

    // Animation loop to rotate the model continuously
    const animate = () => {
      requestIDRef.current = requestAnimationFrame(animate);

      // Smoothly reset model's X rotation based on targetXRotation
      if (modelRef.current) {
        // Smoothly rotate back to the initial X rotation if needed
        const currentXRotation = modelRef.current.rotation.x;
        const rotationSpeed = 0.05;
        if (Math.abs(currentXRotation - targetXRotation.current) > 0.001) {
          modelRef.current.rotation.x += (targetXRotation.current - currentXRotation) * rotationSpeed;
        }
        
        // Keep rotating the model along the Y-axis continuously
        modelRef.current.rotation.y += 0.002;  // Rotate along Y axis
      }

      controls.update();
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && canvasRef.current) {
        const aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        const frustumSize = 10;
        cameraRef.current.left = -frustumSize * aspect;
        cameraRef.current.right = frustumSize * aspect;
        cameraRef.current.top = frustumSize;
        cameraRef.current.bottom = -frustumSize;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      // Cancel the animation frame request if it exists
      if (requestIDRef.current) {
        cancelAnimationFrame(requestIDRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.clear();  // Remove all objects from scene
        sceneRef.current = null;
      }

      modelRef.current = null;
    };
  }, []);  // Empty array to run the effect only once on mount

  return (
    <div
      ref={canvasRef}
      style={{ width: "100%", height: "350px" }}
    />
  );
};

export default ThreeCanvas;
