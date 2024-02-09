import { Sphere } from "@react-three/drei";

const PoolBall = ({ color, position }: any) => (
  <Sphere args={[0.285, 32, 32]} position={position}>
    <meshStandardMaterial color={color} />
  </Sphere>
);
export default PoolBall;
