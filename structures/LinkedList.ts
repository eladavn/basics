import * as assert from 'assert';

export class Node<T> {

    next?:Node<T> = undefined;
    prev?:Node<T> = undefined;

    constructor(readonly item:T) {
    }

};

export class LinkedList<T> {

    private _tail?:Node<T> = undefined;
    private _head?:Node<T> = undefined;

    get head() : Node<T> | undefined { return this._head;};
    get tail() : Node<T> | undefined { return this._tail;};
    
    constructor(arr? : T[]) {

        if (!arr) {
            return;
        }

        for (let item of arr) {
            this.append(item);
        }
    }

    getCount() : number {
        
        let counter = 0;
        for (let currNode:Node<T> | undefined= this.head;
            currNode; 
            counter++, currNode = currNode.next);

        return counter;
    }

    nodeAt(idx: number) : Node<T> {
        let currNode:Node<T> = (this.head)!;
        for (let counter = 0; 
            counter<idx; 
            counter++, currNode = (currNode.next)!);
        
        return currNode;

            
    }

    append(item:T) : Node<T> {
        let newNode:Node<T> = new Node<T>(item);
        if (this._tail) {
            this._tail.next = newNode;
            newNode.prev = this._tail;
        }
        else {
            this._head = newNode;
        }

        this._tail = newNode;
        return newNode;
    }

    detach(node : Node<T>) : Node<T> {

        let originalPrev = node.prev;
        let originalNext = node.next;

        if (originalPrev) {
            node.prev!.next = originalNext;
            node.prev = undefined;
        }
        else {
            this._head = originalNext;
        }

        if (originalNext) {
            node.next!.prev = originalPrev;
            node.next = undefined;
        }
        else {
            this._tail = originalPrev;
        }

        return node;
    }

    
}

let cut : LinkedList<number> = new LinkedList<number>([1,2,3]);
let currNode : Node<number> | undefined = cut.head;
for (let counter =1; counter<=3; counter++) {
    assert.equal(currNode!.item, counter);
    currNode = currNode!.next;
}

assert.equal(currNode, undefined);

currNode = cut.tail;
for (let counter=3; counter>0; counter--) {
    assert.equal(currNode!.item, counter);
    currNode = currNode!.prev;
}

assert.equal(currNode, undefined);
assert.equal(cut.getCount(),3);

cut.detach(cut.nodeAt(1));
assert.equal(cut.getCount(),2);