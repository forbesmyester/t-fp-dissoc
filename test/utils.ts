import test from 'ava';
import dissoc from '../src/utils';

test('can dissoc', (tt) => {
    tt.deepEqual(
        dissoc('c', {a: false, b: 1, c: 'hi'}),
        {a: false, b: 1}
    );
});
