import { COLORS } from "../constants";

export const genColor = (): string =>
    COLORS[Math.floor(Math.random() * COLORS.length)];
