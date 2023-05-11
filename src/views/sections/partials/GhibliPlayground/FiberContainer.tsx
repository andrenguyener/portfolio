import { OrbitControls } from "@react-three/drei";
import { CanvasProps } from "@react-three/fiber";

import { Scene } from "./Scene";

export const cameraProps: CanvasProps["camera"] = { position: [0, 15, 55], zoom: 5, fov: 100 };

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
            <OrbitControls
                enabled={!isSmallScreen}
                minDistance={1}
                maxDistance={70}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
                maxAzimuthAngle={Math.PI / 2}
            />
        </>
    );
};
