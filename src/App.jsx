import { useRef } from "react"  
import { Canvas } from "@react-three/fiber"
import { Environment, useScroll, ScrollControls, Scroll } from "@react-three/drei"

import './index.css'

import Experience from "./Experience.jsx"
import Model from "./Model.jsx"
import Overlay from "./Overlay.jsx"


export default function App() {

  const overlay = useRef()
  const caption = useRef()

 return (
  <>
    <Canvas 
    shadows 
    camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <Environment
        files="./textures/envmap.hdr" />
        <color 
          attach="background" 
          args={["#222222"]} />

      <ScrollControls pages={4} damping={0.1}>
          <Model />

      </ScrollControls>
    </Canvas>
    
    {/* <Overlay ref={overlay} caption={caption} scroll={scroll} /> */}
  
  </>
  )
}

