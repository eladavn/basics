import {BinaryTreeNode} from '../structures/BinaryTreeNode';
import * as assert from 'assert';

function isSubTree(rootOfSmall? : BinaryTreeNode<number>, nodeInLarge? : BinaryTreeNode<number>) : boolean {

    if (isSubTreeAtRoot(rootOfSmall, nodeInLarge)) {
        return true;
    }

    if (!nodeInLarge) {
        return false;
    }

    if (isSubTree(rootOfSmall, nodeInLarge.left)) {
        return true;
    }

    if (isSubTree(rootOfSmall, nodeInLarge.right)) {
        return true;
    }

    return false;
}

function isSubTreeAtRoot(nodeInSmall? : BinaryTreeNode<number>, nodeInLarge? : BinaryTreeNode<number>) : boolean {
    if (!nodeInSmall) {
        return true;
    }

    if (!nodeInLarge) {
        return false;
    }

    if (nodeInSmall.value != nodeInLarge.value) {
        return false;
    }

    if (!isSubTreeAtRoot(nodeInSmall.left, nodeInLarge.left)) {
        return false;
    }

    if (!isSubTreeAtRoot(nodeInSmall.right, nodeInLarge.right)) {
        return false;
    }

    return true;
}

let largeTree = BinaryTreeNode.fromArray<number>([
    10,
        [5, 
            [3,
                [3],
                [-2]
            ]
            ,
            [2,
                [undefined],
                [1]
            ]
        ]    
        ,
        [-3,
            [undefined],
            [11]
        ]
        
]);

assert.equal(isSubTree(undefined,largeTree),true);
assert.equal(isSubTree(new BinaryTreeNode(10),largeTree),true);
assert.equal(isSubTree(new BinaryTreeNode(120),largeTree),false);
assert.equal(isSubTree(new BinaryTreeNode(11),largeTree),true);

let smallTree;
smallTree = BinaryTreeNode.fromArray<number>(
        [-3,
            [2],
            [11]
        ]
        
);

assert.equal(isSubTree(smallTree,largeTree),false);

smallTree = BinaryTreeNode.fromArray<number>(
    [-3,
        [undefined],
        [11]
    ]
    
);

assert.equal(isSubTree(smallTree,largeTree),true);

smallTree = BinaryTreeNode.fromArray<number>(
    [3,
        [3],
        [-2]
    ]
    
);

assert.equal(isSubTree(smallTree,largeTree),true);

smallTree = BinaryTreeNode.fromArray<number>(
    [3,
        [3],
        [-7]
    ]
    
);

assert.equal(isSubTree(smallTree,largeTree),false);

smallTree = BinaryTreeNode.fromArray<number>(
    [3,
        [3],
        undefined
    ]
    
);

assert.equal(isSubTree(smallTree,largeTree),true);

smallTree = BinaryTreeNode.fromArray<number>(
    [3,
        undefined,
        [-2]
    ]
    
);

assert.equal(isSubTree(smallTree,largeTree),true);
