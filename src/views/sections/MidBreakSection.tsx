import { useEffect, Suspense, useRef, useContext } from "react";

import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styled, { css } from "styled-components";
import { Color, Group } from "three";
// @ts-ignore
import { TiltLoader } from "three/addons/loaders/TiltLoader.js";

import { NavigationContext } from "./../../utils";
import { animationsRefs } from "./MidBreakSection.animations";

const { elRefs, scrollTriggerMidBreakTextTop } = animationsRefs();

// const modelURL = "/playground/strokes.glb";

// useGLTF.preload(modelURL);

const isMesh = (object: THREE.Object3D): object is THREE.Mesh => {
    return (object as THREE.Mesh).isMesh;
};

export const BrushDome = ({ wireframe }: { wireframe?: boolean }) => {
    const group = useRef<Group>();
    const model = useLoader(TiltLoader, "/playground/BRUSH_DOME.tilt") as Group;

    model.traverse((child) => {
        if (isMesh(child)) {
            const childMaterial = child.material as THREE.MeshBasicMaterial;
            childMaterial.color = new Color("#4141E3").convertLinearToSRGB();
            childMaterial.wireframe = !!wireframe;
        }
    });

    useFrame((_state, _delta) => {
        if (typeof group.current != "undefined") {
            group.current.rotation.y += 0.001;
        }
    });

    return (
        <group
            ref={group as any}
            dispose={null}
            position={[-105, -8, -30]}
            rotation={[0, Math.PI, 0]}
        >
            <primitive object={model} />
        </group>
    );
};

export const MidBreakSection = () => {
    const { isActive } = useContext(NavigationContext);

    useEffect(() => {
        scrollTriggerMidBreakTextTop(elRefs.topText.current!);
    }, []);

    return (
        <Container>
            <Canvas
                style={{
                    pointerEvents: "none",
                }}
                camera={{
                    position: [
                        -152.77204129647527,

                        48.53728244735393,

                        -10.202301979363334,
                    ],
                    zoom: 2.85,
                    fov: 100,
                }}
            >
                <Suspense fallback={null}>
                    <ScrollControls>
                        <Scroll>
                            <BrushDome wireframe={isActive} />
                        </Scroll>
                    </ScrollControls>
                    <OrbitControls
                        minDistance={0}
                        maxDistance={300}
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Suspense>
            </Canvas>
            <TextContainer>
                <Text ref={elRefs.topText}>
                    In a void, no one could say why a thing
                    <br /> once set in motion should stop anywhere;
                    <br /> for why should it stop here rather than here?
                </Text>
            </TextContainer>
        </Container>
    );
};

export default MidBreakSection;

const Container = styled.div`
    position: relative;
    height: 600px;
    width: 100%;
    margin-bottom: 4rem;
    background-color: black;

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                height: 400px;
            `
        )}
`;

const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(0%, -50%);
    margin-right: 3rem;

    ${({ theme }) =>
        theme.mixins.respond(
            "small-screen",
            css`
                left: 50%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "small-screen",
            css`
                left: 45%;
            `
        )}

        ${({ theme }) =>
        theme.mixins.respond(
            "tab-land",
            css`
                left: 40%;
            `
        )}

        ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                left: 30%;
            `
        )}

        ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                left: 25%;
            `
        )}

        ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                left: 0%;
                margin-left: 2rem;
                margin-right: 2rem;
            `
        )}
`;

const Text = styled.h3`
    font-weight: normal;
    line-height: 1.45;
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-land",
            css`
                font-size: 1.7rem;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                font-size: 1.5rem;
            `
        )}

        ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                font-size: 1.4rem;
            `
        )}
`;
