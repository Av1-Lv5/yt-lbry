// types
import Raindrop from "../types/Raindrop";

// styles
import "../assets/styles/videoCard.css";
import VideoIFrame from "./VideoIFrame";
import { useState } from "react";

// --------------- Component --------------

function VideoCard(props: { raindrop: Raindrop }) {
    const { raindrop } = props;
    const [isIframeVisible, setIsIframeVisible] = useState(false);

    function playVideo(): void {
        setIsIframeVisible((prevValue) => !prevValue);
    }

    return (
        <div className="card" onClick={playVideo}>
            <img src={raindrop.cover} alt="" />
            <p className="title">{raindrop.title}</p>
            {isIframeVisible && <VideoIFrame videoLink={raindrop.link} />}
        </div>
    );
}

export default VideoCard;
