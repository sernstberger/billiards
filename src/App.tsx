import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ball from "./components/Ball";
import PoolTable from "./components/PoolTable";
import Background from "./components/Background";
const exrUrl = new URL("../public/country_club_4k.exr", import.meta.url).href;

const App = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <ambientLight intensity={1} />
        {/* <pointLight position={[10, 10, 10]} intensity={20} /> */}
        <spotLight position={[0, 10, 0]} intensity={30} />
        <Ball position={[0, 1, 0]} />
        <PoolTable />
        <Background exrUrl={exrUrl} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;
