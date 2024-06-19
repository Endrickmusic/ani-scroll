import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Environment,
  useScroll,
  ScrollControls,
  Scroll,
} from "@react-three/drei"

import "./index.css"

import Model from "./Model.jsx"
import Overlay from "./Overlay.jsx"
import BlobShader from "./BlobShader.jsx"

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 14], fov: 40 }}>
        {/* <Environment preset="forest" /> */}
        <color attach="background" args={["#111111"]} />
        <ambientLight intensity={0.0} />

        <ScrollControls pages={4}>
          <Model />
          <BlobShader />
          {/* <Overlay /> */}
        </ScrollControls>
      </Canvas>
    </>
  )
}
