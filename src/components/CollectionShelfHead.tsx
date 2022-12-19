// Custom hooks
import useCollectionService from "../services/useCollectionService";

import "../assets/styles/collectionHeadSkelton.css";
import "../assets/styles/collectionHead.css";

// SVG's
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down-s-line.svg";

// Types
interface props {
    collectionID: number;
}

// --------------- Component --------------

function CollectionShelfHead(props: props) {
    const { collectionID } = props;

    const collectionService = useCollectionService(collectionID);

    return (
        <summary className="head">
            {collectionService.status === "loading" && (
                <>
                    <div className="blink-effect cover-ph"></div>
                    <h3>Loading Collection. . .</h3>
                    <div className="blink-effect button-ph"></div>
                </>
            )}
            {collectionService.status === "loaded" && (
                <>
                    <img
                        src={collectionService.payload.cover[0]}
                        className="cover"
                    />
                    <h3>{collectionService.payload.title}</h3>
                    <span className="svg">
                        <ArrowDown />
                    </span>
                    {/* <div className="play-all">Play All</div> */}
                </>
            )}
        </summary>
    );
}

export default CollectionShelfHead;
