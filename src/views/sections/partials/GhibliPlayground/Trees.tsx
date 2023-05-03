import { forwardRef, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3, Group, Color } from "three";
import { GLTF } from "three-stdlib";

import { GhibliShader } from "./shaders/GhibliShader";

type GLTFResult = GLTF & {
    nodes: {
        Foliage: THREE.Mesh;
    };
};

const modelURL = "/playground/ghibli/trees.glb";

export const Trees = forwardRef<Group, GroupProps & { colors: Color[] }>((props, ref) => {
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

    return (
        <group {...props} ref={ref} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Foliage.geometry}
                position={[0.33, -0.025, -0.68]}
            >
                <shaderMaterial attach="material" {...GhibliShader} uniforms={uniforms} />
            </mesh>
        </group>
    );
});

useGLTF.preload(modelURL);
