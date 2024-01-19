import { binary_search } from "../algorithms/binary_search.ts";

test("binarySearch", function () {
    const sorted_arr: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 21, 23, 25, 27, 29, 30];
    const target = 6;
    const missedTarget = 32;

    expect(binary_search(sorted_arr, target)).toBeTruthy();
    expect(binary_search(sorted_arr, missedTarget)).toBeFalsy();
});
