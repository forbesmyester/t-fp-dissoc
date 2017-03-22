import test from 'ava';
import dissoc from '../src/utils';

test('can dissoc', (tt) => {

    let input: {a: boolean, b: number, c: string}  = {a: false, b: 1, c: 'hi'};
    let result = dissoc('c', input);

    tt.deepEqual(
        result,
        {a: false, b: 1}
    );

});
