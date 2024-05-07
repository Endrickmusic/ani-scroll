import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import './index.css'

import Experience from "./Experience.jsx"
import Model from "./Model.jsx"


export default function App() {

 return (

    <Canvas shadows camera={{ position: [0, 0, 4], fov: 40 }}>
      <Environment
        files="./textures/envmap.hdr" />
        <color 
          attach="background" 
          args={["#222222"]} />
      <Model />
    </Canvas>
  
  );
}

