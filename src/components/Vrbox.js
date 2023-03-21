import React, { Suspense,useRef} from 'react'
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import display from './assets/kit.glb';

function Me() {

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.015
  })

  const gltf = useLoader(GLTFLoader, display)
  return <primitive ref={mesh}  object={gltf.scene} position={[0, -3.5, 0]} />
}

function Vrbox() {
  return (
    <>
      <Canvas >
        <OrbitControls />
        <ambientLight intensity={1} />
        {/* <spotLight intensity={.7} position={[300, 300, 400]} />
        <spotLight intensity={.7} position={[-300, -300, 400]} />
        <spotLight intensity={.7} position={[300, -300, 400]} />
        <spotLight intensity={.7} position={[-300, 300, -400]} /> */}
        <Suspense >{<Me/>}</Suspense>
      </Canvas>
    </>
  )
}

export default Vrbox;
