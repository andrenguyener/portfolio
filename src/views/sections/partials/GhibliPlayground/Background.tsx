import { useTexture, Backdrop } from "@react-three/drei";

export const Background = () => {
    const texture = useTexture("/playground/ghibli/Oga Kazuo - Bg Reference.jpg", (_texture) => {
        if (!Array.isArray(_texture)) {
            _texture.rotation = 0;
            _texture.flipY = false;
        }
    });

    return (
        <>
            <Backdrop
                receiveShadow
                floor={8.5}
                position={[0, -3, -5]}
                scale={[70, 25, 2]}
                segments={2}
            >
                <meshStandardMaterial map={texture} envMapIntensity={0} />
            </Backdrop>
        </>
    );
};
