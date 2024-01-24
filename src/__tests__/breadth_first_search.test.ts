import bfs from "../algorithms/breadth_first_search.ts";
import { breadth_first_search } from "../algorithms/breadth_first_search.ts";
import { tree } from "../tree.ts";

describe("breadth first search 1", function () {
    test("bt bfs", function () {
        expect(bfs(tree, 45)).toEqual(true);
        expect(bfs(tree, 7)).toEqual(true);
        expect(bfs(tree, 69)).toEqual(false);
    });
});

describe("breadth first search 2", function () {
    test("bt bfs", function () {
        expect(breadth_first_search(tree, 45)).toEqual(true);
        expect(breadth_first_search(tree, 7)).toEqual(true);
        expect(breadth_first_search(tree, 69)).toEqual(false);
    });
});
