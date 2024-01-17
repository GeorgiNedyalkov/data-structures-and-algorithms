import { sum } from "../index.ts";

describe("sum", function () {
    it("sums two numbers", function () {
        expect(sum(4, 1)).toBe(13);
    });
});
