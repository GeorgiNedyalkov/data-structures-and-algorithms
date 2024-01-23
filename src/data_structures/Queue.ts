interface QNode<T> {
    value: T;
    next?: QNode<T>;
}

export default class Queue<T> {
    public length: number;
    private head: QNode<T> | undefined;
    private tail: QNode<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;

        const node: QNode<T> = { value: item };

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;

        return head.value;
    }

    isEmpty() {
        return this.length === 0 && this.head === undefined && this.tail === undefined;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
