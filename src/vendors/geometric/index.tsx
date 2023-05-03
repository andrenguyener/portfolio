import React from "react";
import * as THREE from "three";

type Nullable<T> = T | undefined | null;

const style = {
    height: 125, // we can control scene size by setting container dimensions
    minWidth: 150,
    width: "100%",
};

interface Props {
    style?: React.CSSProperties;
}

export class Geometric extends React.Component<Props> {
    mount: Nullable<HTMLDivElement>;
    scene: Nullable<THREE.Scene>;
    camera: Nullable<THREE.PerspectiveCamera>;
    renderer: Nullable<THREE.WebGLRenderer>;

    cube: Nullable<THREE.Mesh>;
    pyr: Nullable<THREE.Mesh>;
    pyra: Nullable<THREE.Mesh>;
    pyram: Nullable<THREE.Mesh>;
    octa: Nullable<THREE.Mesh>;

    requestID: Nullable<number>;

    angularSpeed = 0.2;
    lastTime = 0;

    get width() {
        return this.mount?.clientWidth as number;
    }

    get height() {
        return this.mount?.clientHeight as number;
    }

    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
        if (this.requestID) window.cancelAnimationFrame(this.requestID);
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing

        // renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.mount?.appendChild(this.renderer.domElement); // mount using React ref

        // camera
        this.camera = new THREE.PerspectiveCamera(
            45, // fov = field of view
            this.width / this.height, // aspect ratio
            1, // near plane
            2000 // far plane
        );
        this.camera.position.z = 150; // is used here to set some distance from a cube that is located at z = 0

        // scene
        this.scene = new THREE.Scene();
    };

    addCustomSceneObjects = () => {
        // cube
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(this.width / 15, this.width / 17, this.width / 17),
            new THREE.MeshBasicMaterial({
                wireframe: true,
            })
        );
        this.cube.rotation.x = Math.PI * 0.1;
        this.cube.translateX(-this.width / 5);
        this.scene?.add(this.cube);

        // pyramide
        this.pyr = new THREE.Mesh(
            new THREE.TetrahedronGeometry(this.width / 15, 0),
            new THREE.MeshBasicMaterial({
                wireframe: true,
            })
        );
        this.pyr.rotation.x = Math.PI * 0.1;
        this.scene?.add(this.pyr);

        //grande pyramide
        // this.pyra = new THREE.Mesh(
        //     new THREE.TetrahedronGeometry(this.width / 1.5, 2),
        //     new THREE.MeshBasicMaterial({
        //         wireframe: true,
        //         color: "gray",
        //     })
        // );
        // this.pyra.rotation.x = Math.PI * 0.7;
        // this.pyra.rotation.y = Math.PI * 0.3;
        // this.scene?.add(this.pyra);

        //grande pyramide 2
        // this.pyram = new THREE.Mesh(
        //     new THREE.TetrahedronGeometry(this.width, 1),
        //     new THREE.MeshBasicMaterial({
        //         wireframe: true,
        //         color: "#BBBBBB",
        //     })
        // );
        // this.pyram.rotation.x = Math.PI * 0.2;
        // this.pyram.rotation.y = Math.PI * 0.3;
        // this.scene?.add(this.pyram);

        // octahedron
        this.octa = new THREE.Mesh(
            new THREE.OctahedronGeometry(this.width / 20, 0),
            new THREE.MeshBasicMaterial({
                wireframe: true,
            })
        );
        this.octa.rotation.x = Math.PI * 0.1;
        this.octa.translateX(this.width / 5);
        this.scene?.add(this.octa);
    };

    startAnimationLoop = () => {
        // update
        const time = new Date().getTime();
        const timeDiff = time - this.lastTime;
        const angleChange = (this.angularSpeed * timeDiff * 2 * Math.PI) / 750;
        if (this.cube) this.cube.rotation.y += angleChange;
        if (this.pyr) this.pyr.rotation.y += angleChange;
        // if (this.pyra) this.pyra.rotation.y += angleChange / 5;
        // if (this.pyra) this.pyra.rotation.x += angleChange / 10;
        // if (this.pyram) this.pyram.rotation.x += angleChange / 10;
        // if (this.pyram) this.pyram.rotation.y += angleChange / 15;
        if (this.octa) this.octa.rotation.y += angleChange;
        this.lastTime = time;

        // render
        this.renderer?.render(
            this.scene as NonNullable<THREE.Scene>,
            this.camera as NonNullable<THREE.PerspectiveCamera>
        );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        this.renderer?.setSize(this.width, this.height);
        if (this.camera) this.camera.aspect = this.width / this.height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera?.updateProjectionMatrix();
    };

    render() {
        return <div style={{ ...style, ...this.props.style }} ref={(ref) => (this.mount = ref)} />;
    }
}
