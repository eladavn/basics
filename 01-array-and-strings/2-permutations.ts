import * as assert from 'assert';

function isPermutation(a : string, b : string ) : boolean {

    if (a.length !== b.length) {
        return false;
    }

    let occurencesPerChar : number[] = new Array<number>(128).fill(0);
    for (let i=0;i<occurencesPerChar.length;i++) {
        occurencesPerChar[i] = 0;
    }
    

    for( let i:number =0; i<a.length; i++) {
        occurencesPerChar[a[i].charCodeAt(0)]++;
        occurencesPerChar[b[i].charCodeAt(0)]--;
    }

    for (let i:number=0; i<occurencesPerChar.length; i++) {
        if (occurencesPerChar[i] !== 0)
            return false;
    }

    return true;
}

assert.equal(isPermutation('',''),true);
assert.equal(isPermutation('a','a'),true);
assert.equal(isPermutation('ab','ba'),true);
assert.equal(isPermutation('abb','ba'),false);
assert.equal(isPermutation('abb','bab'),true);
assert.equal(isPermutation('ab!@#b','#b@a!b'),true);
assert.equal(isPermutation('abb','bb'),false);

