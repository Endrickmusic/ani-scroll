import { useRef } from "react"  
import { Canvas } from "@react-three/fiber"
import { Environment, useScroll, ScrollControls, Scroll } from "@react-three/drei"

import './index.css'

import Model from "./Model.jsx"
import Overlay from "./Overlay.jsx"


export default function App() {

 return (
  <>
    <Canvas 
    shadows 
    camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <Environment preset="city" />
        <color 
          attach="background" 
          args={["#222222"]} />
      <ambientLight intensity={1} />

      <ScrollControls>
          <Model />

        <Scroll html>
          <Overlay />
        </Scroll>
      

      </ScrollControls>

      </Canvas>
    
    
  
  </>
  )
}

