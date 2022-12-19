// Components
import CollectionShelfHead from "./CollectionShelfHead";
import CollectionShelfVideos from "./CollectionShelfVideos";

// --------------- Component --------------

function CollectionShelf(props: { collectionID: number }) {
    const { collectionID } = props;

    return (
        <details className="collection-container" open>
            <CollectionShelfHead collectionID={collectionID} />
            <CollectionShelfVideos collectionID={collectionID} />
        </details>
    );
}

export default CollectionShelf;
