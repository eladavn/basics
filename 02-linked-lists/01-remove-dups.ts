import {LinkedList, Node} from '../structures/LinkedList';

function removeDups(list : LinkedList<string>) {
    let currNode : Node<string> | undefined = list.head;
    let foundItems : object = {};
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
}