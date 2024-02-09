import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { EXRLoader } from "three-stdlib";
import * as THREE from "three";

export const Background = ({ exrUrl }: any) => {
  const { scene } = useThree();

  useEffect(() => {
    new EXRLoader().setDataType(THREE.FloatType).load(exrUrl, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
    });
  }, [exrUrl, scene]);

  return null;
};

export default Background;
