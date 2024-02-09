import { Box } from "@react-three/drei";

const PoolTable = () => {
  return (
    <>
      <Box args={[10, 1, 5]} receiveShadow castShadow>
        <meshStandardMaterial attach="material" color="green" />
      </Box>

      {/* right side */}
      <Box
        args={[0.5, 1.5, 5]}
        position={[5, 0.25, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial attach="material" color="brown" />
      </Box>

      {/* left side */}
      <Box
        args={[0.5, 1.5, 5]}
        position={[-5, 0.25, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial attach="material" color="brown" />
      </Box>

      {/* top side */}
      <Box args={[10.5, 1.5, 0.5]} position={[0, 0.25, -2.5]} castShadow>
        <meshStandardMaterial attach="material" color="brown" />
      </Box>

      {/* bottom side */}
      <Box args={[10.5, 1.5, 0.5]} position={[0, 0.25, 2.5]} castShadow>
        <meshStandardMaterial attach="material" color="brown" />
      </Box>
    </>
  );
};

export default PoolTable;
