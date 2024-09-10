import { FOOD_OPACITY, FOOD_SIZE, PLAYER_SIZE, WORLD_SIZE } from "../constants";
import { genColor } from "../util/genColor";
import { genSpawnPoint } from "../util/genSpawnPoint";

export class Food {
    x: number;
    y: number;
    size: number;
    color: string;
    constructor() {
        const [spawnX, spawnY] = genSpawnPoint({
            minX: PLAYER_SIZE,
            maxX: WORLD_SIZE,
            minY: PLAYER_SIZE,
            maxY: WORLD_SIZE,
        });
        this.x = spawnX;
        this.y = spawnY;
        this.size = FOOD_SIZE;
        this.color = genColor();
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${FOOD_OPACITY}`;
        ctx.fill();
    }
}
