import { forwardRef } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Group } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF;

const modelURL = "/playground/kingdom-hearts/kingdom-hearts-3-sora-chess-piece-board.glb";

// Todo move this to shared
const isMesh = (object: THREE.Object3D): object is THREE.Mesh => {
    return (object as THREE.Mesh).isMesh;
};

export const Chessboard = forwardRef<Group, GroupProps & { wireframe?: boolean }>((props, ref) => {
    const { scene } = useGLTF(modelURL) as GLTFResult;

    scene.traverse((child) => {
        if (isMesh(child)) {
            const childMaterial = child.material as THREE.MeshBasicMaterial;
            childMaterial.wireframe = !!props.wireframe;
        }
    });

    return (
        <group {...props} ref={ref} dispose={null}>
            <primitive object={scene} />
        </group>
    );
});

useGLTF.preload(modelURL);
