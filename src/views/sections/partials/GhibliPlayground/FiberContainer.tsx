import { OrbitControls, Stage } from "@react-three/drei";
import { CanvasProps } from "@react-three/fiber";

import { Scene } from "./Scene";

export const cameraProps: CanvasProps["camera"] = { position: [0, 1, 1.5], zoom: 4, fov: 100 };

export const FiberContainer = ({ wireframe }: { wireframe?: boolean }) => {
    return (
        <>
            <Stage intensity={0.1} adjustCamera={0.9}>
                <Scene debug={false} wireframe={wireframe} />
            </Stage>
            <OrbitControls
                minDistance={1}
                maxDistance={50}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
                maxAzimuthAngle={Math.PI / 2}
            />
        </>
    );
};
