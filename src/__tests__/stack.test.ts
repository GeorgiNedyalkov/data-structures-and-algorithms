import Stack from "../data_structures/Stack.ts";

describe("Stack", function () {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();

        stack.push(1);
        stack.push(2);
        stack.push(3);
    });

    describe("push()", function () {
        test("it adds an element at the top of the stack", function () {
            expect(stack.length).toBe(3);
            expect(stack.peek()).toBe(3);
        });
    });

    describe("peek()", function () {
        test("it returns the element at the top of the stack", function () {
            expect(stack.length).toBe(3);
            expect(stack.peek()).toBe(3);

            const value = stack.pop();
            expect(value).toBe(3);
            expect(stack.peek()).toBe(2);
            expect(stack.length).toBe(2);
        });
    });

    describe("pop", function () {
        test("it returns the element at the top of the stack and removes it", function () {
            expect(stack.length).toBe(3);
            expect(stack.peek()).toBe(3);

            const value = stack.pop();
            expect(value).toBe(3);
            expect(stack.peek()).toBe(2);
            expect(stack.length).toBe(2);
        });
    });
});
