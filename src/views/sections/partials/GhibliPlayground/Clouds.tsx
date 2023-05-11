import { forwardRef, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3, Group, Color } from "three";
import { GLTF } from "three-stdlib";

import { GhibliShader } from "./shaders/GhibliShader";

type GLTFResult = GLTF & {
    nodes: {
        base1: THREE.Object3D;
    };
};

const modelURL = "/playground/ghibli/clouds.glb";

export const Clouds = forwardRef<Group, GroupProps & { colors?: Color[]; wireframe?: boolean }>(
    (props, ref) => {
        const { nodes } = useGLTF(modelURL) as GLTFResult;

        const uniforms = useMemo(
            () => ({
                colorMap: {
                    value: [
                        new Color("#fff"),
                        new Color("#fff"),
                        new Color("#efefef"),
                        new Color("#dddfe0"),
                    ],
                },
                brightnessThresholds: {
                    value: [0.6, 0.55, 0.001],
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
                    geometry={(nodes.base1?.children?.[0] as THREE.Mesh)?.geometry}
                    position={[25.5, 13.5, 0]}
                    scale={[0.035, 0.035, 0.035]}
                    rotation={[Math.PI / 4, Math.PI / 4, 0]}
                >
                    <shaderMaterial attach="material" {...GhibliShader} uniforms={uniforms} />
                </mesh>
            </group>
        );
    }
);

useGLTF.preload(modelURL);
