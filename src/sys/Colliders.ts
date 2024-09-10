export function checkCircleCollision(
    x1: number,
    y1: number,
    radius1: number,
    x2: number,
    y2: number,
    radius2: number
): boolean {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= radius1 + radius2;
}
export function detectionRadious(
    canvasWidth: number,
    playerSize: number
): number {
    return canvasWidth / 2 + playerSize;
}
