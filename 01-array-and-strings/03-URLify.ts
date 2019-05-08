import * as assert from 'assert';

function urlify(url : string[], contentLength : number) {

    let additionalRequiredSpace = numOfSpaces(url, contentLength) * 2;
    let outputIdx = contentLength + additionalRequiredSpace -1;
    assert.equal(outputIdx < url.length,true);

    for(let inputIdx:number = contentLength-1; inputIdx>=0; inputIdx--) {
        if (url[inputIdx] === ' ') {
            url[outputIdx--] = '0';
            url[outputIdx--] = '2';
            url[outputIdx--] = '%';
        }
        else {
            url[outputIdx--] = url[inputIdx];
        }

    }

}

function numOfSpaces(url: string[], contentLength : number) : number {
    let result : number = 0;

    for (let counter:number = 0; counter<contentLength; counter++) {
        if (url[counter] === ' ') {
            result++;
        }
    }

    return result;
}

function urlifyStr(source: string) : string {
    let splitSource = source.split('');
    let toUrlify = splitSource.concat(new Array((source.match(/ /g) || []).length*2));

    urlify(toUrlify, source.length);
    return toUrlify.join('');
}

assert.equal(urlifyStr('av') === 'av',true);
assert.equal(urlifyStr('a v') === 'a%20v',true);
assert.equal(urlifyStr('  ') === '%20%20',true);
assert.equal(urlifyStr(' b ') === '%20b%20',true);
assert.equal(urlifyStr('') === '',true);