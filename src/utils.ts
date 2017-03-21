export default function dissoc<A>(k: string, ob: {[k: string]: A}): {[k: string]: A} {
    let {...r}: {[k: string]: A} = {...ob};
    delete r[k];
    return r;
}
