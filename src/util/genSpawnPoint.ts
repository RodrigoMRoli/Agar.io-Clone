interface Props {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}

export const genSpawnPoint = ({
    minX,
    maxX,
    minY,
    maxY,
}: Props): [number, number] => {
    const spawnX = Math.random() * maxX - minX;
    const spawnY = Math.random() * maxY - minY;
    return [spawnX, spawnY];
};
