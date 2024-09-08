
import * as THREE from 'three'
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";

// @ts-ignore
import vertexShader from "!!raw-loader!./shader/baseVertexShader.glsl";
// @ts-ignore
import fragmentShader from "!!raw-loader!./shader/baseFragmentShader.glsl";



function Ball(props: ThreeElements['mesh']) {


    const mesh = useRef<THREE.Mesh>(null!)

    const hover = useRef(false)
    const [active, setActive] = useState(false)

    const uniforms = useMemo(
        () => ({
            u_intensity: {
                value: 0.3,
            },
            u_time: {
                value: 0.0,
            },
        }), []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        mesh.current.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 2 : 0.3,
            0.02
        );
    });

    useEffect(() => {
           hover.current = true;
         
           setTimeout(() => {
                hover.current = false
           }, 1000);
     });//, [variable]);

    return (
        <>

            <mesh
                {...props}
                ref={mesh}
                scale={hover.current ? 2.5 : 2}
                onClick={(event) => setActive(!active)}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
            >
                <sphereGeometry args={[1, 250, 250]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />

            </mesh>

        </>
    )
}

export default Ball;
