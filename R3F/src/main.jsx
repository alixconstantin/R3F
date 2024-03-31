import './main.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
           <Canvas>
               <Experience />
          </Canvas>
  </>,
)
