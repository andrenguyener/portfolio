import { forwardRef, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3, Group, Color } from "three";
import { GLTF } from "three-stdlib";

import { GhibliShader } from "./shaders/GhibliShader";

type GLTFResult = GLTF & {
    nodes: {
        Instance_Foliage007: THREE.Object3D;
        Instance_Foliage008: THREE.Object3D;
        Instance_Foliage009: THREE.Object3D;
        Instance_Foliage010: THREE.Object3D;
        Instance_Foliage019: THREE.Object3D;
        Scene: THREE.Mesh;
    };
};

const modelURL = "/playground/ghibli/cypress.glb";

export const CypressTree = forwardRef<Group, GroupProps & { colors: Color[]; wireframe: boolean }>(
    (props, ref) => {
        const { scene } = useGLTF(modelURL) as GLTFResult;
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

        const generateSceneToMesh = () => {
            return scene.children.map((child) => {
                return (
                    <mesh
                        key={child.uuid}
                        castShadow
                        receiveShadow
                        geometry={(child.children?.[0] as THREE.Mesh)?.geometry}
                        position={child.position}
                        scale={child.scale}
                        rotation={child.rotation}
                    >
                        <shaderMaterial attach="material" {...GhibliShader} uniforms={uniforms} />
                    </mesh>
                );
            });
        };

        return (
            <group rotation={[0, -Math.PI / 2, 0]} {...props} dispose={null}>
                {generateSceneToMesh()}
            </group>
        );
    }
);

useGLTF.preload(modelURL);
