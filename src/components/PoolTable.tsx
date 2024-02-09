import { Box } from "@react-three/drei";
import Pocket from "./Pocket";
import PoolBall from "./PoolBall";
import { ballPositions, ballColors } from "../utils/ballPositions";

const PoolTable = () => {
  return (
    <>
      {/* Table surface */}
      <Box args={[10, 1, 5]} receiveShadow castShadow>
        <meshStandardMaterial attach="material" color="green" />
      </Box>
      {/* Sides */}
      <Box
        args={[0.5, 1.5, 5]}
        position={[5, 0.25, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial attach="material" color="brown" />
      </Box>
      <Box
        args={[0.5, 1.5, 5]}
        position={[-5, 0.25, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial attach="material" color="brown" />
      </Box>
      <Box args={[10.5, 1.5, 0.5]} position={[0, 0.25, -2.5]} castShadow>
        <meshStandardMaterial attach="material" color="brown" />
      </Box>
      <Box args={[10.5, 1.5, 0.5]} position={[0, 0.25, 2.5]} castShadow>
        <meshStandardMaterial attach="material" color="brown" />
      </Box>
      <Pocket position={[-4.75, 0.5, -2.25]} />
      <Pocket position={[4.75, 0.5, -2.25]} />
      <Pocket position={[-4.75, 0.5, 2.25]} />
      <Pocket position={[4.75, 0.5, 2.25]} />
      <Pocket position={[0, 0.5, -2.25]} />
      <Pocket position={[0, 0.5, 2.25]} />
      {ballColors.map((color, index) => (
        <PoolBall key={index} color={color} position={ballPositions[index]} />
      ))}
    </>
  );
};

export default PoolTable;
