import { useRef, useEffect, useState } from "react"
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
  const { nodes, materials, animations } = useGLTF(
    "./models/ortho_images_01.glb"
  )
  const { actions } = useAnimations(animations, group)

  const [nameIsVisible, setNameIsVisible] = useState(true)
  const [WorksIsVisible, setWorksIsVisible] = useState(false)
  const [ProjectsIsVisible, setProjectsIsVisible] = useState(false)
  const [Works2IsVisible, setWorks2IsVisible] = useState(false)
  const [Works3IsVisible, setWorks3IsVisible] = useState(false)
  const [Projects2IsVisible, setProjects2IsVisible] = useState(false)
  const [ContactIsVisible, setContactIsVisible] = useState(false)

  const scrolling = useScroll()

  const extras = {
    receiveShadow: true,
    castShadow: true,
    "material-envMapIntensity": 0.2,
  }

  console.log(actions)

  useEffect(() => {
    // initialize animation
    actions["CameraAction"].play().paused = true
    actions["NameAction"].play().paused = true
  }, [])

  useFrame((state) => {
    const scroll = scrolling.offset
    // setNameIsVisible(scrolling.offset > -0.1 && scrolling.offset < 0.1)
    // setWorksIsVisible(scrolling.offset > 0.11 && scrolling.offset < 0.24)
    // setProjectsIsVisible(scrolling.offset > 0.18 && scrolling.offset < 0.33)
    // setWorks2IsVisible(scrolling.offset > 0.23 && scrolling.offset < 0.44)
    // setWorks3IsVisible(scrolling.offset > 0.34 && scrolling.offset < 0.64)
    // setProjects2IsVisible(scrolling.offset > 0.54 && scrolling.offset < 0.78)
    // setContactIsVisible(scrolling.offset > 0.68 && scrolling.offset < 0.85)

    // textRef.current.material.opacity = 1 - scroll
    // textRef.current.material.transparent = true

    // console.log(scroll)

    actions["CameraAction"].time = MathUtils.lerp(
      actions["CameraAction"].time,
      actions["CameraAction"].getClip().duration * scroll,
      0.05
    )
    // Camera move animation
    if (scroll <= 1) {
      const nameActionProgress = MathUtils.mapLinear(scroll, 0.1, 0.2, 0, 1)
      actions["NameAction"].time =
        nameActionProgress * actions["NameAction"].getClip().duration
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Name"
          castShadow
          receiveShadow
          geometry={nodes.Name.geometry}
          material={materials.painted_plaster_wall}
          position={[1.2, 1.2, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Portfolio"
          castShadow
          receiveShadow
          geometry={nodes.Portfolio.geometry}
          material={materials.painted_plaster_wall}
          position={[-0.9, -1.7, 12.917]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Object"
          castShadow
          receiveShadow
          geometry={nodes.Object.geometry}
          material={materials.painted_plaster_wall}
          position={[6, -11, 6]}
        />
        <mesh
          name="Work1"
          castShadow
          receiveShadow
          geometry={nodes.Work1.geometry}
          material={materials.painted_plaster_wall}
          position={[-15.955, 0.91, 0.929]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Works2"
          castShadow
          receiveShadow
          geometry={nodes.Works2.geometry}
          material={materials.Schrift}
          position={[-0.308, -5.8, 1.643]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
        />
        <mesh
          name="Works3"
          castShadow
          receiveShadow
          geometry={nodes.Works3.geometry}
          material={materials.Schrift}
          position={[1.71, -9.12, 6]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="Contact"
          castShadow
          receiveShadow
          geometry={nodes.Contact.geometry}
          material={materials.painted_plaster_wall}
          position={[7.692, -8.655, 2.298]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="Imprint"
          castShadow
          receiveShadow
          geometry={nodes.Imprint.geometry}
          material={materials.Schrift}
          position={[3.584, -2.8, 6.28]}
        />
        <mesh
          name="Ocean_01"
          castShadow
          receiveShadow
          geometry={nodes.Ocean_01.geometry}
          material={materials.Ocean_01}
          position={[-4.353, -1.382, 7.441]}
        />
        <mesh
          name="Ocean_02"
          castShadow
          receiveShadow
          geometry={nodes.Ocean_02.geometry}
          material={materials.Ocean_02}
          position={[8.677, -3.894, -2.549]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.5}
        />
        <mesh
          name="Dance_01"
          castShadow
          receiveShadow
          geometry={nodes.Dance_01.geometry}
          material={materials.Dance_02}
          position={[4.102, -8.278, 1.036]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.5}
        />
        <mesh
          name="Dance_02"
          castShadow
          receiveShadow
          geometry={nodes.Dance_02.geometry}
          material={materials.Dance_01}
          position={[2.096, -10.359, 5.076]}
          rotation={[-Math.PI, 0, 0]}
          scale={1.5}
        />
        <mesh
          name="Color_cube_02"
          castShadow
          receiveShadow
          geometry={nodes.Color_cube_02.geometry}
          material={materials.ColorCube_02}
          position={[4.046, -7.916, 8.641]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.5}
        />
        <mesh
          name="Color_cube_01"
          castShadow
          receiveShadow
          geometry={nodes.Color_cube_01.geometry}
          material={materials.ColorCube_01}
          position={[2.039, -4.031, 8.641]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.5}
        />
        <mesh
          name="Contact_Pic_01"
          castShadow
          receiveShadow
          geometry={nodes.Contact_Pic_01.geometry}
          material={materials.Endrick}
          position={[-4.353, -1.382, 7.441]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 0.938, 1.333]}
        />
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          far={184.1}
          near={0.001}
          position={[7, 7, 7]}
          rotation={[-0.645, 0.674, 0.439]}
          zoom={68}
        >
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            rotation={[0, Math.PI / 4, 0]}
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

useGLTF.preload("./models/ortho_images_01.glb")
