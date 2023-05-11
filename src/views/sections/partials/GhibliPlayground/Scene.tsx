import { useRef } from "react";

import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, DirectionalLightHelper, Group, SpotLight } from "three";

import { Background } from "./Background";
import { Bush } from "./Bush";
import { Clouds } from "./Clouds";
import { CypressTree } from "./CypressTree";
import { Trees } from "./Trees";

export const Scene = ({ debug, wireframe }: { debug?: boolean; wireframe?: boolean }) => {
    const refTrees = useRef<Group>(null);
    const refLight = useRef<SpotLight>(null);
    useHelper(debug && (refLight as any), DirectionalLightHelper, 1, "yellow");

    useFrame(() => {
        const { current: group } = refTrees;
        if (group) {
            group.rotation.x = group.rotation.y += 0.01;
        }
    });

    return (
        <>
            <group position={[0, -10, 0]}>
                <Background />
                <ambientLight intensity={0.1} />
                <spotLight castShadow position={[35, 50, 55]} ref={refLight} />
                <axesHelper args={[15]} visible={debug} />
                <Clouds position={[0, 1, 0]} wireframe />
                <Trees
                    ref={refTrees}
                    position={[-7, 4, 2]}
                    wireframe
                    colors={[
                        new Color("#427062").convertLinearToSRGB(),
                        new Color("#33594e").convertLinearToSRGB(),
                        new Color("#234549").convertLinearToSRGB(),
                        new Color("#1e363f").convertLinearToSRGB(),
                    ]}
                />
                <Trees
                    position={[-13, 1, 4]}
                    wireframe
                    colors={[
                        new Color("#4a8d7e").convertLinearToSRGB(),
                        new Color("#377f6a").convertLinearToSRGB(),
                        new Color("#184f52").convertLinearToSRGB(),
                        new Color("#143b36").convertLinearToSRGB(),
                    ]}
                />
                <Bush
                    wireframe
                    position={[-10, 0, -5]}
                    scale={[1.6, 1.6, 1.6]}
                    colors={[
                        new Color("#a4b979").convertLinearToSRGB(),
                        new Color("#8ab28e").convertLinearToSRGB(),
                        new Color("#5c954f").convertLinearToSRGB(),
                        new Color("#144a4c").convertLinearToSRGB(),
                    ]}
                />
                <CypressTree
                    position={[50, 1, 2]}
                    scale={[2.2, 2.2, 2.2]}
                    wireframe
                    colors={[
                        new Color("#25665e").convertLinearToSRGB(),
                        new Color("#204844").convertLinearToSRGB(),
                        new Color("#204e43").convertLinearToSRGB(),
                        new Color("#172626").convertLinearToSRGB(),
                    ]}
                />
                <CypressTree
                    position={[43, 0, 4]}
                    scale={[1.4, 1.4, 1.4]}
                    wireframe
                    colors={[
                        new Color("#1b413a").convertLinearToSRGB(),
                        new Color("#214f49").convertLinearToSRGB(),
                        new Color("#1a2d2b").convertLinearToSRGB(),
                        new Color("#214742").convertLinearToSRGB(),
                    ]}
                />
                <CypressTree
                    position={[40, -1, 0.5]}
                    wireframe
                    colors={[
                        new Color("#25665e").convertLinearToSRGB(),
                        new Color("#214f49").convertLinearToSRGB(),
                        new Color("#204844").convertLinearToSRGB(),
                        new Color("#1a2d2b").convertLinearToSRGB(),
                    ]}
                />
            </group>
        </>
    );
};
