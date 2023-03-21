import React, { Component } from 'react'
import * as THREE from 'three'
import { useNavigate } from 'react-router-dom';
import { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import display from './assets/kit2.glb';
import kit from './assets/kit.jpg';
import './All.css'
import map1 from './assets/locationpnt1.glb'
import map2 from './assets/locationpnt2.glb'

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

function Map1() {
  

  const mesh = useRef();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/eastBlock');
  };

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  const gltf = useLoader(GLTFLoader, map1)
  return <primitive ref={mesh} onClick={handleOnClick} scale={[2,2,2]} object={gltf.scene} position={[25, 0, -45]} />
}
function Map2() {

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  const gltf = useLoader(GLTFLoader, map2)
  return <primitive ref={mesh} scale={[5,5,5]} object={gltf.scene} position={[55, 2,150]} />
}

class kitFront extends Component {
    state = {  } 
    render() { 
        return (
          <div className='canva'>
        <Canvas camera={{ position: [0, 0, 0.1] }}>
            <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotateSpeed={1} autoRotate rotateSpeed={-0.5} />
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={null}>
                <Dome />
                <Object/>
                <Map1/>
                <Map2/>
            </Suspense>
        </Canvas>
        </div>
        );
    }
}
 
export default kitFront;