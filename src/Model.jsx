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
  const [portfolioIsVisible, setPortfolioIsVisible] = useState(true)
  const [works1IsVisible, setWorks1IsVisible] = useState(false)
  const [ocean1IsVisible, setOcean1IsVisible] = useState(true)
  const [ocean2IsVisible, setOcean2IsVisible] = useState(true)
  const [works2IsVisible, setWorks2IsVisible] = useState(false)
  const [works3IsVisible, setWorks3IsVisible] = useState(false)
  const [contactIsVisible, setContactIsVisible] = useState(true)
  const [imprintIsVisible, setImprintIsVisible] = useState(false)
  const [dance1IsVisible, setDance1IsVisible] = useState(false)
  const [dance2IsVisible, setDance2IsVisible] = useState(false)
  const [colorcube1IsVisible, setColorcube1IsVisible] = useState(false)
  const [colorcube2IsVisible, setColorcube2IsVisible] = useState(false)
  const [contactPicIsVisible, setContactPicIsVisible] = useState(true)

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
    actions["PortfolioAction"].play().paused = true
    actions["Work1Action"].play().paused = true
    actions["Ocean_01"].play().paused = true
    actions["Ocean_02"].play().paused = true
  }, [])

  useFrame((state) => {
    const scroll = scrolling.offset

    // Name
    setNameIsVisible(scrolling.offset > -0.1 && scrolling.offset < 0.1)
    // Portfolio
    setPortfolioIsVisible(scrolling.offset > 0.1 && scrolling.offset < 0.2)
    // Work 1
    setWorks1IsVisible(scrolling.offset > 0.15 && scrolling.offset < 0.3)
    setOcean1IsVisible(scrolling.offset > 0.15 && scrolling.offset < 0.3)
    setOcean2IsVisible(scrolling.offset > 0.15 && scrolling.offset < 0.3)
    // Works 2
    setWorks2IsVisible(scrolling.offset > 0.23 && scrolling.offset < 0.44)
    setDance1IsVisible(scrolling.offset > 0.23 && scrolling.offset < 0.44)
    setDance2IsVisible(scrolling.offset > 0.23 && scrolling.offset < 0.44)
    // Works 3
    setWorks3IsVisible(scrolling.offset > 0.34 && scrolling.offset < 0.64)
    setColorcube1IsVisible(scrolling.offset > 0.34 && scrolling.offset < 0.64)
    setColorcube2IsVisible(scrolling.offset > 0.34 && scrolling.offset < 0.64)
    // Contact
    setContactIsVisible(scrolling.offset > 0.55 && scrolling.offset < 0.75)
    setContactPicIsVisible(scrolling.offset > 0.55 && scrolling.offset < 0.75)
    // Imprint
    setImprintIsVisible(scrolling.offset > 0.68 && scrolling.offset < 0.85)
    // Ende

    // textRef.current.material.opacity = 1 - scroll
    // textRef.current.material.transparent = true

    console.log(scrolling.offset)

    actions["CameraAction"].time = MathUtils.lerp(
      actions["CameraAction"].time,
      actions["CameraAction"].getClip().duration * scroll,
      0.05
    )
    // Camera move animation
    if (scroll < 0.3) {
      const nameActionProgress = MathUtils.mapLinear(scroll, 0.1, 0.3, 0, 1)
      actions["NameAction"].time =
        nameActionProgress * actions["NameAction"].getClip().duration
    }
    if (scroll <= 1) {
      const portfolioActionProgress = MathUtils.mapLinear(
        scroll,
        0.1,
        0.16,
        0,
        1
      )
      actions["PortfolioAction"].time =
        portfolioActionProgress * actions["PortfolioAction"].getClip().duration
    }
    if (scroll <= 0.5) {
      const work1ActionProgress = MathUtils.mapLinear(scroll, 0.1, 0.2, 0, 1)
      actions["Work1Action"].time =
        work1ActionProgress * actions["Work1Action"].getClip().duration
    }
    if (scroll <= 1) {
      const ocean1ActionProgress = MathUtils.mapLinear(scroll, 0.2, 0.5, 0, 1)
      actions["Ocean_01"].time =
        ocean1ActionProgress * actions["Ocean_01"].getClip().duration
    }
    if (scroll <= 1) {
      const ocean2ActionProgress = MathUtils.mapLinear(scroll, 0.2, 0.5, 0, 1)
      actions["Ocean_02"].time =
        ocean2ActionProgress * actions["Ocean_02"].getClip().duration
    }
    if (scroll <= 1) {
      const contactPicProgress = MathUtils.mapLinear(scroll, 0.65, 0.75, 0, 1)
      actions["Contact_Pic_01"].time =
        contactPicProgress * actions["Contact_Pic_01"].getClip().duration
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
          visible={nameIsVisible}
        />
        <mesh
          name="Portfolio"
          castShadow
          receiveShadow
          geometry={nodes.Portfolio.geometry}
          material={materials.painted_plaster_wall}
          position={[-1.4, -1.7, 12.917]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          visible={portfolioIsVisible}
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
          position={[-2.955, 0.91, 0.929]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          visible={works1IsVisible}
        />
        <mesh
          name="Works2"
          castShadow
          receiveShadow
          geometry={nodes.Works2.geometry}
          material={materials.Schrift}
          position={[-0.308, -5.8, 1.643]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          visible={works2IsVisible}
        />
        <mesh
          name="Works3"
          castShadow
          receiveShadow
          geometry={nodes.Works3.geometry}
          material={materials.Schrift}
          position={[1.71, -9.12, 6]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          visible={works3IsVisible}
        />
        <mesh
          name="Contact"
          castShadow
          receiveShadow
          geometry={nodes.Contact.geometry}
          material={materials.painted_plaster_wall}
          position={[7.692, -8.655, 2.298]}
          rotation={[0, 0, -Math.PI / 2]}
          visible={contactIsVisible}
        />
        <mesh
          name="Imprint"
          castShadow
          receiveShadow
          geometry={nodes.Imprint.geometry}
          material={materials.Schrift}
          position={[3.584, -2.8, 6.28]}
          visible={imprintIsVisible}
        />
        <mesh
          name="Ocean_01"
          castShadow
          receiveShadow
          geometry={nodes.Ocean_01.geometry}
          material={materials.Ocean_01}
          position={[-4.353, -1.382, 7.441]}
          visible={ocean1IsVisible}
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
          visible={ocean2IsVisible}
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
          visible={dance1IsVisible}
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
          visible={dance2IsVisible}
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
          visible={colorcube1IsVisible}
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
          visible={colorcube2IsVisible}
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
          visible={contactPicIsVisible}
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
