import { checkCircleCollision } from "./Colliders";
import { Food } from "../components/Food";
import { Debug } from "../components/Debug";
import { Player } from "../components/Player";
import { DEBUG, WORLD_SIZE } from "../constants";
import { InputSystem } from "./InputSystem";

export class GameLoop {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private player: Player;
    private foods: Food[];
    private inputSystem: InputSystem;

    constructor(canvas: HTMLCanvasElement) {
        if (DEBUG) Debug.init();
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.player = new Player("user"); // Iniciar no centro do mundo
        this.inputSystem = new InputSystem(this.canvas);

        this.foods = [];
        for (let i = 0; i < WORLD_SIZE / 4; i++) {
            this.foods.push(new Food());
        }

        this.update = this.update.bind(this);
    }

    update() {
        // Movimenta o jogador com base no input do mouse
        const [worldX, worldY] = this.inputSystem.getWorldMousePosition(
            this.player.x - this.canvas.width / 2,
            this.player.y - this.canvas.height / 2
        );
        this.player.move(worldX, worldY);

        // Limpa o canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Calcula a posição da câmera (offset)
        const cameraX = this.player.x - this.canvas.width / 2;
        const cameraY = this.player.y - this.canvas.height / 2;

        // Translada o contexto do canvas para centralizar o jogador
        this.ctx.save();
        this.ctx.translate(-cameraX, -cameraY);

        // Desenhar o jogador e outras células
        this.player.draw(this.ctx);
        const speed = this.inputSystem.getRelativeSpeed();
        this.player.setSpeed(speed);

        // Verificar colisão e desenhar células
        const detectionRadius = this.canvas.width / 2 + this.player.size; // Limite de detecção
        this.foods = this.foods.filter((food) => {
            const dx = food.x - this.player.x;
            const dy = food.y - this.player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < detectionRadius) {
                const isColliding = checkCircleCollision(
                    this.player.x,
                    this.player.y,
                    this.player.size,
                    food.x,
                    food.y,
                    food.size
                );

                if (isColliding) {
                    this.player.grow(food.size);
                    return false;
                }
            }

            food.draw(this.ctx);
            return true;
        });

        // Aqui você pode desenhar outras células, comida, etc.
        this.foods.forEach((food) => food.draw(this.ctx));

        // Restaura o contexto após a translação
        this.ctx.restore();

        if (DEBUG) {
            Debug.watch("speed", this.player.speed);
            Debug.watch("size", this.player.size);
            Debug.watch("playerX", this.player.x);
            Debug.watch("playerY", this.player.y);
            Debug.draw();
        }

        requestAnimationFrame(this.update);
    }

    start() {
        requestAnimationFrame(this.update);
    }
}
