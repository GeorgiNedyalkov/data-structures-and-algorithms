export function binary_search(arr: number[], low: number, high: number, needle: number): boolean {
    while (low < high) {
        let midIndex = Math.floor(low + (high - low) / 2);
        let midVal = arr[midIndex];

        if (needle === midVal) {
            return true;
        } else if (needle > midVal) {
            low = midIndex + 1;
        } else {
            high = midIndex;
        }
    }

    return false;
}
