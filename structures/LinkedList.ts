import * as assert from 'assert';

class Node<T> {

    next?:Node<T> = undefined;

    constructor(readonly item:T) {
    }
}

class LinkedList<T> {

    private _tail?:Node<T> = undefined;
    private _head?:Node<T> = undefined;

    get head() : Node<T> | undefined { return this._head;};
    
    constructor(arr? : T[]) {

        if (!arr) {
            return;
        }

        for (let item of arr) {
            this.append(item);
        }
    }

    append(item:T) : T {
        let newNode:Node<T> = new Node<T>(item);
        if (this._tail) {
            this._tail.next = newNode;
        }
        else {
            this._head = newNode;
        }

        this._tail = newNode;
        return item;
    }
    
}

let cut : LinkedList<number> = new LinkedList<number>([1,2,3]);
let currNode : Node<number> | undefined = cut.head;
for (let counter =1; counter<=3; counter++) {
    assert.equal(currNode!.item, counter);
    currNode = currNode!.next;
}

assert.equal(currNode, undefined);