import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import {
    // GhibliPlayground,
    KingdomHeartsPlayground,
    KingdomHeartsCamPosition,
} from "../views/sections/partials";

const Sandbox = () => {
    return (
        <>
            <div
                className="App"
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Canvas camera={KingdomHeartsCamPosition}>
                    <Suspense fallback={null}>
                        <KingdomHeartsPlayground />
                    </Suspense>
                </Canvas>
            </div>
        </>
    );
};

export default Sandbox;
