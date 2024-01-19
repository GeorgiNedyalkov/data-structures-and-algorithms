export function binary_search(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        let v = haystack[m];

        if (needle === v) {
            return true;
        } else if (needle > v) {
            lo = m + 1;
        } else {
            hi = m;
        }
    } while (lo < hi);

    return false;
}
