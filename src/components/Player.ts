import {
    PLAYER_MAX_X,
    PLAYER_MIN_X,
    PLAYER_MAX_Y,
    PLAYER_MIN_Y,
    PLAYER_SIZE,
    PLAYER_BASE_SPEED,
    PLAYER_MAX_SPEED,
} from "../constants";
import { genColor } from "../util/genColor";
import { genSpawnPoint } from "../util/genSpawnPoint";
import { invertColor } from "../util/invertColor";

export class Player {
    username: string;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;

    /**
     * Constructs a new Player object.
     *
     * @param x - The x-coordinate of the player.
     * @param y - The y-coordinate of the player.
     * @param size - The size of the player.
     * @param color - The color of the player.
     */
    constructor(username: string) {
        const [spawnX, spawnY] = genSpawnPoint({
            minX: PLAYER_MIN_X,
            maxX: PLAYER_MAX_X,
            minY: PLAYER_MIN_Y,
            maxY: PLAYER_MAX_Y,
        });
        this.x = spawnX;
        this.y = spawnY;
        this.size = PLAYER_SIZE;
        this.speed = PLAYER_BASE_SPEED;
        this.color = genColor();
        this.username = username;
    }

    /**
     * Moves the player to the specified coordinates based on the mouse position.
     *
     * @param mouseX - The x-coordinate of the mouse position.
     * @param mouseY - The y-coordinate of the mouse position.
     */
    move(mouseX: number, mouseY: number) {
        const angle = Math.atan2(mouseY - this.y, mouseX - this.x);
        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;
    }

    /**
     * Increases the size of the player by the specified amount.
     * @param amount - The amount by which to increase the size.
     */
    grow(amount: number) {
        this.size += amount * 0.1;
    }

    /**
     * Draws the player on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     * @returns {void}
     */
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        console.log(this.color);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.fillStyle = invertColor(this.color);
        ctx.font = `bold ${this.size / 2}px verdana, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.username.toUpperCase(), this.x, this.y);
    }

    setSpeed(speed: [speedX: number, speedY: number]) {
        const rawSpeed = Math.sqrt(speed[0] ** 2 + speed[1] ** 2);
        const newSpeed = rawSpeed / 100;
        this.speed = newSpeed >= PLAYER_MAX_SPEED ? PLAYER_MAX_SPEED : newSpeed;
    }
}
