const Ball = ({ position, color }: any) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.285, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Ball;
