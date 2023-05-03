import { useRef } from "react";

import { useHelper, Stage, useTexture } from "@react-three/drei";
import { DepthOfField, EffectComposer, Vignette } from "@react-three/postprocessing";
import { DirectionalLightHelper, Group, SpotLight } from "three";

import { Chessboard } from "./Chessboard";

export const Scene = ({ debug }: { debug?: boolean }) => {
    const refChessboard = useRef<Group>(null);
    const refLight = useRef<SpotLight>(null);
    useHelper(debug && (refLight as any), DirectionalLightHelper, 1, "yellow");

    return (
        <>
            <ambientLight intensity={0.2} color={"white"} />
            <axesHelper args={[15]} visible={debug} />
            <Stage
                environment={{
                    files: "/playground/kingdom-hearts/background.hdr",
                    blur: 0.8,
                    background: true,
                }}
                adjustCamera={0.9}
                intensity={0.1}
            >
                <Chessboard ref={refChessboard} />
            </Stage>
            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.05} bokehScale={6} />
                <Vignette offset={0.1} darkness={0.75} />
            </EffectComposer>
        </>
    );
};

useTexture.preload("/playground/kingdom-hearts/background.hdr");
