import React, { useContext, useEffect, Suspense } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import styled, { css } from "styled-components";
import { PerspectiveCamera } from "three";

import { Icon } from "./../../components";
import { NavigationContext } from "./../../utils";
import {
    GhibliCamPosition,
    GhibliPlayground,
    KingdomHeartsCamPosition,
    KingdomHeartsPlayground,
    Fade,
    Loader,
} from "./partials";
import { animationsRefs } from "./PlaygroundGallery.animations";

const { elRefs, galleryComeIn, galleryGoOut } = animationsRefs();

const timeline = gsap.timeline();

const PlaygroundSandboxes = [
    {
        cameraPosition: GhibliCamPosition,
        render: ({
            wireframe,
            isSmallScreen,
        }: {
            wireframe?: boolean;
            isSmallScreen?: boolean;
        }) => <GhibliPlayground wireframe={wireframe} isSmallScreen={isSmallScreen} />,
    },
    {
        cameraPosition: KingdomHeartsCamPosition,
        render: ({
            wireframe,
            isSmallScreen,
        }: {
            wireframe?: boolean;
            isSmallScreen?: boolean;
        }) => <KingdomHeartsPlayground wireframe={wireframe} isSmallScreen={isSmallScreen} />,
    },
];

const SetLoading = ({
    setIsLoading,
}: {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    setIsLoading(true);

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };
    }, []);

    return null;
};

const UpdateCameraScene = ({ index, isLoading }: { index: number; isLoading: boolean }) => {
    const { camera, scene } = useThree(({ camera, scene, controls }) => ({
        camera,
        scene,
        controls,
    }));
    const tempBackgroundRef = React.useRef(scene.background);

    useEffect(() => {
        const _camera = camera as PerspectiveCamera;
        const currentCameraPosition = PlaygroundSandboxes?.[index]
            ?.cameraPosition as PerspectiveCamera;
        const positions = currentCameraPosition?.position as unknown as [number, number, number];

        _camera.position.set(positions?.[0], positions?.[1], positions?.[2]);
        _camera.zoom = currentCameraPosition?.zoom ?? 1;
        _camera.fov = currentCameraPosition?.fov ?? 75;
        // controls?.update();
    }, [index]);

    useEffect(() => {
        if (isLoading) {
            tempBackgroundRef.current = scene.background;
            scene.background = null;
            scene.visible = false;
        } else {
            scene.background = tempBackgroundRef.current;
            scene.visible = true;
        }
    }, [isLoading]);

    return null;
};

export const PlaygroundGallery = () => {
    const { isActive } = useContext(NavigationContext);
    const [isReady, setIsReady] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [playgroundIndex, setPlaygroundIndex] = React.useState(0);
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean | null>(null);

    useEffect(() => {
        if (isReady) {
            if (isActive) {
                timeline.progress(0).clear();
                timeline.add(galleryGoOut()).play();
            } else {
                timeline.progress(1).clear();
                timeline.add(galleryComeIn()).play();
            }
        }
    }, [isActive]);

    useEffect(() => {
        const introTimeline = gsap.timeline({ delay: 1.3 });

        introTimeline.set([elRefs.leftSlider.current, elRefs.rightSlider.current], {
            visibility: "visible",
        });
        introTimeline.add(galleryComeIn(), "Gallery").play();
        setIsSmallScreen(window?.matchMedia?.("(max-width: 768px)")?.matches);
        console.warn(window?.matchMedia?.("(max-width: 768px)")?.matches);
        setIsReady(true);
    }, []);

    const getPlayCurrentPlayground = React.useCallback(() => {
        return PlaygroundSandboxes[playgroundIndex].render({
            wireframe: isActive,
            isSmallScreen: !!isSmallScreen,
        });
    }, [playgroundIndex, isActive, isSmallScreen]);

    return (
        <>
            <GalleryPlaygroundContainer>
                <FrameBorderAccent>
                    <Icon name="FrameAccent" />
                </FrameBorderAccent>
                <Sandbox ref={elRefs.playground}>
                    {/* Todo refactor this */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Fade out={!isLoading}>
                            <Loader />
                        </Fade>
                    </div>
                    <Fade out={isLoading}>
                        <Canvas>
                            <Suspense fallback={<SetLoading setIsLoading={setIsLoading} />}>
                                <UpdateCameraScene index={playgroundIndex} isLoading={isLoading} />
                                {getPlayCurrentPlayground()}
                            </Suspense>
                        </Canvas>
                    </Fade>
                </Sandbox>
                <ArrowSliderContainer>
                    <LeftButtonArrow
                        ref={elRefs.leftSlider}
                        onClick={(evt) => {
                            evt.preventDefault();
                            if (playgroundIndex - 1 < 0) {
                                setPlaygroundIndex(PlaygroundSandboxes.length - 1);
                            } else {
                                setPlaygroundIndex(playgroundIndex - 1);
                            }
                        }}
                    >
                        <Icon name="ChevronLeftCircle" />
                    </LeftButtonArrow>
                    <RightButtonArrow
                        ref={elRefs.rightSlider}
                        onClick={(evt) => {
                            evt.preventDefault();
                            if (playgroundIndex + 1 >= PlaygroundSandboxes.length) {
                                setPlaygroundIndex(0);
                            } else {
                                setPlaygroundIndex(playgroundIndex + 1);
                            }
                        }}
                    >
                        <Icon name="ChevronRightCircle" />
                    </RightButtonArrow>
                </ArrowSliderContainer>
            </GalleryPlaygroundContainer>
        </>
    );
};

export default PlaygroundGallery;

const ArrowSliderContainer = styled.div`
    position: absolute;
    right: 1rem;
    bottom: -2.75rem;
`;

const ButtonArrow = styled.button`
    all: unset;
    cursor: pointer;
    width: 7rem;
    height: auto;

    svg {
        stroke: ${(props) => props.theme.color.white};
    }

    &:hover,
    &:active {
        svg {
            // Todo do cooler animations
            transition: all 0.4s cubic-bezier(0, 0, 0.23, 1);
            stroke: ${(props) => props.theme.color.primary.base};
        }
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                width: 4rem;
            `
        )}
`;

const RightButtonArrow = styled(ButtonArrow)`
    ${({ theme }) => theme.mixins.initialHidden};
`;

const LeftButtonArrow = styled(ButtonArrow)`
    ${({ theme }) => theme.mixins.initialHidden};
`;

const FrameBorderAccent = styled.div`
    position: absolute;
    width: 8rem;
    height: auto;
    transform: scaleX(-1);
    top: -50px;
    left: -35px;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0, 0, 0.23, 1);

    svg {
        fill: ${(props) => props.theme.color.white};
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                display: none;
            `
        )}
`;

const Sandbox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    // border: 1px solid red;
`;

const GalleryPlaygroundContainer = styled.div`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 40%;

    &:hover {
        ${FrameBorderAccent} {
            opacity: 1;
        }
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                top: 55%;
                height: 50%;
                width: calc(100% - 2rem);
                left: 1rem;
            `
        )}
`;
