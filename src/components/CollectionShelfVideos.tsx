import { useState } from "react";
// Components
import VideoCard from "./VideoCard";
import VideoCardSkelton from "./VideoCardSkelton";

// Hooks
import useRaindropsService from "../services/useRaindropsService";

// Types
interface props {
    collectionID: number;
}

const perPage = 15;

// --------------- Component --------------

function CollectionShelfVideos(props: props) {
    const { collectionID } = props;
    const [pageNum, setPageNum] = useState(0);

    const raindropsService = useRaindropsService(
        collectionID,
        perPage,
        pageNum
    );

    function loadMore() {
        setPageNum((prevPageNum) => prevPageNum + 1);
    }

    const raindropsEl = raindropsService.payload.map((raindrop, index) => {
        return <VideoCard key={index} raindrop={raindrop} />;
    });

    const skelton = [];
    for (let i = 0; i < perPage; i++) {
        skelton[i] = <VideoCardSkelton key={i} />;
    }

    const raindropsSkelton: JSX.Element[] =
        raindropsService.status === "loading" ? skelton : [];

    return (
        <>
            <div className="collection">
                {raindropsEl}
                {raindropsSkelton}
            </div>
            <div className="load-more" onClick={loadMore}>
                <p>
                    {raindropsService.status === "loading"
                        ? "Loading"
                        : "Load more"}
                </p>
            </div>
        </>
    );
}

export default CollectionShelfVideos;
