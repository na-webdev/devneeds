import { Canvas } from "@react-three/fiber";
import {
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Plane,
  Text,
  Circle,
  Extrude,
} from "@react-three/drei";
import { Suspense } from "react";

export default function AnimatedSphere() {
  return (
    <div>
      <Canvas
        style={{
          height: "100vh",
          position: "fixed",
          background: "transparent",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere visible args={[2, 200, 50]} scale={2}>
            <MeshDistortMaterial
              color="rgba(32, 33, 34, 1)"
              attach="material"
              distort={0.3}
              speed={1.5}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  );
}
