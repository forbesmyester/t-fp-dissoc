export default function dissoc<A>(k: string, ob: {
    [k: string]: A;
}): {
    [k: string]: A;
};
