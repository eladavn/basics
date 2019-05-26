import * as assert from 'assert';

export class BinaryTreeNode<T> {
    
    left: BinaryTreeNode<T> | undefined;
    right: BinaryTreeNode<T> | undefined;

    static fromArray<T>(arr : any[]) : BinaryTreeNode<T> {

        let root  = new BinaryTreeNode(arr[0] as T);
        if (arr.length >1 && arr[1]) {
            root.left = this.fromArray(arr[1] as Array<any>);
        }

        if (arr.length >2 && arr[2]) {
            root.right = this.fromArray(arr[2] as Array<any>);
        }
        
        return root;
    }

    constructor(public value: T) {
    }

}

let cut = new BinaryTreeNode<number>(3);
assert.equal(cut.value,3);
cut.value = 4;
assert.equal(cut.value,4);

let tree = BinaryTreeNode.fromArray([3]);
assert.equal(tree.value,3);
assert.equal(tree.left,undefined);
assert.equal(tree.right,undefined);

tree = BinaryTreeNode.fromArray([3,[5],[7]]);
assert.equal(tree.left!.value,5);
assert.equal(tree.right!.value,7);

tree = BinaryTreeNode.fromArray([3,[5],[7,undefined,[9]]]);
assert.equal(tree.right!.value,7);
assert.equal(tree.right!.left,undefined);
assert.equal(tree.right!.right!.value,9);