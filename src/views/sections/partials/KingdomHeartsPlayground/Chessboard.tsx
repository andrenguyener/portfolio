import { forwardRef } from "react";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Group } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF;

const modelURL = "/playground/kingdom-hearts/kingdom-hearts-3-sora-chess-piece-board.glb";

export const Chessboard = forwardRef<Group, GroupProps>((props, ref) => {
    const { scene } = useGLTF(modelURL) as GLTFResult;

    return (
        <group {...props} ref={ref} dispose={null}>
            <primitive object={scene} />
        </group>
    );
});

useGLTF.preload(modelURL);
