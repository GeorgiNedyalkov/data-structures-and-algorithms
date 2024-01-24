declare interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
    prev?: ListNode<T>;
}

export { ListNode };

export declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};
