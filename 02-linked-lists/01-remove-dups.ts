import * as assert from 'assert';
import {LinkedList, Node} from '../structures/LinkedList';


function removeDups(list : LinkedList<string>) : LinkedList<string> {
    let currNode : Node<string> | undefined = list.head;
    let foundItems : any = {};
    while(currNode) {

        let nextNode : Node<string> | undefined = currNode.next;

        if (!foundItems.hasOwnProperty(currNode.item)) {
            foundItems[currNode.item] = null;
        }
        else {
            list.detach(currNode);
        }

        currNode = nextNode;
    }

    return list;
}

function test(a:string[], b:string[]) {
    let list : LinkedList<string>  = new LinkedList<string>(a);
    removeDups(list);
    let result: string[] = list.toArray();

    assert.deepEqual(result, b);
}

test([],[]);
test(['a'],['a']);
test(['a','a'],['a']);
test(['a','b','b','a'],['a','b']);
test(['a','a','b','b','c','c'],['a','b','c']);
