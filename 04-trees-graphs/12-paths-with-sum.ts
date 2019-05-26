import * as assert from 'assert';
import {BinaryTreeNode} from '../structures/BinaryTreeNode';

function getOccurencesFromLast(arr : number[], targetSum: number) {

    let result : number = 0;
    let currSum : number = 0;
    for (let counter = arr.length -1; counter >=0; counter--) {
        currSum += arr[counter];

        if (currSum === targetSum) {
            result++;
        }

    }

    return result;
}

function itterateEnd2EndPaths(node: BinaryTreeNode<number>, targetSum: number, pathFromRoot? : number[]) : number {

    if (!pathFromRoot) {
        pathFromRoot = [];
    }
    
    pathFromRoot.push(node!.value);

//    console.log(`pathFromRoot after push: ${pathFromRoot}`);

    let occurencesFromHereToRoot : number = getOccurencesFromLast(pathFromRoot, targetSum);

    let occurenceLeft : number = 0;
    if (node.left) {
        occurenceLeft = itterateEnd2EndPaths(node.left, targetSum, pathFromRoot)        
    }

    let occurenceRight : number = 0;
    if (node.right) {
        occurenceRight = itterateEnd2EndPaths(node.right, targetSum, pathFromRoot)        
    }    

    pathFromRoot.pop();

//    console.log(`pathFromRoot after pop: ${pathFromRoot}`);

    return occurencesFromHereToRoot + occurenceLeft + occurenceRight;
}

let tree = undefined;
tree = BinaryTreeNode.fromArray<number>([3]);
assert.equal(itterateEnd2EndPaths(tree, 3),1);

tree = BinaryTreeNode.fromArray<number>([3,[3],[3]]);
assert.equal(itterateEnd2EndPaths(tree, 3),3);
assert.equal(itterateEnd2EndPaths(tree, 6),2);

tree = BinaryTreeNode.fromArray<number>([3,[4],[4]]);
assert.equal(itterateEnd2EndPaths(tree, 4),2);

tree = BinaryTreeNode.fromArray<number>([
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

assert.equal(itterateEnd2EndPaths(tree, 21),1);
assert.equal(itterateEnd2EndPaths(tree, 8),3);
assert.equal(itterateEnd2EndPaths(tree, 7),2);
assert.equal(itterateEnd2EndPaths(tree, 1),2);
assert.equal(itterateEnd2EndPaths(tree, 3),3);
assert.equal(itterateEnd2EndPaths(tree, 18),3);