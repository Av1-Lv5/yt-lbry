export default interface Raindrop {
    excerpt: string;
    note: string;
    type: string;
    cover: string;
    tags: Array<string>;
    removed: boolean;
    _id: number;
    title: string;
    collection: object;
    link: string;
    created: string;
    lastUpdated: string;
    important: boolean;
    domain: string;
    collectionId: number;
}
