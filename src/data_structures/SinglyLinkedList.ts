type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};

class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T) {
        this.length++;
        const node = { value: item } as ListNode<T>;

        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head = node;
    }

    append(item: T) {
        this.length++;
        const node = { value: item } as ListNode<T>;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    inserAt(idx: number, item: T) {
        if (idx > this.length) {
            throw new Error("idx is bigger than the length of the list.");
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }

        this.length++;
        // find the node to insert at
        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        // this is to make ts happy
        curr = curr as ListNode<T>;

        const node: ListNode<T> = { value: item };
        node.next = curr.next;
        curr.next = node;
    }

    remove(item: T) {
        // start with the head and find the element before we need to remove
        let curr = this.head;
        let prev = this.head;
        let i: number;

        // get the curr and the prev
        for (i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }

            prev = curr;
            curr = curr.next as ListNode<T>;
        }

        if (!prev || !curr) {
            return undefined;
        }

        // bookeeping
        this.length--;
        // if the length is 0

        let value = curr.value;

        if (this.length === 0) {
            this.tail = this.head = undefined;
            curr = prev = undefined;
            return value;
        }

        if (i === this.length) {
            this.tail = prev;
            prev.next = curr = undefined;
            return value;
        }

        prev.next = curr.next;
        curr = undefined;
        return value;
    }

    print() {
        let out = "";
        let curr = this.head;

        for (let i = 0; i < this.length; i++) {
            out += `( ${i} : ${curr?.value} ) =>  `;
            curr = curr?.next;
        }

        console.log(out);
    }

    private getAt(idx: number) {
        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
}

const singly_linked_list = new SinglyLinkedList();

singly_linked_list.prepend("C");

singly_linked_list.print();
// singly_linked_list.inserAt(3, "D");

singly_linked_list.append("E");
singly_linked_list.append("G");
// singly_linked_list.inserAt(4, "F");

// console.log(singly_linked_list.get(2));
// console.log(singly_linked_list.get(4));

// singly_linked_list.remove("G");

// console.log(singly_linked_list.get(6));
singly_linked_list.print();
