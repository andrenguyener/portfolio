import { OrbitControls } from "@react-three/drei";
import { CanvasProps } from "@react-three/fiber";

import { Scene } from "./Scene";

export const cameraProps: CanvasProps["camera"] = {
    position: [-0.5, 0.1, 0.4],
    zoom: 4.5,
    fov: 75,
};

export const FiberContainer = () => {
    return (
        <>
            <Scene debug={false} />
            <OrbitControls makeDefault minDistance={0} maxDistance={50} />
        </>
    );
};
