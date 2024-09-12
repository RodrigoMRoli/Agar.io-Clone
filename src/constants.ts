export const WORLD_SIZE = 4000;
export const COLORS = [
    "#ff0000",
    "#0000ff",
    "#00ff00",
    "#ffff00",
    "#ffa500",
    "#800080",
    "#ffc0cb",
    "#a52a2a",
    "#00ffff",
    "#ff00ff",
    "#00ff00",
    "#008080",
    "#4b0082",
    "#800000",
    "#000080",
    "#808000",
];
export const FOOD_MIN_RADIUS = 5;
export const FOOD_MAX_RADIUS = 10;

export const PLAYER_SIZE = 20;
export const PLAYER_BASE_SPEED = 0.5;
export const PLAYER_MAX_SPEED = 1.5;
export const PLAYER_MIN_X = PLAYER_SIZE;
export const PLAYER_MIN_Y = PLAYER_MIN_X;
export const PLAYER_MAX_X = WORLD_SIZE - PLAYER_MIN_X;
export const PLAYER_MAX_Y = PLAYER_MAX_X;

export const FOOD_SIZE = 5;
export const FOOD_OPACITY = "B3"; // 70% opacity
export const FOOD_DENSITY = 0.4; // 40% of the world is covered in food
export const FOOD_SPAWN_RATE = 1; // 1 food every 1 second

export const INPUT_MAX_MOUSE_DISTANCE = 200;

export const DEBUG = Boolean(import.meta.env.VITE_DEBUG);
