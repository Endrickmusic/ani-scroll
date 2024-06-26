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
  const textRef = useRef()
  const { nodes, materials, animations } = useGLTF("./models/ortho_02.glb")
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

    console.log(scroll)

    // textRef.current.material.opacity = 1 - scroll
    textRef.current.material.transparent = true

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
          ref={textRef}
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
        <mesh
          name="Object001"
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials.painted_plaster_wall}
          position={[6, -11, 6]}
        />
        <mesh
          name="Works"
          castShadow
          receiveShadow
          geometry={nodes.Works.geometry}
          material={materials.Schrift}
          position={[5.692, -3.8, 1.038]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        />
        <mesh
          name="Projects"
          castShadow
          receiveShadow
          geometry={nodes.Projects.geometry}
          material={materials.Schrift}
          position={[7.692, -5.8, -1.182]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Works2"
          castShadow
          receiveShadow
          geometry={nodes.Works2.geometry}
          material={materials.Schrift}
          position={[-0.308, -5.8, 2.233]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        />
        <mesh
          name="Works3"
          castShadow
          receiveShadow
          geometry={nodes.Works3.geometry}
          material={materials.Schrift}
          position={[1.2, -8.8, 6]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="Projects2"
          castShadow
          receiveShadow
          geometry={nodes.Projects2.geometry}
          material={materials.Schrift}
          position={[7.692, -8.345, -0.182]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="Contact"
          castShadow
          receiveShadow
          geometry={nodes.Contact.geometry}
          material={materials.Schrift}
          position={[3.184, -2.8, 6]}
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
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            intensity={3}
            shadow-bias={-0.0001}
          />
        </OrthographicCamera>
      </group>
    </group>
  )
}

useGLTF.preload("./models/ortho_01.glb")
