import { tree } from "../tree.ts";
import Queue from "../data_structures/Queue.ts";

type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;

        if (curr.value === needle) {
            return true;
        }

        if (curr.left) {
            q.push(curr.left);
        }

        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}

export function breadth_first_search(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number> | undefined | null;

        if (!curr) {
            continue;
        }

        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
