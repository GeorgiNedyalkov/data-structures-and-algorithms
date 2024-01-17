declare interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
    prev?: ListNode<T>;
}

export { ListNode };
