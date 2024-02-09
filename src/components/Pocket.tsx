const Pocket = ({ position }: any) => (
  <mesh position={position}>
    <sphereGeometry args={[0.35, 16, 16]} /> {/* Pocket size and detail */}
    <meshStandardMaterial color="black" /> {/* Pocket color */}
  </mesh>
);
export default Pocket;
