import * as assert from 'assert';

export class BinaryTreeNode<T> {
    
    left: BinaryTreeNode<T> | undefined;
    right: BinaryTreeNode<T> | undefined;

    static fromArray<T>(arr : any[]) : BinaryTreeNode<T> {

        let root  = new BinaryTreeNode(arr[0] as T);
        if (arr[1]) {
            root.left = this.fromArray(arr[1]);
        }

        if (arr[2]) {
            root.right = this.fromArray(arr[2]);
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

let tree = [3,[5,[7,9]],[7]];