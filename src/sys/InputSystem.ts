import { WORLD_SIZE } from "../constants";

export class InputSystem {
    mouseX: number = 0;
    mouseY: number = 0;
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        canvas.addEventListener("mousemove", (event) => {
            const rect = this.canvas.getBoundingClientRect();
            // Pega as coordenadas do mouse em relação à tela e ajusta com o deslocamento da câmera
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        });
    }

    // Função para calcular a posição do mouse no mundo, considerando o deslocamento da câmera
    getWorldMousePosition(
        cameraX: number,
        cameraY: number
    ): [worldX: number, worldY: number] {
        let worldX = this.mouseX + cameraX;
        let worldY = this.mouseY + cameraY;
        if (worldX <= 0) {
            worldX = 0;
        }
        if (worldX >= WORLD_SIZE) {
            worldX = WORLD_SIZE;
        }
        if (worldY <= 0) {
            worldY = 0;
        }
        if (worldY >= WORLD_SIZE) {
            worldY = WORLD_SIZE;
        }
        return [worldX, worldY];
    }

    getRelativeSpeed(): [speedX: number, speedY: number] {
        // get the relative distance from the player to the mouse
        const speedX = this.mouseX - this.canvas.width / 2;
        const speedY = this.mouseY - this.canvas.height / 2;
        return [speedX, speedY];
    }
}
