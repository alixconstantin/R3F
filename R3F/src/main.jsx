import './main.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import * as THREE from 'three'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
           <Canvas
              dpr={ [ 1, 2 ] }
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.LinearSRGBColorSpace
              }}
              camera={ {
              fov:45,
              near:0.1,
              far:200,
              position:[3,2,6]
           } }
           >
               <Experience />
          </Canvas>
  </>,
)
