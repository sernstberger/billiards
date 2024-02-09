import { ARButton, Controllers, Hands, VRButton, XR } from "@react-three/xr";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Background from "./components/Background";
import Ball from "./components/Ball";
import { Canvas } from "@react-three/fiber";
import PoolTable from "./components/PoolTable";
import { Suspense } from "react";
const exrUrl = new URL("../public/country_club_4k.exr", import.meta.url).href;

const App = () => {
  return (
    <>
      <VRButton />

      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <XR>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 5, 10]} />
            <ambientLight intensity={1} />
            <spotLight position={[0, 10, 0]} intensity={30} />
            <Ball position={[0, 1, 0]} />
            <PoolTable />
            <Background exrUrl={exrUrl} />
            <OrbitControls />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
};

export default App;
