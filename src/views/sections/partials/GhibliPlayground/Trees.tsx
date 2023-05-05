import { forwardRef, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3, Group, Color } from "three";
import { GLTF } from "three-stdlib";

import { GhibliShader } from "./shaders/GhibliShader";

type GLTFResult = GLTF & {
    nodes: {
        Foliage: THREE.Mesh;
        Scene: THREE.Mesh;
    };
};

const modelURL = "/playground/ghibli/trees.glb";

export const Trees = forwardRef<Group, GroupProps & { colors: Color[]; wireframe: boolean }>(
    (props, ref) => {
        const { nodes } = useGLTF(modelURL) as GLTFResult;

        const uniforms = useMemo(
            () => ({
                colorMap: {
                    value: props.colors,
                },
                brightnessThresholds: {
                    value: [0.6, 0.35, 0.001],
                },
                lightPosition: { value: new Vector3(15, 15, 15) },
            }),
            [props.colors]
        );

        // hmmm wireframe isnt updating

        // nodes.Foliage.traverse((child) => {
        //     if (isMesh(child)) {
        //         const childMaterial = child.material as THREE.MeshBasicMaterial;
        //         childMaterial.wireframe = !!props.wireframe;
        //         childMaterial.wireframeLinewidth = 2;
        //     }
        // });

        // nodes.Scene.traverse((child) => {
        //     if (isMesh(child)) {
        //         const childMaterial = child.material as THREE.MeshBasicMaterial;
        //         childMaterial.color = new Color("#4141E3").convertLinearToSRGB();
        //         childMaterial.wireframe = !!props.wireframe;
        //     }
        // });

        return (
            <group {...props} ref={ref} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage.geometry}
                    position={[0.33, -0.025, -0.68]}
                >
                    {/* <Wireframe simplify={true} fillMix={0.65} thickness={0.02} /> */}
                    <shaderMaterial attach="material" {...GhibliShader} uniforms={uniforms} />
                </mesh>
            </group>
        );
    }
);

useGLTF.preload(modelURL);
