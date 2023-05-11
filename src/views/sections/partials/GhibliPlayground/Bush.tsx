import { forwardRef, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3, Group, Color } from "three";
import { GLTF } from "three-stdlib";

import { GhibliShader } from "./shaders/GhibliShader";

type GLTFResult = GLTF & {
    nodes: {
        Instance_Foliage020: THREE.Object3D;
        Instance_Foliage021: THREE.Object3D;
        Instance_Foliage022: THREE.Object3D;
        Instance_Foliage023: THREE.Object3D;
        Instance_Foliage024: THREE.Object3D;
        Instance_Foliage025: THREE.Object3D;
        Instance_Foliage026: THREE.Object3D;
        Instance_Foliage027: THREE.Object3D;
        Scene: THREE.Mesh;
    };
};

const modelURL = "/playground/ghibli/bush.glb";

export const Bush = forwardRef<Group, GroupProps & { colors: Color[]; wireframe: boolean }>(
    (props, ref) => {
        const { scene } = useGLTF(modelURL) as GLTFResult;
        const uniforms = useMemo(
            () => ({
                colorMap: {
                    value: props.colors,
                },
                brightnessThresholds: {
                    value: [0.9, 0.75, 0.001],
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
            <group rotation={[0, Math.PI / 2, 0]} {...props} dispose={null}>
                {generateSceneToMesh()}
            </group>
        );
    }
);

useGLTF.preload(modelURL);
