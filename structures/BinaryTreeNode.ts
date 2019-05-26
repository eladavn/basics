import * as assert from 'assert';

class BinaryTreeNode<T> {
    
    left: BinaryTreeNode<T> | undefined;
    right: BinaryTreeNode<T> | undefined;

    constructor(public value: T) {
    }

}

let cut = new BinaryTreeNode<number>(3);
assert.equal(cut.value,3);
cut.value = 4;
assert.equal(cut.value,4);