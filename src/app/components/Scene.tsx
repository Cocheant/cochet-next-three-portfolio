import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ball from './3DScene/Ball';


import { OrbitControls } from "@react-three/drei";



const Scene = () => {

    return (
        <div className='h-full w-full absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-70'>

        <Canvas camera={{ fov: 70, position: [0, 0, 15] }} >
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} makeDefault />


            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />

            <ambientLight intensity={Math.PI / 2} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Ball position={[0, 0, 0]} />
        </Canvas>
        </div>

    )

}

export default Scene
