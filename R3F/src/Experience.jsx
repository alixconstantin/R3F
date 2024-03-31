import { MeshBasicMaterial } from "three";

export default function Experience() {
  return (
    <>
      <mesh rotateY={Math.PI * 0.25} position-x={2} scale={1.5}>
       <boxGeometry/>
       
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
    </>
  );
}
