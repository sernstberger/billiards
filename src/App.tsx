// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const PoolTable = () => {
  // Define your pool table component using Three.js primitives
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[10, 1, 5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <PoolTable />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;
