import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ball from "./components/Ball";
import PoolTable from "./components/PoolTable";

const App = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Ball position={[0, 2, 0]} />
        <PoolTable />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;
