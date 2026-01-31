"use client";

import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Environment, useGLTF } from "@react-three/drei";
import { Box3, Group, MathUtils, Vector3 } from "three";

const MODEL_PATH = "/models/sci-fi_drill.glb";
const SPIN_SPEED = 2;

function Drill() {
  const { scene } = useGLTF(MODEL_PATH);

  const orientationRef = useRef<Group>(null);
  const spinRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!spinRef.current) return;
    // Spin ONLY on local X axis (drill axis)
    spinRef.current.rotation.x += delta * SPIN_SPEED;
  });

    useLayoutEffect(() => {
        const box = new Box3().setFromObject(scene);
        const size = new Vector3();
        box.getSize(size);

        console.log("Model size:", size);
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale =  5 / maxDimension;

        scene.scale.setScalar(scale);
    }, [scene]);

  return (
    <group
      ref={orientationRef}
      // 1️⃣ Static orientation: make the drill face the camera
      rotation={[
        MathUtils.degToRad(90),   // stand it up
        MathUtils.degToRad(-90),  // face the user
        0,
      ]}
    >
      <group ref={spinRef}>
        {/* 2️⃣ Spin happens here */}
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

export default function DrillingCanvas() {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 4]} intensity={1} />
        <Bounds fit clip observe>
          <Drill />
        </Bounds>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
