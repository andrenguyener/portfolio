import React from "react";

interface Props {
    style?: React.CSSProperties;
    strokeStyle?: string;
    fillStyle?: string;
    posX?: number;
    posY?: number;
}

const opts = {
    size: 200,
    side: 6,
    dotRadius: 2,
    rotSpeed: 0.5,
    minDeformation: 25,
    maxDeformation: 35,
    focal: 350,
    distZ: 350,
    transSpeed: 2,
    transEasing: (t: number) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (t = 1 - t) * t * t * t;
    },
};

type Nullable<T> = T | undefined | null;

type PointsMatrix = [number, number, number];

export class Destructure extends React.Component<Props> {
    c: Nullable<HTMLCanvasElement>;
    ctx: Nullable<CanvasRenderingContext2D>;

    angleYOffset = 0;
    angleYOffsetGoal = 0;
    angleXOffset = 0;
    angleXOffsetGoal = 0;

    basePoints: PointsMatrix[] = [];
    lines: [number, number][] = [];

    componentDidMount = () => {
        this.ctx = this.c?.getContext("2d");
        window.addEventListener("resize", this.resize);
        // this.c?.addEventListener("mousemove", (e) => {
        //     this.angleYOffsetGoal = Math.PI * 2 * (e.clientX / this.c?.width - 0.5);
        //     this.angleXOffsetGoal = Math.PI * (0.5 - e.clientY / this.c?.height);
        // });
        // this.c?.addEventListener("mouseout", (e) => {
        //     this.angleYOffsetGoal = this.angleXOffsetGoal = 0;
        // });
        this.resize();
        this.populatePointsArray();
        this.populateLinesArray();
        requestAnimationFrame(this.startAnimationLoop);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    };

    projection = (p: PointsMatrix, focal: number): PointsMatrix => {
        // Keep the original Z
        return [(focal * p[0]) / p[2], (focal * p[1]) / p[2], p[2]];
    };
    rotateX = (p: PointsMatrix, a: number): PointsMatrix => {
        const d = Math.sqrt(p[2] * p[2] + p[1] * p[1]);
        const na = Math.atan2(p[1], p[2]) + a;
        return [p[0], d * Math.sin(na), d * Math.cos(na)];
    };
    rotateY = (p: PointsMatrix, a: number): PointsMatrix => {
        const d = Math.sqrt(p[2] * p[2] + p[0] * p[0]);
        const na = Math.atan2(p[2], p[0]) + a;
        return [d * Math.cos(na), p[1], d * Math.sin(na)];
    };

    resize = () => {
        if (this.c && this.ctx) {
            this.c.width = this.c?.offsetWidth;
            this.c.height = this.c?.offsetHeight;
            this.ctx.translate(this.c.width * 0.7, this.c.height * 0.5);
            this.ctx.strokeStyle = this.props.strokeStyle || "#808080";
            this.ctx.fillStyle = "#e8e8e8";
        }
    };

    random = (a: number, b: number) => {
        // tslint:disable-next-line:insecure-random
        return a + Math.random() * (b - a);
    };

    // Populate points array
    populatePointsArray = () => {
        const l = opts.side - 1;
        const s = opts.size;
        for (let i = 0; i <= l; i++) {
            for (let j = 0; j <= l; j++) {
                for (let k = 0; k <= l; k++) {
                    const x = s * (i / l - 0.5);
                    const y = s * (j / l - 0.5);
                    const z = s * (k / l - 0.5);
                    this.basePoints.push([x, y, z]);
                }
            }
        }
    };

    // Populate lines array
    populateLinesArray = () => {
        const l = opts.side;
        const l2 = l * l;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l; j++) {
                for (let k = 0; k < l; k++) {
                    const id = i * l2 + j * l + k;
                    if (i > 0) this.lines.push([id, id - l2]);
                    if (j > 0) this.lines.push([id, id - l]);
                    if (k > 0) this.lines.push([id, id - 1]);
                }
            }
        }
    };

    deformation = (p: PointsMatrix[]): PointsMatrix[] => {
        const t = [];
        for (let i = 0, l = p.length; i < l; i++) {
            const r = this.random(opts.minDeformation, opts.maxDeformation);
            const a = this.random(0, 2 * Math.PI);
            const b = this.random(0, 2 * Math.PI);
            const tmp = r * Math.sin(a);
            t.push([
                p[i][0] + r * Math.cos(a),
                p[i][1] + tmp * Math.cos(b),
                p[i][2] + tmp * -Math.sin(b),
            ] as PointsMatrix);
        }
        return t;
    };

    lerp = (p1: PointsMatrix, p2: PointsMatrix, t: number): PointsMatrix => {
        if (!p1 || !p2 || !t) {
            return [0, 0, 0];
        }
        return [
            p1[0] + t * (p2[0] - p1[0]),
            p1[1] + t * (p2[1] - p1[1]),
            p1[2] + t * (p2[2] - p1[2]),
        ];
    };

    transformedPoints = this.deformation(this.basePoints);
    previousTdir: number | undefined = undefined;

    startAnimationLoop = () => {
        requestAnimationFrame(this.startAnimationLoop);
        this.angleXOffset += (this.angleXOffsetGoal - this.angleXOffset) * 0.1;
        this.angleYOffset += (this.angleYOffsetGoal - this.angleYOffset) * 0.1;
        if (this.c) {
            this.ctx?.clearRect(
                -this.c?.width * 0.5,
                -this.c?.height * 0.5,
                this.c?.width,
                this.c?.height
            );
        }
        const t = Date.now() * 1e-3;
        const transform = opts.transEasing((Math.sin(t * opts.transSpeed) + 1) * 0.5);
        // Detect when we change of "transform direction"
        const tdir = Math.cos(t * opts.transSpeed) > 0 ? 1 : -1;
        if (this.previousTdir !== tdir) {
            this.previousTdir = tdir;
            // Generate new points
            if (tdir === 1) {
                this.transformedPoints = this.deformation(this.basePoints);
            }
        }
        const rot = t * opts.rotSpeed + this.angleYOffset;
        const points = [];
        let i;
        const l = this.basePoints.length;
        for (i = 0; i < l; i++) {
            let p = this.lerp(this.basePoints[i], this.transformedPoints[i], transform);
            p = this.rotateX(this.rotateY(p, rot), this.angleXOffset);
            p[2] += opts.distZ;
            p = this.projection(p, opts.focal);
            points.push(p);
            this.ctx?.beginPath();
            this.ctx?.arc(p[0], p[1], (opts.focal * opts.dotRadius) / p[2], 0, Math.PI * 2);
            this.ctx?.fill();
        }

        this.ctx?.beginPath();
        const linesLength = this.lines.length;
        for (i = 0; i < linesLength; i++) {
            this.ctx?.moveTo(points[this.lines[i][0]][0], points[this.lines[i][0]][1]);
            this.ctx?.lineTo(points[this.lines[i][1]][0], points[this.lines[i][1]][1]);
        }
        this.ctx?.stroke();
    };

    render() {
        return (
            <canvas
                ref={(ref) => (this.c = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    ...this.props.style,
                }}
            />
        );
    }
}
