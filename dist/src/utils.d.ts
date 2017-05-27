export default function dissoc<T>(k: keyof T, ob: {
    [P in keyof T]: T[P];
}): {
    [P in keyof T]?: T[P];
};
