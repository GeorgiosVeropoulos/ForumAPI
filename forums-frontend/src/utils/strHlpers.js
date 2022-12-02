export function truncate(str) {
    return str.length > 100 ? str.substring(0, 140) + "..." : str;
}