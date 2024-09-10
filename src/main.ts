import "./style.css";
// import dotenv from "dotenv";
import { GameLoop } from "./sys/GameLoop";

// dotenv.config();

window.onload = () => {
    initializer();
};

const initializer = () => {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const game = new GameLoop(canvas);
    game.start();
};
