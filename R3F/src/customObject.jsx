import * as THREE from "three";
import { useRef,useEffect,  useMemo } from "react";

export default function CustomObject()
{
  const verticesCount = 10 * 3;
  const geometryRef = useRef()

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3;

      return positions;
  });

  useEffect(() =>
  {
      geometryRef.current.computeVertexNormals()
  }, [ positions ])

  return (
    <mesh>
      <bufferGeometry ref={ geometryRef }>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="green" side={THREE.DoubleSide} />
    </mesh>
  );
}
