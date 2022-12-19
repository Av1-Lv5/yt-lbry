import "./../assets/styles/iframe.css";

// --------------- Component --------------

function VideoIFrame(props: { videoLink: string }) {
    const { videoLink } = props;

    const videoId = getIdParam(videoLink);

    function getIdParam(YtVideoLink: string): string {
        const params = new URLSearchParams(YtVideoLink.split("?")[1]);
        return `${params.get("v")}`;
    }

    return (
        <div id="iframe-container">
            <div className="overlay"></div>
            <div className="yt-iframe">
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?vq=hd1080&modestbranding=1&rel=0`}
                    width="100%"
                    height="100%"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default VideoIFrame;
