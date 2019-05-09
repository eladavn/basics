import * as assert from 'assert';

function isSingleEditAtMost(a: string, b: string ) : boolean {

    let alreadyEdited:boolean = false;
    for (let idxA:number = 0, idxB:number = 0; idxA<a.length || idxB<b.length; ) {
        let editFoundNow:boolean = false;
        if (idxA === a.length || idxB === b.length) {
            editFoundNow = true;
        }
        else if (a[idxA] !== b[idxB]) {
            editFoundNow = true;
        }

        if (editFoundNow) {
            if (alreadyEdited) {
                return false;
            }

            alreadyEdited = true;
        }

        // Increment
        if (!editFoundNow) {
            idxA++; idxB++;
        }
        else {
            if (a.length >= b.length) {
                idxA ++;
            }
            if (a.length <= b.length) {
                idxB ++;
            }
        }
           
    }

    return true;
}

assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('',''),true);
assert.equal(isSingleEditAtMost('a',''),true);
assert.equal(isSingleEditAtMost('','b'),true);
assert.equal(isSingleEditAtMost('a','b'),true);
assert.equal(isSingleEditAtMost('ab',''),false);
assert.equal(isSingleEditAtMost('abc','ac'),true);
assert.equal(isSingleEditAtMost('ac','abc'),true);
assert.equal(isSingleEditAtMost('avc','abc'),true);
assert.equal(isSingleEditAtMost('avc','abcd'),false);