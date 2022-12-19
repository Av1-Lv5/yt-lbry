export default interface Collection {
    title: string;
    description: string;
    public: boolean;
    view: string;
    count: number;
    cover: Array<string>;
    expanded: boolean;
    _id: number;
    sort: number;
    lastAction: string;
    created: string;
    lastUpdate: string;
    color: string;
    slug: string;
}
