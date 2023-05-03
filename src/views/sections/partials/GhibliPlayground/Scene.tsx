import { useRef } from "react";

import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, DirectionalLightHelper, Group, SpotLight } from "three";

import { Trees } from "./Trees";

export const Scene = ({ debug }: { debug?: boolean }) => {
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
            <ambientLight intensity={0.1} />
            <spotLight castShadow position={[35, 50, 55]} ref={refLight} />
            <axesHelper args={[15]} visible={debug} />
            <Trees
                ref={refTrees}
                position={[0, 1, 0]}
                colors={[
                    new Color("#427062").convertLinearToSRGB(),
                    new Color("#33594e").convertLinearToSRGB(),
                    new Color("#234549").convertLinearToSRGB(),
                    new Color("#1e363f").convertLinearToSRGB(),
                ]}
            />
            <Trees
                position={[-7, 1, 4]}
                colors={[
                    new Color("#4a8d7e").convertLinearToSRGB(),
                    new Color("#377f6a").convertLinearToSRGB(),
                    new Color("#184f52").convertLinearToSRGB(),
                    new Color("#143b36").convertLinearToSRGB(),
                ]}
            />
        </>
    );
};
