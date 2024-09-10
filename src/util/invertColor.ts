export function invertColor(hex: string): string {
    // Remove the hash if present
    const cleanHex = hex.replace("#", "");

    // Convert hex to RGB
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    // Invert each color channel
    const invertedR = (255 - r).toString(16).padStart(2, "0");
    const invertedG = (255 - g).toString(16).padStart(2, "0");
    const invertedB = (255 - b).toString(16).padStart(2, "0");

    // Return the inverted color in hex format
    return `#${invertedR}${invertedG}${invertedB}`;
}
