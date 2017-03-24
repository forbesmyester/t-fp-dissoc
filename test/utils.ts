import test from 'ava';
import dissoc from '../src/utils';

test('can dissoc', (tt) => {
    interface Letter {a: boolean; b: number; c: string; }

    let input1: Letter = {a: false, b: 1, c: 'hi'};
    let input2: {a: boolean, b: number, c: string}  = {a: false, b: 1, c: 'hi'};
    let input3: {[k: string]: number|string|boolean}  = {a: false, b: 1, c: 'hi'};

    let result1 = dissoc('c', input1);
    let result2 = dissoc('c', input2);
    let result3 = dissoc('c', input3);

    tt.deepEqual(
        result1,
        {a: false, b: 1}
    );

    tt.deepEqual(
        result2,
        {a: false, b: 1}
    );

    tt.deepEqual(
        result3,
        {a: false, b: 1}
    );
});
