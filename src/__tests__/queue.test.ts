import Queue from "../data_structures/Queue.ts";

describe("enqueue", function () {
    test("adds an element at the end of the queue", function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.peek()).toBe(1);
        queue.dequeue();
        expect(queue.peek()).toBe(2);
        queue.dequeue();
        expect(queue.peek()).toBe(3);
        queue.dequeue();
    });
});

describe("dequeue", function () {
    test("removes and returns the first element in the queue", function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });
});

describe("peek", function () {
    test("returns the first element in the queue without removing it", function () {
        const queue = new Queue<number>();
        queue.enqueue(5);

        expect(queue.peek()).toBe(5);
        expect(queue.length).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();
    });
});

describe("isEmpty", function () {
    test("returns true or false if the queue is emty", function () {
        const notEmptyQueue = new Queue<number>();
        const emptyQueue = new Queue<number>();
        notEmptyQueue.enqueue(10);

        expect(notEmptyQueue.isEmpty()).toBeFalsy();
        expect(notEmptyQueue.length).toBe(1);
        expect(emptyQueue.isEmpty()).toBeTruthy();
        expect(emptyQueue.length).toBe(0);
    });
});

// TODO: handle underflow and overflow values correctly
