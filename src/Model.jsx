import { useRef, useEffect } from "react"
import { MathUtils } from "three"
import { useFrame } from "@react-three/fiber"
import {
  useGLTF,
  useAnimations,
  OrthographicCamera,
  useScroll,
} from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./models/ortho_01.glb")
  const { actions } = useAnimations(animations, group)

  const scrolling = useScroll()

  const extras = {
    receiveShadow: true,
    castShadow: true,
    "material-envMapIntensity": 0.2,
  }

  console.log(actions)

  useEffect(() => void (actions["CameraAction"].play().paused = true), [])

  useFrame((state) => {
    const scroll = scrolling.offset

    actions["CameraAction"].time = MathUtils.lerp(
      actions["CameraAction"].time,
      actions["CameraAction"].getClip().duration * scroll,
      0.05
    )
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Name"
          castShadow
          receiveShadow
          geometry={nodes.Name.geometry}
          material={materials.Schrift}
          position={[1.2, 1.2, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object"
          castShadow
          receiveShadow
          geometry={nodes.Object.geometry}
          material={materials.painted_plaster_wall}
          position={[0, 1, 0]}
        />
        <mesh
          name="Portfolio"
          castShadow
          receiveShadow
          geometry={nodes.Portfolio.geometry}
          material={materials.Schrift}
          position={[-1.8, -2.8, 6]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          far={184.1}
          near={0.001}
          position={[7, 4, 7]}
          rotation={[-0.645, 0.674, 0.439]}
          zoom={100}
        >
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </OrthographicCamera>
      </group>
    </group>
  )
}

useGLTF.preload("./models/ortho_01.glb")
