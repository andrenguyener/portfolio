import { OrbitControls } from "@react-three/drei";
import { CanvasProps } from "@react-three/fiber";

import { Scene } from "./Scene";

export const cameraProps: CanvasProps["camera"] = {
    position: [-5.5, 1, 5.15],
    zoom: 13,
    fov: 75,
};

export const FiberContainer = ({
    wireframe,
    isSmallScreen,
}: {
    wireframe?: boolean;
    isSmallScreen?: boolean;
}) => {
    return (
        <>
            <Scene debug={false} wireframe={wireframe} />
            <OrbitControls makeDefault minDistance={0} maxDistance={35} enabled={!isSmallScreen} />
        </>
    );
};
