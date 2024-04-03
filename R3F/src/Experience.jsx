import { useThree, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./customObject";

extend({ OrbitControls });

export default function Experience()
{
  let cubeRef= useRef();
  let {camera, gl} = useThree();;

  useFrame((state, delta) => {
   // const angle = state.clock.elapsedTime;

    cubeRef.current.rotation.y += delta + 0.005;
    //state.camera.position.x = Math.sin(angle) * 8;
   // state.camera.position.z = Math.cos(angle) * 8;
    //state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
     <orbitControls args={[camera, gl.domElement]}/>

     <directionalLight position={[1,2,3]} intensity={4.5}/>
     <ambientLight intensity={1.5}/>


      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
 
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject/>
    </>

  );
}
