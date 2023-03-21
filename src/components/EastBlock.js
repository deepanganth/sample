import React, { Component } from 'react'
import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import display from './assets/kit2.glb';
import kit from './assets/eastBlock.jpg' 
import Navbar from './Navbar';
import './All.css'

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Dome() {
  const texture = useLoader(THREE.TextureLoader, kit)
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

function Object() {

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  const gltf = useLoader(GLTFLoader, display)
  return <primitive ref={mesh} object={gltf.scene} position={[20, 0, 1]} />
}

class kitFront extends Component {
    state = {  } 
    render() { 
        return (
          <div className='canva'>
          <Navbar/>
        <Canvas camera={{ position: [0, 0, 0.1] }}>
            <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotateSpeed={1} autoRotate rotateSpeed={-0.5} />
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={null}>
                <Dome />
                <Object/>
            </Suspense>
        </Canvas>
        </div>
        );
    }
}
 
export default kitFront;