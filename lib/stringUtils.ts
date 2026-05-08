export function truncateString(str: string, limit: number = 10): string {
    return str.length > limit ? `${str.substring(0, limit)}...` : str;
}