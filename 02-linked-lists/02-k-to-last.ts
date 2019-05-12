import {Node, LinkedList} from '../structures/LinkedList'
import assert = require('assert');

class ItterationContext<T> {
    calculatedOffset: number | undefined = undefined;
    foundNode: Node<T> | undefined = undefined;
}

function itterate<T>(requiredOffset : number, currentNode : Node<T>, context : ItterationContext<T> | undefined = undefined) : Node<T> {

    let localContext : ItterationContext<T> = context ? context : new ItterationContext();

//    console.log(`requiredOffset: ${requiredOffset}, currentNode.item: ${currentNode.item}, localContext.calculatedOffset: ${localContext.calculatedOffset}`)

    
    if (currentNode.next === undefined) {
        localContext.calculatedOffset = 0;
    }
    else {
        let nextNode : Node<T> = currentNode.next;
        itterate(requiredOffset, nextNode, localContext);
        localContext.calculatedOffset = localContext.calculatedOffset! +1;
    }

//    console.log(`Offset: ${localContext.calculatedOffset}`);


    if (localContext.calculatedOffset === requiredOffset) {
        localContext.foundNode = currentNode;
  //      console.log(`found: ${localContext.foundNode}`);
    }

    return localContext.foundNode!;
}

function getItemFromEnd<T>(list : LinkedList<T>, offsetFromLast : number ) : T {
    
    let foundNode = itterate(offsetFromLast, list.head!);
    return foundNode!.item;

}

assert.equal(getItemFromEnd(new LinkedList([1]),0),1);
assert.equal(getItemFromEnd(new LinkedList([1,2]),0),2);
assert.equal(getItemFromEnd(new LinkedList([1,2,3]),1),2);
assert.equal(getItemFromEnd(new LinkedList([1,2,3]),0),3);
assert.equal(getItemFromEnd(new LinkedList([1,2,3]),2),1);