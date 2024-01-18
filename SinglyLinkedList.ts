type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};

class SinglyLinkedList<T> {
    public lentgh: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.lentgh = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T) {
        this.lentgh++;
        const node = { value: item } as ListNode<T>;

        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head = node;
    }

    append(item: T) {
        this.lentgh++;
        const node = { value: item } as ListNode<T>;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    inserAt(idx: number, item: T) {
        if (idx > this.lentgh) {
            throw new Error("idx is bigger than the length of the list.");
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.lentgh) {
            this.append(item);
            return;
        }

        this.lentgh++;
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

    print() {
        let out = "";
        let curr = this.head;

        for (let i = 0; i < this.lentgh; i++) {
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

singly_linked_list.inserAt(0, "C");
singly_linked_list.prepend("B");
singly_linked_list.prepend("A");
singly_linked_list.inserAt(3, "D");

singly_linked_list.append("E");
singly_linked_list.append("G");
singly_linked_list.inserAt(4, "F");

console.log(singly_linked_list.get(2));
console.log(singly_linked_list.get(4));

singly_linked_list.print();
