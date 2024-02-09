const PoolTable = () => {
  // Define your pool table component using Three.js primitives
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[10, 1, 5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default PoolTable;
