export interface IIdentifiableIntersect<TKey1, TKey2> {
    get id1(): TKey1;
    get id2(): TKey2;
}